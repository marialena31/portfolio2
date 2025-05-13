# Guide de Style : Pages à Design Personnalisé (Contact, About)

## 1. Structure dans le layout

- Le composant `Layout` applique un wrapper `.container` à tous les enfants par défaut.
- Pour les pages nécessitant un design personnalisé (Contact, About), **le composant principal (ContactForm, ContentRenderer) gère lui-même son propre bloc centré, fond, padding, etc.**
- On ne doit **pas** ajouter de wrapper supplémentaire dans la page (ex : pas de `<div className="container">` autour du composant principal dans la page).

## 2. Exemple : Contact

- Dans `contact.tsx` :
  ```tsx
  <Layout>
    <SEO ... />
    <ContactForm />
  </Layout>
  ```
- Le composant `ContactForm` :
  - Utilise une `<section className={styles.formSection}>` pour gérer le fond, le centrage, etc.
  - À l’intérieur, une `<div className={styles.formContainer}>` gère la largeur max, le fond blanc, l’ombre, etc.
  - **Aucune classe de layout globale n’est appliquée à la racine du composant ContactForm.**

## 3. Application à About

- Dans `about.tsx` :
  ```tsx
  <Layout>
    <SEO ... />
    <ContentRenderer content={aboutContent} />
  </Layout>
  ```
- Dans `ContentRenderer.tsx`, envelopper le rendu dans une `<section className={aboutStyles.aboutPage}><div className={aboutStyles.aboutContainer}>...</div></section>` qui gère tout le design.
- **Ne pas ajouter de wrapper supplémentaire dans la page.**

## 4. SCSS :

- Chaque composant de page (ContactForm, About) a son propre module SCSS (`contact-form.module.scss`, `about-page.module.scss`) qui importe les variables globales.
- Les styles sont portés par la section racine du composant, pas par le layout global.
