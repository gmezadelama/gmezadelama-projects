export type ProjectLinks = {
  demo?: string;
  repo?: string;
};

export type CaseStudySubsection = {
  heading: string;
  list: string[];
};

export type CaseStudyImage = {
  src: string;
  alt: string;
};

export type CaseStudySection = {
  heading: string;
  body?: string;
  list?: string[];
  subsections?: CaseStudySubsection[];
  image?: CaseStudyImage;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  purpose: string;
  tech: string[];
  coverImage: string;
  demoMedia?: CaseStudyImage;
  links: ProjectLinks;
  caseStudy: CaseStudySection[];
};

// Listed most recent first — add new projects at the top of this array.
export const projects: Project[] = [
  {
    // PLACEHOLDER: structural entry only. Copy, tech stack, links, and
    // media will be filled in by a follow-up task.
    slug: "mood-tracker-ai",
    title: "Mood Tracker AI",
    summary: "AI-enhanced mood tracking application. Portfolio content coming next.",
    purpose: "Full purpose statement to be added.",
    tech: [],
    coverImage: "/images/projects/mood-tracker-ai/placeholder.png",
    links: {},
    caseStudy: [
      {
        heading: "Overview",
        body: "AI-enhanced mood tracking application. Portfolio content coming next.",
      },
    ],
  },
  {
    slug: "web-dictionary-ai",
    title: "Web Dictionary AI",
    summary:
      "An extension of the Frontend Mentor dictionary challenge that adds AI-assisted definitions and usage examples behind authenticated, rate-limited endpoints.",
    purpose:
      "Explore how to add scoped, server-controlled AI features to a small product without over-engineering the AI layer.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Clerk",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Vercel AI SDK",
      "Google Gemini",
      "Vitest",
      "React Testing Library",
      "Playwright",
    ],
    coverImage: "/images/projects/web-dictionary-ai/ai-features.png",
    demoMedia: {
      src: "/images/projects/web-dictionary-ai/demo.gif",
      alt: "Walkthrough of searching a word and viewing AI-generated explanations and examples in Web Dictionary AI",
    },
    links: {
      demo: "https://web-dictionary-ai-deploy.vercel.app/",
      repo: "https://github.com/gmezadelama/web-dictionary-ai",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: "Web Dictionary AI extends the original Frontend Mentor Dictionary challenge with authentication, AI-powered explanations, and example generation.\n\nI deliberately chose an existing design so I could focus on architecture, implementation, deployment, and experimenting with AI features instead of building a user interface from scratch.\n\nThis project is also the first step in a broader series of experiments exploring how AI can be integrated into traditional web applications.",
      },
      {
        heading: "Motivation",
        body: "The goal was to explore practical AI integration without introducing unnecessary complexity.\n\nDictionary searches remain publicly accessible, while AI features are protected behind authentication and daily usage limits. The application follows a simple request-and-response model, keeping AI functionality isolated behind server-side boundaries.",
      },
      {
        heading: "Features",
        subsections: [
          {
            heading: "Dictionary",
            list: [
              "Definitions and phonetics",
              "Pronunciation audio",
              "Synonyms and multiple meanings",
              "Light and dark modes",
              "Font selection",
            ],
          },
          {
            heading: "Learn",
            list: [
              "AI-powered explanations",
              "Context-aware example generation",
              "Authentication with Clerk",
              "Daily usage quotas",
            ],
          },
        ],
      },
      {
        heading: "Architecture",
        body: "The browser never communicates directly with the AI provider.\n\nDictionary information is retrieved from an external API, enriched with additional context, and sent to the model through server-side endpoints. The generated content is then returned to the client.\n\nThe application intentionally avoids agent frameworks, retrieval pipelines, and unnecessary abstractions.",
      },
      {
        heading: "Dictionary experience",
        body: "Public access to definitions, phonetics, pronunciations, synonyms, and multiple meanings.",
        image: {
          src: "/images/projects/web-dictionary-ai/dictionary-view.png",
          alt: "Dictionary search results showing a definition, phonetics, and pronunciation audio controls",
        },
      },
      {
        heading: "Guest experience",
        body: "The application remains fully usable without authentication while clearly exposing the additional AI functionality.",
        image: {
          src: "/images/projects/web-dictionary-ai/guest-experience.png",
          alt: "Guest view of Web Dictionary AI with dictionary search available and the Learn features shown locked behind sign-in",
        },
      },
      {
        heading: "AI features",
        body: "The Learn section provides additional explanations and examples while enforcing authentication and daily usage limits.",
        image: {
          src: "/images/projects/web-dictionary-ai/ai-features.png",
          alt: "Learn panel showing an AI-generated explanation and example sentences for a dictionary entry",
        },
      },
      {
        heading: "Technology stack",
        list: [
          "Next.js (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Clerk",
          "Neon PostgreSQL",
          "Drizzle ORM",
          "Zod",
          "Vercel AI SDK",
          "Google Gemini",
          "Vitest",
          "React Testing Library",
          "Playwright",
          "Vercel",
        ],
      },
      {
        heading: "Lessons learned",
        list: [
          "Not every AI application requires agents or complex orchestration.",
          "Prompt construction is often as important as model selection.",
          "Authentication and quotas should be considered from the beginning.",
          "Clear boundaries simplify development and maintenance.",
          "A small, well-defined scope makes experimentation easier.",
        ],
      },
    ],
  },
];
