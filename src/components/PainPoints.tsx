import React from 'react';
import { Volume2, BatteryLow, AlertCircle, HeartCrack, Sparkles } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: Volume2,
      color: 'bg-rose-100 text-rose-700',
      title: 'Ruídos altos que incomodam a casa',
      desc: 'O ronco constante desgasta o relacionamento, faz o parceiro(a) mudar de quarto ou perder noites inteiras de sono profundo.'
    },
    {
      icon: BatteryLow,
      color: 'bg-amber-100 text-amber-700',
      title: 'Acordar exausto mesmo dormindo 8 horas',
      desc: 'O bloqueio parcial do ar impede os estágios restauradores do sono, causando sonolência diurna, perda de foco e irritabilidade.'
    },
    {
      icon: AlertCircle,
      color: 'bg-indigo-100 text-indigo-700',
      title: 'Boca seca e garganta irritada ao despertar',
      desc: 'Respirar pela boca a noite inteira resseca as mucosas, causa mau hálito matinal e sensação constante de inflamação.'
    },
    {
      icon: HeartCrack,
      color: 'bg-purple-100 text-purple-700',
      title: 'Frustração com aparelhos incômodos',
      desc: 'Dilatadores que caem, faixas que machucam o queixo ou sprays caros que não tratam a verdadeira fraqueza muscular da garganta.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Você se identifica com essa situação?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            O ronco não é apenas um barulho. É um sinal de que seus músculos precisam de atenção.
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            A maioria das pessoas tenta mascarar o problema com soluções externas, quando a causa real é a flacidez natural das vias respiratórias superiores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all hover:shadow-lg hover:border-slate-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Solution Transition Banner */}
        <div className="mt-12 bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" /> A Boa Notícia
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Assim como qualquer músculo do corpo, os músculos da via aérea podem ser fortalecidos!
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Pesquisas científicas de fonoaudiologia miofuncional mostram que exercícios específicos direcionados para a língua, palato mole e garganta ajudam a tonificar a via aérea e reduzir o colapso noturno.
            </p>
          </div>
          <a
            href="#exercicios"
            className="shrink-0 bg-white hover:bg-slate-100 text-indigo-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md active:scale-95"
          >
            Ver Como Funciona
          </a>
        </div>
      </div>
    </section>
  );
};
