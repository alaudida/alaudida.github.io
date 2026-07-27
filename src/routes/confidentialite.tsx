import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Alaudida" },
      { name: "description", content: "Comment Alaudida traite les données personnelles collectées sur alaudida.fr, conformément au RGPD." },
      { property: "og:title", content: "Politique de confidentialité — Alaudida" },
      { property: "og:description", content: "Politique de confidentialité d'Alaudida (RGPD)." },
      { property: "og:url", content: "https://www.alaudida.fr/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "https://www.alaudida.fr/confidentialite" }],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="27 juillet 2026">
      <p>
        Alaudida s'engage à protéger la vie privée des personnes qui visitent son
        site et qui la contactent. Cette politique décrit les données collectées,
        les finalités de leur traitement et les droits dont vous disposez au
        titre du Règlement général sur la protection des données (RGPD).
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        ALAUDIDA, SAS — 15 Rue des Halles, 75001 Paris — SIREN 888 799 194.
        <br />Contact&nbsp;: <a href="mailto:hello@alaudida.fr">hello@alaudida.fr</a>
      </p>

      <h2>Données collectées</h2>
      <p>
        Le site alaudida.fr ne comporte pas de formulaire d'inscription ni de
        compte utilisateur. Les seules données personnelles traitées sont celles
        que vous nous transmettez volontairement lorsque vous nous écrivez à
        l'adresse <a href="mailto:hello@alaudida.fr">hello@alaudida.fr</a>&nbsp;:
        nom, adresse e-mail, contenu de votre message et toute information que
        vous choisissez d'y joindre.
      </p>

      <h2>Finalités et base légale</h2>
      <ul>
        <li>Répondre à vos demandes de contact commercial, de mentorat ou
          d'information — base légale&nbsp;: intérêt légitime et exécution de
          mesures précontractuelles.</li>
        <li>Assurer le bon fonctionnement technique du site — base légale&nbsp;:
          intérêt légitime.</li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Les échanges par e-mail sont conservés pendant une durée maximale de
        3 ans à compter du dernier contact, puis supprimés ou archivés dans le
        respect des obligations légales applicables.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont accessibles uniquement à l'équipe d'Alaudida et à ses
        sous-traitants techniques strictement nécessaires (hébergeur, service de
        messagerie). Aucune donnée n'est cédée ni louée à des tiers.
      </p>

      <h2>Transferts hors Union européenne</h2>
      <p>
        Certains prestataires techniques (hébergement edge, messagerie) peuvent
        opérer une infrastructure mondiale. Les transferts éventuels sont
        encadrés par les garanties appropriées prévues par le RGPD (clauses
        contractuelles types de la Commission européenne).
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, de
        limitation, d'opposition et à la portabilité de vos données, ainsi que
        du droit de définir des directives relatives à leur sort après votre
        décès. Vous pouvez exercer ces droits à tout moment à l'adresse{" "}
        <a href="mailto:hello@alaudida.fr">hello@alaudida.fr</a>.
      </p>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
        respectés, vous pouvez adresser une réclamation à la CNIL —{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>.
      </p>

      <h2>Sécurité</h2>
      <p>
        Alaudida met en œuvre les mesures techniques et organisationnelles
        appropriées pour protéger vos données contre toute perte, altération ou
        accès non autorisé.
      </p>
    </LegalLayout>
  );
}
