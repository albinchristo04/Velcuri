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

export function FeaturedApp() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-text mb-10 text-center">
        Featured App
      </h2>
      <div className="max-w-md mx-auto">
        <AppCard {...VAULT_APP} />
      </div>
    </section>
  );
}
