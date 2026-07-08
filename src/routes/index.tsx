import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import perspikappsLogo from "@/assets/perspikapps-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 13L13 3M13 3H5M13 3V11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type BtnProps = {
  variant?: "primary" | "ghost" | "line" | "white";
  href?: string;
  withArrow?: boolean;
  children: ReactNode;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

function Btn({
  variant = "primary",
  href,
  withArrow = true,
  children,
  onClick,
  target,
  rel,
}: BtnProps) {
  const cls = `al-btn al-btn-${variant}`;
  const inner = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} target={target} rel={rel} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} type="button">
      {inner}
    </button>
  );
}

function Eyebrow({
  children,
  inverse,
}: {
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <span className={`al-eyebrow${inverse ? " is-inverse" : ""}`}>{children}</span>
  );
}

const FACET_ICONS = {
  strategy: (
    <svg viewBox="0 0 40 40" className="al-facet-icon">
      <polygon points="20,4 36,20 20,36 4,20" />
      <path d="M20,4 L20,36 M4,20 L36,20" />
    </svg>
  ),
  studio: (
    <svg viewBox="0 0 40 40" className="al-facet-icon">
      <polygon points="6,30 6,10 20,4 34,10 34,30 20,36" />
      <path d="M6,10 L20,16 L34,10 M20,16 L20,36" />
    </svg>
  ),
  mentoring: (
    <svg viewBox="0 0 40 40" className="al-facet-icon">
      <path d="M20,4 L34,14 L28,34 L12,34 L6,14 Z" />
      <path d="M20,4 L20,22 M6,14 L20,22 L34,14" />
    </svg>
  ),
};

