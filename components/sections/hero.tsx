import { ArrowDown, ArrowUpRight } from "lucide-react";
import { playDeveloperUrl } from "@/lib/apps";
import { AppScene } from "./app-scene";

export function Hero() {
  return (
    <section className="studio-shell studio-hero">
      <div className="hero-copy">
        <p className="studio-kicker"><span /> Independent Android studio</p>
        <h1>Apps for<br />everyday life.</h1>
        <p className="hero-description">
          Save what matters, tune your drive, and follow the games you love. Explore the Android apps we build at Velcuri Labs.
        </p>
        <div className="studio-actions">
          <a className="studio-button" href="#apps">
            Explore apps <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="studio-text-link" href={playDeveloperUrl}>
            Google Play <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <AppScene>Velcuri<span>.</span></AppScene>
    </section>
  );
}
