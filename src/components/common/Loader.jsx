import React, { useEffect, useState } from 'react';
import '../../styles/Loader.css';

export default function Loader({ onLoaded }) {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      if (onLoaded) onLoaded();
      const removeTimer = setTimeout(() => {
        setRemoved(true);
      }, 800);
      return () => clearTimeout(removeTimer);
    }, 900);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (removed) return null;

  return (
    <div className={`loader-overlay ${loaded ? 'hidden' : ''}`} id="loader">
      <div className="ring" />
      <p>Loading Experience</p>
    </div>
  );
}
