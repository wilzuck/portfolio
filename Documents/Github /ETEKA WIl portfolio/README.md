# Portfolio — Wilfried ETEKA

Site statique Astro + Tailwind CSS, déployé automatiquement sur o2switch.

## Lancer le site sur ton PC

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:4321

## Mettre à jour tes informations

Tout se modifie dans **un seul fichier** : `src/data/profil.ts`

| Ce que tu veux changer | Où |
|---|---|
| Titre, intro, badge, lien Calendly | `identite` |
| Texte « À propos » | `bio` |
| GitHub, LinkedIn | `reseaux` |
| Expertises | `expertises` |
| Produits (Melimelody, WaMarcket…) | `produits` |
| Expériences | `experiences` (copie un bloc pour en ajouter une) |
| Formation | `formations` (tableau vide = section masquée) |
| CV en PDF | mets le PDF dans `public/`, puis `cvPdf: "/mon-cv.pdf"` |
| Outils | `stack` |

## Changer ta photo

Mets ta photo dans `public/` sous le nom `photo-wilfried.jpg`
(portrait 4:5, environ 800 × 1000 px, moins de 200 Ko).
Sans photo, tes initiales s'affichent.

## Écrire un article

1. Copie `src/content/blog/exemple-article.md` et renomme-le (ex. `ia-en-production.md`).
2. Remplis `titre`, `description`, `date`.
3. Mets `brouillon: false` pour le publier.

L'adresse sera `/blog/ia-en-production`.

## Mise en ligne automatique (o2switch)

À chaque `git push` sur la branche `main`, GitHub construit le site et l'envoie par FTP.

À faire une seule fois, dans GitHub → ton dépôt → **Settings → Secrets and variables → Actions → New repository secret** :

| Secret | Valeur |
|---|---|
| `FTP_SERVER` | le serveur FTP indiqué dans ton cPanel o2switch |
| `FTP_USERNAME` | ton identifiant FTP |
| `FTP_PASSWORD` | ton mot de passe FTP |
| `FTP_DIR` | le dossier du site, ex. `/public_html/` (avec le `/` final) |

Conseil : crée dans cPanel un compte FTP dédié, limité au dossier du site.

## Mise en ligne manuelle (sans GitHub)

```bash
npm run build
```

Puis envoie le **contenu** du dossier `dist/` dans le dossier du site via le Gestionnaire de fichiers de cPanel.

## Changer de nom de domaine

Remplace l'ancienne adresse à 3 endroits :
1. `astro.config.mjs` → `site:`
2. `public/robots.txt` → ligne `Sitemap:`
3. `public/og-image.png` → l'image de partage affiche l'adresse en bas (demande une nouvelle version si besoin)

## Inclus dans le projet

- Page **Mentions légales** (`/mentions-legales`) : renseigne ton e-mail dans `profil.ts` → `identite.email`
- Page **404** personnalisée + fichier `.htaccess` (HTTPS forcé, cache navigateur)
- **Sitemap** généré automatiquement + `robots.txt`
- **Image de partage** LinkedIn / WhatsApp : `public/og-image.png` (1200 × 630)
- **Polices hébergées localement** (aucun appel à Google Fonts)
- Le lien **Articles** n'apparaît dans le menu qu'à partir du premier article publié
