import { cn } from "@/lib/utils";

/** Crescent path inside a 0–100 box, opening to the right. */
export const CRESCENT_PATH = "M50 0A50 50 0 0 0 50 100A60 60 0 0 1 50 0Z";

/** 4-point sparkle path centred on 0,0 with the given radius. */
export function sparklePath(r: number): string {
  const i = r * 0.22;
  return `M0 ${-r}L${i} ${-i}L${r} 0L${i} ${i}L0 ${r}L${-i} ${i}L${-r} 0L${-i} ${-i}Z`;
}

const STARS: ReadonlyArray<readonly [number, number, number, boolean]> = [
  [6, 14, 1.2, true], [14, 62, 0.9, false], [22, 30, 1.5, false], [31, 82, 1, true],
  [38, 12, 0.9, false], [47, 48, 1.1, false], [55, 90, 1.3, true], [63, 22, 1, false],
  [71, 66, 0.9, false], [78, 10, 1.4, true], [85, 40, 1, false], [92, 78, 1.2, false],
  [96, 20, 0.9, false], [10, 92, 1, false], [58, 6, 0.8, false], [89, 58, 0.8, true],
];

/** Subtle scatter of tiny stars. Purely decorative. */
export function Starfield({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-gold-soft", className)}
    >
      {STARS.map(([x, y, r, twinkle], index) => (
        <circle
          key={index}
          cx={`${x}%`}
          cy={`${y}%`}
          r={r}
          fill="currentColor"
          opacity={0.45}
          className={twinkle ? "animate-twinkle" : undefined}
        />
      ))}
    </svg>
  );
}

const CONSTELLATION: ReadonlyArray<readonly [number, number]> = [
  [10, 70], [38, 52], [62, 60], [86, 28], [120, 38], [150, 10],
];

/** A small original constellation: dots joined by hairlines. */
export function Constellation({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 160 80"
      fill="none"
      className={cn("pointer-events-none text-gold", className)}
    >
      <polyline
        points={CONSTELLATION.map(([x, y]) => `${x},${y}`).join(" ")}
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.5"
      />
      {CONSTELLATION.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={index % 2 ? 2 : 1.4} fill="currentColor" opacity="0.85" />
      ))}
    </svg>
  );
}

/** Standalone crescent moon in outline or fill. */
export function Moon({ className, filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg aria-hidden focusable="false" viewBox="-6 -6 112 112" className={cn("text-gold", className)}>
      <path
        d={CRESCENT_PATH}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Thin divider line with a central sparkle. */
export function Ornament({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 240 24"
      fill="none"
      className={cn("h-6 w-60 max-w-full text-gold", className)}
    >
      <line x1="0" y1="12" x2="102" y2="12" stroke="currentColor" strokeWidth="0.8" />
      <line x1="138" y1="12" x2="240" y2="12" stroke="currentColor" strokeWidth="0.8" />
      <path d={sparklePath(9)} transform="translate(120 12)" fill="currentColor" />
      <circle cx="104" cy="12" r="1.6" fill="currentColor" />
      <circle cx="136" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Brand mark: a crescent and spark held in a fine gold ring. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden focusable="false" viewBox="0 0 40 40" fill="none" className={cn("text-gold", className)}>
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path d={CRESCENT_PATH} transform="translate(11 9) scale(0.2) rotate(-15 50 50)" fill="currentColor" />
      <path d={sparklePath(3.2)} transform="translate(26 24)" fill="currentColor" />
    </svg>
  );
}

const ORBIT_TICKS = Array.from({ length: 60 }, (_, index) => {
  const angle = (index * 6 * Math.PI) / 180;
  const long = index % 5 === 0;
  const inner = long ? 94.5 : 96.5;
  return {
    x1: Math.round((100 + Math.cos(angle) * inner) * 100) / 100,
    y1: Math.round((100 + Math.sin(angle) * inner) * 100) / 100,
    x2: Math.round((100 + Math.cos(angle) * 98.5) * 100) / 100,
    y2: Math.round((100 + Math.sin(angle) * 98.5) * 100) / 100,
    long,
  };
});

/** Astrolabe-style concentric rings with tick marks. Decorative backdrop for focal visuals. */
export function OrbitRings({ className }: { className?: string }) {
  return (
    <svg aria-hidden focusable="false" viewBox="0 0 200 200" fill="none" className={cn("text-gold", className)}>
      <circle cx="100" cy="100" r="98.5" stroke="currentColor" strokeWidth="0.35" opacity="0.5" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" strokeDasharray="0.6 3" strokeLinecap="round" opacity="0.7" />
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
      {ORBIT_TICKS.map((tick, index) => (
        <line key={index} x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2} stroke="currentColor" strokeWidth={tick.long ? 0.5 : 0.3} opacity={tick.long ? 0.8 : 0.45} />
      ))}
      <path d={sparklePath(3.4)} transform="translate(100 1.5)" fill="currentColor" />
      <path d={sparklePath(2.6)} transform="translate(20 140)" fill="currentColor" opacity="0.8" />
      <path d={sparklePath(2.6)} transform="translate(182 66)" fill="currentColor" opacity="0.8" />
      <circle cx="39" cy="31" r="1.2" fill="currentColor" />
    </svg>
  );
}
