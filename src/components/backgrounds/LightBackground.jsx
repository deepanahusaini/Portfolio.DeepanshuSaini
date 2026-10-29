import React from 'react';
import '../../styles/Background.css';

export default function LightBackground() {
  return (
    <>
      <div className="bg-gradient-layer" aria-hidden="true">
        <div className="bg-blob" />
        <div className="bg-blob" />
        <div className="bg-blob" />
      </div>
      <div className="vignette" />
    </>
  );
}

