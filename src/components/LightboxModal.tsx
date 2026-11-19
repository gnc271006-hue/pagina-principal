import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { scrollToOffer } from '../utils/checkout';

interface LightboxModalProps {
  imageSrc: string | null;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  onClose,
}) => {
  if (!imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080F1D]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top header */}
        <div className="p-4 bg-[#142B4A] text-white flex items-center justify-between border-b border-white/10">
          <span className="font-bold text-sm text-slate-200 truncate">
            {imageAlt || 'Visualização do Material'}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image preview area */}
        <div className="flex-1 bg-slate-950 flex items-center justify-center overflow-auto p-2 sm:p-4 min-h-[300px]">
          <img
            src={imageSrc}
            alt={imageAlt || 'Material ilustrado'}
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            decoding="async"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#2B4B70]">
            Material digital em alta resolução para celular, tablet ou impressão.
          </p>

          <button
            onClick={() => {
              onClose();
              scrollToOffer();
            }}
            className="btn-pill-green text-xs sm:text-sm px-6 py-3 shadow-md flex items-center gap-1.5"
          >
            <span>Ver Condições de Acesso</span>
            <ChevronDown className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
