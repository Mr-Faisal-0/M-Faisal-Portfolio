import type { CSSProperties } from 'react';

/**
 * Original hero illustration: scattered data points → a measured curve that
 * clears a threshold → a finished product card. Pure SVG, no assets, and it
 * inherits the active palette through CSS variables.
 */
const dots = Array.from({ length: 30 }, (_, i) => ({
  x: 20 + ((i * 47) % 150),
  y: 36 + ((i * 83) % 290),
  r: 2.4 + (i % 3) * 0.9,
  accent: i % 7 === 0,
}));

const bars = [14, 26, 20, 34, 40];

export function PipelineMotif() {
  return (
    <svg
      className="motif"
      viewBox="0 0 600 380"
      role="img"
      aria-label="Illustration: scattered data points become a measured curve that clears a threshold, then a finished product card."
    >
      {/* 1 · raw data */}
      <g className="motif__data">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            className={d.accent ? 'motif__dot motif__dot--accent' : 'motif__dot'}
            style={{ '--i': i } as CSSProperties}
          />
        ))}
      </g>

      <path className="motif__flow" d="M184 190H222M214 183l8 7-8 7" />

      {/* 2 · evaluation */}
      <g>
        <rect className="motif__frame" x="232" y="50" width="170" height="250" rx="8" />
        <g className="motif__grid">
          <path d="M246 100H388M246 150H388M246 200H388M246 250H388" />
        </g>
        <path className="motif__threshold" d="M246 130H388" />
        <path
          className="motif__curve"
          pathLength={1}
          d="M246 270C280 262 300 220 322 184S372 118 388 96"
        />
        <circle className="motif__point" cx="246" cy="270" r="5" />
        <circle className="motif__point" cx="322" cy="184" r="5" />
        <circle className="motif__point motif__point--accent" cx="388" cy="96" r="6" />
      </g>

      <path className="motif__flow" d="M412 190H446M438 183l8 7-8 7" />

      {/* 3 · product */}
      <g className="motif__product">
        <rect className="motif__card" x="456" y="100" width="132" height="180" rx="12" />
        <circle className="motif__badge" cx="482" cy="132" r="12" />
        <path className="motif__check" d="M476 132l4 4 8-9" />
        <rect className="motif__line" x="474" y="160" width="96" height="8" rx="4" />
        <rect className="motif__line motif__line--soft" x="474" y="178" width="70" height="8" rx="4" />
        <rect className="motif__panel" x="474" y="206" width="96" height="56" rx="6" />
        {bars.map((h, i) => (
          <rect key={i} className="motif__bar" x={486 + i * 14} y={254 - h} width="8" height={h} rx="1" />
        ))}
      </g>
    </svg>
  );
}
