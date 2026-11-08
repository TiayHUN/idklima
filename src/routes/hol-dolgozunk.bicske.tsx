import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "../components/PageTemplate";
import { locations } from "../lib/locations-data";

const page = locations[2]!;

export const Route = createFileRoute("/hol-dolgozunk/bicske")({
  head: () => ({
    meta: [
      { title: page.metaTitle },
      { name: "description", content: page.metaDesc },
      { property: "og:title", content: page.metaTitle },
      { property: "og:description", content: page.metaDesc },
      { property: "og:image", content: page.ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: page.ogImage },
    ],
  }),
  component: () => <PageTemplate page={page} />,
});
