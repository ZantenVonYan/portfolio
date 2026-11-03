import Link from "next/link";
import { notFound } from "next/navigation";
import Nav, { WorkHashLink } from "@/components/Nav";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import CaseStudyVisualSection from "@/components/CaseStudyVisualSection";
import ResearchProtocol from "@/components/ResearchProtocol";
import ImpactMetrics from "@/components/ImpactMetrics";
import { getProjectBySlug, projects } from "@/data/projects";

function PointList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-6 m-0 p-0 list-none">
      {items.map((item, i) => (
        <li key={`${i}-${item}`} className="flex items-start gap-5 border-l border-[#3a3020] pl-5">
          <span
            className="font-display text-[#c9a84c] flex-shrink-0 mt-1"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="font-body text-[#b8a488]" style={{ fontSize: "17px", lineHeight: "1.8" }}>
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} · Ana Mangotić Rajković`,
    description: project.challenge,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  const flowSection = project.visualSections?.[0];
  const approachVisualSection = project.visualSections?.[1];
  const showSecondaryImage =
    Boolean(project.caseStudyImages[1]) && !project.hideSecondaryCaseImage;

  return (
    <div className="min-h-screen bg-stone-gradient text-[#e8dcc8]">
      <Nav />

      <main id="main">
      <header className="pt-52 sm:pt-40 pb-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <p
            className="font-display text-[#c9a84c] tracking-widest mb-4"
            style={{ fontSize: "17px", letterSpacing: "0.14em" }}
          >
            {project.type.toUpperCase()}
          </p>
          <h1
            className="font-display font-bold text-[#e8dcc8] leading-tight mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            {project.title}
          </h1>
          <p className="font-body text-[#d4c4a8] mb-8" style={{ fontSize: "18px", lineHeight: "1.5" }}>
            {project.domain}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-3 py-1"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}
              >
                {tag.toUpperCase()}
              </span>
            ))}
            {project.year ? (
              <span
                className="font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-3 py-1"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}
              >
                {project.year}
              </span>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            {project.siteUrl ? (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-nudge inline-flex items-center gap-2 font-display font-semibold text-[#c9a84c] hover:text-[#e8c97a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
                style={{ fontSize: "13px", letterSpacing: "0.16em" }}
              >
                VISIT {new URL(project.siteUrl).host.toUpperCase()}
                <span className="sr-only"> (opens in a new tab)</span>
                <span className="cta-nudge cta-nudge-right" aria-hidden="true">
                  →
                </span>
              </a>
            ) : null}
            {project.figmaUrl ? (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-nudge inline-flex items-center gap-2 font-display font-semibold text-[#c9a84c] hover:text-[#e8c97a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
                style={{ fontSize: "13px", letterSpacing: "0.16em" }}
              >
                VIEW IN FIGMA
                <span className="sr-only"> (opens in a new tab)</span>
                <span className="cta-nudge cta-nudge-right" aria-hidden="true">
                  →
                </span>
              </a>
            ) : null}
          </div>

          <nav aria-label="On this page" className="mb-8">
            <p
              className="font-display text-[#8a7a65] mb-3"
              style={{ fontSize: "13px", letterSpacing: "0.14em" }}
            >
              ON THIS PAGE
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 m-0 p-0 list-none">
              <li>
                <SmoothScrollLink
                  href="#challenge"
                  className="font-display text-[#d4c4a8] hover:text-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
                  style={{ fontSize: "16px" }}
                >
                  Challenge
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink
                  href="#approach"
                  className="font-display text-[#d4c4a8] hover:text-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
                  style={{ fontSize: "16px" }}
                >
                  Approach
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink
                  href="#outcome"
                  className="font-display text-[#d4c4a8] hover:text-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
                  style={{ fontSize: "16px" }}
                >
                  Outcome
                </SmoothScrollLink>
              </li>
              {project.showResearchProtocol ? (
                <li>
                  <SmoothScrollLink
                    href="#research-protocol"
                    className="font-display text-[#d4c4a8] hover:text-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
                    style={{ fontSize: "16px" }}
                  >
                    Research protocol
                  </SmoothScrollLink>
                </li>
              ) : null}
            </ul>
          </nav>

          <OrnamentalDivider />
        </div>
      </header>

      {project.caseStudyImages[0] && (
        <div className="border-b border-[#3a3020] bg-[#0a0907]">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 py-12">
            <div className="relative overflow-hidden border border-[#3a3020]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.caseStudyImages[0].src}
                alt={project.caseStudyImages[0].alt}
                className={
                  project.caseStudyImages[0].contain
                    ? "block w-full h-auto object-contain bg-[#0a0907]"
                    : "w-full object-cover object-top max-h-[min(75vh,820px)]"
                }
              />
              {project.caseStudyImages[0].caption && (
                <p
                  className="font-body text-[#b8a488] px-4 py-3 border-t border-[#3a3020]"
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  {project.caseStudyImages[0].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-20 space-y-20">
        <section id="challenge" className="anchor-target focus:outline-none">
          <h2
            className="font-display text-[#e8dcc8] font-semibold"
            style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
          >
            Challenge
          </h2>
          <p
            className="font-display text-[#c9a84c] mt-3 mb-6"
            style={{ fontSize: "18px", letterSpacing: "0.08em" }}
          >
            Context and problem
          </p>
          <p
            className="font-body text-[#b8a488] leading-relaxed"
            style={{ fontSize: "18px", lineHeight: "1.95" }}
          >
            {project.challenge}
          </p>
          {project.challengePoints && project.challengePoints.length > 0 && (
            <div className="mt-8">
              <PointList items={project.challengePoints} />
            </div>
          )}
        </section>

        <div className="gold-rule" />

        <div className="space-y-20">
        {flowSection ? (
          <>
            <CaseStudyVisualSection section={flowSection} />
            <div className="gold-rule" />
          </>
        ) : null}

        <section id="approach" className="anchor-target space-y-12 focus:outline-none">
          <div>
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
            >
              Approach
            </h2>
            <p
              className="font-display text-[#c9a84c] mt-3 mb-8"
              style={{ fontSize: "18px", letterSpacing: "0.08em" }}
            >
              What I contributed
            </p>
            <p
              className="font-body text-[#b8a488] leading-relaxed"
              style={{ fontSize: "18px", lineHeight: "1.95" }}
            >
              {project.contribution}
            </p>
            {project.contributionPoints && project.contributionPoints.length > 0 && (
              <div className="mt-8">
                <PointList items={project.contributionPoints} />
              </div>
            )}
          </div>

          {project.focusAreas && project.focusAreas.length > 0 && (
            <div className="space-y-12 pt-4 border-t border-[#3a3020]">
              {project.focusAreas.map((area) => (
                <div key={area.title}>
                  <h3
                    className="font-display text-[#e8dcc8] font-semibold mb-4"
                    style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className="font-body text-[#b8a488] leading-relaxed"
                    style={{ fontSize: "17px", lineHeight: "1.9" }}
                  >
                    {area.body}
                  </p>
                  {area.points && area.points.length > 0 && (
                    <div className="mt-6">
                      <PointList items={area.points} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {approachVisualSection && (
            <div className="space-y-10 pt-4 border-t border-[#3a3020]">
              {approachVisualSection.eyebrow ||
              approachVisualSection.title ||
              approachVisualSection.intro ? (
                <div>
                  {approachVisualSection.eyebrow ? (
                    <p
                      className="font-display text-[#c9a84c] tracking-widest mb-3"
                      style={{ fontSize: "17px", letterSpacing: "0.14em", marginBottom: "12px" }}
                    >
                      {approachVisualSection.eyebrow}
                    </p>
                  ) : null}
                  {approachVisualSection.title ? (
                    <h3
                      className="font-display text-[#e8dcc8] font-semibold mb-4"
                      style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
                    >
                      {approachVisualSection.title}
                    </h3>
                  ) : null}
                  {approachVisualSection.intro ? (
                    <p
                      className="font-body text-[#b8a488] leading-relaxed"
                      style={{ fontSize: "17px", lineHeight: "1.9" }}
                    >
                      {approachVisualSection.intro}
                    </p>
                  ) : null}
                </div>
              ) : null}
              <CaseStudyVisualSection section={approachVisualSection} beatsOnly />
            </div>
          )}
        </section>
        </div>

        {showSecondaryImage && (
          <div className="border border-[#3a3020] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.caseStudyImages[1].src}
              alt={project.caseStudyImages[1].alt}
              className="w-full object-cover"
            />
            {project.caseStudyImages[1].caption && (
              <p
                className="font-body text-[#b8a488] px-6 py-4 border-t border-[#3a3020]"
                style={{ fontSize: "14px", lineHeight: "1.6" }}
              >
                {project.caseStudyImages[1].caption}
              </p>
            )}
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <>
            <div className="gold-rule" />
            <section aria-labelledby={`${project.slug}-metrics-heading`}>
              <p
                className="font-display text-[#c9a84c] tracking-widest mb-3"
                style={{ fontSize: "17px", letterSpacing: "0.14em", marginBottom: "12px" }}
              >
                SCOPE
              </p>
              <h2
                id={`${project.slug}-metrics-heading`}
                className="font-display text-[#e8dcc8] font-semibold mb-8"
                style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
              >
                Contribution in Numbers
              </h2>
              <ImpactMetrics metrics={project.metrics} label={`${project.title} contribution metrics`} />
            </section>
          </>
        )}

        <div className="gold-rule" />

        <section>
          <h2
            className="font-display text-[#e8dcc8] font-semibold"
            style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
          >
            Key decisions
          </h2>
          <p
            className="font-display text-[#c9a84c] mt-3 mb-8"
            style={{ fontSize: "18px", letterSpacing: "0.08em" }}
          >
            Strategic choices
          </p>
          <ul className="space-y-6">
            {project.keyDecisions.map((decision, i) => (
              <li key={decision} className="flex items-start gap-5 border-l border-[#3a3020] pl-5">
                <span
                  className="font-display text-[#c9a84c] flex-shrink-0 mt-1"
                  style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-[#b8a488]" style={{ fontSize: "17px", lineHeight: "1.8" }}>
                  {decision}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="gold-rule" />

        <section id="outcome" className="anchor-target focus:outline-none">
          <h2
            className="font-display text-[#e8dcc8] font-semibold"
            style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
          >
            Outcome
          </h2>
          <p
            className="font-display text-[#c9a84c] mt-3 mb-6"
            style={{ fontSize: "18px", letterSpacing: "0.08em" }}
          >
            Results and evidence
          </p>
          <p
            className="font-body text-[#b8a488] leading-relaxed"
            style={{ fontSize: "18px", lineHeight: "1.9" }}
          >
            {project.outcome}
          </p>

          {project.workshopFeedback && project.workshopFeedback.length > 0 && (
            <div className="mt-10">
              <h3
                className="font-display text-[#e8dcc8] font-semibold mb-4"
                style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
              >
                Workshop feedback
              </h3>
              <p
                className="font-body text-[#b8a488] leading-relaxed mb-6"
                style={{ fontSize: "17px", lineHeight: "1.85" }}
              >
                Comments from client workshops showed interest in the direction and pointed to
                further refinements.
              </p>
              <div className="space-y-6">
                {project.workshopFeedback.map((quote) => (
                  <blockquote key={quote} className="border-l border-[#c9a84c40] pl-5 m-0">
                    <p
                      className="font-body text-[#d4c4a8] italic"
                      style={{ fontSize: "18px", lineHeight: "1.7" }}
                    >
                      &ldquo;{quote}&rdquo;
                    </p>
                    <footer
                      className="font-display text-[#8a7a65] mt-2"
                      style={{ fontSize: "10px", letterSpacing: "0.16em" }}
                    >
                      CLIENT WORKSHOP
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          )}

          {project.reflection && (
            <div className="mt-10 pt-10 border-t border-[#3a3020]">
              <h3
                className="font-display text-[#e8dcc8] font-semibold mb-4"
                style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
              >
                {project.reflection.title}
              </h3>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "17px", lineHeight: "1.9" }}
              >
                {project.reflection.body}
              </p>
            </div>
          )}
        </section>

        <div className="gold-rule" />

        <section className="border border-[#3a3020] bg-[#1a1712] p-10 relative">
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#c9a84c30]" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#c9a84c30]" />
          <h2
            className="font-display text-[#e8dcc8] font-semibold"
            style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
          >
            Leadership lens
          </h2>
          <p
            className="font-display text-[#c9a84c] mt-3 mb-5"
            style={{ fontSize: "18px", letterSpacing: "0.08em" }}
          >
            What this demonstrates
          </p>
          <p
            className="font-body text-[#e8dcc8]"
            style={{ fontSize: "17px", lineHeight: "1.8" }}
          >
            {project.leadershipLens}
          </p>
        </section>

        {project.showResearchProtocol && (
          <>
            <div className="gold-rule" />
            <ResearchProtocol />
          </>
        )}
      </div>

      <div
        className="border-t border-[#3a3020] py-16 px-6 sm:px-12"
        style={{ background: "#12100d" }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          {prev ? (
            <Link
              href={`/project/${prev.slug}`}
              className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <span className="font-display text-[#c9a84c]" style={{ fontSize: "18px" }}>
                ←
              </span>
              <div>
                <p
                  className="font-display text-[#8a7a65]"
                  style={{ fontSize: "13px", letterSpacing: "0.14em" }}
                >
                  PREVIOUS
                </p>
                <p
                  className="font-display text-[#e8dcc8] font-semibold"
                  style={{ fontSize: "14px" }}
                >
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <WorkHashLink
            className="font-display text-[#d4c4a8] border border-[#867e72] px-5 py-2 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all duration-300"
            style={{ fontSize: "13px", letterSpacing: "0.14em" }}
          >
            ALL PROJECTS
          </WorkHashLink>

          {next ? (
            <Link
              href={`/project/${next.slug}`}
              className="group flex items-center gap-3 text-right hover:opacity-80 transition-opacity"
            >
              <div>
                <p
                  className="font-display text-[#8a7a65]"
                  style={{ fontSize: "13px", letterSpacing: "0.14em" }}
                >
                  NEXT
                </p>
                <p
                  className="font-display text-[#e8dcc8] font-semibold"
                  style={{ fontSize: "14px" }}
                >
                  {next.title}
                </p>
              </div>
              <span className="font-display text-[#c9a84c]" style={{ fontSize: "18px" }}>
                →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
      </main>
      <div id="scroll-end-spacer" aria-hidden="true" />
    </div>
  );
}
