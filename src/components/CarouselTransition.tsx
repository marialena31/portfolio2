import React, { useEffect, useRef, useState } from 'react';

interface CarouselTransitionProps {
  currentCanvasRef: React.RefObject<HTMLCanvasElement>;
  nextCanvasRef: React.RefObject<HTMLCanvasElement>;
  direction: 'next' | 'prev';
  pdfDoc: any;
  pendingPage: number;
  scale: number;
  onAnimationEnd?: () => void;
}

const CarouselTransition: React.FC<CarouselTransitionProps> = ({
  currentCanvasRef,
  nextCanvasRef,
  direction,
  pdfDoc,
  pendingPage,
  scale,
  onAnimationEnd,
}) => {
  // Détecte le montage du canvas animé
  const [canvasReady, setCanvasReady] = React.useState(false);
  React.useEffect(() => {
    if (nextCanvasRef.current) setCanvasReady(true);
  }, [nextCanvasRef.current]);

  // Rendu PDF dans le canvas animé (nextCanvasRef) dès qu'il est monté
  React.useEffect(() => {
    if (!pdfDoc || !nextCanvasRef.current || typeof pendingPage !== 'number' || pendingPage <= 0)
      return;
    (async () => {
      try {
        const pdfPage = await pdfDoc.getPage(pendingPage);
        const viewport = pdfPage.getViewport({ scale });
        const canvas = nextCanvasRef.current;
        if (!canvas) return;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        if (ctx) await pdfPage.render({ canvasContext: ctx, viewport }).promise;
      } catch (err) {
        // Optionnel : log pour debug
        // console.error('Erreur rendu PDF transition:', err);
      }
    })();
  }, [pdfDoc, pendingPage, scale, canvasReady]);

  const [animating, setAnimating] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Déclenche l'animation après le premier rendu
    const raf = requestAnimationFrame(() => setAnimating(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // CSS dynamique pour la translation
  // Pour 'next' : slide courante à 0%, slide suivante à 100% → translateX(0%) → translateX(-100%)
  // Pour 'prev' : slide précédente à -100%, slide courante à 0% → translateX(-100%) → translateX(0%)
  // Correction stricte :
  // Pour 'next' : [courante, suivante], départ 0%, anim -100%
  // Pour 'prev' : [précédente, courante], départ -100%, anim 0%
  console.log('[CarouselTransition] direction:', direction, {
    currentCanvas: currentCanvasRef.current,
    nextCanvas: nextCanvasRef.current,
  });
  // Toujours [currentCanvas, nextCanvas]
  const slides = [currentCanvasRef.current, nextCanvasRef.current];

  // Slide entrante :
  // Pour 'next' : part de +100% -> 0%
  // Pour 'prev' : part de -100% -> 0%
  const startX = direction === 'next' ? 100 : -100;
  const endX = 0;
  const [translate, setTranslate] = useState(startX);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setTranslate(endX));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const node = groupRef.current;
    if (!node || !onAnimationEnd) return;
    const handler = (e: TransitionEvent) => {
      if (e.propertyName === 'transform') {
        onAnimationEnd();
      }
    };
    node.addEventListener('transitionend', handler);
    return () => node.removeEventListener('transitionend', handler);
  }, [onAnimationEnd]);

  // Fondu/ombre sur la slide entrante
  const getSlideStyle = (isNext: boolean) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isNext ? '0 4px 24px 0 rgba(80,80,120,0.18)' : undefined,
    opacity: animating && isNext ? 1 : 0.8,
    transition: 'box-shadow 0.3s, opacity 0.3s',
  });

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      {/* Canvas sortant (fixe, dessous) */}
      <canvas
        ref={currentCanvasRef}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          borderRadius: 16,
          boxShadow: '0 4px 24px 0 rgba(80,80,120,0.18)',
          background: 'white',
        }}
      />
      {/* Canvas entrant (animé, dessus) */}
      <canvas
        ref={nextCanvasRef}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
          borderRadius: 16,
          boxShadow: '0 4px 24px 0 rgba(80,80,120,0.18)',
          background: 'white',
          transform: `translateX(${translate}%)`,
          transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)',
          opacity: 1,
        }}
        onTransitionEnd={onAnimationEnd}
      />
    </div>
  );
};

export default CarouselTransition;
