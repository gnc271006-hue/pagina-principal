import React from 'react';

interface HandDrawnHighlightProps {
  children: React.ReactNode;
  variant?: 'navy' | 'light-blue';
  className?: string;
}

export const HandDrawnHighlight: React.FC<HandDrawnHighlightProps> = ({
  children,
  variant = 'navy',
  className = '',
}) => {
  const variantClass =
    variant === 'light-blue'
      ? 'hand-drawn-highlight-light'
      : 'hand-drawn-highlight';

  return (
    <span className={`${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
};
