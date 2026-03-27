# Velcuri Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full Velcuri developer-studio website — 5 pages, shared layout, and app showcase — ready to deploy on Vercel.

**Architecture:** Next.js 15 App Router with a root layout holding `<Header>` and `<Footer>`. Pages are Server Components. Interactive elements (mobile nav toggle) are isolated Client Components. shadcn/ui supplies primitives; custom components sit in `components/`.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, shadcn/ui, Lucide React, Google Fonts (Archivo + Space Grotesk), Vercel deployment.

**Design System:** `design-system/velcuri/MASTER.md` — primary blue `#2563EB`, slate text `#1E293B`, near-white bg `#F8FAFC`, `rounded-2xl` cards, 150–300ms hover transitions, `prefers-reduced-motion` respected.

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/layout.tsx` | Root layout — font vars, `<Header>`, `<Footer>`, metadata defaults |
| `app/globals.css` | Tailwind base + CSS custom properties (design tokens) |
| `app/page.tsx` | Home page — composes `<Hero>`, `<TrustSection>`, `<FeaturedApp>` |
| `app/apps/page.tsx` | Apps page — `<AppCard>` grid + placeholder |
| `app/about/page.tsx` | About page — studio copy + focus areas |
| `app/contact/page.tsx` | Contact page — email link |
| `app/privacy-policy/page.tsx` | Privacy policy page |
| `components/layout/header.tsx` | Site header — logo + nav links + mobile menu (Client Component) |
| `components/layout/footer.tsx` | Site footer — copyright, links, tagline |
| `components/sections/hero.tsx` | Hero section — headline, subtitle, CTA button |
| `components/sections/trust-section.tsx` | Three trust-signal badges |
| `components/sections/featured-app.tsx` | Featured "Vault" app card with feature list |
| `components/ui/app-card.tsx` | Reusable app showcase card |
| `components/ui/badge-status.tsx` | "Coming Soon" / status badge |

---

## Task 1: Scaffold the Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`

- [ ] **Step 1: Run create-next-app**

```bash
cd C:/Users/albin/OneDrive/Documents/GitHub/Velcuri
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --no-turbopack
```

Accept all defaults. When asked "Would you like to use Turbopack?", choose **No** (stability).

Expected: project files created, `npm run dev` works.

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev
```

Expected: `✓ Ready on http://localhost:3000` with no errors.

- [ ] **Step 3: Commit scaffold**

```bash
git add .
git commit -m "chore: scaffold Next.js 15 with Tailwind and TypeScript"
```

---

## Task 2: Install shadcn/ui and Lucide Icons

**Files:**
- Modify: `components/ui/` (shadcn auto-generates files here)
- Modify: `app/globals.css` (shadcn adds CSS vars)
- Modify: `tailwind.config.ts` (shadcn updates)
- Modify: `components.json` (created by shadcn init)

- [ ] **Step 1: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```

When prompted:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

- [ ] **Step 2: Add required shadcn components**

```bash
npx shadcn@latest add button badge card
```

- [ ] **Step 3: Install Lucide icons**

```bash
npm install lucide-react
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no type errors.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: add shadcn/ui (button, badge, card) and lucide-react"
```

---

## Task 3: Design Tokens — Fonts and CSS Variables

**Files:**
- Modify: `app/layout.tsx` — load Google Fonts via `next/font`
- Modify: `app/globals.css` — override shadcn CSS vars with Velcuri palette
- Modify: `tailwind.config.ts` — extend with brand colors and font families

- [ ] **Step 1: Configure fonts in `app/layout.tsx`**

Replace the content of `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velcuri — Independent Developer Studio",
  description:
    "Velcuri is an independent developer studio focused on creating practical apps that help users save, organize, and manage digital content efficiently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-brand-bg text-brand-text antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Set design tokens in `app/globals.css`**

