import React from 'react';
import { User, BedDouble, HeartHandshake } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const audienceList = [
    {
      icon: User,
      title: 'Para quem ronca',
      desc: 'Para pessoas que desejam conhecer exercícios e observar melhor seus hábitos relacionados ao ronco.'
    },
    {
      icon: BedDouble,
      title: 'Para quem divide o quarto',
      desc: 'Para quem convive com alguém que ronca e deseja conhecer práticas que podem ser incluídas na rotina.'
    },
    {
      icon: HeartHandshake,
      title: 'Para casais',
      desc: 'Para casais que desejam buscar uma rotina noturna mais organizada e compreender melhor essa situação.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#DCEBFA] border-b border-[#BBD7F5]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight leading-snug text-center mb-10">
          Este material foi pensado para quem...
        </h2>

        <ul className="space-y-4">
          {audienceList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                className="bg-white border border-[#BBD7F5] rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#DCEBFA] text-[#142B4A] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#142B4A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#142B4A] text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#2B4B70] leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
