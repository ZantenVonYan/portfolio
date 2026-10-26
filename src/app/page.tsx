import Link from "next/link";
import Nav from "@/components/Nav";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import ProjectCard from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";
import IllustrationGallery from "@/components/IllustrationGallery";
import ImpactMetrics from "@/components/ImpactMetrics";
import { illustrations } from "@/data/illustrations";
import { earlierWork, productCatalogHighlight, projects } from "@/data/projects";
import { GearIcon, PotionIcon, WrenchIcon } from "@/components/ArtificerIcons";
import SmoothScrollLink from "@/components/SmoothScrollLink";

const selectedImpact = [
  {
    value: "2",
    label: "Major product initiatives",
    description:
      "SupplyProof and Product Catalog — end-to-end design and delivery contributions in 2026.",
  },
  {
    value: "5",
    label: "Client workshops",
    description:
      "Participated in during 2025, including three for SupplyProof, gathering feedback to inform product decisions.",
  },
  {
    value: "2",
    label: "Designers mentored",
    description: "One year of formal mentorship, about 18 months including training.",
  },
  {
    value: "2",
    label: "UX practice initiatives",
    description:
      "The Buddy System and UX research guidelines with a shared repository, introduced in January 2026.",
  },
];

const ctaStyle = { fontSize: "13px", letterSpacing: "0.16em" } as const;

const primaryCta =
  "cta cta-primary inline-flex items-center justify-center gap-2 font-display font-semibold text-[#c9a84c] border border-[#c9a84c] px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c97a]";

const secondaryCta =
  "cta cta-secondary inline-flex items-center justify-center gap-2 font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c97a]";

const skills = [
  "Design Direction & Quality",
  "UX Strategy & Research",
  "Design Systems",
  "Team Enablement & Mentoring",
  "Cross-functional Delivery",
  "AI-assisted Experiences",
  "Information Architecture",
  "Interaction Design",
];

