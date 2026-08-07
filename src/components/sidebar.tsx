import { siteConfig } from "@/content/site";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkGroup } from "@/components/external-link-group";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-12">
      <div className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary font-heading text-lg font-medium text-foreground"
        >
          {getInitials(siteConfig.name)}
        </div>
        <div>
          <h2 className="font-heading text-lg font-medium text-foreground">
            {siteConfig.name}
          </h2>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {siteConfig.summary}
      </p>

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-fg-light">
          Expertise
        </h3>
        <ul className="flex flex-wrap gap-2">
          {siteConfig.expertise.map((skill) => (
            <li key={skill}>
              <Badge variant="secondary">{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <ExternalLinkGroup />
    </aside>
  );
}
