import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan | Full Stack Developer",
  description: "Portfolio of Aryan - Full Stack Developer specializing in modern web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

