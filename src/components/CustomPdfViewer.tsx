import React from 'react';
import ClientOnly from './ClientOnly';

const PdfViewerClientOnly = React.lazy(() => import('./PdfViewerClientOnly'));

interface CustomPdfViewerProps {
  url: string;
  className?: string;
  mode?: 'portfolio' | 'presentation';
  containerHeight?: string;
}

const CustomPdfViewer: React.FC<CustomPdfViewerProps> = props => (
  <ClientOnly>
    <React.Suspense fallback={null}>
      <PdfViewerClientOnly {...props} />
    </React.Suspense>
  </ClientOnly>
);
export default CustomPdfViewer;
