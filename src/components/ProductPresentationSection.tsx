import React from 'react';
import { Clock, Layers, Sparkles, ListOrdered, FileText } from 'lucide-react';
import { HandDrawnHighlight } from './HandDrawnHighlight';

export const ProductPresentationSection: React.FC = () => {
  const points = [
    {
      title: '9 Exercícios em Mapas Mentais',
      desc: 'Mapas visuais passo a passo para consultar facilmente durante a prática de cada movimento.',
      icon: Layers
    },
    {
      title: '1 Dica Extra Ilustrada',
      desc: 'Orientação complementar focada em massagem suave e relaxamento da região do pescoço.',
      icon: Sparkles
    },
    {
      title: 'Instruções e Orientações Organizadas',
      desc: 'Didática clara com setas indicativas e linguagem acessível para facilitar o entendimento.',
      icon: ListOrdered
    },
    {
      title: 'PDF Complementar com Informações',
      desc: 'Material de apoio explicando os aspectos do ronco e o funcionamento da via aérea superior.',
      icon: FileText
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight leading-[1.48]">
            <HandDrawnHighlight>Conheça o material Exercícios para Reduzir o Ronco</HandDrawnHighlight>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2B4B70] leading-relaxed">
            Desenvolvido em formato de <strong>mapas mentais ilustrados</strong>, o material é o conteúdo principal da proposta — organizado para que você possa consultar e acompanhar cada movimento com facilidade e segurança.
          </p>
        </div>

        {/* Highlight Card: ~10 minutes per day */}
        <div className="bg-[#DCEBFA]/50 border-2 border-[#DCEBFA] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-12 text-center shadow-xs">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#142B4A] text-white mb-3">
            <Clock className="w-6 h-6 text-[#E9B95A]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#142B4A] tracking-tight">
            “Uma rotina de aproximadamente 10 minutos por dia.”
          </h3>
          <p className="text-sm sm:text-base text-[#2B4B70] mt-2 max-w-xl mx-auto">
            Exercícios práticos pensados para se encaixarem de forma leve antes de deitar ou no momento mais conveniente do seu dia.
          </p>
        </div>

        {/* 4 Feature Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-[#EEF5FC] border border-[#BBD7F5] rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-13 h-13 rounded-2xl bg-white border border-[#BBD7F5] text-[#142B4A] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#142B4A] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-current" />
                </div>

                <div>
                  <h4 className="font-extrabold text-[#142B4A] text-lg mb-1.5 leading-snug">
                    {pt.title}
                  </h4>
                  <p className="text-sm text-[#2B4B70] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet Notice Note (no quotes, no italic, with "Aviso:" label) */}
        <p className="text-xs text-[#334155] leading-relaxed max-w-3xl mx-auto text-center">
          <strong className="font-semibold text-[#142B4A]">Aviso:</strong> Com a prática regular, algumas pessoas relatam perceber melhoras no ronco em poucos dias ou semanas. Os resultados variam de pessoa para pessoa e não há garantia de redução do ronco.
        </p>
      </div>
    </section>
  );
};
