import Image from "next/image";
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
    <section aria-labelledby={headingId} className="flex flex-col gap-4">
      <h2
        id={headingId}
        className="font-heading text-xl font-medium text-foreground"
      >
        {section.heading}
      </h2>

      {section.body ? (
        <p className="max-w-2xl text-base leading-relaxed whitespace-pre-line text-muted-foreground">
          {section.body}
        </p>
      ) : null}

      {section.list ? (
        <ul className="flex max-w-2xl flex-col gap-2 text-base leading-relaxed text-muted-foreground">
          {section.list.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                –
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.subsections ? (
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          {section.subsections.map((subsection) => (
            <div key={subsection.heading} className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-medium text-foreground">
                {subsection.heading}
              </h3>
              <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted-foreground">
                {subsection.list.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">
                      –
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {section.image ? (
        <Image
          src={section.image.src}
          alt={section.image.alt}
          width={section.image.width}
          height={section.image.height}
          sizes="(min-width: 1024px) 632px, (min-width: 720px) 672px, calc(100vw - 48px)"
          className="w-full max-w-2xl rounded-xl object-contain ring-1 ring-foreground/10"
        />
      ) : null}
    </section>
  );
}
