import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ChevronDown } from 'lucide-react';
import { scrollToOffer } from '../utils/checkout';

export interface GalleryItemData {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}

const GALLERY_IMAGES: GalleryItemData[] = [
  { src: '/galeria-1.jpg', alt: 'Apostila em uso com xícara e computador', label: 'Material Prático', width: 640, height: 905 },
  { src: '/galeria-2.jpg', alt: 'Mural de acompanhamento e rotina fixado na parede', label: 'Acompanhamento', width: 640, height: 905 },
  { src: '/galeria-3.jpg', alt: 'Exercício 1: Fortaleça sua Língua no palato', label: 'Exercício 1: Língua', width: 640, height: 905 },
  { src: '/galeria-4.jpg', alt: 'Checklist da Minha Rotina Noturna', label: 'Checklist Noturno', width: 640, height: 913 },
  { src: '/galeria-5.jpg', alt: 'Dica Extra: Massagem Suave na Região do Pescoço', label: 'Dica Extra: Massagem', width: 640, height: 857 },
  { src: '/galeria-6.jpg', alt: 'Exercício 6: Exercitar a musculatura das bochechas', label: 'Exercício 6: Bochechas', width: 640, height: 857 },
  { src: '/galeria-7.jpg', alt: 'Exercício 5: Elevar a úvula e sustentar a contração', label: 'Exercício 5: Úvula', width: 640, height: 857 },
  { src: '/galeria-8.jpg', alt: 'Exercício 4: Elevar e abaixar a úvula', label: 'Exercício 4: Palato', width: 640, height: 853 },
];

interface GallerySectionProps {
  onSelectImage: (item: GalleryItemData) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Manual scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Continuous subtle auto-scroll that pauses on hover or touch
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - lastTime;
      lastTime = now;

      if (!isPaused && container) {
        container.scrollLeft += elapsed * 0.04;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#142B4A] via-[#0E2038] to-[#080F1D] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center tracking-tight text-white mb-4">
          Veja um pouco do que você vai encontrar no material
        </h2>
        <p className="text-center text-[#DCEBFA] text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Mapas mentais didáticos, ilustrações anatômicas passo a passo e ferramentas organizadas para tornar a prática simples e agradável.
        </p>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#142B4A]/90 hover:bg-[#142B4A] border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer backdrop-blur-xs"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#142B4A]/90 hover:bg-[#142B4A] border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer backdrop-blur-xs"
            aria-label="Rolar para direita"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-5 overflow-x-auto scrollbar-none py-4 px-2 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
              <div
                key={idx}
                onClick={() => onSelectImage(img)}
                className="shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-xl border border-white/10 cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#DCEBFA]/50 group/card"
              >
                <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#080F1D]/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#142B4A] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5 text-[#2B4B70]" /> Ver Detalhes
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-white text-center">
                  <span className="text-xs font-bold text-[#142B4A] tracking-tight block truncate">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button below gallery */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToOffer}
            className="btn-pill-green text-base sm:text-lg px-9 sm:px-12 py-4.5 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[280px]"
          >
            <span>Quero acessar meu material</span>
            <ChevronDown className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
