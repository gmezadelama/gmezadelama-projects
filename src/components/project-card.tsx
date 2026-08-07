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
      <Image
        src={project.coverImage}
        alt={`${project.title} — project preview`}
        width={1200}
        height={675}
        className="aspect-video w-full object-cover"
        priority
      />
      <CardHeader className="pt-6">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pb-6">
        <p className="text-sm text-muted-foreground">{project.purpose}</p>
        <TechBadges tech={project.tech} />
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href={`/projects/${project.slug}`}>View case study</Link>
          </Button>
          <Button asChild variant="outline">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          </Button>
          {project.links.repo ? (
            <Button asChild variant="ghost">
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
