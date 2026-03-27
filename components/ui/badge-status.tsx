import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  variant?: "coming-soon" | "live" | "beta";
}

const variantStyles: Record<string, string> = {
  "coming-soon": "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
  live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  beta: "bg-amber-50 text-amber-700 border-amber-200",
};

export function StatusBadge({ label, variant = "coming-soon" }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-medium px-2.5 py-0.5", variantStyles[variant])}
    >
      {label}
    </Badge>
  );
}
