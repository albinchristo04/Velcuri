import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Velcuri",
  description:
    "Terms of service for Velcuri applications including Vault and Cobalt VPN.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-4">
        Terms of Service
      </h1>
      <p className="text-sm text-brand-muted mb-12">Last updated: April 2026</p>

      <div className="space-y-10 text-brand-muted leading-relaxed">
        {/* Acceptance */}
        <section aria-labelledby="acceptance">
          <h2
            id="acceptance"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Acceptance of Terms
          </h2>
          <p>
            By downloading, installing, or using any application published by
            Velcuri (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
            including <strong>Vault – Save for Later</strong> and{" "}
            <strong>Cobalt VPN</strong>, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, do not use our apps.
          </p>
        </section>

        {/* Description of Service */}
        <section aria-labelledby="description">
          <h2
            id="description"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Description of Services
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Vault – Save for Later:</strong> A productivity app that
              lets you save links, notes, and content locally on your device for
              later access.
            </li>
            <li>
              <strong>Cobalt VPN:</strong> A VPN application that routes your
              internet traffic through Cloudflare&apos;s WARP infrastructure
              using the WireGuard protocol, providing enhanced privacy and
              security.
            </li>
          </ul>
        </section>

        {/* Eligibility */}
        <section aria-labelledby="eligibility">
          <h2
            id="eligibility"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Eligibility
          </h2>
          <p>
            You must be at least 13 years old to use our apps. By using our
            apps, you represent that you meet this age requirement. If you are
            under the age of 18, you must have the consent of a parent or legal
            guardian.
          </p>
        </section>

        {/* User Responsibilities */}
        <section aria-labelledby="user-responsibilities">
          <h2
            id="user-responsibilities"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            User Responsibilities
          </h2>
          <p>When using our apps, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Use the apps for any unlawful purpose or illegal activities</li>
            <li>
              Attempt to reverse-engineer, decompile, or disassemble the apps
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the apps
            </li>
            <li>
              Use the VPN service to bypass restrictions in violation of
              applicable laws
            </li>
            <li>
              Distribute, sublicense, or resell the apps or any part thereof
            </li>
          </ul>
        </section>

        {/* VPN Specific */}
        <section aria-labelledby="vpn-terms">
          <h2
            id="vpn-terms"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            VPN Service Terms (Cobalt VPN)
          </h2>
          <p>
            Cobalt VPN utilizes Cloudflare&apos;s WARP infrastructure. Your use
            of the VPN service is also subject to{" "}
            <a
              href="https://www.cloudflare.com/application/terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              Cloudflare&apos;s Terms of Service
            </a>
            . We do not guarantee uninterrupted or error-free VPN service.
            Connection speed and availability may vary based on network
            conditions and server load.
          </p>
        </section>

        {/* Advertisements */}
        <section aria-labelledby="advertisements">
          <h2
            id="advertisements"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Advertisements
          </h2>
          <p>
            Some of our apps display advertisements served by Google AdMob. By
            using our apps, you acknowledge and agree that advertisements may be
            displayed during your use of the app. Ad content is provided by
            third-party ad networks and we are not responsible for the content of
            such advertisements.
          </p>
        </section>

        {/* Intellectual Property */}
        <section aria-labelledby="intellectual-property">
          <h2
            id="intellectual-property"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Intellectual Property
          </h2>
          <p>
            All content, design, graphics, and code within our apps are the
            property of Velcuri and are protected by applicable intellectual
            property laws. You are granted a limited, non-exclusive,
            non-transferable license to use the apps for personal,
            non-commercial purposes.
          </p>
        </section>

        {/* Disclaimer */}
        <section aria-labelledby="disclaimer">
          <h2
            id="disclaimer"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Disclaimer of Warranties
          </h2>
          <p>
            Our apps are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, either express
            or implied. We do not warrant that the apps will be uninterrupted,
            error-free, or free of viruses or other harmful components.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section aria-labelledby="liability">
          <h2
            id="liability"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Velcuri shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of data, revenue, or profits arising
            out of or in connection with your use of our apps.
          </p>
        </section>

        {/* Termination */}
        <section aria-labelledby="termination">
          <h2
            id="termination"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to our apps
            at any time, without prior notice, for conduct that we believe
            violates these Terms or is harmful to other users, us, or third
            parties. You may terminate your use of our apps at any time by
            uninstalling them from your device.
          </p>
        </section>

        {/* Changes */}
        <section aria-labelledby="changes">
          <h2
            id="changes"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms of Service from time to time. Changes will
            be posted on this page with an updated date. Continued use of our
            apps after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        {/* Governing Law */}
        <section aria-labelledby="governing-law">
          <h2
            id="governing-law"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-terms">
          <h2
            id="contact-terms"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:support@velcuri.io"
              className="text-brand-primary hover:underline"
            >
              support@velcuri.io
            </a>{" "}
            or visit our{" "}
            <Link
              href="/contact"
              className="text-brand-primary hover:underline"
            >
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
