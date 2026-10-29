import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CodeRain from '../backgrounds/CodeRain';
import Timeline from '../timeline/Timeline';
import TiltCard from '../cards/TiltCard';
import '../../styles/FullStackSection.css';

export default function FullStackSection({ data }) {
  const { id = "fullstack", tag, title, subtitle, timeline = [], cards = [] } = data || {};

  return (
    <section id={id} className="portfolio-section">
      <CodeRain />

      <SectionHeader tag={tag} title={title} subtitle={subtitle} />

      <Timeline items={timeline} colors={{ c1: '#34d399', c2: '#fbbf24' }} />

      <div className="grid">
        {cards.map((card, index) => (
          <TiltCard
            key={index}
            icon={card.icon}
            title={card.title}
            meta={card.meta}
            description={card.description}
            tags={card.tags}
            wide={card.wide}
            colors={card.colors || { c1: '#34d399', c2: '#fbbf24' }}
          />
        ))}
      </div>
    </section>
  );
}
