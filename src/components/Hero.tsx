import { Phone, ShieldCheck, MapPin, Star, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
      {/* Background glow gradient standard effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* CoolFix style uppercase tag badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs md:text-sm font-semibold text-primary tracking-[0.2em] uppercase shadow-sm">
              <MapPin className="h-4 w-4" />
              <span>KLÍMA • TELEPÍTÉS • KARBANTARTÁS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Klímaszerelés <span className="text-primary">Székesfehérváron</span> és 50 km-es
              körzetében
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Lakossági klímatelepítés, klímakarbantartás és szakszerű tisztítás Székesfehérváron és
              vonzáskörzetében. Megbízható, precíz és tiszta munkavégzés 100% elégedettségi
              garanciával.
            </p>

            {/* CoolFix style CTA Buttons — phone primary, e-mail secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+36208051772"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="h-5 w-5" />
                <span>Hívás most: +36 20 805 1772</span>
              </a>

              <a
                href="#ajanlatkeres"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-secondary/80 px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary hover:border-primary transition-all"
              >
                <ArrowDown className="h-5 w-5 text-primary" />
                <span>Ajánlatkérés</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>100% elégedettségi garancia</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Precíz, tiszta munkavégzés</span>
              </div>
              <a
                href="https://share.google/rXRiO6bfqteLT4cq3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-400 hover:underline transition-colors"
              >
                <Star className="h-4 w-4 fill-amber-400" />
                <span className="font-semibold text-foreground">5.0 Google Cégprofil</span>
              </a>
            </div>
          </div>

          {/* Hero Image Block - High Quality Real Stock Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-2 bg-card border border-border/80 shadow-2xl overflow-hidden group">
              <img
                src="https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png"
                alt="Szakszerű klímatelepítés és fali split egység szerelése Székesfehérváron"
                className="w-full h-[400px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* CoolFix style Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                    Telepítés és Szerviz
                  </p>
                  <p className="text-base font-bold text-foreground mt-0.5">
                    Midea & MDV Szakszerviz
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/30">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
