import Link from "next/link";

export function Footer() {
  return (
    <footer className="studio-footer">
      <div className="studio-shell">
        <p>© 2026 Velcuri Labs</p>
        <nav aria-label="Footer navigation">
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-of-service">Terms of service</Link>
          <Link href="/data-deletion">Data deletion</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
