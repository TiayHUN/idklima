import { Clock, ShieldCheck, HeartHandshake, Award, Sparkles } from "lucide-react";

export function WhyUs() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: "100% elégedettségi garancia",
      description:
        "Csak akkor vagyok kész, ha Te is elégedett vagy. Ha bármi nem stimmel, visszajövök és javítom.",
    },
    {
      icon: Sparkles,
      title: "Precíz, tiszta munkavégzés",
      description:
        "Fúrástól az átadásig gondos vagyok a részletekkel – nem hagyok magam után port, csomagolást vagy rendetlenséget.",
    },
    {
      icon: Clock,
      title: "Gyors kiszállás",
      description:
        "Helyi szakemberként rövid úton érkezem Székesfehérvárra és környékére, akár 48 órán belül.",
    },
    {
      icon: HeartHandshake,
      title: "Több száz elégedett ügyfél",
      description: "Több száz sikeres projekt és 5 csillagos Google értékelés áll a munkám mögött.",
    },
    {
      icon: Award,
      title: "Midea & MDV hivatalos forgalmazó",
      description:
        "Bevált márkák készülékeit forgalmazom és telepítem, gyári garanciával és szakszervizként.",
    },
  ];

  return (
    <section id="miert-minket" className="py-20 bg-card/40 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            ELŐNYÖK ÉS ÉRTÉKEK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Miért válaszd az <span className="text-primary">ID Klímát</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Megbízható, precíz és tiszta munkavégzés, gyors kiszállás és 100% elégedettségi garancia
            – mert a nyári kényelem nem enged kompromisszumot.
          </p>
        </div>

        {/* Real-work trust image — precíz, tiszta munkavégzés */}
        <div className="mb-12 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border/80 shadow-xl group relative">
          <img
            src="https://vibe.filesafe.space/1793360822455392081/assets/8d1cb7c2-c516-4784-95af-2303366dc828.png"
            alt="Szakszerű klímakarbantartás, nyomásmérés és szervizeszközök"
            className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/90 to-transparent">
            <p className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Precíz, tiszta munkavégzés minden
              projektben
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all hover:-translate-y-1 group shadow-sm hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
