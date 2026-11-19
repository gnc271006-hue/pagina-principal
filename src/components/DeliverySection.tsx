import React from 'react';
import { CreditCard, MailCheck, Laptop, ChevronDown } from 'lucide-react';
import { scrollToOffer } from '../utils/checkout';

export const DeliverySection: React.FC = () => {
  const steps = [
    {
      num: 'Etapa 1',
      title: 'Confirmação do pagamento',
      desc: 'Após a confirmação do pagamento, seu acesso é liberado conforme o processamento da plataforma. O prazo pode variar de acordo com o meio de pagamento.',
      icon: CreditCard
    },
    {
      num: 'Etapa 2',
      title: 'Receba o acesso por e-mail',
      desc: 'Você receberá as orientações de acesso ao material digital no e-mail utilizado na compra, conforme o fluxo de entrega da Hotmart.',
      icon: MailCheck
    },
    {
      num: 'Etapa 3',
      title: 'Consulte quando quiser',
      desc: 'Os arquivos digitais podem ser acessados em dispositivos compatíveis e impressos, se você preferir consultar os materiais em papel.',
      icon: Laptop
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B4A] tracking-tight">
            Como você recebe seu material?
          </h2>
          <p className="mt-3 text-[#2B4B70] text-base">
            O processo de entrega é 100% digital, prático e intermediado com segurança pela Hotmart.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#2B4B70] uppercase tracking-wider bg-[#DCEBFA]/60 px-2.5 py-1 rounded">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#DCEBFA] text-[#142B4A] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#142B4A]" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-[#142B4A] text-lg mb-2 leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-sm text-[#2B4B70] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Button */}
        <div className="text-center">
          <button
            onClick={scrollToOffer}
            className="btn-pill-green text-base sm:text-lg px-9 sm:px-12 py-4.5 shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[280px]"
          >
            <span>Quero garantir meu acesso</span>
            <ChevronDown className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
