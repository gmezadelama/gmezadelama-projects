import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-medium text-foreground">
          Projects
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          A selection of projects exploring product engineering, and scoped
          AI features.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
