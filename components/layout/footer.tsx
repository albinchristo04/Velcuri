import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-brand-muted">
          Velcuri © 2026 — Independent developer studio
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-150"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-150"
          >
            Terms of Service
          </Link>
          <Link
            href="/data-deletion"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-150"
          >
            Data Deletion
          </Link>
          <Link
            href="/contact"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-150"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
