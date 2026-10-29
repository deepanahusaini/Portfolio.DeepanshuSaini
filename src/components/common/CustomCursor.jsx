import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable custom cursor if not a touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.05 });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const onMouseEnter = () => document.body.classList.add('hovering');
    const onMouseLeave = () => document.body.classList.remove('hovering');

    window.addEventListener('mousemove', onMouseMove);

    const attachHoverTargets = () => {
      const targets = document.querySelectorAll('a, button, .card, .hover-target, [role="button"]');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
      return targets;
    };

    const targets = attachHoverTargets();

    // Use MutationObserver so newly rendered elements get hover events
    const observer = new MutationObserver(() => {
      attachHoverTargets();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      observer.disconnect();
      document.body.classList.remove('hovering');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
