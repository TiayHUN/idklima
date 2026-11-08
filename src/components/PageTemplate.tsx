import { Link } from "@tanstack/react-router";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
  CheckCircle2,
  Star,
  ChevronDown,
  MessageSquare,
  CalendarCheck,
  FileText,
  Award,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";
import type { PageData } from "../lib/site-data";
import { ContactCTA } from "./ContactCTA";
import { CTABanner } from "./CTABanner";
import { faqJsonLd, serviceJsonLd } from "../lib/seo";

const WHY_ICONS = [Award, ShieldCheck, Clock, MapPin, HeartHandshake];
const STEP_ICONS = [MessageSquare, CalendarCheck, FileText, Wrench, CheckCircle2];

export function PageTemplate({ page }: { page: PageData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: page.heroTitle,
              description: page.metaDesc,
            }),
          ),
        }}
      />
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary tracking-wide uppercase">
                <MapPin className="h-4 w-4" />
                <span>{page.heroTag}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                <span className="text-primary underline decoration-primary/40 underline-offset-8">
                  {page.heroTitle.split(" ").slice(0, 2).join(" ")}
                </span>{" "}
                {page.heroTitle.split(" ").slice(2).join(" ")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
                {page.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
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
              {/* Trust micro-elements */}
              <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-sm font-medium text-muted-foreground">
                {page.trustPoints.map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>{t}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>100% elégedettségi garancia</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-2 bg-gradient-to-b from-primary/30 via-border to-transparent border border-border/80 shadow-2xl overflow-hidden group">
                <img
                  src={page.heroImage}
                  alt={`${page.heroTitle} – ID Klíma klímaszerelés Székesfehérváron és környékén`}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Hivatalos forgalmazó
                    </p>
                    <p className="text-sm font-bold text-foreground">Midea & MDV Szakszerviz</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rövid válaszblokk */}
      <section className="py-16 bg-card/40 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-4">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
            {page.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 5.0 Google értékelés
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> 100% elégedettségi garancia
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <Award className="h-4 w-4 text-primary" /> Több száz sikeres projekt
            </span>
          </div>
        </div>
      </section>

      {/* 3. Gyakori helyzetek és megoldás */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              MIKOR ÉS HOGYAN SEGÍTEK?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight pt-2">
              Jellemző problémák, <span className="text-primary">amelyekre megoldást nyújtok</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Akár új klíma beépítéséről, akár egy gyengélkedő berendezés karbantartásáról van szó –
              itt találod a leggyakoribb helyzeteket és a konkrét lépéseket.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl p-8 bg-card border border-border/80 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  !
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Gyakori probléma</h3>
                  <p className="text-xs text-muted-foreground">Amivel az ügyfelek megkeresnek</p>
                </div>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground/90 font-medium">{page.problem.feeling}</p>
                <div className="pt-3 border-t border-border/60">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                    Miért érdemes időben lépni?
                  </p>
                  <p>{page.problem.whyNotDelay}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-card border border-primary/40 ring-1 ring-primary/20 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">A szakszerű megoldás</h3>
                  <p className="text-xs text-muted-foreground">Amit az ID Klíma elvégez</p>
                </div>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground/90 font-medium">{page.problem.howWeSolve}</p>
                <div className="pt-3 border-t border-border/60">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                    Kész eredmény
                  </p>
                  <p className="text-foreground/90 font-medium">{page.problem.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Részletes szolgáltatásbemutató */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              RÉSZLETES BEMUTATÓ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight pt-2">
              Mit kap <span className="text-primary">pontosan</span>?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Átlátható, kötelezettség nélküli folyamat – pontosan tudod, mit kap tőlem, és mennyibe
              kerül, mielőtt elkezdeném.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <div className="rounded-2xl p-8 bg-card border border-border/80">
              <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" /> Mit tartalmaz?
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {page.detail.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <InfoBlock label="Kinek ajánlott?" value={page.detail.recommendedFor} />
              <InfoBlock label="Mikor szükséges?" value={page.detail.whenNeeded} />
              <InfoBlock label="Milyen folyamattal?" value={page.detail.process} />
              <InfoBlock label="Milyen eredmény?" value={page.detail.result} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Folyamat */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              HOGYAN MŰKÖDIK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
              A munka <span className="text-accent">lépésről lépésre</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              A kapcsolatfelvételtől a garanciás átadásig minden lépésnél tudod, mi történik éppen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {page.steps.map((s, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length] ?? MessageSquare;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl p-6 bg-card border border-border/80 flex flex-col shadow-md"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-accent/80 font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTABanner />

      {/* 6. Miért minket */}

      {/* 6. Miért minket */}
      <section className="py-20 bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              MIÉRT MINKET VÁLASSZ
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
              Miért az <span className="text-primary">ID Klíma</span>?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Megbízható, precíz és tiszta munkavégzés, gyors kiszállás és 100% elégedettségi
              garancia – több száz sikeres projekt tapasztalatával.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {page.whyUs.map((adv, idx) => {
              const Icon = WHY_ICONS[idx % WHY_ICONS.length] ?? Award;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all hover:-translate-y-1 group shadow-sm"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Helyi relevancia */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              HELYI RELEVANCIA
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight pt-2">
              Mely <span className="text-primary">településeken</span> dolgozom?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">{page.areasNote}</p>
            <p className="text-xs text-muted-foreground italic max-w-xl mx-auto">
              Telephely: Polgárdi (8154) – Székesfehérváron és 50 km-es körzetében vállalok klímás
              munkát lakossági ügyfeleknek.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {page.areas.map((area) => (
              <Link
                key={area.name + area.to}
                to={area.to}
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border/80 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/60 hover:bg-secondary transition-all shadow-sm"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7b. Google Térkép a településhez */}
      <section className="py-20 bg-card/40 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              TELEPHELY ÉS KISZÁLGÁLT TERÜLET
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Hol található az <span className="text-primary">ID Klíma</span> {page.defaultLocation}{" "}
              környékén?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Telephelyem Polgárdiban (8154) található, a munkát pedig Székesfehérváron és kb. 50
              km-es körzetében vállalom. Nézd meg a térképen, hogy a te településed benne van-e!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-border/80 shadow-xl min-h-[360px] relative bg-card">
              <iframe
                title={`ID Klíma telephely térkép – ${page.defaultLocation}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  page.defaultLocation + ", Magyarország",
                )}&z=12&output=embed`}
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
                    href={`https://www.google.com/maps/search/?api=1&query=ID+Kl%C3%ADma+${encodeURIComponent(
                      page.defaultLocation,
                    )}`}
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

      {/* 8. Kapcsolódó szolgáltatások */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              KAPCSOLÓDÓ SZOLGÁLTATÁSOK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight pt-2">
              Ezeket is <span className="text-accent">elvégzem</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Ha a klímádnak többre van szüksége, ezekhez a szolgáltatásokhoz is tudsz kérni
              ajánlatot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group rounded-2xl p-7 bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {r.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {r.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Részletek
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GYIK */}
      <FAQSection faqs={page.faqs} />

      {/* GYIK utáni CTA */}
      <CTABanner />

      {/* 10. Záró CTA + form */}
      <section id="ajanlatkeres" className="py-20 bg-background border-t border-border/50 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              KÉRJ AJÁNLATOT
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
              {page.closingTitle}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {page.closingText}
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" /> 100% elégedettségi garancia
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> Válasz 48 órán belül
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-2xl">
            <ContactCTA
              title={page.closingTitle}
              subtitle={page.closingText}
              service={page.defaultService}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl p-6 bg-card border border-border/80">
      <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{label}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{value}</p>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-20 bg-card/30 border-t border-border/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            KÉRDÉSEK ÉS VÁLASZOK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Gyakori <span className="text-primary">kérdések</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            A leggyakoribb kérdések az árról, időtartamról, garanciáról és a folyamatról.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-card border border-border/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left hover:text-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground text-lg">{faq.q}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
