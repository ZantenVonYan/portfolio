import type { VisualSectionData } from "@/components/CaseStudyVisualSection";
import type { ImpactMetric } from "@/components/ImpactMetrics";

export type FocusArea = {
  title: string;
  body: string;
  points?: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  type: string;
  domain: string;
  tags: string[];
  year: string;
  previewUrl: string;
  previewAlt: string;
  figmaUrl: string;
  /** Public product site, when one exists. */
  siteUrl?: string;
  challenge: string;
  challengePoints?: string[];
  contribution: string;
  contributionPoints?: string[];
  focusAreas?: FocusArea[];
  /** Optional visually led narrative sections (e.g. SupplyProof). */
  visualSections?: VisualSectionData[];
  /** When true, hide the default second case-study image (covered by visualSections). */
  hideSecondaryCaseImage?: boolean;
  keyDecisions: string[];
  metrics?: ImpactMetric[];
  outcome: string;
  workshopFeedback?: string[];
  reflection?: { title: string; body: string };
  leadershipLens: string;
  caseStudyImages: { src: string; alt: string; caption?: string; contain?: boolean }[];
  /** When true, show the research framework. It is not project evidence. */
  showResearchProtocol?: boolean;
  /** Shown in Foundational Projects rather than the featured grid. */
  earlier?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "foodlink-pro",
    title: "FoodLink Pro",
    type: "Homepage redesign & UX research",
    domain: "Professional networking for the food industry",
    tags: ["UX Strategy", "Research", "Content Design", "B2C"],
    year: "2025",
    figmaUrl: "https://www.figma.com/design/Wz6IPRVaPeO7f93YQ0kdUE/Project-2?node-id=0-1",
    previewUrl: "/screenshots/case-studies/foodlink/04-saved-dashboard.png",
    previewAlt: "FoodLink Pro saved dashboard with populated content and a Customize Widgets entry point",
    challenge:
      "The homepage struggled to explain the platform's audience and value. Dense content and competing priorities weakened the path into networking, knowledge sharing, and engagement.",
    contribution:
      "I led the design work from research framing and content analysis through homepage strategy, UI, handoff, and application QA, aligning stakeholder goals with the needs of different professional audiences.",
    hideSecondaryCaseImage: true,
    visualSections: [
      {
        eyebrow: "EARLY ITERATIONS",
        title: "Usability testing, then the first interface explorations",
        intro:
          "The work started with a printed usability-testing method. Early mock-ups then examined navigation, core content, supporting widgets, and where to introduce dashboard customization.",
        beats: [
          {
            step: "01",
            title: "Usability testing",
            body: "The test evaluated layout and customization options with 10 participants, looking for patterns in how those choices were arranged.",
            layout: "photo-set",
            figures: [
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-1.jpg",
                alt: "Printed usability test for tester 1, with a yellow tester note and orange highlighted strips arranged on a dashboard printout",
                label: "RESEARCH · TESTER 1",
                caption: "First recorded arrangement for tester 1.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-1-b.jpg",
                alt: "Printed usability test for tester 1 with pink highlighted strips added among the orange pieces",
                label: "RESEARCH · TESTER 1",
                caption: "Same printout, with pink pieces added.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-2.jpg",
                alt: "Printed usability test for tester 2, with a yellow tester note and orange highlighted strips on a dashboard printout",
                label: "RESEARCH · TESTER 2",
                caption: "First recorded arrangement for tester 2.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-2-b.jpg",
                alt: "Printed usability test for tester 2 with pink highlighted strips placed above the orange pieces",
                label: "RESEARCH · TESTER 2",
                caption: "Same printout, with pink pieces added.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-3.jpg",
                alt: "Printed usability test for tester 3, with a yellow tester note and shorter orange pieces on a dashboard printout",
                label: "RESEARCH · TESTER 3",
                caption: "First recorded arrangement for tester 3.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-3-change.jpg",
                alt: "Printed usability test for tester 3 labeled izmena, meaning change, with pink strips and rearranged orange pieces",
                label: "RESEARCH · TESTER 3 · CHANGE",
                caption: "The note reads “izmena” (change), with the pieces rearranged.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-5.jpg",
                alt: "Printed usability test for tester 5, with a yellow tester note and orange highlighted strips on a dashboard printout",
                label: "RESEARCH · TESTER 5",
                caption: "First recorded arrangement for tester 5.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/usability-tester-5-b.jpg",
                alt: "Printed usability test for tester 5 with pink highlighted strips added above the orange pieces",
                label: "RESEARCH · TESTER 5",
                caption: "Same printout, with pink pieces added.",
                contain: true,
              },
            ],
          },
          {
            step: "02",
            title: "",
            body: "",
            layout: "comparison-pair",
            figures: [
              {
                src: "/screenshots/case-studies/foodlink/01-initial-dashboard.png",
                alt: "FoodLink Pro early dashboard with Network selected, primary content areas, supporting widgets, application shortcuts, and a Discover solutions entry",
                label: "EARLY · INITIAL STRUCTURE",
                caption:
                  "Navigation, primary content, and supporting widgets occupy separate regions. Network is the named destination, application shortcuts stay grouped, and Discover solutions remains its own entry.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/03-customization-wireframe.png",
                alt: "FoodLink Pro customization wireframe with a widget catalogue, layout choices, and Cancel and Save changes controls",
                label: "EARLY · CUSTOMIZATION WIREFRAME",
                caption:
                  "The widget catalogue, layout choices, and explicit save and cancel controls are gathered into one editing surface instead of sitting on the everyday dashboard.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        eyebrow: "REFINED APPROACH",
        title: "Separating everyday use from customization",
        intro:
          "The refined approach keeps everyday dashboard use focused, introduces customization through contextual guidance, and reveals editing controls in a dedicated mode.",
        beats: [
          {
            step: "01",
            title: "",
            body: "",
            layout: "featured-support",
            figures: [
              {
                src: "/screenshots/case-studies/foodlink/04-saved-dashboard.png",
                alt: "FoodLink Pro saved dashboard with populated content, a Customize Widgets button, named navigation including Network, and Discover solutions",
                label: "REFINED · SAVED DASHBOARD",
                caption:
                  "Everyday use stays on populated content. Customize Widgets is a single entry point, while named destinations such as Network and Discover solutions stay available without editing controls.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/05-contextual-onboarding.png",
                alt: "FoodLink Pro dashboard with contextual guidance pointing to the Customize Widgets button",
                label: "REFINED · CONTEXTUAL ONBOARDING",
                caption:
                  "Guidance points directly to Customize Widgets, so customization is introduced beside the action instead of in a separate introductory modal.",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/foodlink/06-editing-mode.png",
                alt: "FoodLink Pro editing mode with layout choices, a widget side panel, and Cancel and Finish actions",
                label: "REFINED · EDITING MODE",
                caption:
                  "Layout choices, widget management, and finish or cancel actions appear only after editing starts, leaving the saved dashboard free of those controls.",
                contain: true,
              },
            ],
          },
        ],
      },
    ],
    keyDecisions: [
      "Lead with a clear value proposition above the fold.",
      "Prioritise content using a stronger hierarchy and progressive disclosure.",
      "Offer recognisable entry points for different professional needs.",
      "Build a flexible structure that can accommodate future content and features.",
    ],
    outcome:
      "The redesign delivered a clearer homepage structure and a stronger foundation for onboarding and engagement. No measured conversion or engagement lift was supplied, so these are design outcomes rather than verified KPI gains.",
    leadershipLens:
      "Shows how I frame a design problem around audience decisions and business objectives, not just visual refinement.",
    caseStudyImages: [
      {
        src: "/screenshots/case-studies/foodlink/04-saved-dashboard.png",
        alt: "FoodLink Pro saved dashboard with populated content, a Customize Widgets button, and named navigation",
        caption:
          "Saved FoodLink Pro dashboard, with everyday content kept separate from customization",
      },
      {
        src: "/screenshots/case-studies/p2-screens.png",
        alt: "FoodLink Pro — homepage wireframe iterations",
        caption:
          "Early iterations exploring hierarchy, value proposition placement, and navigation structure",
      },
    ],
  },
  {
    id: "02",
    slug: "supply-proof",
    title: "SupplyProof",
    type: "End-to-end redesign",
    domain: "B2B food supply & compliance platform",
    tags: ["UX Research", "End-to-End", "B2B", "Compliance"],
    year: "2025–2026",
    figmaUrl: "https://www.figma.com/design/0cTivhATbqonVIVaJ68xs0/Project-1?node-id=0-1",
    previewUrl: "/screenshots/heroes/supply-proof.jpg",
    previewAlt: "SupplyProof supplier questionnaire with section completion indicators",
    challenge:
      "Suppliers needed to complete detailed documentation and structured questionnaires, but the previous experience made a complex compliance task harder to trust and finish. The work still had to feel professional while supporting business and compliance requirements.",
    challengePoints: [
      "Confusing questions and questionnaire structure.",
      "Inconsistent UI patterns.",
      "Limited visibility into questionnaire progress before submission.",
      "Opportunities to improve validation and error handling.",
    ],
    contribution:
      "I owned the UX work across research, design direction, interface redesign, handoff, and implementation review. From January to June 2026 I kept a weekly design–engineering alignment with four engineers and two QA colleagues, and I joined three client workshops to review the UI, journey, question clarity, error handling, and validation.",
    contributionPoints: [
      "Redesigned question presentation, supporting text, layout, and visual consistency.",
      "Introduced contextual progress signals so completion was visible before submission.",
      "Joined three client workshops to validate the UI, user journey, question clarity, error handling, and validation.",
      "Maintained weekly design–engineering alignment from January to June 2026.",
      "Collaborated with four engineers and two QA colleagues.",
      "Identified design-system implementation inconsistencies and escalated them through Design QA.",
    ],
    hideSecondaryCaseImage: true,
    visualSections: [
      {
        eyebrow: "REDESIGNED FLOWS",
        title: "Redesigned Questionnaire Flows",
        intro:
          "Grouped questions into navigable sections and surfaced completion and required-field states, helping suppliers understand where they are and what still needs attention.",
        beats: [
          {
            step: "01",
            title: "Clearer structure",
            body: "Early wireframes explored how a supplier questionnaire could feel like a guided form: persistent section navigation, grouped fields, and room for status cues without burying the task in a single endless scroll.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/supplyproof/01-wireframe-supplier-form.png",
                alt: "SupplyProof UX wireframe of the supplier questionnaire form with left navigation and grouped field blocks",
                label: "WIREFRAME · SUPPLIER VIEW",
                caption:
                  "Structure exploration for section grouping and persistent navigation in the supplier questionnaire.",
                contain: true,
              },
            ],
          },
          {
            step: "02",
            title: "Visible completion",
            body: "The final UI keeps section status visible in the sidebar—completed, in progress, and items that still need attention—so suppliers can see where they stand and what to open next, without relying on a percentage-based tracker.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/supplyproof/02-ui-overview-supplier-completed.png",
                alt: "SupplyProof final UI overview showing supplier questionnaire with completed section indicators in the sidebar",
                label: "FINAL UI · SUPPLIER OVERVIEW",
                caption:
                  "UI overview with completion and status indicators beside navigable questionnaire sections.",
              },
            ],
          },
          {
            step: "03",
            title: "Focused next steps",
            body: "Filters and required-field feedback help suppliers zoom in on unanswered or flagged questions, turning a long compliance form into a clearer set of next actions.",
            layout: "detail",
            figures: [
              {
                src: "/screenshots/case-studies/supplyproof/03-ui-focused-questionnaire-crop.png",
                alt: "SupplyProof supplier questionnaire with filled answers and an active filter highlighting items that still need attention",
                label: "FINAL UI · FOCUSED DETAIL",
                caption:
                  "Detail crop: filled questionnaire content with filter and required-field states kept readable.",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        eyebrow: "DESIGN APPROACH",
        title: "Design approach",
        intro:
          "The design work moved from structure exploration, through explicit state definition, to reusable question and summary patterns that support both supplier completion and reviewer workflows.",
        beats: [
          {
            step: "01",
            title: "Structure exploration",
            body: "Reviewer-side wireframes mapped how a client or user would scan a submitted questionnaire—summary context, section status, and a path into individual answers—before high-fidelity UI locked the layout.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/supplyproof/04-wireframe-reviewer-client.png",
                alt: "SupplyProof UX wireframe of the client reviewer view for questionnaire review",
                label: "WIREFRAME · REVIEWER / CLIENT VIEW",
                caption:
                  "Early REVIEW flow exploring how reviewers navigate supplier responses and section status.",
                contain: true,
              },
            ],
          },
          {
            step: "02",
            title: "State definition",
            body: "Supplier summary panels were defined as contrasting states—default, completed, and required—so sidebar indicators stay consistent as work moves from untouched sections to finished or blocked ones.",
            layout: "states-grid",
            figures: [
              {
                src: "/screenshots/case-studies/supplyproof/05a-panel-default.png",
                alt: "SupplyProof supplier summary panel in the default unfinished state",
                label: "STATE · DEFAULT",
                caption: "Default / in-progress section summary.",
              },
              {
                src: "/screenshots/case-studies/supplyproof/05b-panel-completed.png",
                alt: "SupplyProof supplier summary panel showing completed section status",
                label: "STATE · COMPLETED",
                caption: "Completed section with clear status visibility.",
              },
              {
                src: "/screenshots/case-studies/supplyproof/05c-panel-required.png",
                alt: "SupplyProof supplier summary panel highlighting required fields that still need attention",
                label: "STATE · REQUIRED",
                caption: "Required-field feedback calling out what still needs attention.",
              },
            ],
          },
          {
            step: "03",
            title: "Reusable patterns",
            body: "Question cards reuse the same empty, answered, and required patterns so validation and feedback stay predictable across the questionnaire—for suppliers filling forms and for reviewers scanning responses.",
            layout: "states-stack",
            figures: [
              {
                src: "/screenshots/case-studies/supplyproof/06a-question-empty.png",
                alt: "SupplyProof question card in an empty unanswered state",
                label: "PATTERN · EMPTY",
                caption: "Empty question card before an answer is provided.",
              },
              {
                src: "/screenshots/case-studies/supplyproof/06b-question-answered.png",
                alt: "SupplyProof question card in an answered state with filled response",
                label: "PATTERN · ANSWERED",
                caption: "Answered question card with completed response content.",
              },
              {
                src: "/screenshots/case-studies/supplyproof/06c-question-required.png",
                alt: "SupplyProof question card marked required and needing rework or attention",
                label: "PATTERN · REQUIRED / REWORK",
                caption: "Required or rework-oriented question card with validation feedback.",
              },
            ],
          },
        ],
      },
    ],
    keyDecisions: [
      "Reduce cognitive load by grouping information into clearer sections and steps.",
      "Make progress, expectations, and next actions more visible.",
      "Standardise question, document, and validation patterns.",
      "Use a calmer visual hierarchy to support readability and trust.",
    ],
    metrics: [
      {
        value: "3",
        label: "Client workshops",
        description: "UX validation and feedback on the UI, journey, and question clarity.",
      },
      {
        value: "6",
        label: "Engineering & QA collaborators",
        description: "Four engineers and two QA colleagues.",
      },
      {
        value: "~6 months",
        label: "Weekly alignment",
        description: "Design–engineering alignment from January to June 2026.",
      },
    ],
    outcome:
      "The design established clearer question presentation, supporting text, layout consistency, and contextual progress signals. Client workshop feedback supported the proposed UI and user journey, and participants expressed interest in the release. These are qualitative design and workshop outcomes.",
    workshopFeedback: [
      "When will this feature be available?",
      "I like this approach, but can you please think about adding documents in the comment section?",
    ],
    reflection: {
      title: "Implementation challenges",
      body: "Implementation did not fully follow the design system. I identified the inconsistencies and escalated them through Design QA. That gap contributed to delayed delivery, and the inconsistencies remained unresolved within the MVP scope. The completed design work — question presentation, progress signals, and the journey reviewed with clients — is separate from MVP implementation quality and release timing.",
    },
    leadershipLens:
      "Demonstrates end-to-end design accountability, evidence-informed prioritisation, and the ability to align user needs with operational constraints. The work connected research, design direction, client workshops, and six months of design–engineering follow-through, including escalating design-system gaps that stayed outside the MVP.",
    caseStudyImages: [
      {
        src: "/screenshots/heroes/supply-proof.jpg",
        alt: "SupplyProof — supplier questionnaire overview with section completion indicators",
        caption:
          "Redesigned SupplyProof questionnaire flows with clearer section grouping and completion visibility",
      },
      {
        src: "/screenshots/case-studies/supplyproof/03-ui-focused-questionnaire-crop.png",
        alt: "SupplyProof — detailed questionnaire content with filter and required-field states",
        caption:
          "Standardised validation patterns and calmer visual hierarchy across the platform",
      },
    ],
  },
  {
    id: "03",
    slug: "dentai-assist",
    title: "AdentI",
    type: "Independent concept project",
    domain: "AI voice recognition for dental records",
    tags: ["AI/UX", "Concept", "Healthcare", "Interaction Design"],
    year: "2026",
    figmaUrl: "https://www.figma.com/design/rpM5irycDSBqyLaS6edKJh/Project-3?node-id=0-1",
    siteUrl: "https://adenti.org/",
    previewUrl: "/screenshots/heroes/dentai-assist.jpg",
    previewAlt: "AdentI product interface and component patterns",
    challenge:
      "AdentI is AI software for voice recognition that writes the patient record automatically, in the role of a dental assistant. The concept explores how that assistance can support clinical and administrative work without obscuring information, undermining human judgment, or adding friction to sensitive workflows.",
    contribution:
      "I independently defined the concept and scope, structured information architecture and workflows, and designed the interface and interaction patterns from initial framing to a cohesive design concept.",
    // TODO(author): Role — keep the contribution above unless a documented account of the ADENTI dental-management work should replace it. Do not add a new first-person claim without that source.
    // TODO(author): Constraints — not documented. Add the constraints that shaped hierarchy, navigation, scheduling, and clinical editing.
    // TODO(author): Decisions — not documented. Add the decisions behind entry hierarchy, patient navigation, record disclosure, scheduling, and chart editing.
    hideSecondaryCaseImage: true,
    visualSections: [
      {
        eyebrow: "",
        title: "Exploring Hierarchy & Navigation",
        intro:
          "The interface balances dense clinical information with clear task priorities. These views highlight how hierarchy, navigation, and information disclosure adapt across contexts.",
        beats: [
          {
            step: "01",
            title: "Navigation and patient information",
            body: "A persistent sidebar and patient table adapt into compact navigation and individual patient cards on mobile.",
            layout: "responsive-pair",
            figures: [
              {
                src: "/screenshots/case-studies/adenti/03-patients-desktop.png",
                alt: "ADENTI desktop patient list with a persistent sidebar and a table of patient records",
                label: "DESKTOP",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/adenti/04-patients-mobile.png",
                alt: "ADENTI mobile patient list with a menu button, search, and individual patient cards",
                label: "MOBILE",
                contain: true,
              },
            ],
          },
          {
            step: "02",
            title: "Entry-screen hierarchy",
            body: "Branding and introductory copy frame the desktop entry experience, while the mobile layout brings the sign-in task forward.",
            layout: "responsive-pair",
            figures: [
              {
                src: "/screenshots/case-studies/adenti/01-login-desktop.png",
                alt: "ADENTI desktop sign-in screen with branding and introductory copy beside the login form",
                label: "DESKTOP",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/adenti/02-login-mobile.png",
                alt: "ADENTI mobile sign-in screen with a compact logo and the login form brought forward",
                label: "MOBILE",
                contain: true,
              },
            ],
          },
          {
            step: "03",
            title: "Progressive disclosure",
            body: "Collapsible sections provide a compact record overview while keeping detailed clinical information accessible.",
            layout: "comparison-pair",
            figures: [
              {
                src: "/screenshots/case-studies/adenti/05-record-collapsed.png",
                alt: "ADENTI dental record with collapsed sections for general data, the chart, the exam, and appointment history",
                label: "COLLAPSED STATE",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/adenti/06-record-expanded.png",
                alt: "ADENTI dental record with a section expanded to show patient details and the dental chart",
                label: "EXPANDED STATE",
                contain: true,
              },
            ],
          },
        ],
      },
      {
        eyebrow: "",
        title: "",
        intro: "",
        beats: [
          {
            step: "01",
            title: "Clinical editing",
            body: "The clinical editing view combines visual tooth status, tooth-level notes, and explicit save and cancel actions.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/adenti/13-chart-edit.png",
                alt: "ADENTI dental chart edit mode with tooth status, notes for individual teeth, and save and cancel actions",
                label: "EDIT MODE",
                contain: true,
              },
            ],
          },
          {
            step: "02",
            title: "Reusable foundations",
            body: "Reusable interface foundations establish consistent typography, controls, navigation, and feedback states.",
            layout: "crop-grid",
            figures: [
              {
                src: "/screenshots/case-studies/adenti/07-typography.png",
                alt: "ADENTI style guide crop showing the Roboto Condensed type scale for titles, buttons, and body text",
                label: "TYPOGRAPHY",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/adenti/08-inputs.png",
                alt: "ADENTI style guide crop showing input fields in default, hover, selected, disabled, success, and error states",
                label: "INPUTS",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/adenti/09-buttons.png",
                alt: "ADENTI style guide crop showing primary, secondary, and tertiary buttons across default, hover, and selected states",
                label: "BUTTONS",
                contain: true,
                span: "full",
              },
              {
                src: "/screenshots/case-studies/adenti/10-navigation.png",
                alt: "ADENTI style guide crop showing the dark sidebar in expanded and compact navigation states",
                label: "NAVIGATION",
                contain: true,
              },
            ],
          },
          {
            step: "03",
            title: "Scheduling workflow",
            body: "The scheduling flow covers both selecting an existing patient and entering a new patient’s details within the appointment task.",
            layout: "responsive-pair",
            figures: [
              {
                src: "/screenshots/case-studies/adenti/11-appointment-desktop.png",
                alt: "ADENTI appointment form filled with an existing patient's name, dentist, time, and reason for the visit",
                label: "EXISTING PATIENT",
                contain: true,
              },
              {
                src: "/screenshots/case-studies/adenti/12-appointment-mobile.png",
                alt: "ADENTI mobile appointment form with an embedded section for entering a new patient's name, phone, and email",
                label: "NEW PATIENT",
                contain: true,
              },
            ],
          },
        ],
      },
    ],
    keyDecisions: [
      "Voice recognition writes the patient record automatically; the dentist keeps decision authority.",
      "Transparency: distinguish AI suggestions from clinical data and decisions.",
      "Calm, predictable patterns: make feedback, confidence cues, and next steps understandable.",
    ],
    outcome:
      "A cohesive concept for an AI dental assistant: voice recognition that writes the patient record automatically, with the dentist still in control of the clinical decision. This is a side project, not evidence of clinical validation, deployment, or measured healthcare outcomes.",
    leadershipLens:
      "Highlights product framing, responsible interaction design, and independent ownership in a high-stakes domain.",
    caseStudyImages: [
      {
        src: "/screenshots/heroes/dentai-assist.jpg",
        alt: "AdentI — product interface and component patterns",
        caption:
          "Interface patterns for dental workflows — navigation, feedback, and scheduling components",
      },
      {
        src: "/screenshots/case-studies/p3-adenti-ui.png",
        alt: "AdentI — navigation, feedback states, and calendar components",
        caption:
          "Navigation structure with role-based access, contextual feedback patterns, and appointment scheduling components",
      },
    ],
  },
  {
    id: "04",
    slug: "ux-practice-framework",
    title: "UX Practice Framework",
    type: "Design enablement",
    domain: "Shared research standards & team systems",
    tags: ["Design Ops", "Research Repository", "Team Enablement", "Systems"],
    year: "2026",
    figmaUrl:
      "https://www.figma.com/design/Ci33cgHiUqweXP66NMkK1e/Random-all-Qcerris-projects?node-id=0-1&t=RMghTGnQKhmHhyzf-1",
    previewUrl: "/screenshots/heroes/ux-practice-framework.jpg",
    previewAlt: "UX Practice Framework shared research and design guidelines",
    challenge:
      "As the team's UX practice developed, methods, documentation, and research outputs varied between designers. Knowledge was dispersed, making reuse, onboarding, and stakeholder alignment more difficult.",
    contribution:
      "Working with two other designers, I helped shape practical UX guidelines, research-method guidance, shared templates, and a research repository organised around Evidence → Insight → Recommendation. In January 2026 I introduced the Buddy System and those research guidelines as shared team practices. I also mentored two designers and co-led Figma workshops with another design lead.",
    focusAreas: [
      {
        title: "Buddy System",
        body: "Introduced in January 2026 to encourage earlier feedback, collaborative problem-solving, and knowledge sharing between designers. Participants reported the following.",
        points: [
          "Earlier identification of design issues.",
          "Faster alignment, as reported by participants.",
          "More opportunities to explore alternative solutions.",
          "Better preparation before formal design reviews.",
        ],
      },
      {
        title: "UX research guidelines & repository",
        body: "Established UX research guidelines and a shared repository in January 2026 so documentation would be more consistent and findings easier to find. At a reported checkpoint, 3 of 6 designers were using the repository — 50% adoption at that point in time. That figure is a historical checkpoint, not a claim about current adoption.",
      },
      {
        title: "Mentorship",
        body: "Mentored two designers through one year of formal mentorship, about 18 months including training. The emphasis was guidance, structured feedback, professional development, and supporting each designer to own their decisions.",
      },
      {
        title: "Figma & engineering workshops",
        body: "Co-led more than five cross-functional Figma workshops with another design lead. The following changes were observed in how the group worked together.",
        points: [
          "Clearer understanding of design system components.",
          "More use of design documentation.",
          "Developers using exact Figma measurements rather than manual ruler-based approximations.",
          "A stronger shared understanding between design, development, and QA.",
        ],
      },
    ],
    keyDecisions: [
      "Make guidance lightweight enough to use in everyday delivery.",
      "Define consistent research documentation and minimum required fields.",
      "Organise evidence, insights, and recommendations so findings are easier to understand and reuse.",
      "Support designers with different experience levels through clear standards and knowledge sharing.",
    ],
    metrics: [
      {
        value: "2",
        label: "Designers mentored",
        description: "One year of formal mentorship, about 18 months including training.",
      },
      {
        value: "2",
        label: "UX practice initiatives",
        description: "Buddy System and research guidelines with a repository, January 2026.",
      },
      {
        value: "5+",
        label: "Figma workshops",
        description: "Cross-functional sessions co-led with another design lead.",
      },
      {
        value: "50%",
        label: "Repository adoption",
        description: "3 of 6 designers at a reported checkpoint, not current adoption.",
      },
    ],
    outcome:
      "The practice work gave the team a common language for research, a peer path for earlier feedback, and a clearer handoff conversation with engineering and QA. Repository use reached 3 of 6 designers at one reported checkpoint. Intended benefits include easier onboarding and more reusable research.",
    leadershipLens:
      "Shows how I strengthen the conditions for good design: shared practices, mentorship, and cross-functional influence beyond a single product. The repository figure is one historical checkpoint of early uptake.",
    caseStudyImages: [
      {
        src: "/screenshots/heroes/ux-practice-framework-full.png",
        alt: "Research protocol diagram from problem definition through conclusion, including the method list",
        caption:
          "Shared design and research framework establishing a common language across the team",
        contain: true,
      },
    ],
    showResearchProtocol: true,
  },
  {
    id: "06",
    slug: "demurrage-dash",
    title: "Demurrage Dash",
    type: "Solo UI/UX design",
    domain: "Logistics platform",
    tags: ["Logistics", "Marketplace", "Responsive"],
    year: "",
    earlier: true,
    figmaUrl:
      "https://www.figma.com/design/Ci33cgHiUqweXP66NMkK1e/Random-all-Qcerris-projects?node-id=2002-26681",
    previewUrl: "/screenshots/case-studies/demurrage/01-batch-overview.jpg",
    previewAlt: "Demurrage Dash marketplace with a batch list and the route open beside it",
    challenge:
      "Shippers and drivers needed a responsive way to manage demurrage charges and track transport, including time-sensitive workflows for people with different levels of technical familiarity.",
    contribution:
      "I was the solo UI/UX designer. I designed the marketplace for single loads and batch loads, including the route that opens beside the list and the smaller-screen view of a trip.",
    hideSecondaryCaseImage: true,
    visualSections: [
      {
        eyebrow: "MARKETPLACE",
        title: "Single loads and batch loads",
        intro:
          "The board lists loads and can open the route beside them. Batch view groups several loads under one id.",
        beats: [
          {
            step: "01",
            title: "Single loads",
            body: "The list shows age, pickup and drop-off, dates, distance, and trailer. Opening a row brings the route and stop details in from the side.",
            layout: "comparison-pair",
            figures: [
              {
                src: "/screenshots/case-studies/demurrage/02-single-list.jpg",
                alt: "Demurrage Dash single-load list with filters for pickup, drop-off, date, and trailer",
                label: "LIST",
              },
              {
                src: "/screenshots/case-studies/demurrage/03-single-map.jpg",
                alt: "Demurrage Dash single-load list with the route map and stop details open beside it",
                label: "ROUTE OPEN",
              },
            ],
          },
          {
            step: "02",
            title: "Batch loads",
            body: "Batch view lists each group with a load count and the pickup and delivery window. The side panel shows the route and the loads inside that batch.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/demurrage/01-batch-overview.jpg",
                alt: "Demurrage Dash batch list with a route map and the loads inside the selected batch",
                label: "BATCH",
                contain: true,
              },
            ],
          },
          {
            step: "03",
            title: "Trip detail on a smaller screen",
            body: "The trip detail stacks the map, each stop, and the load facts, with a control to show less.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/demurrage/04-trip-detail.jpg",
                alt: "Demurrage Dash trip detail on a narrow screen, with the map, stops, and load facts stacked",
                label: "NARROW SCREEN",
                contain: true,
              },
            ],
          },
        ],
      },
    ],
    keyDecisions: [
      "Keep single loads and batch loads in one marketplace, with the mode visible in the filters.",
      "Open the route, stops, and load facts beside the list so a trip can be checked without leaving the board.",
      "On a smaller screen, stack the map, the stops, and the load facts in one scroll.",
    ],
    outcome:
      "Desktop and narrow-screen marketplace screens for browsing loads, checking a route, and reading the details of a trip. This page shows that design work. It is not a measured result for a live product.",
    leadershipLens:
      "Shows independent ownership of a dense operational workflow, from the board through the trip detail.",
    caseStudyImages: [
      {
        src: "/screenshots/case-studies/demurrage/01-batch-overview.jpg",
        alt: "Demurrage Dash marketplace with a batch list and the route open beside it",
        caption: "Batch marketplace with the route and the loads inside the selected batch",
        contain: true,
      },
    ],
  },
  {
    id: "07",
    slug: "stepup-insurance",
    title: "StepUP Insurance",
    type: "Solo UI/UX design",
    domain: "Responsive website and account foundation",
    tags: ["Website", "Account", "Insurance"],
    year: "",
    earlier: true,
    figmaUrl:
      "https://www.figma.com/design/Ci33cgHiUqweXP66NMkK1e/Random-all-Qcerris-projects?node-id=2002-26683",
    previewUrl: "/screenshots/case-studies/stepup/01-homepage.jpg",
    previewAlt: "StepUP Insurance homepage with navigation and a path to quotes",
    challenge:
      "The previous site was an unstable Wix build. It needed a credible, responsive presence for a premium insurance audience, and a foundation for the account experience.",
    contribution:
      "I was the solo UI/UX designer. I designed the marketing homepage, the insurance menu, policy explanations, sign-in and sign-up, and the client record for policies and contacts.",
    hideSecondaryCaseImage: true,
    visualSections: [
      {
        eyebrow: "SITE AND ACCOUNT",
        title: "From the public site to the client record",
        intro:
          "The public site leads with a path to quotes, then opens the offer through the insurance menu and policy explanations. Sign-in leads into a client record.",
        beats: [
          {
            step: "01",
            title: "Insurance menu",
            body: "Commercial and personal coverages sit in one menu, so the range of policies can be scanned without leaving the page.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/stepup/02-insurance-menu.jpg",
                alt: "StepUP Insurance menu open over the homepage, grouping commercial and personal coverages",
                label: "INSURANCE MENU",
                contain: true,
              },
            ],
          },
          {
            step: "02",
            title: "Policy explanations",
            body: "Each policy card says what the coverage includes and offers a way to learn more or request quotes.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/stepup/03-policy-cards.jpg",
                alt: "StepUP Insurance policy cards for umbrella, general liability, and business auto",
                label: "POLICY CARDS",
                contain: true,
              },
            ],
          },
          {
            step: "03",
            title: "Account entry",
            body: "Sign-in and sign-up use the same entry pattern, with a path from one to the other.",
            layout: "comparison-pair",
            figures: [
              {
                src: "/screenshots/case-studies/stepup/04-sign-in.jpg",
                alt: "StepUP Insurance sign-in dialog over the homepage",
                label: "SIGN IN",
              },
              {
                src: "/screenshots/case-studies/stepup/05-sign-up.jpg",
                alt: "StepUP Insurance sign-up dialog over the homepage",
                label: "SIGN UP",
              },
            ],
          },
          {
            step: "04",
            title: "Client record",
            body: "The account foundation keeps the client, team, contacts, and policy list in one record, with room to add rows.",
            layout: "overview",
            figures: [
              {
                src: "/screenshots/case-studies/stepup/06-client-record.jpg",
                alt: "StepUP Insurance client record with client details, team, contacts, and a policy list",
                label: "CLIENT RECORD",
                contain: true,
              },
            ],
          },
        ],
      },
    ],
    keyDecisions: [
      "Lead the homepage with one line and a direct path to quotes.",
      "Group commercial and personal coverages in the insurance menu so the offer is scannable.",
      "Use one account-entry pattern for sign-in and sign-up, then keep the client, team, contacts, and policies in one record.",
    ],
    outcome:
      "A marketing site and the first account screens behind it. The client record is the foundation for keeping policies in one place. This page shows that design work. It is not a launch metric.",
    leadershipLens:
      "Shows independent ownership of a public site and the account foundation that follows it.",
    caseStudyImages: [
      {
        src: "/screenshots/case-studies/stepup/01-homepage.jpg",
        alt: "StepUP Insurance homepage with navigation and a path to quotes",
        caption: "Marketing homepage with navigation into the offer and a path to quotes",
        contain: true,
      },
    ],
  },
];

