import React from 'react';
import { Moon, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080F1D] text-slate-300 py-12 text-xs">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Medical disclaimer */}
        <div className="bg-[#142B4A]/50 border border-white/10 rounded-2xl p-6 text-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-[#E9B95A] font-bold text-xs uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Aviso Legal e Educativo</span>
          </div>
          <p className="leading-relaxed text-[11px] sm:text-xs text-slate-200">
            O material digital <strong>Exercícios para Reduzir o Ronco</strong> tem finalidade exclusivamente informativa e educativa, focando na observação de hábitos da rotina noturna e práticas orofaríngeas. Os exercícios apresentados não garantem a eliminação ou redução do ronco e não substituem diagnóstico, acompanhamento ou orientação de médicos otorrinolaringologistas, especialistas em medicina do sono ou fonoaudiólogos. Em casos de sonolência excessiva durante o dia, engasgos noturnos ou pausas respiratórias percebidas, consulte sempre um profissional de saúde qualificado.
          </p>
        </div>

        {/* Brand and Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#142B4A] flex items-center justify-center text-white">
              <Moon className="w-4 h-4 text-[#E9B95A]" />
            </div>
            <span className="font-bold text-white text-sm">
              Exercícios para Reduzir o Ronco
            </span>
          </div>

          <div className="text-center sm:text-right text-slate-300 text-xs space-y-1">
            <p>Todos os direitos reservados.</p>
            <p className="text-[11px] text-slate-300">
              Pagamentos processados com segurança pela plataforma Hotmart.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
