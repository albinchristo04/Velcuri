"use client";

import Image from "next/image";
import type { PointerEvent, ReactNode } from "react";
import { playApps } from "@/lib/apps";

function tiltScene(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const stage = event.currentTarget;
  const bounds = stage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  stage.style.setProperty("--tilt-x", `${y * -13}deg`);
  stage.style.setProperty("--tilt-y", `${x * 19}deg`);
}

function resetScene(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--tilt-y");
}

export function AppScene({ children }: { children: ReactNode }) {
  return (
    <div className="studio-stage" onPointerMove={tiltScene} onPointerLeave={resetScene} aria-hidden="true">
      <div className="stage-grid" />
      <div className="stage-ring stage-ring--outer" />
      <div className="stage-ring stage-ring--inner" />
      <div className="stage-shadow" />
      <div className="stage-spark stage-spark--first" />
      <div className="stage-spark stage-spark--second" />
      <div className="stage-spark stage-spark--third" />
      <div className="stage-art">
        <div className="stage-plinth" />
        <div className="stage-phone">
          <div className="phone-back" />
          <div className="phone-edge phone-edge--right" />
          <div className="phone-edge phone-edge--bottom" />
          <div className="phone-face">
            <div className="phone-camera" />
            <div className="phone-wordmark">{children}</div>
            <div className="phone-icons">
              {playApps.map((app) => (
                <div key={app.slug}>
                  <Image src={`/apps/${app.slug}.webp`} alt="" width={48} height={48} unoptimized />
                  <span>{app.shortName}</span>
                </div>
              ))}
            </div>
            <div className="phone-gesture" />
          </div>
        </div>
        <div className="stage-tile stage-tile--vault">
          <Image src="/apps/vault.webp" alt="" width={84} height={84} unoptimized />
        </div>
        <div className="stage-tile stage-tile--cobalt">
          <Image src="/apps/cobalt-vpn.webp" alt="" width={72} height={72} unoptimized />
        </div>
      </div>
    </div>
  );
}
