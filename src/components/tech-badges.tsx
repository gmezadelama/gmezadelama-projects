import { Badge } from "@/components/ui/badge";

export function TechBadges({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li key={item}>
          <Badge variant="secondary">{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
