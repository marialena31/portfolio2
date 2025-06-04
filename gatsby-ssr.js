// Ajoute l'attribut lang="fr" sur <html> pour l'accessibilité et le SEO
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'fr' });
};
