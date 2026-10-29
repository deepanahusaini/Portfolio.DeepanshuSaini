import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import '../../styles/HeroSection.css';

export default function HeroSection({ profile }) {
  const {
    greeting = "👋 Hello, I'm",
    firstName = "Deepanshu",
    lastName = "Saini",
    headlineRoles = [
      "Cloud Architectures ☁️",
      "Full-Stack Products 💻",
      "Generative AI Systems 🤖",
      "Scalable Experiences 🚀"
    ],
    bio = "I am a passionate software engineer with a strong focus on cloud computing, full-stack development, and generative AI. I thrive on creating scalable and innovative solutions that make a real impact.",
    ctaPrimary = { label: "Explore My Work", href: "#cloud" },
    ctaSecondary = { label: "Get In Touch", href: "#contact" },
    stats = []
  } = profile || {};

  // Typewriter state
  const [typedText, setTypedText] = useState("");
  const statsContainerRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timerId;

    const tick = () => {
      const currentRole = headlineRoles[roleIndex] || "";
      if (isDeleting) {
        setTypedText(currentRole.slice(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 45 : 90;
      if (!isDeleting && charIndex >= currentRole.length) {
        speed = 1600;
        isDeleting = true;
      } else if (isDeleting && charIndex <= 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % headlineRoles.length;
        charIndex = 0;
        speed = 400;
      }

      timerId = setTimeout(tick, speed);
    };

    timerId = setTimeout(tick, 300);
    return () => clearTimeout(timerId);
  }, [headlineRoles]);

  // Animate stats counting
  useEffect(() => {
    if (!statsContainerRef.current) return;
    const statElements = statsContainerRef.current.querySelectorAll('[data-target]');

    statElements.forEach((el) => {
      const target = Number(el.getAttribute('data-target')) || 0;
      const counter = { val: 0 };
      gsap.to(counter, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        snap: { val: 1 },
        onUpdate: () => {
          el.innerText = `${Math.round(counter.val)}+`;
        }
      });
    });
  }, [stats]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="portfolio-section">
      <div className="hero-content">
        <p className="hero-greet reveal">{greeting}</p>
        <h1 className="hero-name reveal">
          {firstName} <span className="gradient-text">{lastName}</span>
        </h1>
        <div className="hero-role reveal">
          I build <span className="typed">{typedText}</span>
          <span className="caret" />
        </div>
        <p className="hero-desc reveal">{bio}</p>

        <div className="btn-row reveal">
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="btn primary"
              onClick={(e) => handleNavClick(e, ctaPrimary.href)}
            >
              {ctaPrimary.label}
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="btn"
              onClick={(e) => handleNavClick(e, ctaSecondary.href)}
            >
              {ctaSecondary.label}
            </a>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div ref={statsContainerRef} className="hero-stats reveal">
            {stats.map((stat, i) => (
              <div key={i} className="stat">
                <h3 data-target={stat.count}>0+</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="scroll-hint">
        <div className="scroll-arrow" />
        Scroll
      </div>
    </section>
  );
}
