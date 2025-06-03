/* eslint-disable @typescript-eslint/no-require-imports */
// Ce wrapper empêche tout code PDF d'être exécuté côté serveur (Node/Gatsby SSR)
// Utilise toujours ce composant dans les pages Gatsby pour éviter les crashs build
const CustomPdfViewerNoSSR =
  typeof window !== 'undefined' ? require('./CustomPdfViewer').default : () => null;

export default CustomPdfViewerNoSSR;
