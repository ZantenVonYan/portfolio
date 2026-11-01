import Link from "next/link";
import type { Project } from "@/data/projects";

const chipStyle = { fontSize: "13px", letterSpacing: "0.08em" } as const;

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`group relative border border-[#3a3020] bg-[#1a1712] card-glow transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden animate-in animate-delay-${Math.min(index + 1, 4)}`}
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#c9a84c30] z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#c9a84c30] z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#c9a84c30] z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#c9a84c30] z-10 pointer-events-none" />

      <Link href={`/project/${project.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a84c]">
        <div className="relative h-56 overflow-hidden bg-[#1a1712] isolate">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.previewUrl}
            alt={project.previewAlt}
            className="card-zoom object-top"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1a1712] via-[#1a1712]/40 to-transparent" />
          <div className="absolute top-3 left-3 z-[2]">
            <span
              className="inline-block font-display font-semibold text-[#e8dcc8] tracking-widest px-2.5 py-1 border border-[#867e72]"
              style={{
                ...chipStyle,
                letterSpacing: "0.18em",
                background: "rgba(10, 9, 7, 0.82)",
              }}
            >
              {project.id}
            </span>
          </div>
          {project.year ? (
            <div className="absolute top-3 right-3 z-[2]">
              <span
                className="inline-block font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-2.5 py-1"
                style={{
                  ...chipStyle,
                  background: "rgba(10, 9, 7, 0.82)",
                }}
              >
                {project.year}
              </span>
            </div>
          ) : null}
        </div>

        <div className="relative z-[2] bg-[#1a1712] p-8">
          <p
            className="font-display text-[#c9a84c] mb-2 tracking-widest uppercase"
            style={{ fontSize: "16px", letterSpacing: "0.12em" }}
          >
            {project.type}
          </p>
          <h3
            className="font-display text-[#e8dcc8] font-semibold leading-tight mb-2"
            style={{ fontSize: "26px" }}
          >
            {project.title}
          </h3>
          <p className="font-body text-[#d4c4a8] mb-4" style={{ fontSize: "18px" }}>
            {project.domain}
          </p>

          <div className="gold-rule mb-4" />

          <p
            className="font-body text-[#e8dcc8] leading-relaxed mb-5"
            style={{ fontSize: "18px", lineHeight: "1.7" }}
          >
            {project.challenge}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-2.5 py-1"
                style={chipStyle}
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <span
            className="case-link inline-flex items-center gap-1.5 font-display text-[#c9a84c]"
            style={{ fontSize: "13px", letterSpacing: "0.16em" }}
          >
            VIEW CASE STUDY
            <span className="case-link-arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
