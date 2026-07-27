import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "alaudida-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="al-cookie-consent" role="dialog" aria-live="polite" aria-label="Consentement aux cookies">
      <div className="al-cookie-consent-inner">
        <p>
          Ce site n'utilise que des cookies strictement nécessaires à son bon
          fonctionnement. Aucune donnée n'est partagée à des fins publicitaires.{" "}
          <Link to="/cookies">En savoir plus</Link>.
        </p>
        <div className="al-cookie-consent-actions">
          <button type="button" className="al-btn al-btn-ghost" onClick={() => decide("declined")}>
            Refuser
          </button>
          <button type="button" className="al-btn al-btn-primary" onClick={() => decide("accepted")}>
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
