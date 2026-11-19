import React from 'react';
import { Activity, ShieldCheck, Dumbbell, Stethoscope, ChevronRight } from 'lucide-react';

interface ScienceSectionProps {
  onOpenCheckout: () => void;
}

export const ScienceSection: React.FC<ScienceSectionProps> = ({ onOpenCheckout }) => {
  const muscleGroups = [
    {
      name: 'Língua (Genioglosso e Intrínsecos)',
      role: 'Impede o recuo da base da língua',
      effect: 'Ao dormir, a língua perde sustentação e desliza para trás, bloqueando a passagem do ar. O treino tonifica a língua para que ela permaneça acoplada ao palato durante a respiração.',
      badge: 'Exercício 1 do Guia'
    },
    {
      name: 'Palato Mole & Úvula ("Campainha")',
      role: 'Elimina a vibração excessiva de tecidos',
      effect: 'O som estridente do ronco vem principalmente do flutter (vibração em bandeira) do palato mole frouxo. Fortalecer essa área reduz o espaço para vibração ruidosa.',
      badge: 'Exercícios 4 e 5 do Guia'
    },
    {
      name: 'Bochechas & Selamento Bucal',
      role: 'Estabiliza a mastigação e vedamento labial',
      effect: 'Dormir de boca aberta piora dramaticamente o ronco. O fortalecimento bucinador educa o fechamento bucal fisiológico e a respiração prioritariamente nasal.',
      badge: 'Exercício 6 do Guia'
    },
    {
      name: 'Estruturas Cervicais & Pescoço',
      role: 'Relaxamento muscular e alívio de tensões',
      effect: 'O estresse acumulado na região do pescoço comprime vias aéreas. Manobras suaves de massagem ajudam na circulação e relaxamento pré-sono.',
      badge: 'Dica Extra / Bônus 3'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            A Anatomia do Ronco Explicada
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Como a Ginástica Orofaríngea Fortalece Suas Vias Aéreas
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Você não precisa de aparelhos incômodos nem de substâncias químicas para recuperar o tônus muscular que seu corpo perdeu com o tempo ou com o cansaço.
          </p>
        </div>

        {/* 4 Muscle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {muscleGroups.map((group, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {group.badge}
                </span>
                <Dumbbell className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {group.name}
              </h3>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">
                {group.role}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {group.effect}
              </p>
            </div>
          ))}
        </div>

        {/* Clinical Note Highlight */}
        <div className="mt-10 bg-amber-50 border border-amber-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-amber-950 text-base">
              Material 100% Didático, Seguro e Ético
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              O Guia Ilustrado foi planejado como um material educativo para auxiliar no treino miofuncional diário. Ele apresenta mapas anatômicos visuais para você saber exatamente a posição da língua e do palato, sem forçar e sem sentir dores.
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer active:scale-95 flex items-center gap-1.5"
          >
            <span>Ver o Guia Completo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
