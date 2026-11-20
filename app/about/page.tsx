import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Velcuri Labs",
  description: "Meet Velcuri Labs, an independent Android studio building productivity, audio, video, privacy, and sports apps.",
};

export default function AboutPage() {
  return (
    <article className="policy-page">
      <header className="policy-heading">
        <h1>About Velcuri Labs</h1>
        <p>We’re an independent Android studio. We build apps that fit into everyday routines, from saving a link to read later to keeping score at a local cricket match.</p>
      </header>

      <div className="policy-body">
        <section>
          <h2>What we build</h2>
          <p>Vault keeps the links you save organized and searchable. BassRide recalls your equalizer settings when your car connects over Bluetooth. Cricket Tournament Manager brings fixtures, ball-by-ball scoring, and scorecards together so organizers can focus on the match.</p>
          <p>8K IPTV Player organizes the playlists you bring. Pirlo TV helps you find sports schedules and save your favorites. Cobalt VPN connects your Android device to Cloudflare WARP.</p>
          <p>We’re also preparing three football apps through our DeportesX project. Tarjeta Roja shows who’s playing today, Roja Directa helps you follow favorite teams, and Fútbol Libre gives you the details for individual matches.</p>
        </section>
      </div>

      <div className="studio-actions">
        <Link href="/apps" className="studio-button">Browse our apps</Link>
        <Link href="/contact" className="studio-text-link">Get in touch</Link>
      </div>
    </article>
  );
}
