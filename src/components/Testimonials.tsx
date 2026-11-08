import { Star, Quote, ExternalLink } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Zoltán Nagy",
      location: "Google értékelés",
      rating: 5,
      date: "4 hete",
      text: "Gyors, pontos, precíz.",
    },
    {
      name: "Tamás Vörös",
      location: "Google értékelés",
      rating: 5,
      date: "egy hónapja",
      text: "Gyors, szakszerű kivitelezés! Csak ajánlani tudom, ha megbízható, precíz klímást keresel!",
    },
    {
      name: "Török Klaudia",
      location: "Google értékelés",
      rating: 5,
      date: "egy hónapja",
      text: "Ajánlom – precíz szakember, tökéletes klíma beszerelést végzett nálunk.",
    },
  ];

  return (
    <section id="velemenyek" className="py-20 bg-card/40 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              ÜGYFÉLÉLMÉNY ÉS BIZALOM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
              Ügyfeleink <span className="text-primary">Véleményei</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Hiteles ügyféltapasztalatok a Google Cégprofilomból. Több mint 27 db 5.0 csillagos
              Google értékelés és több száz sikeres lakossági klímatelepítés áll a munkám mögött.
            </p>
            <a
              href="https://share.google/rXRiO6bfqteLT4cq3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-amber-400/20 transition-colors"
            >
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span>5.0 Google értékelés megtekintése</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-border/80 shadow-xl group relative min-h-[240px]">
            <img
              src="https://vibe.filesafe.space/1793360822455392081/assets/8a9d6fff-c83b-48f8-ad34-28cbdde45500.png"
              alt="Alapos, higiénikus vegyszeres klímatisztítás és szűrőmosás"
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-sm font-semibold text-foreground">Több száz elégedett ügyfél</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 bg-card border border-border/80 relative flex flex-col justify-between shadow-md hover:border-primary/40 transition-all"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" />
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-foreground text-sm">{rev.name}</p>
                  <p className="text-muted-foreground">{rev.location}</p>
                </div>
                <span className="text-muted-foreground">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
