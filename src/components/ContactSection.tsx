import { ShieldCheck, Clock, Award, Star, Phone, Mail } from "lucide-react";
import { ContactCTA } from "./ContactCTA";

export function ContactSection() {
  return (
    <section id="ajanlatkeres" className="py-20 bg-background border-t border-border/50 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            KAPCSOLAT
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Hívj fel, vagy <span className="text-accent">írj e-mailt!</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Klímatelepítésre, karbantartásra vagy tisztításra van szükséged Székesfehérváron vagy
            környékén? A leggyorsabb, ha felhívsz — vagy küldesz egy e-mailt. 100% elégedettségi
            garanciával vállalom a munkát.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> 100% elégedettségi garancia
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> Válasz 48 órán belül
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 5.0 Google értékelés
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
              <Award className="h-4 w-4 text-primary" /> Több száz sikeres projekt
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 rounded-3xl bg-card border border-border p-6 sm:p-10 shadow-2xl flex flex-col justify-center">
            <ContactCTA
              title="Klímaszerelésre van szükséged?"
              subtitle="Hívj fel, és személyesen beszéljünk — vagy írj e-mailt, és hamarosan válaszolok. Kötelezettség nélkül, 100% elégedettségi garanciával."
              service="Klímatelepítés, karbantartás vagy tisztítás"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden border border-border/80 shadow-xl relative min-h-[220px] flex-1">
              <img
                src="https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png"
                alt="Professzionális klímaszerelő műszerek és digitális nyomásmérő eszközök"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="rounded-3xl bg-card border border-border/80 p-6 space-y-3">
              <h3 className="text-lg font-bold text-foreground">Gyors segítség, ha sürgős</h3>
              <a
                href="tel:+36208051772"
                className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline transition-colors"
              >
                <Phone className="h-5 w-5" /> +36 20 805 1772
              </a>
              <a
                href="mailto:ivanska012@gmail.com"
                className="block w-fit inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" /> ivanska012@gmail.com
              </a>
              <p className="text-sm text-muted-foreground">
                Minden nap 0–24 óráig · 100% elégedettségi garancia · gyors kiszállás
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
