import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Kumar | Full Stack Developer",
  description: "Portfolio of Aryan Kumar - Full Stack Developer specializing in Java, Spring Boot, PostgreSQL, and modern web technologies",
  icons: {
    icon: "/Aryan_Profile_Pic.jpeg",
    apple: "/Aryan_Profile_Pic.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}
