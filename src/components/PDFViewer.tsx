import React from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  downloadLabel?: string;
  previewImages?: string[]; // Optionnel : miniatures si PDF lourd
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfUrl,
  downloadLabel = 'Télécharger le portfolio PDF complet',
  previewImages,
}) => {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      {previewImages && previewImages.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {previewImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Aperçu slide ${i + 1}`}
              className="w-40 h-56 object-cover rounded shadow"
            />
          ))}
        </div>
      ) : (
        <iframe
          src={pdfUrl}
          title="Portfolio PDF"
          className="w-full max-w-3xl h-[70vh] rounded shadow border"
          loading="lazy"
        />
      )}
      <a
        href={pdfUrl}
        download
        className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition-colors font-semibold mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
          />
        </svg>
        {downloadLabel}
      </a>
    </div>
  );
};

export default PDFViewer;
