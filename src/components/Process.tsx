import { MessageSquare, CalendarCheck, CheckCircle2, Phone } from "lucide-react";

export function Process() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Vedd fel velem a kapcsolatot",
      description:
        "Hívj telefonon, vagy küldd el ajánlatkérésed az űrlapon! Írd meg, hogy klímatelepítésre, karbantartásra vagy tisztításra van szükséged.",
    },
    {
      step: "02",
      icon: CalendarCheck,
      title: "Egyeztetjük a részleteket",
      description:
        "Megbeszéljük a helyszínt, az igényeidet és a lehetséges időpontot, hogy minden fontos részlet tiszta legyen.",
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Elvégzem a munkát",
      description:
        "Az egyeztetettek szerint, gondos és minőségi munkavégzésre törekedve végzem el a klímával kapcsolatos feladatot.",
    },
  ];

  return (
    <section id="folyamat" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            HOGYAN MŰKÖDIK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Klímás munka <span className="text-accent">egyszerűen</span>, három lépésben
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A kapcsolatfelvételtől a munka elvégzéséig egyszerűen egyeztetjük a részleteket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl p-8 bg-card border border-border/80 flex flex-col justify-between hover:border-accent/60 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-accent/80 font-mono">{s.step}</span>
                    <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{s.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner inside Process */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-card via-secondary to-card border border-primary/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-2xl font-bold text-foreground">Kezdjük el az egyeztetést!</h4>
            <p className="text-muted-foreground text-sm pt-1">
              Vedd fel velem a kapcsolatot, és találjuk meg a számodra megfelelő megoldást – 100%
              elégedettségi garanciával!
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="tel:+36208051772"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>Hívás most</span>
            </a>
            <a
              href="#ajanlatkeres"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <span>Ajánlatot kérek</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
