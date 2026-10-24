import { CRESCENT_PATH, sparklePath } from "@/components/ui/Celestial";
import { cn } from "@/lib/utils";

const round = (value: number) => Math.round(value * 100) / 100;

/** Points on a circle, starting at 12 o'clock. */
function polar(radius: number, angleDeg: number): [number, number] {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return [round(Math.cos(angle) * radius), round(Math.sin(angle) * radius)];
}

const RAYS = Array.from({ length: 24 }, (_, index) => {
  const angle = index * 15;
  const long = index % 2 === 0;
  const [x1, y1] = polar(100, angle);
  const [x2, y2] = polar(long ? 118 : 109, angle);
  return { x1, y1, x2, y2, long };
});

const STAR_POINTS = Array.from({ length: 8 }, (_, index) => {
  const [x, y] = polar(index % 2 === 0 ? 70 : 34, index * 45);
  return `${x},${y}`;
}).join(" ");

const CONSTELLATION_TOP: ReadonlyArray<readonly [number, number]> = [
  [58, 108], [92, 86], [122, 100], [160, 74], [204, 90], [248, 66],
];
const CONSTELLATION_BOTTOM: ReadonlyArray<readonly [number, number]> = [
  [62, 408], [104, 428], [150, 412], [196, 436], [250, 414],
];
const SCATTER: ReadonlyArray<readonly [number, number, number]> = [
  [44, 150, 4], [276, 140, 5], [38, 350, 5], [282, 368, 4], [86, 380, 3], [236, 120, 3],
];

interface TarotVisualProps {
  /** Unique prefix so SVG ids don't clash when the visual appears more than once. */
  idPrefix?: string;
  title?: string;
  className?: string;
}

/**
 * Original tarot-card illustration drawn entirely in SVG.
 * Swap this for real card photography later without touching the layout.
 */
