import { createFileRoute } from "@tanstack/react-router";
import { Phone, ArrowRight, Check, ShieldCheck, Clock, MapPin, Tag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ContactCTA } from "../components/ContactCTA";
import { CTABanner } from "../components/CTABanner";
import { navConfig } from "../lib/site-data";

export const Route = createFileRoute("/arak")({
  head: () => ({
    meta: [
      { title: "Árak és klímamárkák | ID Klíma Székesfehérvár" },
      {
        name: "description",
        content:
          "Midea és MDV klímaberendezések bruttó készülékárai és szakszerű telepítés Székesfehérváron. Kérj egyedi ajánlatot: +36 20 805 1772!",
      },
      {
        property: "og:title",
        content: "Árak és klímamárkák | ID Klíma Székesfehérvár",
      },
      {
        property: "og:description",
        content:
          "Midea és MDV klímaberendezések bruttó árai és szakszerű telepítés. Kérj egyedi ajánlatot!",
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
  component: ArakPage,
});

const products = [
  {
    name: "MDV",
    price: "259 000 Ft",
    sub: "FR-12HRFN8 / MOX133-12HRFN8 típus",
    badge: "Kiváló ár-érték arány",
    features: [
      "Inverteres hűtés/fűtés",
      "A++ energiatakarékos besorolás",
      "Csendes éjszakai üzemmód",
    ],
  },
  {
    name: "Midea Xtreme Save",
    price: "282 000 Ft",
    sub: "MG2X-12-BL-SP típus, fekete kiadás",
    badge: "Legnépszerűbb választás",
    popular: true,
    features: [
      "Prémium fekete matt dizájn",
      "Wi-Fi okosvezérlés okostelefonról",
      "3D légáramlás & gyors hűtés/fűtés",
    ],
  },
  {
    name: "Midea Breezeless E",
    price: "340 000 Ft",
    sub: "MCB2-12-SP típus",
    badge: "Maximalista kényelem",
    features: [
      "Breezeless huzatmentes hűtési technológia",
      "A+++ csúcskategóriás energiahatékonyság",
      "Beépített UV-C légtisztító szűrő",
    ],
  },
];

function ArakPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-16 pb-12 md:pt-20 md:pb-16 border-b border-border/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary tracking-wide uppercase">
            <Tag className="h-4 w-4" />
            <span>ÁRAK ÉS MÁRKÁK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            <span className="text-primary underline decoration-primary/40 underline-offset-8">
              Klímaberendezések
            </span>{" "}
            és árak
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
            Midea és MDV klímaberendezések hivatalos forgalmazása és szakszerű telepítése
            Székesfehérváron. A feltüntetett árak bruttó készülékárak, a szerelési díjat a felmérés
            alapján kedvezően alakítom.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
            <a
              href="tel:+36208051772"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>+36 20 805 1772</span>
            </a>
            <a
              href="#ajanlatkeres"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-secondary/80 px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary hover:border-primary transition-all group"
            >
              <span>Ajánlatot kérek</span>
              <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-y-2 gap-x-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Garanciás telepítés
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Felmérés 48 órán belül
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Székesfehérvár és 50 km
            </div>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((p, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 bg-card border flex flex-col justify-between relative shadow-lg transition-all ${
                  p.popular ? "border-accent ring-2 ring-accent/30 scale-102" : "border-border/80"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {p.badge}
                  </span>
                )}
                <div>
                  {!p.popular && (
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md mb-3">
                      {p.badge}
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-foreground mt-1">{p.name}</h2>
                  <p className="text-xs text-muted-foreground font-mono mt-1 mb-6">{p.sub}</p>
                  <div className="mb-6 p-4 rounded-xl bg-secondary/80 border border-border/50 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-accent">{p.price}</span>
                    <span className="text-xs text-muted-foreground">bruttó készülékár</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#ajanlatkeres"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
                >
                  <span>Kérj egyedi ajánlatot</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              A feltüntetett árak{" "}
              <span className="font-semibold text-foreground">bruttó készülékárak</span>, amelyekhez
              a felmérés alapján kedvező szerelési díjat biztosítok. A telepítés költsége a
              csatlakozások hosszától és a beépítés nehézségétől függ. Töltse ki az ajánlatkérő
              űrlapot, és pontos árajánlatot küldök!
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTABanner />

      {/* Services links */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              KAPCSOLÓDÓ SZOLGÁLTATÁSOK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight pt-2">
              Kérj ajánlatot <span className="text-accent">a szolgáltatáshoz</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {navConfig.services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group rounded-2xl p-7 bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {s.label}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-auto">
                  Részletek
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="ajanlatkeres" className="py-20 bg-background border-t border-border/50 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              KÉRJ AJÁNLATOT
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
              Kérj <span className="text-accent">egyedi ajánlatot</span>!
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Add meg a települést és a kért szolgáltatást, és küldök egy kötelezettség nélküli
              árajánlatot.
            </p>
          </div>
          <div className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-2xl">
            <ContactCTA
              title="Kérj egyedi ajánlatot!"
              subtitle="Hívj fel, és személyesen beszéljünk a klímáról és az árról — vagy írj e-mailt, és küldök egy kötelezettség nélküli árajánlatot."
              service="Klímaberendezés telepítése"
            />
          </div>
        </div>
      </section>
    </>
  );
}
