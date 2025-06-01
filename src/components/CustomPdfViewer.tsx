import React, { useEffect, useRef, useState } from 'react';

import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer';
import 'pdfjs-dist/web/pdf_viewer.css';

// Fade-in animation for PDF canvas
const style = document.createElement('style');
style.innerHTML = `
.fade-in-pdf {
  opacity: 0;
  animation: fadeInPdf 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes fadeInPdf {
  to { opacity: 1; }
}`;
document.head.appendChild(style);

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface CustomPdfViewerProps {
  url: string;
  className?: string;
  /**
   * Mode d’affichage :
   * - "portfolio" : grand viewer pour le portfolio (800px)
   * - "presentation" (défaut) : viewer plus petit (550px)
   */
  mode?: 'portfolio' | 'presentation';
  /**
   * Hauteur personnalisée du container PDF (ex: '800px', '550px', etc.)
   */
  containerHeight?: string;
}

const CustomPdfViewer: React.FC<CustomPdfViewerProps> = ({
  url,
  className,
  mode = 'presentation',
  containerHeight,
}) => {
  // Définit le zoom par défaut à 70%
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any | null>(null);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  // Pour éviter le flou, on utilise une valeur de scale proche de 1 (1 = 100% natif)
  const [scale, setScale] = useState(mode === 'portfolio' ? 1 : 0.7);
  const currentCanvasRef = useRef<HTMLCanvasElement>(null);
  const minScale = 0.6;
  const maxScale = 2.4;

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setPdfDoc(null);
    setPage(1);
    setNumPages(0);
    const load = async () => {
      try {
        const doc = await pdfjsLib.getDocument(url).promise;
        if (!cancelled) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
        }
      } catch (err) {
        setError("Impossible d'afficher le PDF. Vérifiez le chemin ou le format.");
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [url]);

  // Rendu PDF.js sur le canvas courant à chaque changement de page ou de zoom
  useEffect(() => {
    if (!pdfDoc || !currentCanvasRef.current) return;
    (async () => {
      try {
        const pdfPage = await pdfDoc.getPage(page);
        const viewport = pdfPage.getViewport({ scale });
        const canvas = currentCanvasRef.current;
        if (!canvas) return;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        if (ctx) await pdfPage.render({ canvasContext: ctx, viewport }).promise;
      } catch {
        setError("Erreur lors de l'affichage de la page PDF.");
      }
    })();
  }, [pdfDoc, page, scale]);

  const goToPrevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const goToNextPage = () => {
    if (page < numPages) setPage(page + 1);
  };
  const zoomOut = () => setScale(s => Math.max(minScale, Math.round((s - 0.2) * 100) / 100));
  const zoomIn = () => setScale(s => Math.min(maxScale, Math.round((s + 0.2) * 100) / 100));

  // Animation fade-in à chaque changement de page
  const [fadeKey, setFadeKey] = useState(0);
  useEffect(() => {
    setFadeKey(k => k + 1);
  }, [page, scale]);

  return (
    <div
      className={`w-full max-w-[64rem] mx-auto bg-gray-100 rounded-2xl shadow-xl p-4 ${className ?? 'min-h-[500px]'}`}
      style={{ transition: 'background 0.3s' }}
    >
      {error ? (
        <div className="text-red-600 text-center py-8">{error}</div>
      ) : (
        <>
          <div className="flex justify-center items-center gap-4 mb-4">
            <button
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition disabled:opacity-50"
              onClick={goToPrevPage}
              disabled={page <= 1}
              aria-label="Page précédente"
            >
              ◀
            </button>
            <span className="text-base font-semibold text-gray-700">
              Page {page} / {numPages || '?'}
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition disabled:opacity-50"
              onClick={goToNextPage}
              disabled={page >= numPages}
              aria-label="Page suivante"
            >
              ▶
            </button>
            <span className="mx-2 border-l border-gray-300 h-6" />
            <button
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition disabled:opacity-50"
              onClick={zoomOut}
              disabled={scale <= minScale}
              aria-label="Zoom arrière"
            >
              -
            </button>
            <span className="text-base font-semibold text-gray-700">
              {Math.round(scale * 100)}%
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition disabled:opacity-50"
              onClick={zoomIn}
              disabled={scale >= maxScale}
              aria-label="Zoom avant"
            >
              +
            </button>
          </div>
          <div
            className={`pdf-viewer-container ${
              containerHeight
                ? `min-h-[${containerHeight}] h-[${containerHeight}]`
                : mode === 'portfolio'
                  ? 'min-h-[800px] h-[800px]'
                  : 'min-h-[550px] h-[550px]'
            }`}
          >
            <div
              className={
                mode === 'portfolio'
                  ? 'relative w-4/5 h-auto overflow-visible bg-transparent mx-auto'
                  : 'relative w-full h-auto overflow-visible bg-transparent'
              }
            >
              <canvas
                key={fadeKey}
                ref={currentCanvasRef}
                className="fade-in-pdf"
                style={{
                  width: '100%',
                  height: '100%', // Toujours 100% pour éviter le flou

                  display: 'block',
                  margin: '0 auto',
                  background: 'white',
                  borderRadius: 16,
                  boxShadow: '0 4px 24px 0 rgba(80,80,120,0.18)',
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomPdfViewer;
