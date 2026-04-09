import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion — Velcuri",
  description:
    "Request data deletion for Velcuri applications. Learn how to clear your data from Vault and Cobalt VPN.",
};

export default function DataDeletionPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-4">
        Data Deletion
      </h1>
      <p className="text-sm text-brand-muted mb-12">Last updated: April 2026</p>

      <div className="space-y-10 text-brand-muted leading-relaxed">
        {/* Overview */}
        <section aria-labelledby="overview">
          <h2
            id="overview"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Overview
          </h2>
          <p>
            At Velcuri, we respect your right to control your personal data. This
            page explains how you can request the deletion of any data associated
            with your use of our applications, including{" "}
            <strong>Vault – Save for Later</strong> and{" "}
            <strong>Cobalt VPN</strong>.
          </p>
          <p className="mt-3">
            Because our apps are designed with a privacy-first approach, the
            majority of your data is stored locally on your device and can be
            deleted directly from within the app — no request needed.
          </p>
        </section>

        {/* How to Delete Your Data */}
        <section aria-labelledby="how-to-delete">
          <h2
            id="how-to-delete"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            How to Delete Your Data
          </h2>
          <p className="mb-4">
            Users can request and perform data deletion directly within each app.
            Below are the step-by-step instructions for each application:
          </p>

          {/* Vault */}
          <div className="rounded-xl border border-brand-border bg-white p-6 mb-6">
            <h3 className="font-heading text-lg font-semibold text-brand-text mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand-primary text-sm font-bold">
                V
              </span>
              Vault – Save for Later
            </h3>
            <p className="mb-3">
              All data in Vault is stored locally on your device. To delete your
              data:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Open the <strong>Vault</strong> app on your device.
              </li>
              <li>
                Navigate to <strong>Settings</strong> (gear icon in the top-right
                corner).
              </li>
              <li>
                Tap <strong>&quot;Clear All Data&quot;</strong> to remove all
                saved links, notes, and content.
              </li>
              <li>
                Confirm the action when prompted. This will permanently delete
                all locally stored data.
              </li>
            </ol>
            <p className="mt-3 text-sm">
              <strong>Alternatively:</strong> Uninstalling the app will
              automatically remove all data stored by Vault on your device.
            </p>
          </div>

          {/* Cobalt VPN */}
          <div className="rounded-xl border border-brand-border bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-brand-text mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-brand-cta text-sm font-bold">
                C
              </span>
              Cobalt VPN
            </h3>
            <p className="mb-3">
              Cobalt VPN stores a device registration locally. To delete your
              data:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Open the <strong>Cobalt VPN</strong> app on your device.
              </li>
              <li>
                Navigate to <strong>Settings</strong>.
              </li>
              <li>
                Tap <strong>&quot;Clear Registration&quot;</strong> to remove
                your device registration and all associated data from the app.
              </li>
              <li>
                Confirm the action when prompted. This will delete the device
                identifier and reset the VPN configuration.
              </li>
            </ol>
            <p className="mt-3 text-sm">
              <strong>Alternatively:</strong> Uninstalling the app will remove
              the local device registration and all app data from your device.
            </p>
          </div>
        </section>

        {/* What Data Is Deleted */}
        <section aria-labelledby="what-is-deleted">
          <h2
            id="what-is-deleted"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            What Data Is Deleted
          </h2>
          <p className="mb-3">
            When you perform a data deletion through the in-app settings, the
            following data is permanently removed:
          </p>

          <div className="overflow-hidden rounded-xl border border-brand-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-border bg-slate-50">
                  <th className="px-4 py-3 text-left font-heading font-semibold text-brand-text">
                    Data Type
                  </th>
                  <th className="px-4 py-3 text-left font-heading font-semibold text-brand-text">
                    Vault
                  </th>
                  <th className="px-4 py-3 text-left font-heading font-semibold text-brand-text">
                    Cobalt VPN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Saved content (links, notes)
                  </td>
                  <td className="px-4 py-3 text-green-600">✓ Deleted</td>
                  <td className="px-4 py-3 text-brand-muted">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Device registration / ID
                  </td>
                  <td className="px-4 py-3 text-brand-muted">N/A</td>
                  <td className="px-4 py-3 text-green-600">✓ Deleted</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    VPN configuration
                  </td>
                  <td className="px-4 py-3 text-brand-muted">N/A</td>
                  <td className="px-4 py-3 text-green-600">✓ Deleted</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    App preferences / settings
                  </td>
                  <td className="px-4 py-3 text-green-600">✓ Deleted</td>
                  <td className="px-4 py-3 text-green-600">✓ Deleted</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Anonymous analytics
                  </td>
                  <td className="px-4 py-3 text-amber-600">
                    Retained by Firebase*
                  </td>
                  <td className="px-4 py-3 text-amber-600">
                    Retained by Firebase*
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">
            * Anonymous analytics data collected by Firebase is retained in
            accordance with{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              Firebase&apos;s data retention policies
            </a>
            . This data is anonymized and cannot be used to identify individual
            users. If you wish to request deletion of this data, please contact
            us using the form below.
          </p>
        </section>

        {/* Third-Party Data */}
        <section aria-labelledby="third-party-data">
          <h2
            id="third-party-data"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Third-Party Service Data
          </h2>
          <p className="mb-3">
            Some data may be processed by third-party services integrated into
            our apps. To request deletion of data held by these services, please
            refer to their respective privacy policies:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google AdMob:</strong> Advertising data can be managed via
              your device settings under{" "}
              <em>Google &gt; Ads &gt; Reset Advertising ID</em> or by opting
              out of personalized ads.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Cloudflare WARP:</strong> VPN tunnel data is handled by
              Cloudflare and is not logged or stored.{" "}
              <a
                href="https://www.cloudflare.com/application/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Cloudflare Privacy Policy
              </a>
            </li>
            <li>
              <strong>Firebase:</strong> Anonymous analytics and crash data.{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Firebase Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        {/* Data Deletion Timeline */}
        <section aria-labelledby="timeline">
          <h2
            id="timeline"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Data Deletion Timeline
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                1
              </span>
              <div>
                <strong className="text-brand-text">Immediate:</strong> Locally
                stored data (saved content, device registration, preferences) is
                deleted immediately when you use the in-app &quot;Clear All
                Data&quot; or &quot;Clear Registration&quot; option.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                2
              </span>
              <div>
                <strong className="text-brand-text">Within 30 days:</strong> If
                you submit a data deletion request via email, we will process
                your request and confirm completion within 30 days.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                3
              </span>
              <div>
                <strong className="text-brand-text">
                  Third-party retention:
                </strong>{" "}
                Data held by third-party services (Firebase, Google AdMob) is
                subject to their respective data retention and deletion policies.
              </div>
            </li>
          </ul>
        </section>

        {/* Submit a Data Deletion Request */}
        <section aria-labelledby="submit-request">
          <h2
            id="submit-request"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Submit a Data Deletion Request
          </h2>
          <p className="mb-4">
            If you are unable to delete your data using the in-app options
            described above, or if you would like to request deletion of any
            anonymized analytics data associated with your device, you can
            contact us directly.
          </p>

          <div className="rounded-xl border border-brand-border bg-gradient-to-br from-blue-50/50 to-slate-50 p-6">
            <h3 className="font-heading text-base font-semibold text-brand-text mb-4">
              Contact us for data deletion
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-brand-text">Email</p>
                  <a
                    href="mailto:support@velcuri.io?subject=Data%20Deletion%20Request"
                    className="text-brand-primary hover:underline"
                  >
                    support@velcuri.io
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-brand-text">
                    Subject line
                  </p>
                  <p className="text-sm">
                    Please use{" "}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-brand-text">
                      Data Deletion Request
                    </code>{" "}
                    as the subject line.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-brand-text">
                    Include in your request
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                    <li>The app name (Vault or Cobalt VPN)</li>
                    <li>Your device type and operating system version</li>
                    <li>
                      A description of the data you would like deleted
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section aria-labelledby="quick-summary">
          <h2
            id="quick-summary"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Quick Summary
          </h2>
          <div className="overflow-hidden rounded-xl border border-brand-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-border bg-slate-50">
                  <th className="px-4 py-3 text-left font-heading font-semibold text-brand-text">
                    Question
                  </th>
                  <th className="px-4 py-3 text-left font-heading font-semibold text-brand-text">
                    Answer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Can users request data deletion?
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Yes
                    </span>{" "}
                    — Clear Registration in Settings
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Where is data stored?
                  </td>
                  <td className="px-4 py-3">
                    Locally on your device — not on our servers
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    How long does deletion take?
                  </td>
                  <td className="px-4 py-3">
                    Immediate (in-app) or within 30 days (email request)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Is any data retained after deletion?
                  </td>
                  <td className="px-4 py-3">
                    Only anonymized analytics by Firebase (cannot identify you)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-brand-text">
                    Can I delete data without the app?
                  </td>
                  <td className="px-4 py-3">
                    Yes — uninstalling removes all local data, or email us
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Pages */}
        <section aria-labelledby="related">
          <h2
            id="related"
            className="font-heading text-xl font-semibold text-brand-text mb-3"
          >
            Related Pages
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-brand-primary hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              — Full details on data collection and handling
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-brand-primary hover:underline"
              >
                Terms of Service
              </Link>{" "}
              — Usage terms for all Velcuri applications
            </li>
            <li>
              <Link
                href="/contact"
                className="text-brand-primary hover:underline"
              >
                Contact Us
              </Link>{" "}
              — General support and inquiries
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