Add after the existing `@tailwind` directives (keep shadcn's `:root` block and add the brand overrides at the end of the `:root` block):

```css
@layer base {
  :root {
    /* Velcuri brand tokens */
    --brand-primary: 37 99 235;      /* #2563EB */
    --brand-secondary: 59 130 246;   /* #3B82F6 */
    --brand-cta: 249 115 22;         /* #F97316 */
    --brand-bg: 248 250 252;         /* #F8FAFC */
    --brand-text: 30 41 59;          /* #1E293B */
    --brand-muted: 100 116 139;      /* slate-500 */
    --brand-border: 226 232 240;     /* slate-200 */
  }
}
```

- [ ] **Step 3: Extend `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(var(--brand-primary) / <alpha-value>)",
          secondary: "rgb(var(--brand-secondary) / <alpha-value>)",
          cta: "rgb(var(--brand-cta) / <alpha-value>)",
          bg: "rgb(var(--brand-bg) / <alpha-value>)",
          text: "rgb(var(--brand-text) / <alpha-value>)",
          muted: "rgb(var(--brand-muted) / <alpha-value>)",
          border: "rgb(var(--brand-border) / <alpha-value>)",
        },
      },
      fontFamily: {
        heading: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

- [ ] **Step 4: Verify build with no font errors**

```bash
npm run build
```

Expected: clean build, no missing font warnings.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add design tokens, Archivo+SpaceGrotesk fonts, brand color palette"
```

---

## Task 4: Header Component

**Files:**
- Create: `components/layout/header.tsx`

- [ ] **Step 1: Create the header**

Create `components/layout/header.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-brand-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-700 tracking-tight text-brand-text hover:text-brand-primary transition-colors duration-150"
        >
          Velcuri
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 hover:text-brand-primary ${
                pathname === href
                  ? "text-brand-primary"
                  : "text-brand-muted"
              }`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden cursor-pointer rounded-md p-2 text-brand-muted hover:text-brand-text transition-colors duration-150"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-brand-border bg-brand-bg"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-150 hover:text-brand-primary ${
                    pathname === href ? "text-brand-primary" : "text-brand-muted"
                  }`}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add components/layout/header.tsx
git commit -m "feat: add sticky Header with desktop nav and mobile menu"
```

---

## Task 5: Footer Component

**Files:**
- Create: `components/layout/footer.tsx`

- [ ] **Step 1: Create the footer**

Create `components/layout/footer.tsx`:

```tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-brand-muted">
          Velcuri © 2026 — Independent developer studio
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-150"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-150"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: add Footer with copyright, privacy, and contact links"
```

---

## Task 6: Reusable UI Primitives — StatusBadge and AppCard

**Files:**
- Create: `components/ui/badge-status.tsx`
- Create: `components/ui/app-card.tsx`

- [ ] **Step 1: Create `components/ui/badge-status.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `components/ui/app-card.tsx`**

```tsx
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
  ctaLabel: string;
  ctaDisabled?: boolean;
}

