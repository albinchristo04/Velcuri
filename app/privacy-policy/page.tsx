import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Velcuri",
  description: "Privacy policy for Velcuri applications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-brand-muted mb-12">Last updated: March 2026</p>

      <div className="space-y-10 text-brand-muted leading-relaxed">
        <section aria-labelledby="privacy-intro">
          <p id="privacy-intro">
            Velcuri respects user privacy. Our applications are designed to minimize data
            collection.
          </p>
        </section>

        <section aria-labelledby="information-collection">
          <h2
            id="information-collection"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Information Collection
          </h2>
          <p>
            Vault – Save for Later does not collect personal data unless necessary for app
            functionality. Any data stored locally on your device stays on your device and is
            not transmitted to our servers.
          </p>
        </section>

        <section aria-labelledby="data-use">
          <h2
            id="data-use"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            How Data is Used
          </h2>
          <p>
            Data collected, if any, is used solely to provide the core features of the app.
            We do not sell, rent, or share your personal data with third parties for marketing
            purposes.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <h2
            id="third-party"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Third-Party Services
          </h2>
          <p>
            Our apps may use Google Play services for distribution. Please refer to Google&apos;s
            privacy policy for information on data they collect as part of the Play platform.
          </p>
        </section>

        <section aria-labelledby="contact-privacy">
          <h2
            id="contact-privacy"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Contact
          </h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a
              href="mailto:support@velcuri.io"
              className="text-brand-primary hover:underline"
            >
              support@velcuri.io
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
