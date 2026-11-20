import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { playAppUrl, type VelcuriApp } from "@/lib/apps";

export function AppCard({ app }: { app: VelcuriApp }) {
  const { slug, name, category, description, packageName } = app;

  return (
    <article className="studio-app" id={slug}>
      <div className="studio-app-top">
        <Image src={`/apps/${slug}.webp`} alt="" width={62} height={62} unoptimized />
        <span>{category}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={playAppUrl(packageName)} className="studio-app-store" aria-label={`View ${name} on Google Play`}>
        View on Google Play <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <div className="studio-app-legal" aria-label={`Policies for ${name}`}>
        <Link href={`/privacy-policy#${slug}`} aria-label={`${name} privacy policy`}>Privacy</Link>
        <Link href={`/terms-of-service#${slug}`} aria-label={`${name} terms of service`}>Terms</Link>
        <Link href={`/data-deletion#${slug}`} aria-label={`${name} data deletion`}>Data deletion</Link>
      </div>
    </article>
  );
}
