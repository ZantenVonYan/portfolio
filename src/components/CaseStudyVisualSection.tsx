import CaseStudyFigure from "@/components/CaseStudyFigure";
import CaseStudyPhotoSet from "@/components/CaseStudyPhotoSet";

export type VisualBeat = {
  step: string;
  title: string;
  body: string;
  layout:
    | "overview"
    | "detail"
    | "states-grid"
    | "states-stack"
    | "equal-three"
    | "featured-support"
    | "responsive-pair"
    | "comparison-pair"
    | "crop-grid"
    | "photo-set";
  figures: {
    src: string;
    alt: string;
    caption?: string;
    label?: string;
    contain?: boolean;
    /** Span both columns in a two-column crop grid. */
    span?: "full";
  }[];
};

export type VisualSectionData = {
  eyebrow: string;
  title: string;
  intro: string;
  beats: VisualBeat[];
};

export default function CaseStudyVisualSection({
  section,
  beatsOnly = false,
}: {
  section: VisualSectionData;
  /** When true, skip the section eyebrow/title/intro and render beats only. */
  beatsOnly?: boolean;
}) {
  const Wrapper = beatsOnly ? "div" : "section";

  return (
    <Wrapper className="space-y-12">
      {!beatsOnly && (section.eyebrow || section.title || section.intro) && (
        <div>
          {section.eyebrow ? (
            <p
              className="font-display text-[#c9a84c] tracking-widest mb-3"
              style={{ fontSize: "13px", letterSpacing: "0.18em", marginBottom: "12px" }}
            >
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h2
              className="font-display text-[#e8dcc8] font-semibold mb-6"
              style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
            >
              {section.title}
            </h2>
          ) : null}
          {section.intro ? (
            <p
              className="font-body text-[#b8a488] leading-relaxed"
              style={{ fontSize: "18px", lineHeight: "1.95" }}
            >
              {section.intro}
            </p>
          ) : null}
        </div>
      )}

      <div className="space-y-14">
        {section.beats.map((beat) => {
          const showBeatCopy = Boolean(beat.title || beat.body);

          return (
            <div key={beat.step} className="space-y-6">
            {showBeatCopy ? (
              <div className="flex items-start gap-5 border-l border-[#3a3020] pl-5">
                <span
                  className="font-display text-[#c9a84c] flex-shrink-0 mt-1"
                  style={{ fontSize: "11px", opacity: 0.7, letterSpacing: "0.1em" }}
                >
                  {beat.step}
                </span>
                <div className="min-w-0">
                  {beat.title ? (
                    <h3
                      className="font-display text-[#e8dcc8] font-semibold mb-3"
                      style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
                    >
                      {beat.title}
                    </h3>
                  ) : null}
                  {beat.body ? (
                    <p
                      className="font-body text-[#b8a488]"
                      style={{ fontSize: "16px", lineHeight: "1.85" }}
                    >
                      {beat.body}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}

            {beat.layout === "photo-set" ? (
              <CaseStudyPhotoSet
                label="RESEARCH · USABILITY TESTING"
                caption="Select a photo to view it larger."
                photos={beat.figures}
              />
            ) : beat.layout === "responsive-pair" ? (
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
                {beat.figures[0] ? (
                  <div className="w-full min-w-0 lg:flex-1">
                    <CaseStudyFigure {...beat.figures[0]} contain />
                  </div>
                ) : null}
                {beat.figures[1] ? (
                  <div className="w-full max-w-[280px] shrink-0">
                    <CaseStudyFigure {...beat.figures[1]} contain />
                  </div>
                ) : null}
              </div>
            ) : beat.layout === "comparison-pair" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                {beat.figures.map((figure) => (
                  <CaseStudyFigure key={figure.src} {...figure} contain />
                ))}
              </div>
            ) : beat.layout === "crop-grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {beat.figures.map((figure) => (
                  <div
                    key={figure.src}
                    className={figure.span === "full" ? "md:col-span-2" : undefined}
                  >
                    <CaseStudyFigure {...figure} contain />
                  </div>
                ))}
              </div>
            ) : beat.layout === "equal-three" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                {beat.figures.map((figure) => (
                  <CaseStudyFigure key={figure.src} {...figure} contain />
                ))}
              </div>
            ) : beat.layout === "featured-support" ? (
              <div className="space-y-4">
                {beat.figures[0] ? (
                  <CaseStudyFigure {...beat.figures[0]} contain />
                ) : null}
                {beat.figures.length > 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {beat.figures.slice(1).map((figure) => (
                      <CaseStudyFigure key={figure.src} {...figure} contain />
                    ))}
                  </div>
                ) : null}
              </div>
            ) : beat.layout === "states-grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {beat.figures.map((figure) => (
                  <CaseStudyFigure key={figure.src} {...figure} contain />
                ))}
              </div>
            ) : beat.layout === "states-stack" ? (
              <div className="space-y-4">
                {beat.figures.map((figure) => (
                  <CaseStudyFigure key={figure.src} {...figure} contain />
                ))}
              </div>
            ) : beat.layout === "detail" && beat.figures.length > 1 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {beat.figures.map((figure) => (
                  <CaseStudyFigure key={figure.src} {...figure} contain />
                ))}
              </div>
            ) : (
              beat.figures.map((figure) => (
                <CaseStudyFigure
                  key={figure.src}
                  {...figure}
                  contain={figure.contain ?? beat.layout !== "overview"}
                />
              ))
            )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
