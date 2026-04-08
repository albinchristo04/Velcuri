import { AppCard } from "@/components/ui/app-card";

const VAULT_APP = {
  name: "Vault – Save for Later",
  status: "Coming Soon",
  statusVariant: "coming-soon" as const,
  description:
    "Vault is a simple and secure app that lets you save links, notes, and important content in one place so you can access them anytime.",
  features: [
    "Save links, notes, and content quickly",
    "Organize items with categories",
    "Clean and distraction-free interface",
    "Designed for speed and simplicity",
  ],
  tag: "Productivity",
  ctaLabel: "Coming to Google Play",
  ctaDisabled: true,
};

const COBALT_VPN_APP = {
  name: "Cobalt VPN",
  status: "Coming Soon",
  statusVariant: "coming-soon" as const,
  description:
    "Android VPN app using WireGuard protocol connected to Cloudflare WARP infrastructure.",
  features: [
    "Fast & secure WireGuard protocol",
    "Powered by Cloudflare WARP",
    "No-log privacy-first design",
    "One-tap connection",
  ],
  tag: "Privacy & Security",
  ctaLabel: "Coming to Google Play",
  ctaDisabled: true,
};

export function FeaturedApp() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-text mb-10 text-center">
        Our Apps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <AppCard {...VAULT_APP} />
        <AppCard {...COBALT_VPN_APP} />
      </div>
    </section>
  );
}
