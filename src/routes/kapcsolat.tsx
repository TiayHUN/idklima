import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ContactCTA } from "../components/ContactCTA";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat – ID Klíma | Székesfehérvár, +36 20 805 1772" },
      {
        name: "description",
        content:
          "Vedd fel a kapcsolatot az ID Klímával: klímatelepítés, karbantartás, tisztítás Székesfehérváron és 50 km-es körzetében. Hívj: +36 20 805 1772!",
      },
      {
        property: "og:title",
        content: "Kapcsolat – ID Klíma | Székesfehérvár",
      },
      {
        property: "og:description",
        content:
          "Klímaszerelés Székesfehérváron és környékén. Hívj most: +36 20 805 1772, vagy kérj ajánlatot online!",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png",
      },
    ],
  }),
  component: KapcsolatPage,
});

const contactCards = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 20 805 1772",
    href: "tel:+36208051772",
    note: "Minden nap, 0–24 óra",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "ivanska012@gmail.com",
    href: "mailto:ivanska012@gmail.com",
    note: "Válasz 48 órán belül",
  },
  {
    icon: MapPin,
    label: "Telephely",
    value: "Polgárdi, 8154",
    href: null,
    note: "Székesfehérvár és 50 km-es körzet",
  },
];

function KapcsolatPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-16 pb-12 md:pt-20 md:pb-16 border-b border-border/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary tracking-wide uppercase">
            <Phone className="h-4 w-4" />
            <span>KAPCSOLAT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            <span className="text-primary underline decoration-primary/40 underline-offset-8">
              Vedd fel
            </span>{" "}
            velem a kapcsolatot
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
            Klímatelepítésre, karbantartásra vagy tisztításra van szükséged Székesfehérváron vagy
            környékén? A leggyorsabb, ha felhívsz – a fő célom, hogy személyesen beszéljünk. Vagy
            küldd el ajánlatkérésed az űrlapon, és visszahívlak.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
            <a
              href="tel:+36208051772"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>Hívás most: +36 20 805 1772</span>
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
              <ShieldCheck className="h-4 w-4 text-primary" /> 100% elégedettségi garancia
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 5.0 Google értékelés
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Válasz 48 órán belül
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-card/40 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactCards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="rounded-2xl p-8 bg-card border border-border/80 hover:border-primary/50 transition-all h-full flex flex-col items-center text-center gap-3">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="text-lg font-bold text-foreground">{c.value}</span>
                  <span className="text-xs text-muted-foreground">{c.note}</span>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section id="ajanlatkeres" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-2xl">
              <div className="mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
                  AJÁNLATKÉRÉS
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                  Hívj fel, vagy írj e-mailt!
                </h2>
                <p className="text-muted-foreground text-sm">
                  A leggyorsabb, ha felhívsz — vagy küldesz egy e-mailt, és hamarosan visszahívok.
                </p>
              </div>
              <ContactCTA
                title="Beszéljünk a klímás munkáról"
                subtitle="Hívj fel, és személyesen egyeztetünk — vagy írj e-mailt, és hamarosan válaszolok. 100% elégedettségi garancia."
                service="Klímatelepítés, karbantartás vagy tisztítás"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl p-8 bg-card border border-border/80 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Elérhetőségek</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-4 w-4" />
                    </span>
                    <a
                      href="tel:+36208051772"
                      className="font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +36 20 805 1772
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-4 w-4" />
                    </span>
                    <a
                      href="mailto:ivanska012@gmail.com"
                      className="font-bold text-foreground hover:text-primary transition-colors break-all"
                    >
                      ivanska012@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">Nyitvatartás</p>
                      <p className="text-muted-foreground">Minden nap: 0–24 óra</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">Telephely</p>
                      <p className="text-muted-foreground">Polgárdi, 8154</p>
                      <p className="text-muted-foreground">Székesfehérvár és 50 km-es körzet</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4 border-t border-border/60 space-y-2">
                  <a
                    href="https://share.google/rXRiO6bfqteLT4cq3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                    5.0 Google értékelés megtekintése
                  </a>
                  <p className="text-xs text-muted-foreground">Adószám: 92338441-1-27</p>
                </div>
              </div>
              <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/15 via-card to-card border border-primary/30 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  Ingyenes, kötelezettség nélküli
                </h3>
                <p className="text-sm text-muted-foreground">
                  Az ajánlatkérés nem kötelez semmire. Egyeztetünk a részletekről, és csak utána
                  dönthesz.
                </p>
                <a
                  href="tel:+36208051772"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  Hívj most <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map + service area */}
      <section className="py-20 bg-card/40 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              TELEPHELY ÉS KISZÁLGÁLT TERÜLET
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Hol található az <span className="text-primary">ID Klíma?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Telephelyem Polgárdiban (8154) található, a munkát pedig Székesfehérváron és kb. 50
              km-es körzetében vállalom. Nézd meg a térképen, hogy a te településed benne van-e!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-border/80 shadow-xl min-h-[360px] relative bg-card">
              <iframe
                title="ID Klíma telephely térkép – Polgárdi"
                src="https://www.google.com/maps?q=Polg%C3%A1rdi%2C%208154%2C%20Magyarorsz%C3%A1g&z=12&output=embed"
                className="w-full h-full min-h-[360px] absolute inset-0"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-3xl bg-card border border-border/80 p-8 space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Telephely</h3>
                    <p className="text-muted-foreground">Polgárdi, 8154</p>
                    <p className="text-sm text-muted-foreground">
                      Székesfehérvár és 50 km-es körzet
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <a
                    href="https://share.google/rXRiO6bfqteLT4cq3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                  >
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                    Google Cégprofil megnyitása
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=ID+Kl%C3%ADma+Polg%C3%A1rdi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Útvonaltervezés a telephelyre <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/30 p-8 space-y-3">
                <h3 className="text-lg font-bold text-foreground">
                  Nem tudod, hogy a te városod benne van-e?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hívj fel, és azonnal megmondom, hogy a településedhez tudok-e kijönni. A kiszállás
                  Székesfehérvár 50 km-es körzetében gyors.
                </p>
                <a
                  href="tel:+36208051772"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  <Phone className="h-4 w-4" /> Hívj most: +36 20 805 1772
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
