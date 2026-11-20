import type { Metadata } from "next";
import Link from "next/link";
import { PolicyAppLinks, PolicyPage } from "@/components/layout/policy-page";
import { appPolicies, supportEmail } from "@/lib/app-policies";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Account and Data Deletion — Velcuri Labs",
  description: "Delete a Velcuri Labs app account or device data, or submit a deletion request by email.",
};

function deletionEmail(appName?: string) {
  const subject = appName ? `Data deletion request for ${appName}` : "Velcuri Labs data deletion request";
  const body = `App: ${appName ?? ""}\nRequest: Delete my account and associated data, or specify the data to delete.\nAccount email (if applicable): `;
  return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function DataDeletionPage() {
  return (
    <PolicyPage title="Account and data deletion" intro="Delete data for a Velcuri Labs app, or email us to request deletion without reinstalling the app.">
      <aside className="policy-request" id="submit-request" aria-labelledby="request-heading">
        <h2 id="request-heading">Request deletion by email</h2>
        <p>Send your app name, the account email if you signed in, and what you want deleted. To delete the entire account, say so in your message. Leave out passwords, payment details, and playlist credentials.</p>
        <a className="studio-button" href={deletionEmail()}>Email a deletion request</a>
        <p className="mt-3">You can also write directly to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
      </aside>
      <PolicyAppLinks />
      <section id="in-app-deletion">
        <h2>Deletion steps by app</h2>
        {apps.map(({ slug, name }) => {
          const policy = appPolicies[slug];

          return (
            <section className="policy-app" id={slug} key={slug}>
              <h3>{name}</h3>
              <p>{policy.deletion}</p>
              <p>
                {policy.deletionPortal && <><a href={policy.deletionPortal}>Open the 8K account deletion portal</a>{" · "}</>}
                <a href={deletionEmail(name)}>Email a deletion request for {name}</a>
              </p>
            </section>
          );
        })}
      </section>
      <section id="local-data">
        <h2>Clear data stored on your Android device</h2>
        <p>Open Settings, choose Apps, select the app, then open Storage and choose Clear storage or Clear data. Delete any separate exports or backups if you no longer need them. To remove synced data, follow the account or email steps for your app.</p>
      </section>
      <section id="timeline">
        <h2>What happens after a request</h2>
        <p>We may ask for information to verify that the account or data belongs to you. We aim to process verified email requests within 30 days and will let you know if we need more information or time.</p>
        <p>Deleting an account removes the account and its associated data, subject to limited retention for legal, security, billing, or fraud-prevention purposes. Google Play manages purchase records and subscriptions. See our <Link href="/privacy-policy#data-retention">privacy policy</Link> for more about retention.</p>
      </section>
    </PolicyPage>
  );
}
