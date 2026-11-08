import { Tag, ArrowRight, Check } from "lucide-react";

export function Brands() {
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

  return (
    <section id="arak" className="py-20 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            EZEKET FORGALMAZOM
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Márkák és <span className="text-accent">Megoldások</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Megbízható, bevált Midea és MDV klímaberendezések hivatalos forgalmazása és szakszerű
            telepítése Székesfehérváron. A feltüntetett árak bruttó készülékárak, a szerelési díjat
            a felmérés alapján kedvezően alakítom – 100% elégedettségi garanciával.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold text-foreground mt-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1 mb-6">{p.sub}</p>

                <div className="mb-6 p-4 rounded-xl bg-secondary/80 border border-border/50 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-accent">{p.price}</span>
                  <span className="text-xs text-muted-foreground">bruttó készülékár</span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
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
      </div>
    </section>
  );
}
