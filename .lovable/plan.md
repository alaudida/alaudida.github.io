## Pages légales

Créer trois routes dédiées avec design cohérent (fond Paper, typographies Poppins/Space Grotesk, transitions penchées entre sections), plus des liens dans le footer.

### Nouvelles routes

- `src/routes/mentions-legales.tsx` → `/mentions-legales`
- `src/routes/confidentialite.tsx` → `/confidentialite`
- `src/routes/cookies.tsx` → `/cookies`

Chaque page :

- Header réutilisé (logo + nav retour accueil)
- `<main>` avec titre, dernière mise à jour, sections en prose
- Footer réutilisé
- `head()` propre : title, description, `og:title`, `og:description`
- Composant `LegalLayout` partagé dans `src/components/LegalLayout.tsx` pour éviter la duplication du chrome (header/footer)

### Contenu — Mentions légales

Sourcé depuis annuaire-entreprises.data.gouv.fr :

- **Éditeur** : ALAUDIDA, SAS au capital de 1 000 €
- **Siège social** : 15 Rue des Halles, 75001 Paris
- **SIREN** : 888 799 194
- **SIRET** : 888 799 194 00012
- **RCS** : Paris (immatriculée au RNE le 10/09/2020)
- **TVA intracommunautaire** : FR96 888 799 194
- **Code APE** : 62.02A — Conseil en systèmes et logiciels informatiques
- **Directeur de la publication** : à confirmer par vous (nom du président de la SAS)
- **Contact** : [hello@alaudida.fr](mailto:hello@alaudida.fr)
- **Hébergeur** : Lovable / Cloudflare Workers (Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA — cloudflare.com)
- **Propriété intellectuelle** : contenus, marque et logo Alaudida protégés ; toute reproduction sans autorisation interdite.

### Contenu — Politique de confidentialité

- Responsable de traitement : ALAUDIDA (mêmes coordonnées)
- Données collectées : uniquement via le formulaire/mail de contact (nom, email, message)
- Finalités : répondre aux demandes de contact commercial et de mentorat
- Base légale : intérêt légitime / consentement
- Durée de conservation : 3 ans après le dernier contact
- Destinataires : équipe Alaudida uniquement, pas de transfert hors UE hors sous-traitants techniques (hébergeur)
- Droits RGPD (accès, rectification, effacement, opposition, portabilité) exercés via [hello@alaudida.fr](mailto:hello@alaudida.fr)
- Droit de réclamation auprès de la CNIL (lien cnil.fr)

### Contenu — Politique cookies

- Le site n'utilise pas de cookies de mesure d'audience, ni de traceurs publicitaires
- Seuls des cookies strictement techniques peuvent être déposés par l'hébergeur pour le bon fonctionnement du site
- Si des outils analytiques sont ajoutés plus tard, un bandeau de consentement sera mis en place
- Instructions pour désactiver les cookies dans les principaux navigateurs

### Footer

Modifier le footer dans `src/routes/index.tsx` (et dans le `LegalLayout`) pour ajouter une ligne de liens discrets :

- Mentions légales · Confidentialité · Cookies
En dessous de la mention copyright existante, style muted, séparés par des puces.

### Sitemap & robots

- Ajouter les 3 nouvelles URLs dans `src/routes/sitemap[.]xml.ts`
- Ajouter les 3 nouvelles URLs dans `public/llms.txt`

### À confirmer avant génération

Un seul point : **le nom du directeur de la publication** = Thomas Gervais.

- Ajouter le popin pour l'acceptation des cookies