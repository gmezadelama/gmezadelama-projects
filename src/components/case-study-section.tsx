import type { CaseStudySection as CaseStudySectionType } from "@/content/projects";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function CaseStudySection({
  section,
}: {
  section: CaseStudySectionType;
}) {
  const headingId = `section-${slugify(section.heading)}`;

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-3">
      <h2
        id={headingId}
        className="font-heading text-xl font-medium text-foreground"
      >
        {section.heading}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed whitespace-pre-line text-muted-foreground">
        {section.body}
      </p>
    </section>
  );
}
