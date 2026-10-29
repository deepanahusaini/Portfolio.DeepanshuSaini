import React from 'react';
import SectionHeader from '../common/SectionHeader';
import NeuralCanvas from '../backgrounds/NeuralCanvas';
import Timeline from '../timeline/Timeline';
import TiltCard from '../cards/TiltCard';
import '../../styles/GenAISection.css';

export default function GenAISection({ data }) {
  const { id = "genai", tag, title, subtitle, timeline = [], cards = [] } = data || {};

  return (
    <section id={id} className="portfolio-section">
      <NeuralCanvas />

      <SectionHeader tag={tag} title={title} subtitle={subtitle} />

      <Timeline items={timeline} colors={{ c1: '#f472b6', c2: '#a78bfa' }} />

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
            colors={card.colors || { c1: '#f472b6', c2: '#a78bfa' }}
          />
        ))}
      </div>
    </section>
  );
}
