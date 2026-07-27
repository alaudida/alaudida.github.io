import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function BrandLogo({ height = 22 }: { height?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "4.4px" }}>
      <img src="/brand/logo-mark-coral-tight.svg" alt="" style={{ height: height * 0.93 }} />
      <img src="/brand/logo-banner-web.svg" alt="Alaudida" style={{ height }} />
    </span>
  );
}

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="alaudida" id="top">
      <header className="al-header is-scrolled">
        <nav className="al-wrap al-nav">
          <Link to="/" aria-label="Alaudida">
            <BrandLogo />
          </Link>
          <div className="al-nav-links">
            <Link to="/">Accueil</Link>
          </div>
          <Link to="/" className="al-btn al-btn-white">
            Retour
          </Link>
        </nav>
      </header>

      <main>
        <section className="al-section" style={{ paddingTop: "8rem" }}>
          <div className="al-wrap" style={{ maxWidth: "780px" }}>
            <span className="al-eyebrow">Informations légales</span>
            <h1 style={{ marginTop: "0.5rem" }}>{title}</h1>
            <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Dernière mise à jour&nbsp;: {updated}
            </p>
            <div className="al-legal-prose">{children}</div>
          </div>
        </section>
      </main>

      <footer className="al-footer">
        <div className="al-wrap">
          <div className="al-footer-bottom">
            <Link to="/" aria-label="Alaudida">
              <BrandLogo height={15} />
            </Link>
            <span>Alaudida SASU au capital de 1000€ — SIREN 888799194 RCS Paris</span>
            <div className="al-footer-links">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/confidentialite">Confidentialité</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
