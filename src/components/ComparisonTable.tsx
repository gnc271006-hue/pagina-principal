import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Comparativo de Soluções
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Por Que Escolher o Método Natural Ilustrado?
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Veja a comparação clara entre o investimento, conforto e segurança de cada alternativa para o ronco.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-700">Critério</th>
                <th className="p-4 font-black text-indigo-900 bg-indigo-50/80 border-x border-indigo-200 text-center text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Guia Ilustrado</span>
                  </div>
                </th>
                <th className="p-4 font-semibold text-slate-600 text-center">Aparelho CPAP</th>
                <th className="p-4 font-semibold text-slate-600 text-center">Dilatadores e Fitas</th>
                <th className="p-4 font-semibold text-slate-600 text-center">Cirurgia (Palatoplastia)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-4 font-semibold text-slate-800">Custo Total</td>
                <td className="p-4 bg-indigo-50/50 border-x border-indigo-200 text-center font-extrabold text-emerald-600 text-base">
                  Apenas R$ 29,90
                </td>
                <td className="p-4 text-center text-slate-600">R$ 4.000 a R$ 8.000</td>
                <td className="p-4 text-center text-slate-600">R$ 60 a R$ 180 / mês</td>
                <td className="p-4 text-center text-slate-600">R$ 10.000 a R$ 25.000</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-800">Conforto Para Dormir</td>
                <td className="p-4 bg-indigo-50/50 border-x border-indigo-200 text-center font-bold text-slate-900">
                  <span className="inline-flex items-center gap-1 text-emerald-700">
                    <Check className="w-4 h-4" /> 100% Livre (sem nada no rosto)
                  </span>
                </td>
                <td className="p-4 text-center text-slate-500">Máscara e mangueira presa</td>
                <td className="p-4 text-center text-slate-500">Machuca o nariz ou queixo</td>
                <td className="p-4 text-center text-slate-500">Pós-operatório doloroso</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-800">Trata a Causa Muscular?</td>
                <td className="p-4 bg-indigo-50/50 border-x border-indigo-200 text-center font-bold text-slate-900">
                  <span className="inline-flex items-center gap-1 text-emerald-700">
                    <Check className="w-4 h-4" /> Sim, fortalece os tecidos
                  </span>
                </td>
                <td className="p-4 text-center text-slate-500">Não (apenas sopra ar forçado)</td>
                <td className="p-4 text-center text-slate-500">Não (apenas abre narina)</td>
                <td className="p-4 text-center text-slate-500">Corta tecidos cirurgicamente</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-800">Risco ou Efeitos Colaterais</td>
                <td className="p-4 bg-indigo-50/50 border-x border-indigo-200 text-center font-bold text-emerald-700">
                  Zero risco (método natural)
                </td>
                <td className="p-4 text-center text-slate-500">Ressecamento, ruído de motor</td>
                <td className="p-4 text-center text-slate-500">Irritação da pele e mucosa</td>
                <td className="p-4 text-center text-slate-500">Risco anestésico e cicatricial</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-800">Garantia Incondicional</td>
                <td className="p-4 bg-indigo-50/50 border-x border-indigo-200 text-center font-bold text-emerald-700">
                  7 Dias (Risco Zero)
                </td>
                <td className="p-4 text-center text-slate-500">Não reembolsável após uso</td>
                <td className="p-4 text-center text-slate-500">Sem garantia após abrir</td>
                <td className="p-4 text-center text-slate-500">Sem devolução</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
