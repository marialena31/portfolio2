import React, { useEffect, useRef, useState } from 'react';

import * as pdfjsLib from 'pdfjs-dist/build/pdf';
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
}

const CustomPdfViewer: React.FC<CustomPdfViewerProps> = ({
  url,
  className,
  mode = 'presentation',
}) => {
  const [error, setError] = useState<string | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any | null>(null);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(0.6);
  const currentCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [allPages, setAllPages] = useState<HTMLCanvasElement[]>([]);
  const minScale = 0.6;
  const maxScale = 2.4;

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setPdfDoc(null);
    setPage(1);
    setNumPages(0);
    setAllPages([]);
    const load = async () => {
      try {
        const doc = await pdfjsLib.getDocument(url).promise;
        if (!cancelled) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          // Si mobile ET mode portfolio, pré-rendre toutes les pages
          if (mode === 'portfolio' && window.innerWidth < 768) {
            const canvases: HTMLCanvasElement[] = [];
            for (let i = 1; i <= doc.numPages; i++) {
              const page = await doc.getPage(i);
              const viewport = page.getViewport({ scale: 0.7 });
              const canvas = document.createElement('canvas');
              canvas.width = viewport.width;
              canvas.height = viewport.height;
              const ctx = canvas.getContext('2d');
              if (ctx) await page.render({ canvasContext: ctx, viewport }).promise;
              canvases.push(canvas);
            }
            setAllPages(canvases);
          }
        }
      } catch {
        setError("Impossible d'afficher le PDF. Vérifiez le chemin ou le format.");
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [url, mode, isMobile]);

  // Rendu PDF.js sur le canvas courant à chaque changement de page ou de zoom (desktop)
  useEffect(() => {
    if (!pdfDoc || !currentCanvasRef.current || (mode === 'portfolio' && isMobile)) return;
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
  }, [pdfDoc, page, scale, mode, isMobile]);

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

  if (mode === 'portfolio' && isMobile) {
    // Affichage mobile : toutes les pages en scroll horizontal natif
    return (
      <div className="w-full overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        {error ? (
          <div className="text-red-600 text-center py-8">{error}</div>
        ) : (
          <div
            className="flex flex-row snap-x snap-mandatory overflow-x-auto w-full h-full"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {allPages.map((canvas, idx) => (
              <div
                key={idx}
                className="shrink-0 w-screen max-w-full snap-center flex flex-col items-center justify-center bg-transparent p-0 m-0"
              >
                {/* On clone le canvas DOM pour le React render */}
                <canvas
                  width={canvas.width}
                  height={canvas.height}
                  ref={node => {
                    if (node && canvas) {
                      const ctx = node.getContext('2d');
                      if (ctx) ctx.drawImage(canvas, 0, 0);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    background: 'transparent',
                    borderRadius: 0,
                    boxShadow: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                />
                <div className="text-center text-2xl font-extrabold text-primary-dark mt-4 mb-8 tracking-wide drop-shadow-sm select-none">
                  Page {idx + 1} / {allPages.length}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop ou autre mode : viewer classique avec contrôles
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
            className={
              mode === 'portfolio'
                ? 'pdf-viewer-container min-h-[800px] h-[800px]'
                : 'pdf-viewer-container min-h-[550px] h-[550px]'
            }
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
                  height: mode === 'portfolio' ? 'auto' : '100%',
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