export const earlierWork = projects.filter((project) => project.earlier);

export const productCatalogHighlight = {
  id: "05",
  title: "Product Catalog",
  type: "End-to-end product design",
  year: "2026",
  overview:
    "I owned the UX/UI design of Product Catalog from an initial sales opportunity for a major client through final design delivery, working with a Business Analyst to align the experience with business requirements.",
  contributions: [
    "Translated an early sales concept into a structured product experience.",
    "Designed a visual card-based product catalog with imagery.",
    "Developed search and filtering interactions to support product discovery.",
    "Introduced personalized folders so people could organize products for their own needs.",
    "Coordinated with nine stakeholders across Sales, Business Analysts, Engineering, and QA.",
    "Supported design delivery from June through October 2026 for the planned November platform release.",
  ],
  metrics: [
    {
      value: "1",
      label: "Confirmed sale",
      description: "One client. Official use will be where further feedback comes from.",
    },
    {
      value: "9",
      label: "Stakeholders",
      description: "Cross-functional alignment across Sales, Business Analysts, Engineering, and QA.",
    },
    {
      value: "1",
      label: "Delivery team",
      description: "Product collaboration through design delivery.",
    },
    {
      value: "Jun–Oct 2026",
      label: "Design delivery",
      description: "Design window for the planned November platform release.",
    },
  ] satisfies ImpactMetric[],
  outcome:
    "Ownership ran from the early sales concept through final design delivery, ready for the planned November platform release. One sale is already confirmed for one client, and official use will be where further feedback comes from.",
};

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
