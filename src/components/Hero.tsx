import React from 'react';
import { Lock, ChevronDown } from 'lucide-react';
import { scrollToOffer } from '../utils/checkout';
import { HandDrawnHighlight } from './HandDrawnHighlight';

interface HeroProps {
  onImageClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageClick }) => {
  return (
    <section className="bg-white pt-5 pb-12 md:pt-7 md:pb-16 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#142B4A] max-w-4xl mx-auto tracking-tight leading-[1.42]">
          “Quando o ronco atrapalha suas noites,{' '}
          <HandDrawnHighlight variant="light-blue">
            até o descanso de quem você ama pode ser afetado.
          </HandDrawnHighlight>
          ”
        </h1>

        {/* Subheadline */}
        <p className="mt-3 md:mt-4 text-[15px] sm:text-lg text-[#2B4B70] max-w-2xl mx-auto leading-relaxed">
          Exercícios práticos e orientações simples para incluir na sua rotina noturna e observar seus hábitos com tranquilidade.
        </p>

        {/* Main Product Image */}
        <div className="mt-8 md:mt-10 max-w-3xl mx-auto">
          <div
            onClick={onImageClick}
            className="group relative bg-white rounded-2xl p-2 shadow-xl border border-slate-200/80 cursor-pointer overflow-hidden transition-all hover:shadow-2xl hover:border-[#416A98]"
          >
            <img
              src="/guia-ronco.jpg"
              alt="Guia Ilustrado Exercícios para o Ronco - Material Educativo Digital"
              width={800}
              height={800}
              fetchPriority="high"
              className="w-full h-auto block rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-[#080F1D]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-white/95 text-[#142B4A] text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md backdrop-blur-xs">
                Clique para ampliar imagem
              </span>
            </div>
          </div>
        </div>

        {/* Pill Button */}
        <div className="mt-5 md:mt-6 flex flex-col items-center justify-center space-y-3">
          <button
            onClick={scrollToOffer}
            className="btn-pill-green text-base sm:text-lg px-9 sm:px-12 py-4.5 shadow-md hover:shadow-lg w-full sm:w-auto min-w-[280px]"
          >
            <span>Quero conhecer o material</span>
            <ChevronDown className="w-5 h-5 shrink-0" />
          </button>

          {/* Micro guarantee badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#2B4B70] pt-1">
            <Lock className="w-3.5 h-3.5 text-[#176447]" />
            <span>Compra 100% Segura · 7 dias de garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
