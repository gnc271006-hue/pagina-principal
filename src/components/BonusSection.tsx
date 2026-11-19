import React from 'react';
import { Eye, CalendarCheck, CheckSquare, Sparkles, Star } from 'lucide-react';
import { HandDrawnHighlight } from './HandDrawnHighlight';

export const BonusSection: React.FC = () => {
  const bonuses = [
    {
      tag: 'BÔNUS 1',
      title: 'Guia Rápido: O Que Observar Sobre o Ronco',
      desc: 'Um guia prático para ajudar a observar as características do ronco e registrar informações importantes sobre o que acontece durante a noite.',
      originalPrice: 'De R$ 23,50',
      icon: Eye
    },
    {
      tag: 'BÔNUS 2',
      title: 'Checklist de Acompanhamento de 7 Dias',
      desc: 'Uma ferramenta simples e direta para registrar suas observações e acompanhar a prática dos exercícios ao longo de uma semana.',
      originalPrice: 'De R$ 17,00',
      icon: CalendarCheck
    },
    {
      tag: 'BÔNUS 3',
      title: 'Checklist da Minha Rotina Noturna',
      desc: 'Um checklist estruturado para observar hábitos, ambiente e aspectos da rotina antes de dormir, promovendo noites mais tranquilas.',
      originalPrice: 'De R$ 15,90',
      icon: CheckSquare
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#DCEBFA]/30 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#142B4A] bg-[#DCEBFA] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E9B95A]" /> Materiais Complementares Inclusos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight leading-[1.48]">
            <HandDrawnHighlight>E você ainda recebe 3 materiais extras</HandDrawnHighlight>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2B4B70]">
            Ferramentas adicionais pensadas para enriquecer sua experiência e auxiliar no acompanhamento dos seus hábitos.
          </p>
        </div>

        {/* 3 Graphic Cards created directly on page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {bonuses.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Enhanced Bonus Header & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    {/* High-contrast Eye-catching Blue Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#142B4A] to-[#1E3A5F] text-[#DCEBFA] px-3.5 py-1.5 rounded-xl shadow-xs border border-[#416A98]/40">
                      <Star className="w-3 h-3 text-[#E9B95A] fill-[#E9B95A]" />
                      <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white">
                        {item.tag}
                      </span>
                    </div>

                    {/* Icon container */}
                    <div className="w-11 h-11 rounded-xl bg-[#DCEBFA] text-[#142B4A] flex items-center justify-center group-hover:bg-[#142B4A] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 text-current" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-[#142B4A] text-lg sm:text-xl mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#2B4B70] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subfooter */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-[11px] sm:text-xs font-bold">
                  <span className="text-[#2B4B70] whitespace-nowrap">Formato Digital (PDF)</span>
                  <div className="inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                    <span className="text-[11px] font-semibold text-[#B91C1C] line-through">
                      {item.originalPrice}
                    </span>
                    <span className="bg-[#176447] text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-xs">
                      GRÁTIS
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
