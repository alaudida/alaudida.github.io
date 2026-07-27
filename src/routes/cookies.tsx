import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Politique cookies — Alaudida" },
      { name: "description", content: "Utilisation des cookies sur alaudida.fr : cookies techniques et mesure d'audience Google Analytics soumise à consentement." },
      { property: "og:title", content: "Politique cookies — Alaudida" },
      { property: "og:description", content: "Politique de cookies d'Alaudida." },
      { property: "og:url", content: "https://www.alaudida.fr/cookies" },
    ],
    links: [{ rel: "canonical", href: "https://www.alaudida.fr/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalLayout title="Politique cookies" updated="27 juillet 2026">
      <h2>En résumé</h2>
      <p>
        Le site <strong>alaudida.fr</strong> utilise des cookies strictement
        nécessaires au bon fonctionnement du site, ainsi que Google Analytics
        pour la mesure d'audience, uniquement si vous y consentez. Aucun
        traceur publicitaire ni cookie tiers à visée marketing n'est déposé.
      </p>

      <h2>Cookies utilisés</h2>
      <ul>
        <li>
          <strong>Cookies techniques</strong> — nécessaires au fonctionnement
          du site (préférences d'affichage, sécurité, mémorisation du choix de
          consentement). Ces cookies sont exemptés de consentement au titre de
          l'article 82 de la loi Informatique et Libertés.
        </li>
        <li>
          <strong>Google Analytics</strong> — mesure d'audience soumise à
          consentement. Il permet de comprendre comment le site est utilisé
          (pages visitées, temps passé, interactions). Les données sont
          traitées par Google LLC. L'adresse IP est anonymisée et aucune donnée
          n'est recoupée avec d'autres services Google à des fins publicitaires.
        </li>
      </ul>

      <h2>Comment gérer votre consentement</h2>
      <p>
        Lors de votre première visite, un bandeau vous permet d'accepter ou de
        refuser la mesure d'audience Google Analytics. Vous pouvez modifier
        votre choix à tout moment en supprimant la clé{" "}
        <code>alaudida-cookie-consent</code> de votre navigateur, ou en nous
        contactant à{" "}
        <a href="mailto:hello@alaudida.fr">hello@alaudida.fr</a>.
      </p>

      <h2>Analytique et publicité</h2>
      <p>
        Nous n'utilisons aucun outil de mesure d'audience autre que Google
        Analytics, et aucun service publicitaire. Si nous décidions d'en ajouter
        à l'avenir, un nouveau recueil de consentement sera mis en place avant
        tout dépôt.
      </p>

      <h2>En savoir plus sur Google Analytics</h2>
      <p>
        Consultez la{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          politique de confidentialité de Google
        </a>{" "}
        et la{" "}
        <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">
          documentation Google Analytics sur la protection des données
        </a>.
      </p>

      <h2>Gérer les cookies dans votre navigateur</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour refuser ou
        supprimer les cookies&nbsp;:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>
        </li>
        <li>
          <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
        </li>
        <li>
          <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a>
        </li>
        <li>
          <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
        </li>
      </ul>

      <h2>Contact</h2>
      <p>
        Pour toute question relative à cette politique&nbsp;:{" "}
        <a href="mailto:hello@alaudida.fr">hello@alaudida.fr</a>.
      </p>
    </LegalLayout>
  );
}
