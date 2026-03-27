import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";
import { FeaturedApp } from "@/components/sections/featured-app";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FeaturedApp />
    </>
  );
}
