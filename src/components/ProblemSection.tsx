import React from 'react';
import { Sunrise, Users2, Clock3, Compass } from 'lucide-react';
import { HandDrawnHighlight } from './HandDrawnHighlight';

export const ProblemSection: React.FC = () => {
  const situations = [
    {
      icon: Sunrise,
      title: 'Noites que parecem não descansar',
      text: 'Acordar com a sensação de que a noite não foi tranquila, sentindo cansaço matinal e falta de disposição durante o dia.'
    },
    {
      icon: Users2,
      title: 'Impacto em quem dorme por perto',
      text: 'Perceber que o barulho do ronco incomoda quem divide o mesmo ambiente ou o mesmo quarto, gerando desconforto mútuo.'
    },
    {
      icon: Clock3,
      title: 'Dificuldade com a rotina noturna',
      text: 'Ter dificuldade para manter horários e práticas organizadas antes de dormir, sem um roteiro simples para seguir.'
    },
    {
      icon: Compass,
      title: 'Desejo de compreender os próprios hábitos',
      text: 'Querer entender melhor os fatores do dia a dia relacionados ao próprio ronco e buscar formas naturais de autocuidado.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight leading-[1.48]">
            O ronco pode <HandDrawnHighlight>afetar muito mais</HandDrawnHighlight> do que o silêncio durante a noite
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2B4B70] leading-relaxed">
            Pequenos detalhes na rotina e a forma como cuidamos do corpo antes de deitar têm papel fundamental na qualidade do nosso descanso.
          </p>
        </div>

        {/* 4 Situation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {situations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#DCEBFA]/35 border border-[#DCEBFA] rounded-2xl p-6 sm:p-7 transition-all hover:bg-[#DCEBFA]/55 hover:shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#DCEBFA] text-[#142B4A] flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-6 h-6 text-[#142B4A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#142B4A] text-lg mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2B4B70] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
