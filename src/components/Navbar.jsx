import { navLinks } from "@/data/portfolio";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
<div className="nav-links">
            <div className="nav-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
      </div>
    </nav>
  );
}

