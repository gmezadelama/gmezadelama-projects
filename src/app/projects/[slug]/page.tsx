import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content/projects";
import { TechBadges } from "@/components/tech-badges";
import { CaseStudySection } from "@/components/case-study-section";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-10">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-2 rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to projects
      </Link>

      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-3xl font-medium text-foreground">
          {project.title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          {project.summary}
        </p>
        <TechBadges tech={project.tech} />
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          </Button>
          {project.links.repo ? (
            <Button asChild variant="outline">
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </Button>
          ) : null}
        </div>
      </div>

      <Image
        src={project.coverImage}
        alt={`${project.title} — project preview`}
        width={1200}
        height={675}
        className="w-full rounded-xl object-cover"
        priority
      />

      <div className="flex flex-col gap-10">
        {project.caseStudy.map((section) => (
          <CaseStudySection key={section.heading} section={section} />
        ))}
      </div>
    </article>
  );
}