function BrandLogo({ height = 22 }: { height?: number }) {
  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: "4.4px" }}
    >
      <img
        src="/brand/logo-mark-coral-tight.svg"
        alt=""
        style={{ height: height * 0.93 }}
      />
      <img
        src="/brand/logo-banner-web.svg"
        alt="Alaudida"
        style={{ height }}
      />
    </span>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`al-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="al-wrap al-nav">
        <a href="#top" aria-label="Alaudida">
          <BrandLogo />
        </a>
        <div className="al-nav-links">
          <a href="#activites">Activités</a>
          <a href="#produits">Produits</a>
          <a href="#open-source">Open Source</a>
          <a href="#mentorat">Mentorat</a>
        </div>
        <Btn variant="white" href="mailto:hello@alaudida.fr">
          Contact
        </Btn>
      </nav>
    </header>
  );
}

function Index() {
  return (
    <div className="alaudida" id="top">
      <Header />

      {/* HERO */}
      <section className="al-hero">
        <div className="al-wrap al-hero-grid">
          <div>
            <div style={{ marginBottom: "var(--sp-3)" }}>
              <Eyebrow inverse>Alaudida — Stratégies × Solutions</Eyebrow>
            </div>
            <h1>
              On plie la complexité digitale
              <br />
              jusqu'à ce qu'elle tienne <em>dans votre main.</em>
            </h1>
            <p>
              Comme une feuille de papier devient un oiseau, un problème
              compliqué devient une décision simple — avec les bons plis, faits
              dans le bon ordre. Conseil en stratégie, développement logiciel et
              mentorat, pour les équipes qui doivent décoller.
            </p>
            <div className="al-hero-actions">
              <Btn variant="primary" href="mailto:hello@alaudida.fr">
                Discuter de votre projet
              </Btn>
              <Btn variant="ghost" href="#activites" withArrow={false}>
                Voir nos activités
              </Btn>
            </div>
          </div>
          <div className="al-hero-bird">
            <img src="/brand/logo-mark-coral-tight.svg" alt="" />
          </div>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section id="activites" className="al-section is-dark">
        <div className="al-wrap">
          <div className="al-section-head">
            <Eyebrow inverse>Ce que nous faisons</Eyebrow>
            <h2 style={{ marginTop: "0.5rem" }}>
              Trois façons de plier le problème
            </h2>
          </div>
          <div className="al-facets">
            <article className="al-facet">
              <span className="num">01</span>
              {FACET_ICONS.strategy}
              <h3>
                Conseil en stratégie digitale pour le monde industriel
              </h3>
              <p>
                On cadre la décision avant de cadrer la solution. Diagnostic,
                feuille de route, arbitrages — pour que chaque euro investi
                aille au bon endroit.
              </p>
              <a className="al-textlink" href="mailto:hello@alaudida.fr">
                Prendre contact →
              </a>
            </article>
            <article className="al-facet">
              <span className="num">02</span>
              {FACET_ICONS.studio}
              <h3>Studio de développement logiciel</h3>
              <p>
                On construit ce qui a été décidé. Perspikapps, notre studio,
                mène le produit de la première ligne de code à la mise en
                production.
              </p>
              <a
                className="al-textlink"
                href="http://perspikapps.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                perspikapps.fr →
              </a>
            </article>
            <article className="al-facet">
              <span className="num">03</span>
              {FACET_ICONS.mentoring}
              <h3>Coaching &amp; mentoring</h3>
              <p>
                On forme celles et ceux qui pilotent la transformation, en
                mentorat certifiant avec OpenClassrooms.
              </p>
              <a className="al-textlink" href="#mentorat">
                Voir les parcours →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits" className="al-section">
        <div className="al-wrap">
          <div className="al-section-head">
            <Eyebrow>Produits</Eyebrow>
            <h2 style={{ marginTop: "0.5rem" }}>Deux outils, deux terrains</h2>
          </div>
          <div className="al-products">
            <article className="al-product">
              <span className="al-tag">Gestion de workflow</span>
              <h3>Taskadabra</h3>
              <span className="strap">Votre assistant personnel</span>
              <p>
                Taskadabra organise, priorise et fait avancer les tâches
                d'équipe — pour que le suivi du travail ne devienne jamais un
                travail en soi.
              </p>
              <Btn
                variant="line"
                href="https://www-qa.taskadabra.perspikapps.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Découvrir Taskadabra
              </Btn>
            </article>
            <article className="al-product">
              <span className="al-tag">Sovereign edge to cloud</span>
              <h3>Deskale</h3>
              <span className="strap">Vos données, vos règles</span>
              <p>
                Deskale relie le terrain au cloud sans jamais faire transiter la
                maîtrise de vos données par un tiers — une infrastructure
                edge-to-cloud pensée pour rester souveraine.
              </p>
              <Btn variant="line" href="mailto:hello@alaudida.fr">
                En savoir plus
              </Btn>
            </article>
          </div>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section id="open-source" className="al-section is-dark">
        <div className="al-wrap">
          <div className="al-section-head">
            <Eyebrow inverse>Open Source</Eyebrow>
            <h2 style={{ marginTop: "0.5rem" }}>Le code qu'on partage</h2>
          </div>
          <p style={{ marginTop: "-2.5rem", marginBottom: "var(--sp-4)", maxWidth: "60ch" }}>
            Nos librairies internes, publiques par choix. Utilisez-les,
            forkez-les, proposez une pull request.
          </p>
          <div
            className="w-full lg:w-2/3"
            style={{
              display: "flex",
              gap: "var(--sp-3)",
              alignItems: "flex-start",
              background: "#fff",
              color: "var(--ink)",
              padding: "var(--sp-3)",
              borderRadius: "var(--radius-control)",
              marginBottom: "var(--sp-4)",
            }}
          >
            <img
              src={perspikappsLogo.url}
              alt="Perspikapps"
              width={64}
              height={64}
              style={{ flexShrink: 0, display: "block" }}
            />
            <div style={{ color: "var(--ink)" }}>
              <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem", color: "var(--ink)" }}>
                Perspikapps
              </div>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.5, color: "var(--ink)" }}>
                Perspikapps est le studio de développement d'Alaudida. Nous construisons des outils, des librairies et des plateformes — et nous partageons le code qui peut servir à d'autres.
              </p>
              <a
                href="https://perspikapps.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px", fontSize: "0.9rem", fontWeight: 600, display: "inline-block", marginTop: "0.6rem" }}
              >
                perspikapps.fr →
              </a>
            </div>
          </div>
          <div className="al-terminal w-full lg:w-2/3">
            <div className="al-terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="al-terminal-body">
              <div className="comment"># nos dépôts publics sur github.com/perspikapps</div>
              <div>
                <span className="prompt">$ </span>gh repo list perspikapps --public
              </div>
              {[
                { name: "laravel-envribbon", desc: "Displays current environment & version in top left corner", lang: "PHP" },
                { name: "klick-deploy", desc: "Outils de déploiement Klick", lang: "PHP" },
                { name: "klick-pages", desc: "Moteur de pages Klick", lang: "PHP" },
                { name: "livewire-history", desc: "Historique de navigation pour Livewire", lang: "PHP" },
              ].map((r) => (
                <div key={r.name}>
                  <span className="prompt">→ </span>
                  <a
                    href={`https://github.com/perspikapps/${r.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--coral-text-on-dark)" }}
                  >
                    perspikapps/{r.name}
                  </a>
                  <span style={{ opacity: 0.6 }}> — {r.desc} [{r.lang}]</span>
                </div>
              ))}
              <div style={{ marginTop: "0.6rem" }}>
                <span className="prompt">$ </span>
                <a
                  href="https://github.com/perspikapps"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--coral-text-on-dark)" }}
                >
                  open github.com/perspikapps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORAT */}
      <section id="mentorat" className="al-section">
        <div className="al-wrap">
          <div className="al-section-head">
            <Eyebrow>Mentorat</Eyebrow>
            <h2 style={{ marginTop: "0.5rem" }}>
              Trois parcours, avec OpenClassrooms
            </h2>
          </div>
          <div className="al-courses">
            <article className="al-course">
              <span className="al-tag">Parcours certifiant</span>
              <h3>Responsable de Projets SI &amp; Innovation</h3>
              <p>
                Cadrez et pilotez la transformation SI d'une organisation, du
                schéma directeur au déploiement.
              </p>
              <a
                className="al-textlink"
                href="https://openclassrooms.com/fr/paths/914-responsable-de-projets-si-innovation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le parcours →
              </a>
            </article>
            <article className="al-course">
              <span className="al-tag">Parcours certifiant</span>
              <h3>Product Manager</h3>
              <p>
                Devenez la voix du client et l'interface entre les équipes
                design, techniques et business.
              </p>
              <a
                className="al-textlink"
                href="https://openclassrooms.com/fr/paths/2697-product-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le parcours →
              </a>
            </article>
            <article className="al-course">
              <span className="al-tag">Parcours certifiant</span>
              <h3>Chef de Projet No-Code &amp; IA</h3>
              <p>
                Concevez des solutions métier avec le no-code et l'IA
                générative, sans écrire de code.
              </p>
              <a
                className="al-textlink"
                href="https://openclassrooms.com/fr/paths/3576-chef-de-projet-no-code-ia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le parcours →
              </a>
            </article>
          </div>
          <div style={{ marginTop: "var(--sp-4)" }}>
            <Btn
              variant="line"
              href="https://openclassrooms.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur OpenClassrooms
            </Btn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="al-footer">
        <div className="al-wrap">
          <div className="al-footer-top">
            <div>
              <h2>Un projet à plier avec nous&nbsp;?</h2>
              <p style={{ color: "#c9d3de", marginBottom: "var(--sp-3)" }}>
                Écrivez-nous — on répond vite, en français, sans formulaire.
              </p>
              <Btn variant="primary" href="mailto:hello@alaudida.fr">
                hello@alaudida.fr
              </Btn>
            </div>
            <div className="al-footer-address">
              <div>Alaudida, Stratégies × Solutions</div>
              <div>15 Rue des Halles</div>
              <div>75001 Paris</div>
            </div>
          </div>
          <div className="al-footer-bottom">
            <a href="#top" aria-label="Alaudida">
              <BrandLogo height={15} />
            </a>
            <span>
              Alaudida SASU au capital de 1000€ — SIREN 888799194 RCS Paris
            </span>
            <div className="al-footer-links">
              <a href="#activites">Activités</a>
              <a href="#produits">Produits</a>
              <a href="#open-source">Open Source</a>
              <a href="#mentorat">Mentorat</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
