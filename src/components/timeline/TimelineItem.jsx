import React from 'react';

export default function TimelineItem({ date, title, description, colors }) {
  const itemStyle = colors
    ? {
        '--c1': colors.c1,
        '--c2': colors.c2
      }
    : {};

  return (
    <div className="tl-item bounce" style={itemStyle}>
      {date && <span className="date">{date}</span>}
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
    </div>
  );
}
