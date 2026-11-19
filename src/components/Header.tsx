import React, { useState, useEffect } from 'react';
import { ShieldCheck, Moon, Sparkles, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 29); // 14 mins 29s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Top Banner with Countdown */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white text-xs md:text-sm font-medium py-2.5 px-4 text-center sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
            ⚡ Oferta Especial
          </span>
          <span>
            De <span className="line-through opacity-70">R$ 97,00</span> por apenas <strong className="text-emerald-300 font-extrabold text-sm md:text-base">R$ 29,90</strong>
          </span>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="inline-flex items-center gap-1 text-amber-200">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            Vagas promocionais expiram em: <strong className="font-mono text-white ml-0.5">{formatTime(timeLeft)}</strong>
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-9 z-40 transition-all">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Moon className="w-5 h-5 text-amber-200 fill-amber-200" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-base md:text-lg tracking-tight block leading-tight font-heading">
                Guia Ilustrado <span className="text-indigo-600">Anti-Ronco</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500 inline" /> Material Educativo Ilustrado
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#como-funciona" className="hover:text-indigo-600 transition-colors">Como Funciona</a>
            <a href="#exercicios" className="hover:text-indigo-600 transition-colors">Exercícios Práticos</a>
            <a href="#galeria" className="hover:text-indigo-600 transition-colors">Material Real</a>
            <a href="#bonus" className="hover:text-indigo-600 transition-colors">Bônus Inclusos</a>
            <a href="#depoimentos" className="hover:text-indigo-600 transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">Dúvidas</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCheckout}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              <span>Garantir por R$ 29,90</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
