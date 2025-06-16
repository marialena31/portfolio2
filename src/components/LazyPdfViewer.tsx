import React, { useEffect, useState } from 'react';

interface LazyPdfViewerProps {
  url: string;
  className?: string;
}

const isBrowser = typeof window !== 'undefined';

const LazyPdfViewer: React.FC<LazyPdfViewerProps> = ({ url, className }) => {
  const [PdfViewer, setPdfViewer] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (!isBrowser) return;
    let mounted = true;
    import('./CustomPdfViewer').then(mod => {
      if (mounted) setPdfViewer(() => mod.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!isBrowser) return null;
  if (!PdfViewer) {
    return (
      <div className="min-h-[600px] flex items-center justify-center text-gray-400">
        Chargement du PDF…
      </div>
    );
  }
  return <PdfViewer url={url} className={className} />;
};

export default LazyPdfViewer;
