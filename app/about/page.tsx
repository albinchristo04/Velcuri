import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Velcuri Labs",
  description: "Learn about Velcuri Labs, an independent Android app studio.",
};

export default function AboutPage() {
  return (
    <div className="policy-page">
      <header className="policy-heading">
        <h1>About Velcuri Labs</h1>
        <p>We’re an independent Android studio building apps for everyday life, from organizing the links you save to scoring the matches you play.</p>
      </header>
      <Link href="/apps" className="studio-button">Browse our apps</Link>
    </div>
  );
}
