import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CloudAtmosphere from '../backgrounds/CloudAtmosphere';
import Timeline from '../timeline/Timeline';
import TiltCard from '../cards/TiltCard';
import '../../styles/CloudSection.css';

export default function CloudSection({ data }) {
  const { id = "cloud", tag, title, subtitle, timeline = [], cards = [] } = data || {};

  return (
    <section id={id} className="portfolio-section">
      <CloudAtmosphere />

      <SectionHeader tag={tag} title={title} subtitle={subtitle} />

      <Timeline items={timeline} colors={{ c1: '#38bdf8', c2: '#60a5fa' }} />

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
            colors={card.colors || { c1: '#38bdf8', c2: '#60a5fa' }}
          />
        ))}
      </div>
    </section>
  );
}
