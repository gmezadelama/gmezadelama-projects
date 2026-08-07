export type ProjectLinks = {
  demo: string;
  repo?: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  purpose: string;
  tech: string[];
  coverImage: string;
  links: ProjectLinks;
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
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
    coverImage: "/images/projects/web-dictionary-ai-placeholder.jpg",
    links: {
      demo: "https://web-dictionary-ai-deploy.vercel.app/",
    },
    caseStudy: [
      {
        heading: "Overview",
        body: "DRAFT: Web Dictionary AI extends a Frontend Mentor dictionary-app challenge into a full product. Core dictionary search stays public; AI-assisted definitions and examples require authentication and are rate-limited. Full write-up pending.",
      },
      {
        heading: "Architecture",
        body: "DRAFT: Request/response AI calls only — no agent framework, no LangChain, no retrieval pipeline. AI provider access is kept behind server-side boundaries; the client never talks to the model provider directly. Daily usage limits are calculated in UTC and persisted via Neon Postgres through Drizzle ORM.",
      },
      {
        heading: "Technology stack",
        body: "DRAFT: Next.js, TypeScript, Tailwind CSS, and shadcn/ui on the frontend; Clerk for auth; Neon Postgres with Drizzle ORM and Zod validation for persistence and data integrity; Vercel AI SDK with Google Gemini for AI responses; Vitest, React Testing Library, and Playwright for testing; deployed on Vercel.",
      },
      {
        heading: "Live demo",
        body: "https://web-dictionary-ai-deploy.vercel.app/",
      },
    ],
  },
];
