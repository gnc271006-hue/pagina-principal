import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getCheckoutUrl } from '../utils/checkout';
import { trackInitiateCheckout } from '../utils/pixel';

export const FinalCtaSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  return (
    <section className="py-20 md:py-28 bg-[#DCEBFA]/40 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight max-w-2xl mx-auto leading-tight">
          Dê o primeiro passo para conhecer novas práticas para sua rotina noturna
        </h2>

        {/* Text */}
        <p className="mt-5 text-base sm:text-lg text-[#2B4B70] max-w-2xl mx-auto leading-relaxed">
          Garanta agora seu acesso imediato aos mapas mentais com 9 exercícios e 1 dica extra, ao PDF complementar sobre o ronco e aos 3 bônus exclusivos.
        </p>

        {/* Green Pill Button (without security notice below) */}
        <div className="mt-8 flex justify-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            onAuxClick={(e) => {
              if (e.button === 1) trackInitiateCheckout();
            }}
            className="btn-pill-green text-base sm:text-lg px-9 sm:px-12 py-4.5 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[280px]"
          >
            <span>Quero receber meu kit digital</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
