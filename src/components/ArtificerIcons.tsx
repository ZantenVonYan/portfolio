import { useId } from "react";

type IconProps = {
  size?: number;
  className?: string;
  /** Outline and a light interior wash, matching the potion. */
  line?: boolean;
};

const gearPath =
  "M12.45 4.91 L14.27 1.85 L17.57 3.22 L16.70 6.67 L17.33 7.30 L20.78 6.43 L22.15 9.73 L19.09 11.55 L19.09 12.45 L22.15 14.27 L20.78 17.57 L17.33 16.70 L16.70 17.33 L17.57 20.78 L14.27 22.15 L12.45 19.09 L11.55 19.09 L9.73 22.15 L6.43 20.78 L7.30 17.33 L6.67 16.70 L3.22 17.57 L1.85 14.27 L4.91 12.45 L4.91 11.55 L1.85 9.73 L3.22 6.43 L6.67 7.30 L7.30 6.67 L6.43 3.22 L9.73 1.85 L11.55 4.91 Z M14.70 12.00 A2.7 2.7 0 1 0 9.30 12.00 A2.7 2.7 0 1 0 14.70 12.00 Z";

export function GearIcon({ size = 16, className = "", line = false }: IconProps) {
  if (line) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
        <g transform="translate(0.04 0.04) scale(1.33)">
          <path d={gearPath} fill="currentColor" fillRule="evenodd" opacity="0.28" />
          <path
            d={gearPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.13"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" fillRule="evenodd" d={gearPath} />
    </svg>
  );
}

const wrenchRing = "M7.6 10.4a5.6 5.6 0 1 0 .02 0zM7.6 13.8a2.2 2.2 0 1 0 .02 0z";
const wrenchJaw =
  "M11 13.4H16V5.2H26.6Q30 5.2 30 8.4V11.2H17.8V20.8H30V23.6Q30 26.8 26.6 26.8H16V18.6H11Z";
const wrenchHead =
  "M16 19.8a4.6 4.6 0 1 0 .02 0zM16 22.25l1.78 1.03v2.06L16 26.37l-1.78-1.03v-2.06Z";
const wrenchBody =
  "M14.4 20.6V12.2H8.6V6.6Q8.6 3.2 11 3.2H13V10H19V3.2H21Q23.4 3.2 23.4 6.6V12.2H17.6V20.6Z";

export function WrenchIcon({ size = 16, className = "", line = false }: IconProps) {
  if (line) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
        <g transform="rotate(-45 16 16)">
          <path d={wrenchHead} fill="currentColor" fillRule="evenodd" opacity="0.28" />
          <path d={wrenchBody} fill="currentColor" opacity="0.28" />
          <path d={wrenchHead} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path
            d={wrenchBody}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M16 13.8v4.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path fill="currentColor" fillRule="evenodd" d={wrenchRing} />
      <path fill="currentColor" d={wrenchJaw} />
    </svg>
  );
}

const flaskPath =
  "M13 4.6h6v3.8c2.4 1.2 5.4 3.6 5.4 8.1a8.4 8.4 0 1 1-16.8 0c0-4.5 3-6.9 5.4-8.1V4.6z";

export function PotionIcon({ size = 16, className = "", line = false }: IconProps) {
  const clipId = useId().replace(/:/g, "");
  const frame = line ? "translate(-3.4 0.05) scale(1.213)" : undefined;
  const stroke = line ? 1.24 : 1.5;

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <clipPath id={clipId}>
          <path d={flaskPath} />
        </clipPath>
      </defs>
      <g transform={frame}>
        <rect x="13.2" y="1.4" width="5.6" height="3.6" rx="0.7" fill="currentColor" />
        <g clipPath={`url(#${clipId})`}>
          <path fill="currentColor" opacity="0.28" d="M7 17.2h18V30H7z" />
          <path
            d="M9.4 17.2c1.4-1.1 3.2-.6 4.6.4 1.5 1 2.8.8 4.2-.2 1.3-.9 2.6-.7 4-.1"
            fill="none"
            stroke="currentColor"
            strokeWidth={line ? 0.91 : 1.1}
            strokeLinecap="round"
          />
          <circle cx="13.2" cy="21.4" r="0.7" fill="none" stroke="currentColor" strokeWidth={line ? 0.74 : 0.9} />
          <circle cx="18.4" cy="19.2" r="0.45" fill="currentColor" />
        </g>
        <path
          d={flaskPath}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
