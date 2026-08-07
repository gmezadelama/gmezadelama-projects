import type { Metadata } from "next";
import { Source_Sans_3, Raleway } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/content/site";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// PLACEHOLDER: no production domain has been supplied yet.
const PLACEHOLDER_DOMAIN = "https://gustavo-meza-de-lama.example";

export const metadata: Metadata = {
  metadataBase: new URL(PLACEHOLDER_DOMAIN),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.summary,
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
