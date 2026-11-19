import React from 'react';

const REPEATS = Array.from({ length: 14 });

export const TopNoticeBar: React.FC = () => {
  return (
    <div
      className="bf-top-ribbon sticky top-0 z-40 w-full shadow-sm"
      role="region"
      aria-label="Black Friday"
    >
      <div className="bf-marquee-viewport">
        <div className="bf-marquee-track">
          <div className="bf-marquee-group">
            {REPEATS.map((_, idx) => (
              <span
                key={`a-${idx}`}
                className="inline-flex items-center text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.14em] text-white whitespace-nowrap select-none"
              >
                <span>BLACK FRIDAY</span>
                <span className="mx-3 text-[#EF4444]" aria-hidden="true">
                  ·
                </span>
              </span>
            ))}
          </div>
          <div className="bf-marquee-group bf-marquee-duplicate" aria-hidden="true">
            {REPEATS.map((_, idx) => (
              <span
                key={`b-${idx}`}
                className="inline-flex items-center text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.14em] text-white whitespace-nowrap select-none"
              >
                <span>BLACK FRIDAY</span>
                <span className="mx-3 text-[#EF4444]">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
