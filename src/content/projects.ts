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
  width: number;
  height: number;
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
    slug: "mood-tracker-ai",
    title: "Mood Tracker AI",
    summary:
      "A full-stack extension of the Frontend Mentor Mood Tracking App with authenticated persistence, mood and sleep trends, AI-assisted mood identification, and personalized suggestions.",
    purpose:
      "Explore AI integration in an application with richer, persistent user state, while keeping AI a strictly optional layer over a fully functional manual workflow.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
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
    coverImage: "/images/projects/mood-tracker-ai/project-page.png",
    demoMedia: {
      src: "/images/projects/mood-tracker-ai/demo.gif",
      alt: "Walkthrough of Mood Tracker AI showing AI-assisted mood identification, review of suggested feelings, mood logging, dashboard updates, and personalized suggestions",
      width: 3840,
      height: 1746,
    },
    links: {
      demo: "https://mood-tracker-ai-ten.vercel.app/",
      repo: "https://github.com/gmezadelama/mood-tracker-ai",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: "Mood Tracker AI extends the Frontend Mentor Mood Tracking App into a complete authenticated application with persistent user data, statistics, trend visualization, and optional AI assistance.\n\nI deliberately started from an existing visual design so I could focus on the application architecture and product behavior: authentication, relational persistence, API design, responsive state management, AI integration, usage limits, and graceful fallback behavior.\n\nThe core mood tracker does not depend on AI. Users can always log their mood manually, while AI is introduced only at specific points where it can add useful personalization.",
      },
      {
        heading: "Motivation",
        body: "After Web Dictionary AI, I wanted to explore AI integration in an application with richer user state and persistent domain data.\n\nThe main design constraint was that AI should enhance an existing workflow rather than replace it. Mood entries, statistics, trends, authentication, and persistence all work independently of the model. AI is used for two deliberately narrow interactions: helping a user identify a mood from their own reflection and generating optional suggestions from an existing mood entry.\n\nThis kept the architecture understandable while introducing real concerns such as structured model output, quotas, failure handling, persistence boundaries, and user confirmation of AI-generated values.",
      },
      {
        heading: "Features",
        subsections: [
          {
            heading: "Mood tracking",
            list: [
              "Five mood levels from Very Sad to Very Happy",
              "Up to three feelings per entry",
              "Short journal reflection",
              "Sleep-range tracking",
              "One mood entry per user per calendar day",
              "Recent mood history",
              "Average mood and sleep comparisons",
              "Mood and sleep trend visualization",
              "Responsive desktop and mobile experience",
            ],
          },
          {
            heading: "AI-assisted mood identification",
            list: [
              "Optional alternative to manually choosing a mood",
              "Uses the user's journal reflection to suggest a mood and feelings",
              "Suggestions are presented for review before saving",
              "Users can edit the suggested mood and feelings",
              "One optional second suggestion is available",
              "AI never silently persists inferred values",
              "Manual mood logging remains available without using AI",
            ],
          },
          {
            heading: "Personalized suggestions",
            list: [
              "Optional activity suggestions based on a recently logged entry",
              "Short supportive phrases",
              "Personalized recommendations can be generated for the current and three preceding entries",
              "Generated recommendations are persisted",
              "Deterministic mood-based suggestions remain available before personalized generation",
              "AI failure or quota exhaustion does not break the underlying experience",
            ],
          },
        ],
      },
      {
        heading: "Architecture",
        body: "The application uses a conventional full-stack architecture with explicit boundaries between authentication, persistence, domain logic, and AI functionality.\n\nClerk handles authentication while the application maintains its own user record in PostgreSQL. Mood entries and generated recommendations are stored in Neon using Drizzle ORM, with authenticated server endpoints enforcing ownership and validation.\n\nAI requests are executed only on the server. Inputs are deliberately constrained for each feature, Gemini responses use structured output validated with Zod, and a shared per-user daily quota limits provider usage.\n\nThe mood-identification feature sends only the user's current reflection to the model. Personalized recommendations use only the selected mood entry's mood, feelings, sleep range, and reflection. Neither feature sends mood history, database identifiers, or account information to the model.\n\nConceptual flow: Authenticated user → Next.js application → Validated server API → PostgreSQL / AI service → Validated application state → User interface.\n\nThe completed v1.0 implementation passed 180 automated tests covering domain validation, persistence, authenticated API behavior, AI quota enforcement, and fallback behavior, together with linting, TypeScript validation, and a production build before deployment.",
      },
      {
        heading: "AI as an optional layer",
        body: "AI is intentionally an optional layer rather than a requirement for using the application.\n\nWhen no personalized recommendation has been generated, the application displays deterministic suggestions based on the selected mood. If Gemini is unavailable or the daily quota has been exhausted, mood tracking continues normally.\n\nThe same principle applies during logging: users can select their mood and feelings manually without making any AI request. When AI-assisted identification is used, its result is treated as a suggestion that must be reviewed before persistence.",
        image: {
          src: "/images/projects/mood-tracker-ai/home-2.png",
          alt: "Mood Tracker AI dashboard showing logged mood history and trend charts, usable entirely without AI-generated suggestions",
          width: 1350,
          height: 2349,
        },
      },
      {
        heading: "AI usage boundaries",
        list: [
          "All AI calls execute server-side.",
          "AI output is validated before entering application state.",
          "AI usage is limited by a shared per-user daily quota.",
          "The quota resets daily at 00:00 UTC.",
          "Mood identification is limited to two attempts per open logging session.",
          "Personalized recommendations can be generated only once per eligible mood entry.",
          "Provider failures consume no additional application complexity: the normal workflow remains available.",
          "The project does not use agents, RAG, embeddings, vector databases, AI memory, or autonomous workflows.",
        ],
      },
      {
        heading: "Dashboard overview",
        body: "The dashboard surfaces recent mood entries, running averages, and mood and sleep trends at a glance.",
        image: {
          src: "/images/projects/mood-tracker-ai/home.png",
          alt: "Mood Tracker AI dashboard showing recent mood entries, average mood and sleep, and trend charts",
          width: 1353,
          height: 864,
        },
      },
      {
        heading: "Logging a mood",
        body: "Manual mood logging captures a mood level, up to three feelings, a short reflection, and a sleep range in a single guided step.",
        image: {
          src: "/images/projects/mood-tracker-ai/log-mood-modal.png",
          alt: "Mood logging modal with mood level, feelings, journal reflection, and sleep range fields",
          width: 594,
          height: 900,
        },
      },
      {
        heading: "Describing your mood",
        body: "Instead of selecting a mood directly, a user can describe how they feel in their own words.",
        image: {
          src: "/images/projects/mood-tracker-ai/describe-mood.png",
          alt: "Mood logging modal showing a free-text reflection field used for AI-assisted mood identification",
          width: 609,
          height: 659,
        },
      },
      {
        heading: "AI-inferred result",
        body: "Gemini suggests a mood and feelings from that reflection, presented for review and editing before anything is saved.",
        image: {
          src: "/images/projects/mood-tracker-ai/infer.png",
          alt: "AI-suggested mood and feelings shown for review before the user confirms and saves the entry",
          width: 582,
          height: 887,
        },
      },
      {
        heading: "Default suggestions",
        body: "Before any personalized generation, the application already offers deterministic, mood-based suggestions.",
        image: {
          src: "/images/projects/mood-tracker-ai/default-suggestions.png",
          alt: "Deterministic activity suggestions and a supportive phrase shown for a logged mood entry",
          width: 1180,
          height: 692,
        },
      },
      {
        heading: "Personalized suggestions",
        body: "Generating a personalized suggestion replaces the deterministic default with a result tailored to that specific entry, and the result is persisted.",
        image: {
          src: "/images/projects/mood-tracker-ai/ai-generated-suggestions.png",
          alt: "AI-generated personalized activity suggestion and supportive phrase for a specific mood entry",
          width: 1192,
          height: 722,
        },
      },
      {
        heading: "Technology stack",
        list: [
          "Next.js (App Router)",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Recharts",
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
          "AI features are easier to reason about when they are optional enhancements to an already complete workflow.",
          "Structured model output still requires application-level validation and domain constraints.",
          "Quotas and failure behavior are product concerns, not only infrastructure concerns.",
          "AI-inferred user data should remain reviewable and editable before persistence.",
          "Deterministic fallbacks can preserve a useful experience when personalized AI is unavailable.",
          "Small, explicit server/client boundaries make AI integration easier to test and maintain.",
        ],
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
      width: 1512,
      height: 928,
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
          width: 796,
          height: 734,
        },
      },
      {
        heading: "Guest experience",
        body: "The application remains fully usable without authentication while clearly exposing the additional AI functionality.",
        image: {
          src: "/images/projects/web-dictionary-ai/guest-experience.png",
          alt: "Guest view of Web Dictionary AI with dictionary search available and the Learn features shown locked behind sign-in",
          width: 806,
          height: 558,
        },
      },
      {
        heading: "AI features",
        body: "The Learn section provides additional explanations and examples while enforcing authentication and daily usage limits.",
        image: {
          src: "/images/projects/web-dictionary-ai/ai-features.png",
          alt: "Learn panel showing an AI-generated explanation and example sentences for a dictionary entry",
          width: 787,
          height: 791,
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
