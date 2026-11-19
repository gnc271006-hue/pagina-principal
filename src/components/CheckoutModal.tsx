import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, QrCode, CreditCard, Sparkles, Download, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, preencha seu nome e e-mail para receber o acesso.');
      return;
    }
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136guia-ronco-2990-oficial-key520400005303986540529.905802BR5925GUIA ILUSTRADO EXERCICIOS6009SAO PAULO62070503***6304E8A1');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="font-extrabold text-sm tracking-wide uppercase">Ambiente de Compra Seguro</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Order summary box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-extrabold text-slate-900 text-sm">
                  Guia Ilustrado de Exercícios para o Ronco
                </div>
                <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> + 3 Bônus Inclusos Gratuitamente
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 line-through">R$ 97,00</div>
                <div className="text-lg font-black text-slate-900">R$ 29,90</div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>PIX (Acesso Imediato)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-4 h-4 text-indigo-600" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            {/* User Details */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  E-mail (para onde enviaremos o material)
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp com DDD (para suporte e envio rápido)
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* PIX instructions box */}
            {paymentMethod === 'pix' && (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pagamento Instantâneo via PIX
                </div>
                <p className="text-slate-600">
                  O link para baixar o Guia Completo e os 3 bônus é liberado imediatamente na tela após a confirmação.
                </p>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-2 pt-1 border-t border-slate-100">
                <input
                  type="text"
                  placeholder="Número do Cartão (16 dígitos)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer active:scale-98"
            >
              Finalizar Pedido • R$ 29,90
            </button>

            <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garantia de 7 Dias • Devolução Integral se não gostar</span>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Pagamento Confirmado!
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Parabéns, {name || 'Cliente'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Seu acesso ao <strong>Guia Ilustrado de Exercícios para o Ronco</strong> foi gerado e enviado para <strong>{email}</strong>.
              </p>
            </div>

            {/* Simulated PIX / Receipt Info */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Pedido:</span>
                <span className="font-mono text-indigo-600">#RONCO-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Status:</span>
                <span className="font-bold text-emerald-600">Acesso Liberado Imediatamente</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Valor Pago:</span>
                <span className="font-bold text-slate-900">R$ 29,90</span>
              </div>
            </div>

            {/* Direct Download Actions */}
            <div className="space-y-2 pt-2">
              <a
                href="/Guia exercçicios para o ronco 2.jpeg"
                download="Guia_Ilustrado_Exercicios_Ronco.jpeg"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Baixar Material Ilustrado Principal
              </a>

              <a
                href="/galeria 4.jpeg"
                download="Checklist_Rotina_Noturna.jpeg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Baixar Bônus #1 (Checklist Noturno)
              </a>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer pt-2"
            >
              Fechar Janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
