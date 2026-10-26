export type ProtocolStep = {
  name: string;
  prompt: string;
};

export type ResearchMethod = {
  name: string;
  description: string;
};

export type MethodGroup = {
  id: string;
  stage: string;
  title: string;
  methods: ResearchMethod[];
};

const userInterviews: ResearchMethod = {
  name: "User Interviews",
  description:
    "Conduct one-on-one sessions with target users to gather in-depth qualitative insights.",
};

const surveys: ResearchMethod = {
  name: "Surveys",
  description:
    "Distribute questionnaires to a large group of users to collect quantitative data.",
};

const benchmarking: ResearchMethod = {
  name: "Benchmarking",
  description:
    "Compare a product's performance, features, or user experience against industry standards or direct competitors.",
};

export const researchProtocol = {
  title: "Research Protocol",
  intro:
    "I proposed this five-step system and the names of its phases, from problem definition through conclusion.",
  framing:
    "Other designers aligned with it after testing the steps in practice. It is a way of structuring an inquiry, not a completed study, and not a record that every method was used.",
  phases: [
    {
      id: "phase-problem-definition",
      number: "01",
      title: "Problem definition",
      summary: "Name the problem and what is already known.",
    },
    {
      id: "phase-hypothesis-definition",
      number: "02",
      title: "Hypothesis definition",
      summary: "Choose the questions that matter most.",
    },
    {
      id: "phase-choose-methods",
      number: "03",
      title: "Choose methods",
      summary: "Match methods to the question and stage.",
    },
    {
      id: "phase-testing",
      number: "04",
      title: "Testing",
      summary: "Run the chosen methods.",
    },
    {
      id: "phase-conclusion",
      number: "05",
      title: "Conclusion",
      summary: "Turn evidence into a decision.",
    },
  ],
  problemDefinition: [
    { name: "Identify the problem", prompt: "What is wrong?" },
    { name: "Goal", prompt: "What should we achieve?" },
    { name: "Team", prompt: "Who can help?" },
    { name: "Objectives", prompt: "What will get us there?" },
    { name: "Data", prompt: "What data do we already have?" },
    { name: "Knowledge", prompt: "What do we already know?" },
    { name: "Uncertainty", prompt: "What is still unclear?" },
    { name: "Restrictions", prompt: "What constraints apply?" },
  ] satisfies ProtocolStep[],
  hypothesisDefinition: [
    {
      name: "Question",
      prompt: "What do we need to know?",
    },
    {
      name: "Structure",
      prompt: "Group the questions.",
    },
    {
      name: "Priority level",
      prompt: "Rank urgency, importance, and uncertainty.",
    },
    {
      name: "Concentration",
      prompt: "Focus on what matters most.",
    },
  ] satisfies ProtocolStep[],
  standards: "Check best practices and design-system standards.",
  categories: [
    {
      id: "methods-before",
      label: "Before",
      detail: "Foundational research",
    },
    {
      id: "methods-during",
      label: "During",
      detail: "Design research",
    },
    {
      id: "methods-after",
      label: "After",
      detail: "Post-launch research",
    },
  ],
  methodLibraryIntro:
    "Options by lifecycle stage. A method may appear more than once. Choose for the question. It is not a checklist.",
  methodGroups: [
    {
      id: "methods-before",
      stage: "Before",
      title: "Foundational research",
      methods: [
        {
          name: "Conversation Mining",
          description: "Analyze existing customer conversations.",
        },
        {
          name: "Cloze Testing",
          description:
            "Ask users to fill in missing words to assess comprehension and readability.",
        },
        {
          name: "Card Sorting",
          description:
            "Ask participants to group related content to help create intuitive information architecture.",
        },
        userInterviews,
        {
          name: "Thematic Analysis",
          description:
            "Identify, analyze, and report patterns within qualitative text data.",
        },
        surveys,
        benchmarking,
        {
          name: "User Journey Analysis",
          description:
            "Map and understand the complete path a user takes to accomplish a goal within a product or service.",
        },
      ],
    },
    {
      id: "methods-during",
      stage: "During",
      title: "Design research",
      methods: [
        {
          name: "Multivariate Testing (MVT)",
          description:
            "Test multiple variations of several elements on a single page simultaneously to determine which combination performs best.",
        },
        {
          name: "Usability Tests",
          description:
            "Observe users completing tasks with a product or prototype to identify difficulty or confusion.",
        },
        userInterviews,
        benchmarking,
        {
          name: "Affinity Diagram",
          description:
            "Analyze and structure raw data to identify patterns, uncover insights, and build shared understanding across teams.",
        },
      ],
    },
    {
      id: "methods-after",
      stage: "After",
      title: "Post-launch research",
      methods: [
        {
          name: "A/B Testing",
          description:
            "Compare two versions of a webpage or element to see which performs better.",
        },
        userInterviews,
        surveys,
        {
          name: "Heatmaps",
          description:
            "Visualize user behavior on a webpage, including areas receiving the most clicks, scrolling, or attention.",
        },
        {
          name: "Log Analysis",
          description:
            "Examine server, application, or database logs for insights into user behavior, system performance, and errors.",
        },
        {
          name: "Customer Service Data Analysis",
          description:
            "Analyze customer support interactions, such as emails and chats, to identify recurring issues and pain points.",
        },
      ],
    },
  ] satisfies MethodGroup[],
  testing: {
    title: "Conduct research",
    body: "Run the selected methods and gather evidence.",
    selection: "Use only what the question, constraints, and stage require.",
  },
  conclusion: [
    {
      name: "Analyze and synthesize",
      prompt: "Find patterns and name the opportunities.",
    },
    {
      name: "Share findings",
      prompt: "Share what the team can act on.",
    },
    {
      name: "Follow up and integrate",
      prompt: "Apply findings to design, the backlog, or the roadmap.",
    },
  ] satisfies ProtocolStep[],
  iteration: "Follow-up feeds the next problem definition.",
};
