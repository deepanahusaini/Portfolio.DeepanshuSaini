import React from 'react';
import TimelineItem from './TimelineItem';
import '../../styles/Timeline.css';

export default function Timeline({ items = [], colors }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
          colors={colors}
        />
      ))}
    </div>
  );
}
