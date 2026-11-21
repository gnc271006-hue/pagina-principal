import React from 'react';

export const TopNoticeBar: React.FC = () => {
  return (
    <div className="top-notice-bar bg-gradient-to-r from-[#142B4A] via-[#1A365D] to-[#142B4A] text-white pb-2 px-3 sm:px-4 text-center border-b border-[#416A98]/30 sticky top-0 z-40 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <p className="text-[11px] sm:text-[13px] font-semibold tracking-wide text-white whitespace-nowrap">
          Essa oferta vai se encerrar no dia{' '}
          <strong className="font-bold underline underline-offset-2">30/11/2026</strong>
        </p>
      </div>
    </div>
  );
};
