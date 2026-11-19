import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. O que está incluído na compra?',
      a: 'Você recebe os mapas mentais com 9 exercícios e 1 dica extra, um PDF complementar e três bônus digitais.'
    },
    {
      q: '2. O material é físico ou digital?',
      a: 'É totalmente digital. Você recebe os arquivos para consultar em seus dispositivos e também pode imprimi-los.'
    },
    {
      q: '3. Preciso ter experiência para praticar os exercícios?',
      a: 'Não é necessário conhecimento prévio. As instruções estão organizadas nos mapas mentais para facilitar a consulta.'
    },
    {
      q: '4. Quanto tempo preciso dedicar por dia?',
      a: 'A proposta é reservar aproximadamente 10 minutos por dia para incluir os exercícios na rotina.'
    },
    {
      q: '5. Como funciona a garantia?',
      a: 'A compra conta com garantia de 7 dias, conforme as condições da Hotmart. Se desejar solicitar o reembolso dentro desse prazo, poderá utilizar os canais disponibilizados pela plataforma.'
    },
    {
      q: '6. Como faço para acessar o material?',
      a: 'Após a confirmação do pagamento, as instruções de acesso serão encaminhadas conforme o processo de entrega da Hotmart.'
    },
    {
      q: '7. E se eu não receber o e-mail?',
      a: 'Verifique a caixa de spam, lixo eletrônico e promoções. Se ainda não encontrar, consulte o suporte da Hotmart.'
    },
    {
      q: '8. A compra é segura?',
      a: 'O pagamento é realizado pelo ambiente de checkout da Hotmart, que processa a transação.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-[#2B4B70] text-base">
            Esclareça as dúvidas mais comuns sobre o conteúdo, formato e acesso ao material.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:border-[#416A98]/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-[#142B4A] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2B4B70] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#142B4A]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#2B4B70] leading-relaxed border-t border-slate-100 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
