import { ArrowUpRight } from "lucide-react";
import { AppCard } from "@/components/ui/app-card";
import { apps, playDeveloperUrl } from "@/lib/apps";

export function AppCatalog({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={`studio-shell studio-catalog${standalone ? " studio-catalog--page" : ""}`} id="apps" aria-labelledby="app-catalog-title">
      <div className="catalog-heading">
        <div>
          {standalone ? <h1 id="app-catalog-title">Our Android apps</h1> : <h2 id="app-catalog-title">Our Android apps</h2>}
          <p>{apps.length} apps from Velcuri Labs, available on Google Play.</p>
        </div>
        <a className="studio-text-link" href={playDeveloperUrl}>
          Developer profile <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="studio-app-grid">
        {apps.map((app) => <AppCard key={app.slug} app={app} />)}
      </div>
    </section>
  );
}
