import type { Metadata } from "next";
import { Wrench, FolderOpen, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Velcuri",
  description: "Velcuri is an independent digital product studio focused on simple, reliable applications.",
};

const focusAreas = [
  { icon: Wrench, label: "Utility apps" },
  { icon: FolderOpen, label: "Content organization tools" },
  { icon: Zap, label: "Lightweight productivity apps" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-text mb-8">
        About Velcuri
      </h1>

      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>Velcuri is an independent digital product studio.</p>
        <p>
          Founded by an individual developer focused on building simple, reliable, and scalable
          applications.
        </p>
        <p>
          Our goal is to create tools that solve real problems without unnecessary complexity.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-heading text-xl font-semibold text-brand-text mb-6">Focus Areas</h2>
        <ul className="space-y-4">
          {focusAreas.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-brand-text">
              <Icon size={18} className="shrink-0 text-brand-primary" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 p-6 rounded-2xl border border-brand-border bg-white">
        <p className="text-sm text-brand-muted leading-relaxed">
          We are committed to building apps that follow platform policies and respect user privacy.
        </p>
      </div>
    </div>
  );
}
