import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/badge-status";
import { Check } from "lucide-react";

interface AppCardProps {
  name: string;
  status: string;
  statusVariant?: "coming-soon" | "live" | "beta";
  description: string;
  features: string[];
  tag: string;
  url?: string;
}

export function AppCard({ name, status, statusVariant = "coming-soon", description, features, tag, url }: AppCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm border border-brand-border bg-white hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div><h3 className="font-heading text-lg font-semibold text-brand-text">{name}</h3><span className="text-xs text-brand-muted mt-0.5 block">{tag}</span></div>
          <StatusBadge label={status} variant={statusVariant} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-brand-muted leading-relaxed">{description}</p>
        {features.length > 0 && <ul className="space-y-1.5" aria-label="App features">{features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-brand-text"><Check size={14} className="shrink-0 text-brand-primary" aria-hidden="true" />{feature}</li>)}</ul>}
        {url && <Button asChild className="w-full mt-2 bg-brand-primary hover:bg-brand-secondary text-white"><a href={url} aria-label={`View ${name} on Google Play`}>View on Google Play</a></Button>}
      </CardContent>
    </Card>
  );
}
