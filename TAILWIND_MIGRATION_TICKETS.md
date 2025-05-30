# Migration Tickets : Passage complet à Tailwind CSS

Voici la liste des tickets pour migrer tout le projet Gatsby/React de SCSS vers Tailwind CSS, organisés par priorité.

---

## 1. Initialisation et configuration Tailwind (Priorité 1)

- [x] Installer Tailwind CSS, PostCSS et Autoprefixer (via yarn ou npm)
- [x] Générer les fichiers de config : `tailwind.config.js` et `postcss.config.js`
- [x] Ajouter Tailwind dans le pipeline Gatsby (`gatsby-config.js`) (via gatsby-browser.ts ici)
- [x] Nettoyer le CSS global : supprimer les resets inutiles, ajouter les directives Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`)
- [x] Configurer les couleurs, fonts, breakpoints, radius, etc. dans `tailwind.config.js` (reprendre les tokens SCSS)
- [x] S'assurer que Tailwind fonctionne sur une page de test

## 2. Migration progressive des pages et composants (Priorité 2)

- [x] Identifier toutes les pages et composants principaux (layout, header, footer, home, blog, etc.)
- [x] Pour chaque composant/page :
  - [x] Remplacer les classes SCSS par les classes utilitaires Tailwind (header)
  - [x] Remplacer les classes SCSS par les classes utilitaires Tailwind (footer)
  - [x] Remplacer les classes SCSS par les classes utilitaires Tailwind (navigation)
  - [x] Supprimer l'import du module SCSS associé (header, footer, navigation)
  - [x] Adapter la structure HTML/JSX si besoin pour profiter de Tailwind (header, footer, navigation)
  - [x] Tester le rendu visuel (header, footer, navigation)
- [x] Migrer la page d'accueil (index.tsx)
- [x] Migrer la page blog
- [x] Migrer la page about
- [x] Migrer la page contact
- [x] Migrer la page portfolio
- [x] Migrer la page pourquoi-choisir
- [x] Migrer la page mentions-légales
- [x] Migrer la page politique de confidentialité
- [x] Migrer la page conseils-pro
- [x] Migrer les autres pages une par une (si existant)
- [x] Migrer les composants réutilisables (ContentRenderer, ContactForm, ServiceCard, etc.)

## 3. Nettoyage et suppression des anciens styles (Priorité 3)

- [x] Supprimer tous les fichiers SCSS inutiles (global.scss, variables.scss, mixins.scss, tous les .module.scss)
- [x] Supprimer les dépendances SCSS de package.json (gatsby-plugin-sass, node-sass, sass-loader, etc.)
- [ ] Supprimer les dépendances SCSS de `package.json` (gatsby-plugin-sass, node-sass, sass-loader, etc.)
- [x] Nettoyer le code des imports obsolètes
- [x] S'assurer qu'aucun composant n'utilise encore de SCSS

## 4. Finitions et vérifications (Priorité 4)

---

## 5. Migration fine Tailwind & Design (Priorité 1)

- [ ] Repasser sur tous les composants/pages pour :
  - [ ] Adapter finement les classes Tailwind pour chaque bloc (header, footer, layout, pages clés)
  - [ ] Vérifier et corriger le responsive sur toutes les tailles d'écran
  - [ ] Tester et adapter le dark mode si activé
  - [ ] Vérifier l'accessibilité (contrastes, focus, navigation clavier)
  - [ ] Adapter les animations/transitions avec Tailwind si besoin
  - [ ] Nettoyer les classes inutiles ou dupliquées
  - [ ] Ajouter/adapter la documentation technique (README, conventions Tailwind, tokens)

---

## 6. Tickets de correction post-migration (Priorité 2)

- [ ] Corriger les erreurs de parsing GraphQL dans les fichiers de test (`*.test.tsx`)
  - Déplacer les fichiers de test hors du dossier `src/` OU les renommer temporairement
  - Vérifier qu’aucun test ne contient de requête GraphQL
- [ ] Corriger les erreurs de schéma GraphQL (champs manquants dans `gatsby-config.js` ou plugins)
  - Ajouter les champs `author` et `siteUrl` dans `siteMetadata` de `gatsby-config.js`
  - Vérifier la présence des plugins nécessaires pour les images (`gatsby-plugin-sharp`, etc.)
- [ ] Corriger les erreurs liées aux queries sur des types non existants (`allBlogPost`, `blogPost`, etc.)
  - Vérifier la source de données (Markdown, CMS, etc.)
  - Adapter les queries ou la source selon le schéma réel
- [ ] Nettoyer le build Gatsby pour supprimer les erreurs de cache/fichiers manquants

  - Supprimer les dossiers `.cache` et `public` puis relancer `gatsby clean` et `gatsby develop`

- [ ] Ajouter ou mettre à jour la documentation technique (README, tokens, conventions Tailwind, guide de migration)

- [ ] Vérifier le responsive sur toutes les tailles d'écran
- [ ] Tester le dark mode (si activé)
- [ ] Vérifier l'accessibilité (contrastes, focus, etc.)
- [ ] Vérifier les performances (taille du bundle, purge CSS)
- [ ] Adapter les animations/transitions si besoin avec Tailwind

---

**Astuce** :

- Tu peux migrer page par page ou composant par composant, en gardant SCSS et Tailwind en parallèle temporairement.
- Utilise la commande `yarn build` ou `gatsby develop` à chaque étape pour vérifier le rendu.

---

## Priorisation

1. Initialisation Tailwind (obligatoire)
2. Migration des pages et composants critiques (layout, navigation, home, blog)
3. Migration des composants secondaires
4. Suppression totale du SCSS
5. Finitions (responsive, dark mode, accessibilité)

---

**Tu peux cocher chaque ticket au fur et à mesure.**
