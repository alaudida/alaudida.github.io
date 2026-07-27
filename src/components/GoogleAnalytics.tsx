import { useEffect } from "react";

const CONSENT_KEY = "alaudida-cookie-consent";

function getConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

  useEffect(() => {
    if (!measurementId) return;
    if (getConsent() !== "accepted") return;

    if (typeof window === "undefined") return;

    const w = window as typeof window & {
      dataLayer: unknown[];
      gtag: (...args: unknown[]) => void;
    };

    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    };
    w.gtag("js", new Date());
    w.gtag("config", measurementId, { anonymize_ip: true });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId]);

  return null;
}
