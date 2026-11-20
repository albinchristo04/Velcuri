import type { Metadata } from "next";
import { AppCatalog } from "@/components/sections/featured-app";

export const metadata: Metadata = {
  title: "Android Apps — Velcuri Labs",
  description: "Browse the complete Velcuri Labs Android app collection and find each app’s privacy, terms, and data deletion information.",
};

export default function AppsPage() {
  return <AppCatalog standalone />;
}
