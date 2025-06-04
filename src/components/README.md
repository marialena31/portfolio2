# Components Directory

**Note : Migration en cours vers une structure “1 composant = 1 dossier” avec README.md associé. Merci de déplacer les composants complexes dans leur propre dossier lors de toute modification ou création.**

This directory contains all the React components used in the portfolio website.

## Structure

- `home/` - Components specific to the home page (Hero, Services, Needs, etc.)
- `layout.tsx` - Main layout wrapper component
- `header.tsx` & `footer.tsx` - Site-wide header and footer components
- `navigation.tsx` - Main navigation component
- `seo.tsx` - SEO component for meta tags
- `icons.tsx` - Reusable SVG icons

## Storybook & Documentation

La plupart des composants principaux disposent d'un fichier `.stories.tsx` pour Storybook, mais certains composants secondaires n'en ont pas encore. Idem pour la documentation : seuls quelques composants ont un README dédié.

| Composant              | Storybook   | README   | Migration dossier |
| ---------------------- | ----------- | -------- | ----------------- |
| ---------------------- | ----------- | -------- |
| footer                 | Oui         | Non      | Non               |
| header                 | Oui         | Non      | Non               |
| home/hero              | Oui         | Non      | Non               |
| home/services          | Oui         | Non      | Non               |
| home/needs             | Oui         | Non      | Non               |
| home/brands            | Oui         | Non      | Non               |
| home/call-to-action    | Oui         | Non      | Non               |
| icons                  | Oui         | Non      | Non               |
| layout                 | Oui         | Non      | Non               |
| navigation             | Oui         | Non      | Non               |
| seo                    | Oui         | Non      | Non               |
| ContactForm            | Non         | Oui      | À migrer          |
| ServiceCard            | Non         | Oui      | À migrer          |
| ProjectCard            | Non         | Non      | Non               |
| ProjectForm            | Non         | Non      | Non               |
| CustomPdfViewer        | Non         | Non      | Non               |
| ContentRenderer        | Non         | Non      | Non               |
| ...                    | ...         | ...      | ...               |

Pour contribuer, penser à ajouter une story et/ou un README pour chaque nouveau composant.

Run `npm run storybook` pour visualiser la bibliothèque de composants.
