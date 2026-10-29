import React, { useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { portfolioData } from './data/portfolioData';

// Common Components
import Loader from './components/common/Loader';
import ProgressBar from './components/common/ProgressBar';
import Navbar from './components/common/Navbar';
import Divider from './components/common/Divider';

// Lightweight Background (replaces heavy Three.js)
import LightBackground from './components/backgrounds/LightBackground';

// Sections
import HeroSection from './components/sections/HeroSection';
import CloudSection from './components/sections/CloudSection';
import FullStackSection from './components/sections/FullStackSection';
import GenAISection from './components/sections/GenAISection';
import ContactSection from './components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

function PortfolioContent() {
  const { setSection } = useTheme();

  const handleLoaderComplete = useCallback(() => {
    // Hero entrance animations
    gsap.from('#hero .reveal', {
      y: 60,
      opacity: 0,
      rotateX: -30,
      stagger: 0.12,
      duration: 1.1,
      ease: 'power4.out'
    });

    gsap.from('.portfolio-navbar', {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax hero content on scroll
      gsap.to('.hero-content', {
        y: -150,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Section scale-in transitions
      const nonHeroSections = document.querySelectorAll('section:not(#hero)');
      nonHeroSections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { scale: 0.92, opacity: 0.3, filter: 'blur(6px)' },
          {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 90%',
              end: 'top 35%',
              scrub: true
            }
          }
        );
      });

      // Section scroll triggers for active nav and theme color
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setSection(sec.id),
          onEnterBack: () => setSection(sec.id)
        });

        // Split title words animation
        const words = sec.querySelectorAll('.section-title .word span');
        if (words.length) {
          gsap.from(words, {
            yPercent: 110,
            rotateX: -40,
            opacity: 0,
            stagger: 0.08,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sec,
              start: 'top 70%'
            }
          });
        }

        // Section tag & subtitle animation
        const tagAndSub = sec.querySelectorAll('.section-tag, .section-sub');
        if (tagAndSub.length) {
          gsap.from(tagAndSub, {
            x: -40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 70%'
            }
          });
        }

        // Bounce pop-in cards & timeline items
        const bounceItems = sec.querySelectorAll('.bounce');
        if (bounceItems.length) {
          gsap.from(bounceItems, {
            scale: 0.4,
            y: 120,
            opacity: 0,
            rotate: () => gsap.utils.random(-8, 8),
            stagger: 0.13,
            duration: 1.3,
            ease: 'elastic.out(1, 0.55)',
            scrollTrigger: {
              trigger: sec,
              start: 'top 60%'
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, [setSection]);

  return (
    <>
      <Loader onLoaded={handleLoaderComplete} />
      <ProgressBar />
      <Navbar logoInitials={portfolioData.profile.logoInitials} links={portfolioData.navLinks} />

      <LightBackground />

      <main>
        <HeroSection profile={portfolioData.profile} />
        <Divider />
        <CloudSection data={portfolioData.cloud} />
        <Divider />
        <FullStackSection data={portfolioData.fullstack} />
        <Divider />
        <GenAISection data={portfolioData.genai} />
        <Divider />
        <ContactSection data={portfolioData.contact} profile={portfolioData.profile} />
      </main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