export function TarotVisual({ idPrefix = "tarot", title = "CELESTIA TAROT", className }: TarotVisualProps) {
  const bg = `${idPrefix}-bg`;
  const gold = `${idPrefix}-gold`;
  const glow = `${idPrefix}-glow`;
  const core = `${idPrefix}-core`;

  return (
    <svg
      viewBox="0 0 320 520"
      role="img"
      aria-label="Illustration of a decorative tarot card with a crescent moon and stars"
      className={cn("h-auto w-full drop-shadow-[0_30px_60px_rgba(109,63,217,0.35)]", className)}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c1b3d" />
          <stop offset="1" stopColor="#150d1f" />
        </linearGradient>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e1c98a" />
          <stop offset="0.55" stopColor="#c9a96e" />
          <stop offset="1" stopColor="#9d7f48" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#6d3fd9" stopOpacity="0.55" />
          <stop offset="1" stopColor="#6d3fd9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={core} cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#3a2652" />
          <stop offset="1" stopColor="#1a1027" />
        </radialGradient>
      </defs>

      <rect width="320" height="520" rx="16" fill={`url(#${bg})`} />
      <rect x="6" y="6" width="308" height="508" rx="11" fill="none" stroke={`url(#${gold})`} strokeWidth="1.6" />
      <rect x="20" y="20" width="280" height="480" rx="5" fill="none" stroke="#c9a96e" strokeOpacity="0.55" strokeWidth="0.8" />
      <rect x="26" y="26" width="268" height="468" rx="3" fill="none" stroke="#c9a96e" strokeOpacity="0.25" strokeWidth="0.6" strokeDasharray="1 5" />

      {[
        [34, 34, 0],
        [286, 34, 90],
        [286, 486, 180],
        [34, 486, 270],
      ].map(([x, y, rotation]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rotation})`} stroke="#c9a96e" strokeWidth="0.9" fill="none">
          <path d="M0 0H18M0 0V18" />
          <path d="M5 5 12 5 5 12Z" fill="#c9a96e" fillOpacity="0.5" stroke="none" />
        </g>
      ))}

      <path d={sparklePath(7)} transform="translate(160 54)" fill="#e1c98a" />
      <line x1="96" y1="54" x2="146" y2="54" stroke="#c9a96e" strokeOpacity="0.6" strokeWidth="0.7" />
      <line x1="174" y1="54" x2="224" y2="54" stroke="#c9a96e" strokeOpacity="0.6" strokeWidth="0.7" />

      {[CONSTELLATION_TOP, CONSTELLATION_BOTTOM].map((points, group) => (
        <g key={group} stroke="#c9a96e" strokeOpacity="0.4" strokeWidth="0.6" fill="none">
          <polyline points={points.map(([x, y]) => `${x},${y}`).join(" ")} />
          {points.map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r={index % 2 ? 2.2 : 1.6} fill="#e1c98a" stroke="none" fillOpacity="0.9" />
          ))}
        </g>
      ))}

      {SCATTER.map(([x, y, r]) => (
        <path key={`${x}-${y}`} d={sparklePath(r)} transform={`translate(${x} ${y})`} fill="#e1c98a" fillOpacity="0.75" />
      ))}

      <g transform="translate(160 256)">
        <circle r="124" fill={`url(#${glow})`} />
        {RAYS.map((ray, index) => (
          <line
            key={index}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke="#c9a96e"
            strokeWidth={ray.long ? 1 : 0.7}
            strokeOpacity={ray.long ? 0.9 : 0.55}
          />
        ))}
        <circle r="96" fill="none" stroke={`url(#${gold})`} strokeWidth="1.2" />
        <circle r="88" fill="none" stroke="#c9a96e" strokeOpacity="0.5" strokeWidth="0.8" strokeDasharray="1.5 6" strokeLinecap="round" />
        <polygon points={STAR_POINTS} fill="none" stroke="#c9a96e" strokeOpacity="0.55" strokeWidth="0.8" />
        <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#c9a96e" strokeOpacity="0.55" strokeWidth="0.8" />
        <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#c9a96e" strokeOpacity="0.55" strokeWidth="0.8" transform="rotate(45)" />
        <circle r="38" fill={`url(#${core})`} stroke={`url(#${gold})`} strokeWidth="1.4" />
        <g transform="translate(-14 -24) scale(0.46)">
          <path d={CRESCENT_PATH} fill={`url(#${gold})`} transform="rotate(-18 50 50)" />
        </g>
        <path d={sparklePath(6)} transform="translate(13 6)" fill="#f4efe6" />
        <circle cx="-4" cy="20" r="1.4" fill="#e1c98a" />
      </g>

      <text
        x="160"
        y="466"
        textAnchor="middle"
        letterSpacing="5"
        fontSize="13"
        fill="#e1c98a"
        className="font-serif"
        fontWeight="600"
      >
        {title}
      </text>
      <line x1="120" y1="478" x2="200" y2="478" stroke="#c9a96e" strokeOpacity="0.55" strokeWidth="0.7" />
    </svg>
  );
}

interface CardBackProps {
  idPrefix: string;
  x: number;
  rotation: number;
  accent?: boolean;
}

function CardBack({ idPrefix, x, rotation, accent = false }: CardBackProps) {
  return (
    <g className="pointer-events-auto [transform-box:fill-box] [transform-origin:center] transition-[scale,filter] duration-300 hover:scale-105 hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(225,201,138,0.7)]">
      <g transform={`translate(${x} 410) rotate(${rotation})`}>
        <rect x="-90" y="-330" width="180" height="300" rx="10" fill={`url(#${idPrefix}-face)`} />
        <rect x="-90" y="-330" width="180" height="300" rx="10" fill="none" stroke="#c9a96e" strokeWidth="1.2" />
        <rect x="-80" y="-320" width="160" height="280" rx="5" fill="none" stroke="#c9a96e" strokeOpacity="0.5" strokeWidth="0.7" />
        <g transform="translate(0 -180)" fill="none" stroke="#c9a96e" strokeWidth="0.8">
          <circle r="52" strokeOpacity="0.7" />
          <rect x="-30" y="-30" width="60" height="60" strokeOpacity="0.6" />
          <rect x="-30" y="-30" width="60" height="60" strokeOpacity="0.6" transform="rotate(45)" />
          <circle r="6" fill="#e1c98a" stroke="none" />
          {accent ? (
            <g transform="translate(-34 -34) scale(0.5)">
              <path d={CRESCENT_PATH} fill="#c9a96e" stroke="none" />
            </g>
          ) : null}
        </g>
        <path d={sparklePath(5)} transform="translate(0 -62)" fill="#e1c98a" />
      </g>
    </g>
  );
}

/** Three tarot card backs fanned out. Decorative only. */
export function TarotFan({ idPrefix = "fan", className }: { idPrefix?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 480 440"
      aria-hidden
      focusable="false"
      className={cn("h-auto w-full drop-shadow-[0_24px_40px_rgba(33,21,45,0.35)]", className)}
    >
      <defs>
        <linearGradient id={`${idPrefix}-face`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#33214a" />
          <stop offset="1" stopColor="#1a1027" />
        </linearGradient>
      </defs>
      {/* <CardBack idPrefix={idPrefix} x={178} rotation={-16} />
      <CardBack idPrefix={idPrefix} x={302} rotation={16} /> */}
      <CardBack idPrefix={idPrefix} x={140} rotation={-16} />
      <CardBack idPrefix={idPrefix} x={340} rotation={16} />
      <CardBack idPrefix={idPrefix} x={240} rotation={0} accent />
    </svg>
  );
}
