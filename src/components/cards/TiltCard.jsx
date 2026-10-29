import React, { useRef } from 'react';
import gsap from 'gsap';
import '../../styles/TiltCard.css';

export default function TiltCard({
  icon,
  title,
  meta,
  description,
  tags = [],
  wide = false,
  colors = { c1: '#7c6cff', c2: '#22d3ee' },
  children,
  className = ""
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 18,
      rotateX: -y * 18,
      scale: 1.04,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 900
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  const cardStyle = {
    '--c1': colors.c1,
    '--c2': colors.c2
  };

  return (
    <div
      ref={cardRef}
      className={`card bounce tilt ${wide ? 'wide' : ''} ${className}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <div className="icon">{icon}</div>}
      {title && <h3>{title}</h3>}
      {meta && <div className="meta">{meta}</div>}
      {description && <p>{description}</p>}

      {tags && tags.length > 0 && (
        <ul className="tags">
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      )}

      {children}
    </div>
  );
}
