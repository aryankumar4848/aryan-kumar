import nodemailer from "nodemailer";

const required = (value) => (typeof value === "string" ? value.trim() : "");

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const name = required(body?.name);
  const email = required(body?.email);
  const subject = required(body?.subject);
  const message = required(body?.message);
  const website = required(body?.website); // honeypot

  if (website) {
    return Response.json({ ok: true }, { status: 200 });
  }

  if (!name || !email || !message) {
    return Response.json({ message: "Missing required fields." }, { status: 400 });
  }

  if (message.length > 5000) {
    return Response.json({ message: "Message is too long." }, { status: 400 });
  }

  const timestamp = new Date().toISOString();

  // 1) SMTP email delivery (preferred if configured)
  const smtpHost = required(process.env.CONTACT_SMTP_HOST);
  const smtpPort = required(process.env.CONTACT_SMTP_PORT);
  const smtpUser = required(process.env.CONTACT_SMTP_USER);
  const smtpPass = required(process.env.CONTACT_SMTP_PASS);
  const mailTo = required(process.env.CONTACT_TO);
  const mailFrom = required(process.env.CONTACT_FROM) || smtpUser;

  if (smtpHost && smtpPort && smtpUser && smtpPass && mailTo && mailFrom) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort),
        secure: Number(smtpPort) === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      const safeSubject = subject || "Portfolio contact";
      const text = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Time: ${timestamp}`,
        "",
        message,
      ].join("\n");

      await transporter.sendMail({
        to: mailTo,
        from: mailFrom,
        replyTo: email,
        subject: safeSubject,
        text,
      });

      return Response.json({ ok: true }, { status: 200 });
    } catch {
      return Response.json({ message: "Email delivery failed." }, { status: 502 });
    }
  }

  // 2) Webhook delivery (optional)
  const webhookUrl = required(process.env.CONTACT_WEBHOOK_URL);
  if (webhookUrl) {
    const payload = {
      name,
      email,
      subject,
      message,
      timestamp,
      source: "portfolio",
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        return Response.json({ message: "Delivery failed." }, { status: 502 });
      }
    } catch {
      return Response.json({ message: "Delivery failed." }, { status: 502 });
    }

    return Response.json({ ok: true }, { status: 200 });
  }

  return Response.json(
    { message: "Contact delivery isn’t configured on the server." },
    { status: 501 },
  );
}
