import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { supportEmail } from "@/lib/app-policies";
import { playDeveloperUrl } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Contact — Velcuri Labs",
  description: "Contact Velcuri Labs for help with our Android apps.",
};

export default function ContactPage() {
  return (
    <div className="policy-page">
      <header className="policy-heading">
        <h1>Contact</h1>
        <p>For help with an app, include its name and a short description of the issue.</p>
      </header>
      <div className="policy-body">
        <a href={`mailto:${supportEmail}`} className="studio-button">
          <Mail size={18} aria-hidden="true" /> Email Velcuri Labs
        </a>
        <p className="mt-3"><a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
        <section>
          <h2>App support</h2>
          <p>Find listings on <a href={playDeveloperUrl}>Google Play</a> or follow the <Link href="/data-deletion">account and data deletion steps</Link> for your app.</p>
        </section>
      </div>
    </div>
  );
}
