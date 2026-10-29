import React from 'react';

export default function CloudAtmosphere() {
  return (
    <>
      <div className="clouds" aria-hidden="true">
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
        <div className="cloud c4" />
      </div>
      <div className="cloud-float" aria-hidden="true">☁️</div>
    </>
  );
}
