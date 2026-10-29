import React from 'react';

export default function SectionHeader({ tag, title, subtitle }) {
  const words = title ? title.split(' ') : [];

  return (
    <div className="section-header-block">
      {tag && <span className="section-tag">{tag}</span>}
      {title && (
        <h2 className="section-title split">
          {words.map((word, idx) => (
            <span key={idx} className="word">
              <span>{word}</span>
            </span>
          ))}
        </h2>
      )}
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
