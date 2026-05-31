"use client";

import { useEffect } from "react";

const animatedSelector = [
  ".site-page section",
  ".site-page article",
  ".site-page form",
  ".site-page details",
  "footer > div",
].join(",");

const motionTypes = ["rise", "slide-left", "slide-right", "soft-zoom"];

export default function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(animatedSelector));
    document.body.classList.add("motion-ready");

    elements.forEach((element, index) => {
      element.classList.add("motion-item");
      element.dataset.motion = motionTypes[index % motionTypes.length];
      element.style.setProperty("--motion-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
      elements.forEach((element) => {
        element.classList.remove("motion-item", "motion-visible");
        element.removeAttribute("data-motion");
        element.style.removeProperty("--motion-delay");
      });
    };
  }, []);

  return null;
}
