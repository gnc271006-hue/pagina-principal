import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Guarantee Badge */}
        <div className="w-20 h-20 rounded-2xl bg-[#DCEBFA] text-[#142B4A] flex flex-col items-center justify-center mx-auto mb-6 shadow-xs border border-[#416A98]/20">
          <ShieldCheck className="w-8 h-8 text-[#176447]" />
          <span className="text-[11px] font-black uppercase tracking-wider text-[#142B4A] mt-0.5">
            7 Dias
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] tracking-tight mb-4">
          Você tem 7 dias de garantia
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#2B4B70] leading-relaxed max-w-2xl mx-auto">
          Você pode acessar o material e conhecer o conteúdo com tranquilidade. Se dentro do prazo de 7 dias você decidir que o material não é adequado para você, poderá solicitar o reembolso conforme as condições da garantia da Hotmart.
        </p>
      </div>
    </section>
  );
};
