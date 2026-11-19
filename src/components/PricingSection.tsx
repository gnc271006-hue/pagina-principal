import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Lock, Sparkles, Download, Clock } from 'lucide-react';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="preco" className="py-20 bg-gradient-to-b from-white via-indigo-50/50 to-slate-100 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" /> Acesso Imediato & Vitalício
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Pronto Para Dormir noites Inteiras em Silêncio?
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Aproveite a condição exclusiva de lançamento com mais de 70% de desconto por tempo limitado.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl border-2 border-indigo-600 shadow-2xl overflow-hidden relative">
          {/* Top Banner Ribbon */}
          <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 text-white py-3 px-6 text-center text-sm font-black tracking-wide uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>PACOTE COMPLETO: GUIA ILUSTRADO + 3 BÔNUS EXCLUSIVOS</span>
          </div>

          <div className="p-6 sm:p-10">
            {/* Price block */}
            <div className="text-center pb-8 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-400 line-through">
                De R$ 97,00 por apenas
              </span>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className="text-2xl font-bold text-slate-700">R$</span>
                <span className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight font-heading">
                  29<span className="text-3xl font-bold text-emerald-600">,90</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Pagamento único • Sem mensalidades • Acesso vitalício para sempre
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Zap className="w-3.5 h-3.5" /> Aprovação Instantânea no PIX
              </div>
            </div>

            {/* Checklist of what's included */}
            <div className="py-8 space-y-3.5">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-wider text-center sm:text-left">
                Tudo o que você vai receber imediatamente:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Guia Ilustrado Completo:</strong> Todos os exercícios orofaríngeos ilustrados.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bônus #1:</strong> Checklist da Minha Rotina Noturna (PDF imprimível).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bônus #2:</strong> Planner de Acompanhamento Diário dos 7 Dias.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bônus #3:</strong> Guia Ilustrado de Massagem Suave no Pescoço.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Formato Universal:</strong> Abra no celular, tablet, computador ou imprima.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Garantia Incondicional:</strong> 7 dias para testar ou seu dinheiro de volta.</span>
                </div>
              </div>
            </div>

            {/* Big CTA Button */}
            <div className="space-y-4">
              <button
                onClick={onOpenCheckout}
                className="w-full bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-lg sm:text-xl py-5 px-8 rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 cursor-pointer group active:scale-98"
              >
                <span>COMPRAR AGORA COM 70% DE DESCONTO</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" /> Compra 100% Segura e Criptografada
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-indigo-600" /> Envio Imediato no E-mail
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantia de 7 Dias
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Days Guarantee Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-800 flex flex-col items-center justify-center shrink-0">
            <span className="text-2xl font-black">7</span>
            <span className="text-[10px] font-extrabold uppercase tracking-tight">DIAS</span>
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-extrabold text-slate-900 text-lg">
              Garantia Blindada de Satisfação Total
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Você tem 7 dias inteiros para abrir o guia, fazer os exercícios e testar os bônus na prática. Se você ou seu cônjuge acharem que o material não valeu cada centavo, nós reembolsaremos 100% do valor pago. Sem questionamentos, sem burocracia. O risco é todo nosso!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
