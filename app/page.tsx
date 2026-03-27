import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";
import { FeaturedApp } from "@/components/sections/featured-app";

export const metadata: Metadata = {
  title: "Velcuri — Building Simple, Useful Digital Products",
  description:
    "Velcuri is an independent developer studio focused on creating practical apps that help users save, organize, and manage digital content efficiently.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FeaturedApp />
    </>
  );
}
