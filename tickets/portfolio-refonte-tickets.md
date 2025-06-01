# Tickets de refonte — Portfolio & Études de cas

## Priorité 1 — Structure et données

- [x] **Créer `src/data/caseStudies.ts`**
  - Interface `CaseStudy` complète
  - Ajouter 2-3 exemples d’études de cas
- [x] **Créer le template de page individuelle `case-study.tsx`**
  - Structure : Enjeux, Rôle, Actions, Résultat, Capture, Témoignage
- [x] **Mettre à jour `gatsby-node.js`**
  - Générer `/portfolio/[slug]` pour chaque étude de cas

## Priorité 2 — Composants principaux

- [x] **Créer le composant `Tabs`**
  - 2 onglets : Slides & preuves / Études de cas détaillées
- [x] **Créer le composant `PDFViewer`**
  - Affichage PDF (ou iframe)
  - Bouton téléchargement
- [x] **Créer le composant `CaseStudyCard`**
  - Affichage : titre, image, résumé, tags, bouton "Voir l’étude de cas"

## Priorité 3 — Page Portfolio

- [x] **Refondre `src/pages/portfolio.tsx`**
  - Titre : Portfolio & Études de cas
  - Onglet 1 : intro + PDFViewer
  - Onglet 2 : grille de `CaseStudyCard` (load more si >6)

## Priorité 4 — Responsive & UX

- [ ] **Rendre tous les composants responsive**
- [ ] **Ajouter "load more" si >6 études de cas**
- [ ] **Uniformiser le style avec le reste du site**

## Priorité 5 — Bonus & SEO

- [ ] **Ajouter `gatsby-plugin-feed` pour flux RSS**
- [ ] **Ajouter `gatsby-remark-reading-time`**
- [ ] **Optimiser SEO avec `gatsby-plugin-react-helmet` et frontmatter description**

---

## Suivi d’avancement

- [ ] Priorité 1 — Structure et données
- [ ] Priorité 2 — Composants principaux
- [ ] Priorité 3 — Page Portfolio
- [ ] Priorité 4 — Responsive & UX
- [ ] Priorité 5 — Bonus & SEO
