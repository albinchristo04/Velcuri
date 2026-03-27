import { Shield, Heart, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "Independent Developer Studio",
  },
  {
    icon: Heart,
    label: "Focused on user-first experiences",
  },
  {
    icon: FileCheck,
    label: "Committed to Google Play policies and transparency",
  },
];

export function TrustSection() {
  return (
    <section
      className="border-y border-brand-border bg-white"
      aria-label="Trust signals"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm font-medium text-brand-text">
              <Icon size={18} className="shrink-0 text-brand-primary" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
