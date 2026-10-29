import React from 'react';
import SectionHeader from '../common/SectionHeader';
import '../../styles/ContactSection.css';

export default function ContactSection({ data, profile }) {
  const { id = "contact", tag, title, subtitle, links = [] } = data || {};
  const currentYear = new Date().getFullYear();
  const fullName = profile ? `${profile.firstName} ${profile.lastName}` : "Deepanshu Saini";

  return (
    <>
      <section id={id} className="portfolio-section">
        <SectionHeader tag={tag} title={title} subtitle={subtitle} />

        <div className="contact-links">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="portfolio-footer">
        © <span>{currentYear}</span> {fullName} — Designed & Built with ❤️, React & GSAP
      </footer>
    </>
  );
}
