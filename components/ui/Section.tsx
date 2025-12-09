import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 scroll-mt-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-600 rounded-full"></span>
              </h2>
            )}
            {subtitle && <p className="text-slate-600 max-w-2xl mx-auto mt-4">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};