import type { ReactNode } from "react";
import { apps } from "@/lib/apps";
import { policyUpdated } from "@/lib/app-policies";

export function PolicyPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <article className="policy-page">
      <header className="policy-heading">
        <h1>{title}</h1>
        <p>Last updated {policyUpdated}</p>
        <p>{intro}</p>
      </header>
      <div className="policy-body">{children}</div>
    </article>
  );
}

export function PolicyAppLinks() {
  return (
    <nav className="policy-app-links" aria-label="Jump to an app">
      {apps.map(({ slug, name }) => <a key={slug} href={`#${slug}`}>{name}</a>)}
    </nav>
  );
}
