import React from 'react';

interface HandDrawnHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const HandDrawnHighlight: React.FC<HandDrawnHighlightProps> = ({
  children,
  className = '',
}) => {
  return (
    <span className={`hand-drawn-highlight ${className}`.trim()}>
      {children}
    </span>
  );
};
