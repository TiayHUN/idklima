import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { References } from "../components/References";
import { Brands } from "../components/Brands";
import { ServedAreas } from "../components/ServedAreas";
import { FAQ } from "../components/FAQ";
import { CTABanner } from "../components/CTABanner";
import { ContactSection } from "../components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ID Klíma – Klímaszerelés Székesfehérváron és Környékén" },
      {
        name: "description",
        content:
          "Klímatelepítés, klímakarbantartás és klímatisztítás Székesfehérváron és 50 km-es körzetében lakossági ügyfeleknek. Megbízható, precíz munka, gyors kiszállás, 100% garancia. Hívj: +36 20 805 1772!",
      },
      {
        property: "og:title",
        content: "ID Klíma – Klímaszerelés Székesfehérváron és Környékén",
      },
      {
        property: "og:description",
        content:
          "Lakossági klímatelepítés, karbantartás és tisztítás 100% elégedettségi garanciával. Midea és MDV hivatalos forgalmazás. Hívj: +36 20 805 1772!",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <CTABanner />
      <Process />
      <Testimonials />
      <References />
      <Brands />
      <ServedAreas />
      <FAQ />
      <CTABanner />
      <ContactSection />
    </>
  );
}
