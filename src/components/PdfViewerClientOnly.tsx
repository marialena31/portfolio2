import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import 'pdfjs-dist/web/pdf_viewer.css';

interface CustomPdfViewerProps {
  url: string;
  className?: string;
  mode?: 'portfolio' | 'presentation';
  containerHeight?: string;
}

const PdfViewerClientOnly: React.FC<CustomPdfViewerProps> = ({
  url,
  className,
  mode = 'presentation',
  containerHeight,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(mode === 'portfolio' ? 1 : 0.7);
  const currentCanvasRef = useRef<HTMLCanvasElement>(null);
  const minScale = 0.6;
  const maxScale = 2.4;

  useEffect(() => {
    if (!document.getElementById('fade-in-pdf-style')) {
      const style = document.createElement('style');
      style.id = 'fade-in-pdf-style';
      style.innerHTML = `
        .fade-in-pdf {
          opacity: 0;
          animation: fadeInPdf 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeInPdf {
          to { opacity: 1; }
        }`;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  }, []);

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
      } catch {
        setError("Impossible d'afficher le PDF. Vérifiez le chemin ou le format.");
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [url]);

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

  const [fadeKey, setFadeKey] = useState(0);
  useEffect(() => {
    setFadeKey(k => k + 1);
  }, [page, scale]);

  return (
    <div
      className={`w-full max-w-[64rem] mx-auto bg-gray-100 rounded-2xl shadow-xl p-4 ${mode === 'portfolio' ? 'sm:p-2' : ''} ${className ?? 'min-h-[500px]'}`}
      style={{ transition: 'background 0.3s', height: containerHeight }}
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
            <button
              className="px-2 py-1 rounded bg-gray-200 ml-6 text-gray-700 hover:bg-primary hover:text-white transition"
              onClick={zoomOut}
              aria-label="Zoom out"
            >
              -
            </button>
            <span className="text-base font-semibold text-gray-700">
              {Math.round(scale * 100)}%
            </span>
            <button
              className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition"
              onClick={zoomIn}
              aria-label="Zoom in"
            >
              +
            </button>
          </div>
          {mode === 'portfolio' && (
            <div className="block sm:hidden text-center text-xs text-gray-500 mb-2">
              Faites défiler horizontalement pour voir tout le document.
            </div>
          )}
          <div
            className={`${mode === 'portfolio' ? 'overflow-x-auto w-full' : 'flex justify-center'}`}
            style={mode === 'portfolio' ? { WebkitOverflowScrolling: 'touch' } : {}}
          >
            <canvas
              ref={currentCanvasRef}
              key={fadeKey}
              className={`fade-in-pdf bg-white rounded shadow ${mode === 'portfolio' ? 'w-[700px] max-w-none sm:w-full' : ''}`}
              style={
                mode === 'portfolio'
                  ? { minWidth: 600, maxWidth: '100%', height: 'auto', minHeight: 300 }
                  : { maxWidth: '100%', height: 'auto', minHeight: 300 }
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PdfViewerClientOnly;
