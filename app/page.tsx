import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AppCatalog } from "@/components/sections/featured-app";

export const metadata: Metadata = {
  title: "Velcuri Labs — Android apps for everyday life",
  description: "Explore the Android app collection from Velcuri Labs, including Vault, BassRide, 8K IPTV Player, Cricket Tournament Manager, Cobalt VPN and Pirlo TV.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppCatalog />
    </>
  );
}
