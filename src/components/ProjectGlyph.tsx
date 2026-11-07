/**
 * Decorative halftone panel, seeded from the project id so every card gets a
 * stable, unique texture. It carries no data and is hidden from assistive tech.
 */
function seeded(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const COLS = 24;
const ROWS = 6;

export function ProjectGlyph({ seed }: { seed: string }) {
  const rand = seeded(seed);
  const cells: { x: number; y: number; r: number }[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // Dots grow toward the right, with seeded noise so each card differs.
      const ramp = col / (COLS - 1);
      const size = Math.max(0.6, (0.25 + ramp * 0.75) * (0.45 + rand() * 0.55) * 4.4);
      cells.push({ x: 8 + col * 12, y: 8 + row * 12, r: size });
    }
  }
  return (
    <svg className="glyph" viewBox={`0 0 ${COLS * 12 + 4} ${ROWS * 12 + 4}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {cells.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={c.r} />
      ))}
    </svg>
  );
}