const leadershipPillars = [
  {
    icon: GearIcon,
    title: "Buddy System",
    body: "Introduced in January 2026 so designers could get earlier feedback, work through problems together, and share knowledge before formal critique. Participants reported earlier issue spotting, faster alignment, more room to explore alternatives, and better preparation for design reviews.",
  },
  {
    icon: PotionIcon,
    title: "Mentoring & Quality",
    body: "Mentored two designers for one year formally, about 18 months including training. The focus is structured feedback and professional development: helping designers explain their reasoning, prepare for reviews, and own their trade-offs.",
  },
  {
    icon: WrenchIcon,
    title: "Design → Development",
    body: "Co-led more than five Figma workshops with another design lead, across design, development, QA, and management. Participants showed a clearer grasp of design system components and documentation, and developers began using exact Figma measurements instead of ruler-based approximations.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-gradient text-[#e8dcc8]">
      <Nav />

      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, #c9a84c 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, #7a5f1a 0%, transparent 55%)`,
          }}
        />

        <div className="text-center max-w-3xl mx-auto">
          <div className="animate-in mb-6 flex justify-center text-[#c9a84c]" style={{ opacity: 0.85 }}>
            <PotionIcon size={64} />
          </div>

          <p
            className="font-display text-[#c9a84c] tracking-widest uppercase mb-8 animate-in animate-delay-1"
            style={{ fontSize: "13px", letterSpacing: "0.22em" }}
          >
            Portfolio · Lead UX/UI Designer
          </p>

          <h1
            className="font-display font-bold text-[#e8dcc8] leading-none animate-in animate-delay-1"
            style={{ fontSize: "clamp(38px, 6.5vw, 78px)" }}
          >
            Ana Mangotić
          </h1>
          <h1
            className="font-display font-bold leading-none mb-8 animate-in animate-delay-2"
            style={{ fontSize: "clamp(38px, 6.5vw, 78px)", color: "#c9a84c" }}
          >
            Rajković
          </h1>

          <OrnamentalDivider className="animate-in animate-delay-2" />

          <p
            className="font-body text-[#d4c4a8] mt-7 mb-4 animate-in animate-delay-3"
            style={{ fontSize: "clamp(16px, 2.2vw, 21px)", lineHeight: "1.65" }}
          >
            Making complex products simpler.
            <br />
            Making design teams stronger.
          </p>

          <p
            className="font-body text-[#b1aba0] mb-10 animate-in animate-delay-3"
            style={{
              fontSize: "clamp(14px, 1.8vw, 17px)",
              lineHeight: "1.7",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            I help B2B SaaS and enterprise teams turn complex workflows into intuitive, scalable
            experiences — the way a tool is made: strategy, research, and hands-on delivery, fitted
            from discovery through implementation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in animate-delay-4">
            <SmoothScrollLink href="#work" className={primaryCta} style={ctaStyle}>
              EXPLORE WORK
              <span className="cta-nudge cta-nudge-down" aria-hidden="true">↓</span>
            </SmoothScrollLink>
            <SmoothScrollLink href="#contact" className={secondaryCta} style={ctaStyle}>
              GET IN TOUCH
            </SmoothScrollLink>
          </div>
        </div>
      </header>

      <section id="work" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <SectionLabel>Selected Work</SectionLabel>
          <h2
            className="font-display text-[#e8dcc8] font-semibold"
            style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
          >
            Featured Projects
          </h2>
          <OrnamentalDivider />
          <p
            className="font-body text-[#8a7a65] mt-4 max-w-xl mx-auto"
            style={{ fontSize: "15px", lineHeight: "1.7" }}
          >
            Both sides of my practice: products shaped by hand, and the shared tools that help a
            design team work to one standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.earlier)
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>

        <article className="mt-8 border border-[#3a3020] bg-[#1a1712] p-8 md:p-10 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c30]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c30]" />
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <span
                className="inline-block font-display font-semibold text-[#e8dcc8] tracking-widest px-2.5 py-1 border border-[#867e72] mb-3"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                  background: "rgba(10, 9, 7, 0.82)",
                }}
              >
                {productCatalogHighlight.id}
              </span>
              <p
                className="font-display text-[#c9a84c] tracking-widest uppercase mb-2"
                style={{ fontSize: "13px", letterSpacing: "0.14em" }}
              >
                {productCatalogHighlight.type}
              </p>
              <h3
                className="font-display text-[#e8dcc8] font-semibold"
                style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
              >
                {productCatalogHighlight.title}
              </h3>
            </div>
            <span
              className="font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-3 py-1"
              style={{ fontSize: "13px", letterSpacing: "0.08em" }}
            >
              {productCatalogHighlight.year}
            </span>
          </div>
          <p
            className="font-body text-[#b8a488] mb-8"
            style={{ fontSize: "16px", lineHeight: "1.75" }}
          >
            {productCatalogHighlight.overview}
          </p>
          <ul className="space-y-4 m-0 mb-8 p-0 list-none">
            {productCatalogHighlight.contributions.map((item, i) => (
              <li key={item} className="flex items-start gap-4 border-l border-[#3a3020] pl-4">
                <span
                  className="font-display text-[#c9a84c] flex-shrink-0 mt-0.5"
                  style={{ fontSize: "11px", opacity: 0.6, letterSpacing: "0.1em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-[#b8a488]" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <ImpactMetrics
            metrics={productCatalogHighlight.metrics}
            label="Product Catalog contribution metrics"
          />
          <p
            className="font-body text-[#b8a488] mt-8"
            style={{ fontSize: "16px", lineHeight: "1.75" }}
          >
            {productCatalogHighlight.outcome}
          </p>
        </article>
      </section>

      <section id="impact" className="border-t border-[#3a3020] py-20 px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Selected Impact</SectionLabel>
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              Contributions at a Glance
            </h2>
            <OrnamentalDivider />
            <p
              className="font-body text-[#8a7a65] mt-4 max-w-xl mx-auto"
              style={{ fontSize: "15px", lineHeight: "1.7" }}
            >
              Scope of product ownership, client collaboration, mentorship, and practice leadership.
            </p>
          </div>
          <ImpactMetrics metrics={selectedImpact} label="Selected professional impact" />
        </div>
      </section>

      <section
        id="leadership"
        className="border-t border-[#3a3020] py-24 px-6 scroll-mt-24"
        style={{ background: "#12100d" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Design Leadership</SectionLabel>
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              Design Leadership & Team Enablement
            </h2>
            <OrnamentalDivider />
            <p
              className="font-body text-[#d4c4a8] mt-4 max-w-xl mx-auto"
              style={{ fontSize: "16px", lineHeight: "1.7" }}
            >
              Clarity over complexity. Collaboration over silos. Quality through consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-[#3a3020] bg-[#1a1712] p-8 relative"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c30]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c30]" />
                <p className="text-[#c9a84c] mb-3" style={{ opacity: 0.85 }}>
                  <pillar.icon size={32} line />
                </p>
                <h3
                  className="font-display text-[#e8dcc8] font-semibold mb-3"
                  style={{ fontSize: "15px" }}
                >
                  {pillar.title}
                </h3>
                <p className="font-body text-[#8a7a65]" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-body text-[#e8c97a] text-center max-w-2xl mx-auto mt-12"
            style={{ fontSize: "17px", lineHeight: "1.7" }}
          >
            Great design leadership isn&apos;t about having all the answers. It&apos;s about creating
            an environment where teams can ask better questions, make informed decisions, and deliver
            meaningful work.
          </p>
        </div>
      </section>

      <section className="border-t border-[#3a3020] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Earlier Work</SectionLabel>
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
            >
              Foundational Projects
            </h2>
            <OrnamentalDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earlierWork.map((project) => (
              <article
                key={project.id}
                className="border border-[#3a3020] bg-[#1a1712] relative group overflow-hidden card-glow transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#c9a84c30] z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#c9a84c30] z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#c9a84c30] z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#c9a84c30] z-10 pointer-events-none" />

                <Link
                  href={`/project/${project.slug}`}
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a84c]"
                >
                  <div className="relative aspect-video overflow-hidden bg-[#1a1712] isolate">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.previewUrl}
                      alt={project.previewAlt}
                      className="card-zoom object-top"
                    />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1a1712] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 z-[2]">
                      <span
                        className="inline-block font-display font-semibold text-[#e8dcc8] tracking-widest px-2.5 py-1 border border-[#867e72]"
                        style={{
                          fontSize: "13px",
                          letterSpacing: "0.18em",
                          background: "rgba(10, 9, 7, 0.82)",
                        }}
                      >
                        {project.id}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-[2] bg-[#1a1712] p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="font-display text-[#e8dcc8] font-semibold"
                        style={{ fontSize: "22px" }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="font-display font-semibold text-[#e8dcc8] border border-[#867e72] px-2.5 py-1 whitespace-nowrap flex-shrink-0"
                        style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                      >
                        {project.type.toUpperCase()}
                      </span>
                    </div>
                    <p className="font-body text-[#d4c4a8] mb-3" style={{ fontSize: "16px" }}>
                      {project.domain}
                    </p>
                    <div className="gold-rule mb-3" />
                    <p className="font-body text-[#e8dcc8] mb-5" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                      {project.challenge}
                    </p>
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
            ))}
          </div>
        </div>
      </section>

      <section id="illustration" className="border-t border-[#3a3020] py-24 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Illustration</SectionLabel>
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              Craft Beyond the Screen
            </h2>
            <OrnamentalDivider />
            <p
              className="font-body text-[#8a7a65] mt-4 max-w-xl mx-auto"
              style={{ fontSize: "15px", lineHeight: "1.7" }}
            >
              Selected personal illustrations — fantasy, character design, and narrative work that
              shaped my eye for atmosphere, storytelling, and craft.
            </p>
          </div>
          <IllustrationGallery items={illustrations} />
        </div>
      </section>

      <section
        id="about"
        className="border-t border-[#3a3020] py-24 px-6 scroll-mt-24"
        style={{ background: "#12100d" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1.35fr] gap-10 md:gap-12 items-start">
            <div>
              <SectionLabel>About</SectionLabel>
              <h2
                className="font-display text-[#e8dcc8] font-semibold leading-tight mb-6"
                style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
              >
                The
                <br />
                <span style={{ color: "#c9a84c" }}>Artificer</span>
              </h2>
              <OrnamentalDivider />
              <ul className="mt-8 space-y-3 m-0 p-0 list-none">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5">
                    <span className="text-[#c9a84c] leading-none mt-0.5">
                      <GearIcon size={13} />
                    </span>
                    <span
                      className="font-body text-[#e8dcc8]"
                      style={{ fontSize: "16px", lineHeight: "1.45" }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="relative border border-[#3a3020] bg-[#1a1712] overflow-hidden min-h-[320px] md:min-h-[420px] m-0">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a84c30] z-10" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#c9a84c30] z-10" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#c9a84c30] z-10" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a84c30] z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/ana-portrait.jpg"
                alt="Ana Mangotić Rajković"
                className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
              />
            </figure>

            <div className="space-y-5">
              <p
                className="font-body text-[#d4c4a8] leading-relaxed"
                style={{ fontSize: "17px", lineHeight: "1.8" }}
              >
                I&apos;m a Lead UX/UI Designer connecting product strategy, research, and hands-on
                design delivery. I lead initiatives from discovery to implementation, help teams
                navigate complex requirements, and create clear, consistent experiences that balance
                user needs, business goals, and technical feasibility.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              >
                My role extends beyond individual features: I guide design direction and quality,
                mentor designers through constructive reviews, strengthen design systems, reusable
                patterns, and research practices, and build alignment with product, engineering,
                stakeholders, and clients.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              >
                A multidisciplinary foundation shapes my approach. Over four years in professional
                UX/UI, and seven years as a physics educator, I learned to work analytically and to
                make complex ideas understandable. More than 16 years of freelance illustration
                strengthened my visual storytelling and attention to craft. Working with frontend
                technologies sharpened how I collaborate with engineering on implementation.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              >
                I treat design as both a creative and analytical practice: understand the problem,
                test how the pieces fit, and involve the right people until it holds. What motivates
                me most is a lasting impact — through the products I design, the people I support,
                and the practices I help improve.
              </p>
              <p className="font-body text-[#e8c97a]" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                &quot;Structure, curiosity, clarity, and care for the tools of the craft.&quot;
              </p>
              <a
                href="#illustration"
                className="link-nudge inline-flex items-center gap-2 font-display text-[#c9a84c] hover:text-[#e8c97a]"
                style={{ fontSize: "13px", letterSpacing: "0.14em" }}
              >
                VIEW ILLUSTRATIONS
                <span className="cta-nudge cta-nudge-right" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#3a3020] py-24 px-6 scroll-mt-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center text-[#c9a84c]" style={{ opacity: 0.85 }}>
            <PotionIcon size={52} />
          </div>
          <SectionLabel>Contact</SectionLabel>
          <h2
            className="font-display text-[#e8dcc8] font-semibold mb-4"
            style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
          >
            Begin a Collaboration
          </h2>
          <OrnamentalDivider />
          <p
            className="font-body text-[#b8a488] mt-6 mb-10"
            style={{ fontSize: "17px", lineHeight: "1.7" }}
          >
            Better products start at the bench: clear thinking, then careful making. I&apos;m open to
            remote Lead and Principal UX/UI roles in B2B SaaS and enterprise organizations, as well as
            consultations and creative partnerships — especially work that shapes product direction
            and strengthens design maturity. Every great design begins with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:vanna.ana@hotmail.com" className={primaryCta} style={ctaStyle}>
              SEND AN EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/ana-mangotic-rajkovic-6164681a4/"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryCta}
              style={ctaStyle}
            >
              LINKEDIN
              <span className="cta-nudge cta-nudge-right" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3a3020] py-6 px-6" style={{ background: "#0a0907" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display text-[#8a7a65]" style={{ fontSize: "9px", letterSpacing: "0.2em" }}>
            © 2024 ANA MANGOTIĆ RAJKOVIĆ
          </p>
          <p className="font-body text-[#8a7a65]" style={{ fontSize: "14px" }}>
            Lead UX/UI Designer
          </p>
        </div>
      </footer>
    </div>
  );
}
