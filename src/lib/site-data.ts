// Small index re-exporting page data + navigation config + helpers.

import { services, type ServicePageData } from "./services-data";
import { locations, type LocationPageData } from "./locations-data";

export type PageData = ServicePageData;
export { services, locations };
export type { ServicePageData, LocationPageData };

export const allPages: PageData[] = [...services, ...locations];

export const getPage = (slug: string, type: "service" | "location") =>
  type === "service"
    ? services.find((p) => p.slug === slug)
    : locations.find((p) => p.slug === slug);

const serviceLabel = (tag: string) =>
  tag === "KLÍMATELEPÍTÉS"
    ? "Klímatelepítés"
    : tag === "KLÍMAKARBANTARTÁS"
      ? "Klímakarbantartás"
      : "Klímatisztítás";

const locationLabel = (slug: string) => {
  const map: Record<string, string> = {
    velence: "Velence",
    mor: "Mór",
    bicske: "Bicske",
    dunaujvaros: "Dunaújváros",
    martonvasar: "Martonvásár",
    siofok: "Siófok",
    varpalota: "Várpalota",
  };
  return map[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1);
};

export const navConfig = {
  services: services.map((s) => ({
    label: serviceLabel(s.heroTag),
    to: `/szolgaltatasok/${s.slug}`,
  })),
  locations: locations.map((l) => ({
    label: locationLabel(l.slug),
    to: `/hol-dolgozunk/${l.slug}`,
  })),
};
