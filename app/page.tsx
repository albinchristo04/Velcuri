import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AppCatalog } from "@/components/sections/featured-app";

export const metadata: Metadata = {
  title: "Velcuri Labs — Android apps for everyday life",
  description: "Explore Android apps from Velcuri Labs and discover the upcoming football apps Tarjeta Roja, Roja Directa, and Fútbol Libre.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppCatalog />
    </>
  );
}
