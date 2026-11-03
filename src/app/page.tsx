import Link from "next/link";
import Nav from "@/components/Nav";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import ProjectCard from "@/components/ProjectCard";
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
    description: "End-to-end design and delivery in 2026.",
    links: [
      { href: "/project/supply-proof", label: "SupplyProof" },
      { href: "#product-catalog", label: "Product Catalog" },
    ],
  },
  {
    value: "5",
    label: "Client workshops",
    description: "In 2025, including three for SupplyProof.",
    links: [{ href: "/project/supply-proof", label: "SupplyProof" }],
  },
  {
    value: "2",
    label: "Designers mentored",
    description: "One year formally, about 18 months including training.",
    links: [{ href: "/project/ux-practice-framework", label: "UX Practice Framework" }],
  },
  {
    value: "2",
    label: "UX practice initiatives",
    description: "The Buddy System and shared research guidelines, January 2026.",
    links: [{ href: "/project/ux-practice-framework", label: "UX Practice Framework" }],
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
    body: "Introduced in January 2026 so designers could get earlier feedback before formal critique.",
  },
  {
    icon: PotionIcon,
    title: "Mentoring & Quality",
    body: "Mentored two designers for one year formally, about 18 months including training.",
  },
  {
    icon: WrenchIcon,
    title: "Design → Development",
    body: "Co-led more than five Figma workshops with another design lead, across design, development, QA, and management.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-gradient text-[#e8dcc8]">
      <Nav />

      <main id="main">
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-56 sm:pt-20 pb-24 overflow-hidden">
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
            style={{ fontSize: "17px", letterSpacing: "0.14em" }}
          >
            Portfolio · Lead UX/UI Designer
          </p>

          <h1
            className="font-display font-bold leading-none mb-8 animate-in animate-delay-1"
            style={{ fontSize: "clamp(38px, 6.5vw, 78px)" }}
          >
            <span className="block text-[#e8dcc8]">Ana Mangotić</span>
            <span className="block text-[#c9a84c]">Rajković</span>
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
              fontSize: "clamp(17px, 1.9vw, 19px)",
              lineHeight: "1.7",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            I help product teams, especially in B2B SaaS and enterprise, turn complex workflows
            into intuitive, scalable experiences — the way a tool is made: strategy, research, and
            hands-on delivery, fitted from discovery through implementation.
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

      <section id="work" className="max-w-6xl mx-auto px-6 py-24 anchor-target">
        <div className="text-center mb-16">
          <h2
            className="font-display text-[#e8dcc8] font-semibold"
            style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
          >
            Work
          </h2>
          <p
            className="font-display text-[#c9a84c] mt-3"
            style={{ fontSize: "18px", letterSpacing: "0.08em" }}
          >
            Selected work
          </p>
          <OrnamentalDivider />
          <p
            className="font-body text-[#d4c4a8] mt-4 max-w-xl mx-auto"
            style={{ fontSize: "18px", lineHeight: "1.7" }}
          >
            Featured case studies, the Product Catalog summary, and earlier projects. Both sides of
            my practice: products shaped by hand, and the shared tools that help a design team work
            to one standard. New projects will be added here as time passes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.earlier)
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>

        <article
          id="product-catalog"
          className="mt-8 anchor-target border border-[#3a3020] bg-[#1a1712] p-8 md:p-10 relative"
        >
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
                style={{ fontSize: "16px", letterSpacing: "0.12em" }}
              >
                {productCatalogHighlight.type}
              </p>
              <h3
                className="font-display text-[#e8dcc8] font-semibold"
                style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
              >
                {productCatalogHighlight.title}
              </h3>
              <p className="font-body text-[#e8c97a] mt-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                Summary on this page. A full case study is not published for this project.
              </p>
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
            style={{ fontSize: "18px", lineHeight: "1.75" }}
          >
            {productCatalogHighlight.overview}
          </p>
          <ul className="space-y-4 m-0 mb-8 p-0 list-none">
            {productCatalogHighlight.contributions.map((item) => (
              <li key={item} className="border-l border-[#3a3020] pl-4">
                <p className="font-body text-[#d4c4a8]" style={{ fontSize: "18px", lineHeight: "1.7" }}>
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
            style={{ fontSize: "18px", lineHeight: "1.75" }}
          >
            {productCatalogHighlight.outcome}
          </p>
        </article>

        <div id="earlier-work" className="mt-20 anchor-target">
          <div className="mb-12">
            <h3
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
            >
              Earlier work
            </h3>
            <p
              className="font-display text-[#c9a84c] mt-3"
              style={{ fontSize: "18px", letterSpacing: "0.08em" }}
            >
              Foundational projects
            </p>
            <OrnamentalDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {earlierWork.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} headingLevel={4} />
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="border-t border-[#3a3020] py-20 px-6 anchor-target">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              Impact
            </h2>
            <p
              className="font-display text-[#c9a84c] mt-3"
              style={{ fontSize: "18px", letterSpacing: "0.08em" }}
            >
              Contributions at a glance
            </p>
            <OrnamentalDivider />
            <p
              className="font-body text-[#d4c4a8] mt-4 max-w-xl mx-auto"
              style={{ fontSize: "18px", lineHeight: "1.7" }}
            >
              Scope of product ownership, client collaboration, mentorship, and practice leadership.
            </p>
          </div>
          <ImpactMetrics metrics={selectedImpact} label="Selected professional impact" />
        </div>
      </section>

      <section
        id="leadership"
        className="border-t border-[#3a3020] py-24 px-6 anchor-target"
        style={{ background: "#12100d" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              Leadership
            </h2>
            <p
              className="font-display text-[#c9a84c] mt-3"
              style={{ fontSize: "18px", letterSpacing: "0.08em" }}
            >
              Design leadership and team enablement
            </p>
            <OrnamentalDivider />
            <p
              className="font-body text-[#d4c4a8] mt-4 max-w-xl mx-auto"
              style={{ fontSize: "18px", lineHeight: "1.7" }}
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
                  style={{ fontSize: "22px" }}
                >
                  {pillar.title}
                </h3>
                <p className="font-body text-[#d4c4a8]" style={{ fontSize: "17px", lineHeight: "1.7" }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12">
            <Link
              href="/project/ux-practice-framework"
              className="link-nudge inline-flex items-center gap-2 font-display text-[#c9a84c] hover:text-[#e8c97a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
              style={{ fontSize: "13px", letterSpacing: "0.14em" }}
            >
              VIEW THE UX PRACTICE FRAMEWORK CASE STUDY
              <span className="cta-nudge cta-nudge-right" aria-hidden="true">→</span>
            </Link>
          </p>

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

      <section id="illustration" className="border-t border-[#3a3020] py-24 px-6 anchor-target">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              Illustration
            </h2>
            <p
              className="font-display text-[#c9a84c] mt-3"
              style={{ fontSize: "18px", letterSpacing: "0.08em" }}
            >
              Craft beyond the screen
            </p>
            <OrnamentalDivider />
            <p
              className="font-body text-[#d4c4a8] mt-4 max-w-xl mx-auto"
              style={{ fontSize: "18px", lineHeight: "1.7" }}
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
        className="border-t border-[#3a3020] py-24 px-6 anchor-target"
        style={{ background: "#12100d" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1.35fr] gap-10 md:gap-12 items-start">
            <div>
              <h2
                className="font-display text-[#e8dcc8] font-semibold leading-tight mb-3"
                style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
              >
                About
              </h2>
              <p
                className="font-display font-semibold leading-tight mb-6"
                style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#c9a84c" }}
              >
                The Artificer
              </p>
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
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                I&apos;m a Lead UX/UI Designer connecting product strategy, research, and hands-on
                design delivery. I lead initiatives from discovery to implementation, help teams
                navigate complex requirements, and create clear, consistent experiences that balance
                user needs, business goals, and technical feasibility.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                My role extends beyond individual features: I guide design direction and quality,
                mentor designers through constructive reviews, strengthen design systems, reusable
                patterns, and research practices, and build alignment with product, engineering,
                stakeholders, and clients.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                A multidisciplinary foundation shapes my approach. Over four years in professional
                UX/UI, and seven years as a physics educator, I learned to work analytically and to
                make complex ideas understandable. More than 16 years of freelance illustration
                strengthened my visual storytelling and attention to craft. Working with frontend
                technologies sharpened how I collaborate with engineering on implementation.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                I treat design as both a creative and analytical practice: understand the problem,
                test how the pieces fit, and involve the right people until it holds. What motivates
                me most is a lasting impact — through the products I design, the people I support,
                and the practices I help improve.
              </p>
              <p
                className="font-body text-[#b8a488] leading-relaxed"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                I&apos;m also working on AI topics, using Microsoft Copilot, Claude, and Cursor.
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

      <section id="contact" className="border-t border-[#3a3020] py-24 px-6 anchor-target">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center text-[#c9a84c]" style={{ opacity: 0.85 }}>
            <PotionIcon size={52} />
          </div>
          <h2
            className="font-display text-[#e8dcc8] font-semibold mb-3"
            style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
          >
            Contact
          </h2>
          <p className="font-display text-[#c9a84c] mb-4" style={{ fontSize: "18px", letterSpacing: "0.08em" }}>
            Begin a collaboration
          </p>
          <OrnamentalDivider />
          <p
            className="font-body text-[#d4c4a8] mt-6 mb-6"
            style={{ fontSize: "18px", lineHeight: "1.7" }}
          >
            Better products start at the bench: clear thinking, then careful making. I&apos;m open to
            remote Lead and Principal UX/UI roles in B2B SaaS and enterprise organizations, as well as
            consultations and creative partnerships — especially work that shapes product direction
            and strengthens design maturity. Every great design begins with a conversation.
          </p>
          <p className="mb-8">
            <a
              href="mailto:vanna.ana@hotmail.com"
              className="font-body text-[#e8dcc8] underline decoration-[#c9a84c] underline-offset-4 hover:text-[#c9a84c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8c97a]"
              style={{ fontSize: "20px" }}
            >
              vanna.ana@hotmail.com
            </a>
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
              <span className="sr-only"> (opens in a new tab)</span>
              <span className="cta-nudge cta-nudge-right" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      </main>

      <footer className="border-t border-[#3a3020] py-6 px-6" style={{ background: "#0a0907" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display text-[#8a7a65]" style={{ fontSize: "13px", letterSpacing: "0.14em" }}>
            © 2026 ANA MANGOTIĆ RAJKOVIĆ
          </p>
          <p className="font-body text-[#8a7a65]" style={{ fontSize: "14px" }}>
            Lead UX/UI Designer
          </p>
        </div>
      </footer>
    </div>
  );
}
