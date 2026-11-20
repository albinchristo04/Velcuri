import { ArrowUpRight } from "lucide-react";
import { AppCard } from "@/components/ui/app-card";
import { playApps, playDeveloperUrl, upcomingApps } from "@/lib/apps";

export function AppCatalog({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={`studio-shell studio-catalog${standalone ? " studio-catalog--page" : ""}`} id="apps" aria-labelledby="app-catalog-title">
      <div className="catalog-heading">
        <div>
          {standalone ? <h1 id="app-catalog-title">Our Android apps</h1> : <h2 id="app-catalog-title">Our Android apps</h2>}
          <p>{playApps.length} apps available on Google Play.</p>
        </div>
        <a className="studio-text-link" href={playDeveloperUrl}>
          Developer profile <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="studio-app-grid">
        {playApps.map((app) => <AppCard key={app.slug} app={app} />)}
      </div>
      <section className="studio-upcoming" id="upcoming-apps" aria-labelledby="upcoming-apps-title">
        <div className="catalog-heading">
          <div>
            <h2 id="upcoming-apps-title">New football apps</h2>
            <p>Preparing for release.</p>
          </div>
        </div>
        <div className="studio-app-grid">
          {upcomingApps.map((app) => <AppCard key={app.slug} app={app} />)}
        </div>
      </section>
    </section>
  );
}