export function AppCard({
  name,
  status,
  statusVariant = "coming-soon",
  description,
  features,
  tag,
  ctaLabel,
  ctaDisabled = false,
}: AppCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm border border-brand-border bg-white hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg font-600 text-brand-text">{name}</h3>
            <span className="text-xs text-brand-muted mt-0.5 block">{tag}</span>
          </div>
          <StatusBadge label={status} variant={statusVariant} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-brand-muted leading-relaxed">{description}</p>
        <ul className="space-y-1.5" aria-label="App features">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-brand-text">
              <Check size={14} className="shrink-0 text-brand-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          disabled={ctaDisabled}
          className={`w-full mt-2 ${
            ctaDisabled
              ? "opacity-60 cursor-not-allowed"
              : "bg-brand-primary hover:bg-brand-secondary text-white"
          }`}
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 3: Build check**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add components/ui/badge-status.tsx components/ui/app-card.tsx
git commit -m "feat: add StatusBadge and AppCard reusable components"
```

---

## Task 7: Home Page Sections

**Files:**
- Create: `components/sections/hero.tsx`
- Create: `components/sections/trust-section.tsx`
- Create: `components/sections/featured-app.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/hero.tsx`**

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-700 text-brand-text leading-tight tracking-tight">
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
```

- [ ] **Step 2: Create `components/sections/trust-section.tsx`**

```tsx
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
```

- [ ] **Step 3: Create `components/sections/featured-app.tsx`**

```tsx
import { AppCard } from "@/components/ui/app-card";

const VAULT_APP = {
  name: "Vault – Save for Later",
  status: "Coming Soon",
  statusVariant: "coming-soon" as const,
  description:
    "Vault is a simple and secure app that lets you save links, notes, and important content in one place so you can access them anytime.",
  features: [
    "Save links, notes, and content quickly",
    "Organize items with categories",
    "Clean and distraction-free interface",
    "Designed for speed and simplicity",
  ],
  tag: "Productivity",
  ctaLabel: "Coming to Google Play",
  ctaDisabled: true,
};

export function FeaturedApp() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="font-heading text-2xl sm:text-3xl font-600 text-brand-text mb-10 text-center">
        Featured App
      </h2>
      <div className="max-w-md mx-auto">
        <AppCard {...VAULT_APP} />
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Compose `app/page.tsx`**

```tsx
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
```

- [ ] **Step 5: Build check**

```bash
npm run build
```

Expected: clean build, home page renders.

- [ ] **Step 6: Commit**

```bash
git add components/sections/ app/page.tsx
git commit -m "feat: build Home page with Hero, TrustSection, and FeaturedApp sections"
```

---

## Task 8: Apps Page

**Files:**
- Modify: `app/apps/page.tsx`

- [ ] **Step 1: Write `app/apps/page.tsx`**

```tsx
import type { Metadata } from "next";
import { AppCard } from "@/components/ui/app-card";

export const metadata: Metadata = {
  title: "Apps — Velcuri",
  description: "Browse apps built by Velcuri, an independent developer studio.",
};

const apps = [
  {
    name: "Vault – Save for Later",
    status: "Coming Soon",
    statusVariant: "coming-soon" as const,
    description: "Save anything you find online and access it later in a clean, organized way.",
    features: ["Link saving", "Notes storage", "Easy access"],
    tag: "Productivity",
    ctaLabel: "Coming to Google Play",
    ctaDisabled: true,
  },
];

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-700 text-brand-text mb-4">
        Our Apps
      </h1>
      <p className="text-brand-muted mb-12 text-lg">
        Simple tools built for real everyday problems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard key={app.name} {...app} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-brand-muted">
        More apps are currently in development.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/apps/page.tsx
git commit -m "feat: add Apps page with AppCard grid"
```

---

## Task 9: About Page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Write `app/about/page.tsx`**

```tsx
import type { Metadata } from "next";
import { Wrench, FolderOpen, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Velcuri",
  description: "Velcuri is an independent digital product studio focused on simple, reliable applications.",
};

const focusAreas = [
  { icon: Wrench, label: "Utility apps" },
  { icon: FolderOpen, label: "Content organization tools" },
  { icon: Zap, label: "Lightweight productivity apps" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-700 text-brand-text mb-8">
        About Velcuri
      </h1>

      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>Velcuri is an independent digital product studio.</p>
        <p>
          Founded by an individual developer focused on building simple, reliable, and scalable
          applications.
        </p>
        <p>
          Our goal is to create tools that solve real problems without unnecessary complexity.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-heading text-xl font-600 text-brand-text mb-6">Focus Areas</h2>
        <ul className="space-y-4">
          {focusAreas.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-brand-text">
              <Icon size={18} className="shrink-0 text-brand-primary" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 p-6 rounded-2xl border border-brand-border bg-white">
        <p className="text-sm text-brand-muted leading-relaxed">
          We are committed to building apps that follow platform policies and respect user privacy.
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add About page with studio overview and focus areas"
```

---

## Task 10: Contact Page

**Files:**
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Write `app/contact/page.tsx`**

```tsx
import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Velcuri",
  description: "Get in touch with Velcuri for support or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-700 text-brand-text mb-6">
        Contact
      </h1>
      <p className="text-brand-muted mb-10 text-lg leading-relaxed">
        For support or inquiries, contact us:
      </p>

      <a
        href="mailto:support@velcuri.io"
        className="inline-flex items-center gap-3 rounded-2xl border border-brand-border bg-white px-6 py-4 text-brand-text font-medium hover:border-brand-primary hover:text-brand-primary transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary"
        aria-label="Email Velcuri support"
      >
        <Mail size={18} aria-hidden="true" />
        support@velcuri.io
      </a>

      <p className="mt-8 text-sm text-brand-muted">
        We typically respond within 24–48 hours.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add Contact page with visible support email"
```

---

## Task 11: Privacy Policy Page

**Files:**
- Modify: `app/privacy-policy/page.tsx`

- [ ] **Step 1: Write `app/privacy-policy/page.tsx`**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Velcuri",
  description: "Privacy policy for Velcuri applications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl sm:text-4xl font-700 text-brand-text mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-brand-muted mb-12">Last updated: March 2026</p>

      <div className="space-y-10 text-brand-muted leading-relaxed">
        <section aria-labelledby="privacy-intro">
          <p id="privacy-intro">
            Velcuri respects user privacy. Our applications are designed to minimize data
            collection.
          </p>
        </section>

        <section aria-labelledby="information-collection">
          <h2
            id="information-collection"
            className="font-heading text-xl font-600 text-brand-text mb-3"
          >
            Information Collection
          </h2>
          <p>
            Vault – Save for Later does not collect personal data unless necessary for app
            functionality. Any data stored locally on your device stays on your device and is
            not transmitted to our servers.
          </p>
        </section>

        <section aria-labelledby="data-use">
          <h2
            id="data-use"
            className="font-heading text-xl font-600 text-brand-text mb-3"
          >
            How Data is Used
          </h2>
          <p>
            Data collected, if any, is used solely to provide the core features of the app.
            We do not sell, rent, or share your personal data with third parties for marketing
            purposes.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <h2
            id="third-party"
            className="font-heading text-xl font-600 text-brand-text mb-3"
          >
            Third-Party Services
          </h2>
          <p>
            Our apps may use Google Play services for distribution. Please refer to Google's
            privacy policy for information on data they collect as part of the Play platform.
          </p>
        </section>

        <section aria-labelledby="contact-privacy">
          <h2
            id="contact-privacy"
            className="font-heading text-xl font-600 text-brand-text mb-3"
          >
            Contact
          </h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a
              href="mailto:support@velcuri.io"
              className="text-brand-primary hover:underline"
            >
              support@velcuri.io
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Build check**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add app/privacy-policy/page.tsx
git commit -m "feat: add Privacy Policy page (Play Console compliant)"
```

---

## Task 12: Final Polish — Animations, Responsive Audit, and Vercel Config

**Files:**
- Modify: `app/globals.css` — add `prefers-reduced-motion` safe entrance animation
- Create: `vercel.json` — headers and redirects

- [ ] **Step 1: Add entrance animations to `app/globals.css`**

Append to `app/globals.css`:

```css
@media (prefers-reduced-motion: no-preference) {
  .animate-fade-up {
    animation: fade-up 0.4s ease-out both;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-up {
    animation: none;
  }
}
```

Add `className="animate-fade-up"` to the `<h1>` in `components/sections/hero.tsx`.

- [ ] **Step 2: Add `vercel.json` for security headers**

Create `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

- [ ] **Step 3: Final build and responsive check**

```bash
npm run build && npm run lint
```

Expected: zero lint errors, zero build errors.

Manually verify at these breakpoints in browser devtools:
- 375px (iPhone SE)
- 768px (tablet)
- 1440px (desktop)

Check: no horizontal scroll, header/footer render, all 5 pages accessible.

- [ ] **Step 4: Final commit**

```bash
git add app/globals.css vercel.json components/sections/hero.tsx
git commit -m "feat: add entrance animations (motion-safe), security headers, and responsive polish"
```

---

## Self-Review: Spec Coverage

| Requirement | Task |
|-------------|------|
| Home — Hero (title, subtitle, CTA) | Task 7 |
| Home — Trust section (3 items) | Task 7 |
| Home — Featured App (Vault, Coming Soon, features, disabled CTA) | Task 7 |
| Apps page — AppCard grid, Vault card, "more in development" text | Task 8 |
| About page — studio copy, Focus Areas, policy statement | Task 9 |
| Contact page — email `support@velcuri.io`, 24–48h note | Task 10 |
| Privacy Policy page — 4 sections, contact email | Task 11 |
| Header — Logo "Velcuri", links: Home/Apps/About/Contact | Task 4 |
| Footer — `Velcuri © 2026`, Privacy Policy, Contact, tagline | Task 5 |
| Design — `rounded-2xl`, soft shadows, blue accent, minimal | Tasks 3, 6 |
| Responsive + mobile-first | Tasks 4–11 + Task 12 |
| Play Console compliance — no fake claims, visible email | Tasks 10, 11 |
| Vercel deployment ready | Task 12 |
