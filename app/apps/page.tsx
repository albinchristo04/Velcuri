import type { Metadata } from "next";
import { AppCard } from "@/components/ui/app-card";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps — Velcuri",
  description: "Browse apps built by Velcuri, an independent developer studio.",
};

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-4">Our Apps</h1>
      <p className="text-brand-muted mb-12 text-lg">Simple tools built for real everyday problems.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => <AppCard key={app.name} {...app} />)}
      </div>
    </div>
  );
}
