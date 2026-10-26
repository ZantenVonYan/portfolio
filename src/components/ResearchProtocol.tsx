import { researchProtocol } from "@/data/researchProtocol";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]";

function StepList({
  steps,
}: {
  steps: { name: string; prompt: string }[];
}) {
  return (
    <ol className="m-0 p-0 list-none space-y-5">
      {steps.map((step, index) => (
        <li key={step.name} className="flex items-start gap-5 border-l border-[#3a3020] pl-5">
          <span
            className="font-display text-[#c9a84c] flex-shrink-0 mt-1"
            style={{ fontSize: "11px", opacity: 0.7, letterSpacing: "0.1em" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h4
              className="font-display text-[#e8dcc8] font-semibold"
              style={{ fontSize: "17px", lineHeight: "1.4" }}
            >
              {step.name}
            </h4>
            <p
              className="font-body text-[#d4c4a8] mt-1"
              style={{ fontSize: "17px", lineHeight: "1.7" }}
            >
              {step.prompt}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ResearchProtocol() {
  const methodCount = researchProtocol.methodGroups.reduce(
    (total, group) => total + group.methods.length,
    0,
  );

  return (
    <section
      id="research-protocol"
      aria-labelledby="research-protocol-heading"
      className="scroll-mt-28"
    >
      <p
        className="font-display text-[#c9a84c] tracking-widest mb-3"
        style={{ fontSize: "9px", letterSpacing: "0.3em" }}
      >
        RESEARCH FRAMEWORK
      </p>
      <h2
        id="research-protocol-heading"
        className="font-display text-[#e8dcc8] font-semibold mb-6"
        style={{ fontSize: "clamp(20px, 2.8vw, 30px)" }}
      >
        {researchProtocol.title}
      </h2>
      <p
        className="font-body text-[#b8a488] leading-relaxed"
        style={{ fontSize: "18px", lineHeight: "1.95" }}
      >
        {researchProtocol.intro}
      </p>
      <p
        className="font-body text-[#d4c4a8] leading-relaxed mt-4"
        style={{ fontSize: "17px", lineHeight: "1.85" }}
      >
        {researchProtocol.framing}
      </p>

      <nav aria-label="Five phases of the research protocol" className="mt-10">
        <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {researchProtocol.phases.map((phase) => (
            <li key={phase.id} className="min-w-0">
              <a
                href={`#${phase.id}`}
                className={`flex h-full flex-col border border-[#3a3020] bg-[#1a1712] p-4 hover:border-[#c9a84c66] transition-colors ${focusRing}`}
              >
                <span
                  className="font-display text-[#c9a84c]"
                  style={{ fontSize: "11px", letterSpacing: "0.16em" }}
                >
                  {phase.number}
                </span>
                <span
                  className="font-display text-[#e8dcc8] font-semibold mt-2"
                  style={{ fontSize: "15px", lineHeight: "1.35" }}
                >
                  {phase.title}
                </span>
                <span
                  className="font-body text-[#b8a488] mt-2"
                  style={{ fontSize: "14px", lineHeight: "1.5" }}
                >
                  {phase.summary}
                </span>
              </a>
            </li>
          ))}
        </ol>
        <p
          className="font-body text-[#d4c4a8] mt-4 border border-[#3a3020] px-4 py-3"
          style={{ fontSize: "15px", lineHeight: "1.6" }}
        >
          <span aria-hidden="true" className="text-[#c9a84c]">
            ↩{" "}
          </span>
          The sequence returns to the start. {researchProtocol.iteration}
        </p>
      </nav>

      <div className="mt-14 space-y-14">
        <section
          id="phase-problem-definition"
          aria-labelledby="phase-problem-definition-heading"
          className="scroll-mt-28"
        >
          <p
            className="font-display text-[#c9a84c]"
            style={{ fontSize: "11px", letterSpacing: "0.16em" }}
          >
            PHASE 1
          </p>
          <h3
            id="phase-problem-definition-heading"
            className="font-display text-[#e8dcc8] font-semibold mt-2 mb-6"
            style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
          >
            Problem definition
          </h3>
          <StepList steps={researchProtocol.problemDefinition} />
        </section>

        <section
          id="phase-hypothesis-definition"
          aria-labelledby="phase-hypothesis-definition-heading"
          className="scroll-mt-28 border-t border-[#3a3020] pt-14"
        >
          <p
            className="font-display text-[#c9a84c]"
            style={{ fontSize: "11px", letterSpacing: "0.16em" }}
          >
            PHASE 2
          </p>
          <h3
            id="phase-hypothesis-definition-heading"
            className="font-display text-[#e8dcc8] font-semibold mt-2 mb-4"
            style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
          >
            Hypothesis definition
          </h3>
          <p
            className="font-body text-[#b8a488] mb-6"
            style={{ fontSize: "17px", lineHeight: "1.8" }}
          >
            Organize and prioritize questions. This phase does not set a hypothesis.
          </p>
          <StepList steps={researchProtocol.hypothesisDefinition} />
        </section>

        <section
          id="phase-choose-methods"
          aria-labelledby="phase-choose-methods-heading"
          className="scroll-mt-28 border-t border-[#3a3020] pt-14"
        >
          <p
            className="font-display text-[#c9a84c]"
            style={{ fontSize: "11px", letterSpacing: "0.16em" }}
          >
            PHASE 3
          </p>
          <h3
            id="phase-choose-methods-heading"
            className="font-display text-[#e8dcc8] font-semibold mt-2 mb-4"
            style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
          >
            Choose methods
          </h3>
          <p
            className="font-body text-[#b8a488] mb-8"
            style={{ fontSize: "17px", lineHeight: "1.8" }}
          >
            Match methods to accepted standards and the lifecycle stage.
          </p>

          <div className="space-y-10">
            <div>
              <h4
                className="font-display text-[#e8dcc8] font-semibold mb-5"
                style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              >
                Part 1 — Standards and categories
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <article className="border border-[#3a3020] bg-[#1a1712] p-5 min-w-0">
                  <h5
                    className="font-display text-[#c9a84c] font-semibold mb-2"
                    style={{ fontSize: "13px", letterSpacing: "0.12em" }}
                  >
                    STANDARDS
                  </h5>
                  <p
                    className="font-body text-[#d4c4a8]"
                    style={{ fontSize: "17px", lineHeight: "1.7" }}
                  >
                    {researchProtocol.standards}
                  </p>
                </article>
                <article className="border border-[#3a3020] bg-[#1a1712] p-5 min-w-0">
                  <h5
                    className="font-display text-[#c9a84c] font-semibold mb-3"
                    style={{ fontSize: "13px", letterSpacing: "0.12em" }}
                  >
                    CATEGORIES
                  </h5>
                  <p
                    className="font-body text-[#d4c4a8] mb-4"
                    style={{ fontSize: "17px", lineHeight: "1.7" }}
                  >
                    Group methods by lifecycle stage.
                  </p>
                  <ul className="m-0 p-0 list-none space-y-3">
                    {researchProtocol.categories.map((category) => (
                      <li key={category.id}>
                        <a
                          href={`#${category.id}`}
                          className={`font-body text-[#e8dcc8] underline decoration-[#c9a84c66] underline-offset-4 hover:text-[#e8c97a] ${focusRing}`}
                          style={{ fontSize: "16px", lineHeight: "1.5" }}
                        >
                          {category.label}
                          <span className="text-[#b8a488]"> — {category.detail}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <div>
              <h4
                className="font-display text-[#e8dcc8] font-semibold mb-4"
                style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
              >
                Part 2 — Method library
              </h4>
              <p
                className="font-body text-[#b8a488] mb-8"
                style={{ fontSize: "17px", lineHeight: "1.8" }}
              >
                {researchProtocol.methodLibraryIntro} {methodCount} methods across three stages.
              </p>

              <div className="space-y-10">
                {researchProtocol.methodGroups.map((group) => (
                  <section
                    key={group.id}
                    id={group.id}
                    aria-labelledby={`${group.id}-heading`}
                    className="scroll-mt-28"
                  >
                    <h5
                      id={`${group.id}-heading`}
                      className="font-display text-[#e8dcc8] font-semibold mb-4"
                      style={{ fontSize: "18px" }}
                    >
                      <span className="text-[#c9a84c]">{group.stage}</span>
                      {" — "}
                      {group.title}
                    </h5>
                    <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.methods.map((method) => (
                        <li
                          key={`${group.id}-${method.name}`}
                          className="border border-[#3a3020] p-5 min-w-0"
                        >
                          <h6
                            className="font-display text-[#e8dcc8] font-semibold mb-2"
                            style={{ fontSize: "16px", lineHeight: "1.4" }}
                          >
                            {method.name}
                          </h6>
                          <p
                            className="font-body text-[#b8a488]"
                            style={{ fontSize: "16px", lineHeight: "1.7" }}
                          >
                            {method.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="phase-testing"
          aria-labelledby="phase-testing-heading"
          className="scroll-mt-28 border-t border-[#3a3020] pt-14"
        >
          <p
            className="font-display text-[#c9a84c]"
            style={{ fontSize: "11px", letterSpacing: "0.16em" }}
          >
            PHASE 4
          </p>
          <h3
            id="phase-testing-heading"
            className="font-display text-[#e8dcc8] font-semibold mt-2 mb-4"
            style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
          >
            Testing
          </h3>
          <h4
            className="font-display text-[#e8dcc8] font-semibold mb-2"
            style={{ fontSize: "17px" }}
          >
            {researchProtocol.testing.title}
          </h4>
          <p
            className="font-body text-[#d4c4a8]"
            style={{ fontSize: "17px", lineHeight: "1.8" }}
          >
            {researchProtocol.testing.body}
          </p>
          <p
            className="font-body text-[#b8a488] mt-4"
            style={{ fontSize: "17px", lineHeight: "1.8" }}
          >
            {researchProtocol.testing.selection}
          </p>
        </section>

        <section
          id="phase-conclusion"
          aria-labelledby="phase-conclusion-heading"
          className="scroll-mt-28 border-t border-[#3a3020] pt-14"
        >
          <p
            className="font-display text-[#c9a84c]"
            style={{ fontSize: "11px", letterSpacing: "0.16em" }}
          >
            PHASE 5
          </p>
          <h3
            id="phase-conclusion-heading"
            className="font-display text-[#e8dcc8] font-semibold mt-2 mb-6"
            style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
          >
            Conclusion
          </h3>
          <StepList steps={researchProtocol.conclusion} />
          <div className="mt-8 border border-[#c9a84c40] bg-[#1a1712] p-5">
            <p
              className="font-body text-[#e8dcc8]"
              style={{ fontSize: "17px", lineHeight: "1.75" }}
            >
              {researchProtocol.iteration}
            </p>
            <a
              href="#phase-problem-definition"
              className={`inline-flex mt-4 font-display text-[#c9a84c] hover:text-[#e8c97a] ${focusRing}`}
              style={{ fontSize: "11px", letterSpacing: "0.16em" }}
            >
              RETURN TO PROBLEM DEFINITION →
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
