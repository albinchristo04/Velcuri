"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="studio-header">
      <div className="studio-shell flex h-16 items-center justify-between">
        <Link href="/" className="studio-brand" onClick={() => setOpen(false)}>
          <span className="studio-brand-mark" aria-hidden="true">V</span>
          Velcuri Labs
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="studio-nav-link" aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="cursor-pointer rounded-md p-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-menu"
        className={`border-t border-brand-border md:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile navigation"
      >
        <ul className="studio-shell grid gap-3 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)} className="studio-nav-link block py-1" aria-current={pathname === href ? "page" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
