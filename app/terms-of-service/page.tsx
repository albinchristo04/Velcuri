import type { Metadata } from "next";
import Link from "next/link";
import { PolicyAppLinks, PolicyPage } from "@/components/layout/policy-page";
import { appPolicies, supportEmail } from "@/lib/app-policies";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Terms of Service — Velcuri Labs",
  description: "Terms for using Velcuri Labs Android apps, including app-specific rules, purchases, and support.",
};

export default function TermsOfServicePage() {
  return (
    <PolicyPage title="Terms of service" intro="These terms apply when you download or use a featured Android app from Velcuri Labs or DeportesX. By using an app, you agree to these terms.">
      <PolicyAppLinks />
      <section id="description">
        <h2>Using each app</h2>
        {apps.map(({ slug, name }) => {
          const policy = appPolicies[slug];

          return (
            <section className="policy-app" id={slug} key={slug}>
              <h3>{name}</h3>
              <p>{policy.terms}</p>
              {policy.termsUrl && <p><a href={policy.termsUrl}>Read the 8K IPTV Player terms</a></p>}
              {slug === "cobalt-vpn" && <p><a href="https://www.cloudflare.com/application/terms/">Read Cloudflare’s application terms</a></p>}
            </section>
          );
        })}
      </section>
      <section id="user-responsibilities">
        <h2>Eligibility and acceptable use</h2>
        <p>You must be at least 13 years old and must have permission from a parent or guardian if you are under 18. We grant you a limited, non-exclusive, non-transferable license to use the apps as intended.</p>
        <p>Use the apps lawfully, respect other people’s rights, and keep any account credentials secure. You may not disrupt the apps, access another user’s data without permission, or redistribute or resell the apps without authorization. Restrictions on modification or reverse engineering apply only where permitted by law. Velcuri Labs and its licensors retain their rights in the apps.</p>
      </section>
      <section id="purchases">
        <h2>Purchases, ads, and third-party services</h2>
        <p>Some apps offer optional paid features through Google Play. Review the price and purchase terms shown at checkout. Manage charges and refund requests through Google Play where applicable. Deleting an app account does not automatically refund a purchase or cancel a Google Play subscription.</p>
        <p>Some apps display advertising, open external links, or connect to third-party services. Those providers control their own content and availability, and their terms may apply.</p>
      </section>
      <section id="liability">
        <h2>Availability and liability</h2>
        <p>To the extent permitted by law, the apps are provided as available without implied warranties. Velcuri Labs is not liable for indirect or consequential damages or loss of data arising from use of the apps to the extent the law permits. Your mandatory consumer rights continue to apply.</p>
      </section>
      <section id="termination">
        <h2>Changes, ending use, and support</h2>
        <p>We may update the apps and post revised terms on this page with a new date. We may restrict access for violations of these terms or to protect users and the service. You can stop using an app at any time and <Link href="/data-deletion">request deletion of your account or data</Link>.</p>
        <p>For questions, email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> or read our <Link href="/privacy-policy">privacy policy</Link>.</p>
      </section>
    </PolicyPage>
  );
}
