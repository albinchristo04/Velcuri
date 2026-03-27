import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Velcuri",
  description: "Get in touch with Velcuri for support or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-6">
        Contact
      </h1>
      <p className="text-brand-muted mb-10 text-lg leading-relaxed">
        For support or inquiries, contact us:
      </p>

      <a
        href="mailto:support@velcuri.io"
        className="inline-flex items-center gap-3 rounded-2xl border border-brand-border bg-white px-6 py-4 text-brand-text font-medium hover:border-brand-primary hover:text-brand-primary transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary"
        aria-label="Email Velcuri support"
      >
        <Mail size={18} aria-hidden="true" />
        support@velcuri.io
      </a>

      <p className="mt-8 text-sm text-brand-muted">
        We typically respond within 24–48 hours.
      </p>
    </div>
  );
}
