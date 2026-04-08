import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Velcuri",
  description:
    "Privacy policy for Velcuri and its applications including Vault and Cobalt VPN.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-brand-muted mb-12">Last updated: April 2026</p>

      <div className="space-y-10 text-brand-muted leading-relaxed">
        {/* Introduction */}
        <section>
          <p>
            Velcuri (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates
            mobile applications published on the Google Play Store. This Privacy
            Policy explains how we collect, use, and protect information when you
            use any of our applications, including{" "}
            <strong>Vault – Save for Later</strong> and{" "}
            <strong>Cobalt VPN</strong>.
          </p>
          <p className="mt-3">
            By using our apps, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section aria-labelledby="information-collection">
          <h2
            id="information-collection"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Information We Collect
          </h2>
          <p className="mb-3">
            We aim to collect the minimum amount of data necessary to provide
            and improve our apps. The data we collect varies by app:
          </p>

          <h3 className="font-heading text-base font-semibold text-brand-text mt-5 mb-2">
            Vault – Save for Later
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Locally Stored Data:</strong> All links, notes, and content
              you save within Vault are stored locally on your device. This data
              is not transmitted to our servers.
            </li>
            <li>
              <strong>Anonymous Analytics:</strong> We may collect anonymous
              usage statistics (app opens, feature usage) and crash reports to
              improve the app experience.
            </li>
          </ul>

          <h3 className="font-heading text-base font-semibold text-brand-text mt-5 mb-2">
            Cobalt VPN
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Device Identifier:</strong> A unique device ID is generated
              to register your device with the Cloudflare WARP service. This ID
              is stored locally on your device.
            </li>
            <li>
              <strong>Anonymous Analytics:</strong> We collect anonymous usage
              statistics such as app opens, connection events, and crash reports.
              These analytics do not identify you personally.
            </li>
            <li>
              <strong>Advertising Identifier:</strong> Google AdMob may collect
              your device&apos;s advertising ID to serve relevant ads.
            </li>
          </ul>
        </section>

        {/* VPN Traffic */}
        <section aria-labelledby="vpn-traffic">
          <h2
            id="vpn-traffic"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            VPN Traffic Handling (Cobalt VPN)
          </h2>
          <p>
            When the VPN is active, your internet traffic is routed through
            Cloudflare&apos;s global network using the WireGuard / WARP protocol.
            The app itself does not log, inspect, or store any of your browsing
            activity or network traffic. Cloudflare&apos;s handling of your
            traffic is governed by{" "}
            <a
              href="https://www.cloudflare.com/application/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              Cloudflare&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* Third-Party Services */}
        <section aria-labelledby="third-party">
          <h2
            id="third-party"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Third-Party Services
          </h2>
          <p className="mb-3">
            Our apps may integrate with third-party services. Each service has
            its own privacy policy governing how it processes data:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google Play Services:</strong> Used for app distribution
              and updates.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google AdMob:</strong> Used in Cobalt VPN to display
              advertisements. AdMob may collect device information and
              advertising identifiers.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <strong>Firebase Analytics / Crashlytics:</strong> Used to collect
              anonymous usage data and crash reports.{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <strong>Cloudflare WARP:</strong> Provides the VPN tunnel and
              network infrastructure for Cobalt VPN.{" "}
              <a
                href="https://www.cloudflare.com/application/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        {/* Advertising */}
        <section aria-labelledby="advertising">
          <h2
            id="advertising"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Advertising
          </h2>
          <p>
            Some of our apps display advertisements through Google AdMob. AdMob
            may use cookies, device identifiers, and advertising IDs to serve
            personalized or non-personalized ads. You can opt out of personalized
            advertising through your device&apos;s settings under{" "}
            <em>Google &gt; Ads &gt; Opt out of Ads Personalization</em>.
          </p>
        </section>

        {/* Data Sharing */}
        <section aria-labelledby="data-sharing">
          <h2
            id="data-sharing"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Data Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal data to any third
            parties. Information is shared only with the third-party services
            listed above, solely for the purposes of app functionality,
            analytics, and advertising as described in this policy.
          </p>
        </section>

        {/* Data Security */}
        <section aria-labelledby="data-security">
          <h2
            id="data-security"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Data Security
          </h2>
          <p>
            We take reasonable measures to protect the information collected
            through our apps. However, no method of electronic storage or
            transmission is 100% secure. We strive to use commercially
            acceptable means to protect your data but cannot guarantee absolute
            security.
          </p>
        </section>

        {/* Data Retention */}
        <section aria-labelledby="data-retention">
          <h2
            id="data-retention"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Data Retention
          </h2>
          <p>
            Locally stored data (saved content, device registration) remains on
            your device and can be cleared at any time through the app settings
            or by uninstalling the app. Anonymous analytics data is retained by
            Firebase in accordance with their data retention policies.
          </p>
        </section>

        {/* Children's Privacy */}
        <section aria-labelledby="children-privacy">
          <h2
            id="children-privacy"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Children&apos;s Privacy
          </h2>
          <p>
            Our apps are not directed to children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have inadvertently collected personal data from
            a child under 13, we will take steps to delete that information
            promptly. If you are a parent or guardian and believe your child has
            provided us with personal information, please{" "}
            <Link
              href="/contact"
              className="text-brand-primary hover:underline"
            >
              contact us
            </Link>
            .
          </p>
        </section>

        {/* Your Rights */}
        <section aria-labelledby="user-rights">
          <h2
            id="user-rights"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Clear your locally stored data at any time from app settings</li>
            <li>Uninstall the app to remove all locally stored data</li>
            <li>
              Opt out of personalized advertising through your device settings
            </li>
            <li>
              Request information about the data we collect by contacting us
            </li>
            <li>Request deletion of any data associated with your device</li>
          </ul>
        </section>

        {/* Changes */}
        <section aria-labelledby="policy-changes">
          <h2
            id="policy-changes"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last updated&quot;
            date. We encourage you to review this policy periodically for any
            changes. Continued use of our apps after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-privacy">
          <h2
            id="contact-privacy"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
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
