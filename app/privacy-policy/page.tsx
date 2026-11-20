import type { Metadata } from "next";
import Link from "next/link";
import { PolicyAppLinks, PolicyPage } from "@/components/layout/policy-page";
import { appPolicies, supportEmail } from "@/lib/app-policies";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Privacy Policy — Velcuri Labs",
  description: "How Velcuri Labs handles data across its website and Android apps, and how to exercise your privacy choices.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy policy" intro="This policy explains how Velcuri Labs handles information when you use this website or one of our Android apps.">
      <PolicyAppLinks />
      <section id="information-collection">
        <h2>Information by app</h2>
        {apps.map(({ slug, name, packageName }) => {
          const policy = appPolicies[slug];

          return (
            <section className="policy-app" id={slug} key={slug}>
              <h3>{name}</h3>
              <p>{policy.privacy}</p>
              <p>
                <Link href={`/data-deletion#${slug}`}>Data deletion for {name}</Link>
                {" · "}
                <a href={`https://play.google.com/store/apps/datasafety?id=${packageName}`}>Google Play Data safety</a>
                {policy.privacyUrl && <>{" · "}<a href={policy.privacyUrl}>App privacy notice</a></>}
              </p>
            </section>
          );
        })}
      </section>
      <section id="third-party">
        <h2>Website, support, and service providers</h2>
        <p>Our hosting provider may process standard request information such as IP addresses and browser information to deliver and protect this site. If you email us, we use your address and the information you send to respond, verify requests when needed, and keep a record of their resolution.</p>
        <p>Our apps use service providers where described above. See the <a href="https://policies.google.com/privacy">Google privacy policy</a> for Google Play and Google advertising, <a href="https://firebase.google.com/support/privacy">Firebase privacy information</a> for account and diagnostic services, and the <a href="https://www.cloudflare.com/application/privacypolicy/">Cloudflare application privacy policy</a> for WARP. You can manage ad preferences in Android settings and in the app when a consent control is available.</p>
        <p>We use and share information to provide app features, support users, measure and improve performance, deliver ads where applicable, prevent abuse, and meet legal obligations. We don’t sell personal information.</p>
      </section>
      <section id="data-retention">
        <h2>Retention, security, and your choices</h2>
        <p>Local information stays on your device until you remove it. When an app stores information in an account, we keep it while it is needed to provide the service. After an account or data deletion request, we may retain limited records where necessary for legal obligations, billing, security, or fraud prevention. Service providers apply their own retention periods.</p>
        <p>We use safeguards appropriate to the service, including access controls for synced account data. You can request access, correction, or deletion by emailing <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Visit <Link href="/data-deletion">Account and data deletion</Link> for app-specific steps.</p>
      </section>
      <section id="children-privacy">
        <h2>Children’s privacy</h2>
        <p>Our apps are intended for users aged 13 and older. A parent or guardian can <a href={`mailto:${supportEmail}`}>contact us</a> to request removal of personal information provided by a child under 13.</p>
      </section>
    </PolicyPage>
  );
}
