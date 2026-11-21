import React from 'react';
import { Check, Lock, ArrowRight } from 'lucide-react';
import { getCheckoutUrl } from '../utils/checkout';
import { trackInitiateCheckout } from '../utils/pixel';

export const OfferSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const includedItems = [
    'Mapas mentais com 9 exercícios.',
    '1 dica extra.',
    'PDF complementar.',
    'Bônus 1: Guia Rápido: O Que Observar Sobre o Ronco.',
    'Bônus 2: Checklist de Acompanhamento de 7 Dias.',
    'Bônus 3: Checklist da Minha Rotina Noturna.'
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-gradient-to-b from-[#142B4A] via-[#0E2038] to-[#080F1D] text-white relative">
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center tracking-tight text-white mb-4">
          Comece a conhecer e praticar os exercícios para reduzir o ronco
        </h2>
        <p className="text-center text-[#DCEBFA] text-base sm:text-lg max-w-xl mx-auto mb-10 sm:mb-12">
          Acesse imediatamente todo o kit digital e inclua novas práticas conscientes na sua rotina noturna.
        </p>

        {/* Offer Box with intense blue pulsing border */}
        <div className="bg-white text-[#142B4A] rounded-3xl p-6 sm:p-10 shadow-2xl offer-box-glow relative overflow-hidden flex flex-col items-center text-center">
          {/* 1. Imagem do Produto */}
          <div className="w-full max-w-[200px] sm:max-w-[240px] mb-6 flex justify-center">
            <div className="rounded-2xl p-2 bg-slate-50 border border-slate-200/90 shadow-xs overflow-hidden flex items-center justify-center">
              <img
                src="/guia-ronco.jpg"
                alt="Exercícios para Reduzir o Ronco - Kit Digital"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full max-h-[220px] sm:max-h-[240px] h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* 2. Preço */}
          <div className="w-full pb-4 border-b border-slate-100">
            <div className="text-base sm:text-[17px] font-semibold text-[#334155]">
              De: <span className="line-through font-bold text-[#D64545]">R$ 49,50</span>
            </div>
            <div className="text-xs uppercase tracking-wider font-extrabold text-[#2B4B70] mt-1">
              Por:
            </div>
            <div className="my-1.5">
              <span className="text-5xl sm:text-6xl font-black text-[#16804A] tracking-tight font-heading">
                R$ 27<span className="text-3xl sm:text-4xl">,90</span>
              </span>
            </div>
            <div className="text-xs text-[#334155] font-medium">
              Pagamento único • Acesso digital imediato
            </div>
          </div>

          {/* 3. Segurança */}
          <div className="my-4 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#176447] bg-[#176447]/10 px-4 py-2 rounded-full border border-[#176447]/20">
            <Lock className="w-4 h-4 text-[#176447] shrink-0" />
            <span>Compra 100% Segura · 7 dias de garantia</span>
          </div>

          {/* 4. O que a pessoa recebe */}
          <div className="w-full max-w-lg text-left my-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#2B4B70] mb-3.5 text-center sm:text-left">
              O que você recebe no seu acesso:
            </h4>
            <ul className="space-y-2.5">
              {includedItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#142B4A] font-semibold leading-relaxed">
                  <div className="w-4 h-4 rounded-full bg-[#176447] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Botão de compra */}
          <div className="w-full max-w-md mt-4">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              onAuxClick={(e) => {
                if (e.button === 1) trackInitiateCheckout();
              }}
              className="btn-pill-green text-base sm:text-lg px-8 sm:px-10 py-4.5 shadow-xl hover:shadow-2xl w-full text-center"
            >
              <span>Quero garantir meu acesso por R$ 27,90</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
