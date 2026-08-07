import { siteConfig } from "@/content/site";

const links: { key: string; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: siteConfig.links.github },
  { key: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
  { key: "resume", label: "Résumé", href: siteConfig.links.resume },
  { key: "contact", label: "Contact", href: siteConfig.links.contact },
];

export function ExternalLinkGroup() {
  return (
    <nav aria-label="External links">
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
