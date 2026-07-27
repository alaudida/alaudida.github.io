import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Alaudida" },
      { name: "description", content: "Mentions légales du site alaudida.fr — éditeur, hébergeur et propriété intellectuelle." },
      { property: "og:title", content: "Mentions légales — Alaudida" },
      { property: "og:description", content: "Mentions légales du site alaudida.fr." },
      { property: "og:url", content: "https://www.alaudida.fr/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "https://www.alaudida.fr/mentions-legales" }],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="27 juillet 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>alaudida.fr</strong> est édité par&nbsp;:
      </p>
      <ul>
        <li><strong>ALAUDIDA</strong>, SAS (société par actions simplifiée)</li>
        <li>Capital social&nbsp;: 1 000 €</li>
        <li>Siège social&nbsp;: 15 Rue des Halles, 75001 Paris, France</li>
        <li>SIREN&nbsp;: 888 799 194</li>
        <li>SIRET (siège)&nbsp;: 888 799 194 00012</li>
        <li>RCS&nbsp;: Paris — immatriculée au RNE le 10/09/2020</li>
        <li>N° TVA intracommunautaire&nbsp;: FR96 888 799 194</li>
        <li>Code APE&nbsp;: 62.02A — Conseil en systèmes et logiciels informatiques</li>
        <li>Directeur de la publication&nbsp;: Thomas Gervais</li>
        <li>Contact&nbsp;: <a href="mailto:hello@alaudida.fr">hello@alaudida.fr</a></li>
      </ul>

      <h2>Hébergeur</h2>
      <p>
        Le site est hébergé sur l'infrastructure edge de <strong>Cloudflare, Inc.</strong>
        <br />101 Townsend Street, San Francisco, CA 94107, États-Unis
        <br /><a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, illustrations, logo,
        marque « Alaudida », charte graphique, code source spécifique) est protégé
        par le droit d'auteur et le droit des marques. Toute reproduction,
        représentation ou exploitation, totale ou partielle, sans l'autorisation
        écrite préalable d'Alaudida est interdite et constituerait une contrefaçon
        sanctionnée par les articles L.335-2 et suivants du Code de la propriété
        intellectuelle.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Alaudida s'efforce d'assurer l'exactitude et la mise à jour des
        informations diffusées sur ce site, sans garantir leur complétude ou leur
        absence d'erreur. L'utilisateur reconnaît utiliser ces informations sous
        sa responsabilité exclusive.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. Tout
        litige relatif à leur interprétation ou à leur exécution relèvera de la
        compétence exclusive des tribunaux de Paris.
      </p>
    </LegalLayout>
  );
}
