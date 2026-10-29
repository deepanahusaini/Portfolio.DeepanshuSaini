import React, { useMemo } from 'react';

const DEFAULT_SNIPPETS = [
  'const app = express();',
  'SELECT * FROM users;',
  '<div className="app"/>',
  'async function fetch()',
  'docker compose up',
  'git push origin main',
  'useEffect(()=>{},[])',
  'npm run build',
  'return res.json(data)',
  '@app.get("/api")',
  'kubectl apply -f',
  'export default App'
];

export default function CodeRain({ snippets = DEFAULT_SNIPPETS, count = 22 }) {
  const rainColumns = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      text: snippets[i % snippets.length],
      left: `${(i / count) * 100}%`,
      duration: `${8 + Math.random() * 10}s`,
      delay: `${-Math.random() * 15}s`,
      opacity: 0.4 + Math.random() * 0.6
    }));
  }, [snippets, count]);

  return (
    <>
      <div className="code-rain" aria-hidden="true">
        {rainColumns.map((col) => (
          <span
            key={col.id}
            style={{
              left: col.left,
              animationDuration: col.duration,
              animationDelay: col.delay,
              opacity: col.opacity
            }}
          >
            {col.text}
          </span>
        ))}
      </div>
      <div className="grid-floor" aria-hidden="true" />
    </>
  );
}
