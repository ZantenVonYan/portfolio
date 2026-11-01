export type ImpactMetric = {
  value: string;
  label: string;
  description?: string;
};

function valueSize(value: string) {
  if (value.length > 8) return "clamp(20px, 2.6vw, 28px)";
  if (value.length > 3) return "clamp(26px, 3.2vw, 36px)";
  return "clamp(28px, 4vw, 42px)";
}

function columnClass(count: number) {
  if (count <= 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";
}

export default function ImpactMetrics({
  metrics,
  label = "Impact metrics",
}: {
  metrics: ImpactMetric[];
  label?: string;
}) {
  if (metrics.length === 0) return null;

  return (
    <ul
      aria-label={label}
      className={`grid ${columnClass(metrics.length)} gap-px border border-[#3a3020] bg-[#3a3020] m-0 p-0 list-none`}
    >
      {metrics.map((metric) => (
        <li key={`${metric.value}-${metric.label}`} className="bg-[#1a1712] px-6 py-8 text-center">
          <p
            className="font-display text-[#c9a84c] font-semibold leading-none mb-3"
            style={{ fontSize: valueSize(metric.value) }}
          >
            {metric.value}
          </p>
          <p
            className="font-display text-[#d4c4a8] tracking-wider"
            style={{ fontSize: "14px", letterSpacing: "0.1em", lineHeight: "1.45" }}
          >
            {metric.label.toUpperCase()}
          </p>
          {metric.description ? (
            <p
              className="font-body text-[#b8a488] mt-3 max-w-xs mx-auto"
              style={{ fontSize: "17px", lineHeight: "1.6" }}
            >
              {metric.description}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
