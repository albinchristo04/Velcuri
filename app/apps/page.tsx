import type { Metadata } from "next";
import { AppCatalog } from "@/components/sections/featured-app";

export const metadata: Metadata = {
  title: "Android Apps — Velcuri Labs",
  description: "Browse the Velcuri Labs Android app catalog, including apps on Google Play and new football apps preparing for release.",
};

export default function AppsPage() {
  return <AppCatalog standalone />;
}
