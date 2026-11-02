import Link from "next/link";
import { AppCard } from "@/components/ui/app-card";
import { apps } from "@/lib/apps";

export function FeaturedApp() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-text mb-10 text-center">Our Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {apps.slice(0, 4).map((app) => <AppCard key={app.name} {...app} />)}
      </div>
      <div className="mt-8 text-center"><Link href="/apps" className="text-brand-primary font-medium underline">View all apps</Link></div>
    </section>
  );
}
