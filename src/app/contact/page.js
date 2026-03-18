"use client";

import { personalInfo } from "@/data/portfolio";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const sendViaMailto = ({ name, email, subject, message }) => {
    const finalSubject = subject?.trim() ? subject.trim() : "Portfolio contact";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(personalInfo.email)}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(), // honeypot
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", message: "Please fill in your name, email, and message." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent. I’ll get back to you soon." });
        e.currentTarget.reset();
        return;
      }

      const data = await res.json().catch(() => ({}));
      const message = data?.message || "Could not send automatically. Opening email draft…";
      setStatus({ type: "error", message });
      sendViaMailto(payload);
    } catch {
      setStatus({ type: "error", message: "Network issue. Opening email draft…" });
      sendViaMailto(payload);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="section">
        <h2 className="big-h2 neon-gradient">Contact</h2>
        <p className="contact-subtitle">Send me a message and I’ll reply as soon as I can.</p>

        <div className="contact-form-shell">
          <div className="contact-card">
            <form onSubmit={onSubmit}>
              <div className="form-grid">
                <input className="input" name="name" placeholder="Your name" autoComplete="name" required />
                <input className="input" type="email" name="email" placeholder="Your email" autoComplete="email" required />
                <input className="input full" name="subject" placeholder="Subject (optional)" autoComplete="off" />
                <textarea className="textarea full" name="message" placeholder="Message" required />

                <input
                  className="input"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
                />
              </div>

              <div className="form-actions">
                <button className="btn neon-btn" type="submit" disabled={isSending}>
                  {isSending ? "Sending…" : "Send message"}
                </button>
              </div>

              {status.type !== "idle" && (
                <p className="form-note" role="status">
                  {status.message}
                </p>
              )}
              <p className="form-note">
                If automatic delivery isn’t configured, your email app will open with a pre-filled draft.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
