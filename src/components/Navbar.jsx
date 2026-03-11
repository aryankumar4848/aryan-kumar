import { navLinks } from "@/data/portfolio";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link href="/" className="logo">
          Home
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

