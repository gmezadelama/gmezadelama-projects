import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadges } from "@/components/tech-badges";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden py-0">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study: ${project.title}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} — project preview`}
          width={1200}
          height={675}
          sizes="(min-width: 1024px) 632px, calc(100vw - 48px)"
          className="aspect-video w-full object-cover"
          priority
        />
      </Link>
      <CardHeader className="pt-6">
        <CardTitle className="text-xl">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pb-6">
        <p className="text-sm text-muted-foreground">{project.purpose}</p>
        <TechBadges tech={project.tech} />
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href={`/projects/${project.slug}`}>View case study</Link>
          </Button>
          {project.links.demo ? (
            <Button asChild variant="outline">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            </Button>
          ) : null}
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
      </CardContent>
    </Card>
  );
}
