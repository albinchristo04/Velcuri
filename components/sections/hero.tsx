import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-text leading-tight tracking-tight animate-fade-up">
        Building Simple,{" "}
        <span className="text-brand-primary">Useful</span>{" "}
        Digital Products
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-muted leading-relaxed">
        Velcuri is an independent developer studio focused on creating practical apps that
        help users save, organize, and manage digital content efficiently.
      </p>
      <div className="mt-10">
        <Button
          asChild
          size="lg"
          className="bg-brand-primary hover:bg-brand-secondary text-white rounded-xl px-8 py-3 font-medium transition-colors duration-150"
        >
          <Link href="/apps">
            Explore Apps
            <ArrowRight size={16} className="ml-2" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
