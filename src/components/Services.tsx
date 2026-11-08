import { Wrench, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Services() {
  const services = [
    {
      id: "telepites",
      to: "/szolgaltatasok/klimatelepites",
      icon: Wrench,
      title: "Klímatelepítés",
      description:
        "Új split klíma szakszerű telepítése otthonodba vagy irodába – felméréstől a garanciás átadásig, precíz és tiszta munkavégzéssel.",
      ctaText: "Klímatelepítést szeretnék",
      popular: true,
    },
    {
      id: "karbantartas",
      to: "/szolgaltatasok/klimakarbantartas",
      icon: ShieldAlert,
      title: "Klímakarbantartás",
      description:
        "Szezonális karbantartással megőrzöd a klíma teljesítményét és élettartamát. Készülj fel a kánikulára időben – gyors kiszállással.",
      ctaText: "Karbantartást kérek",
      popular: false,
    },
    {
      id: "tisztitas",
      to: "/szolgaltatasok/klimatisztitas",
      icon: Sparkles,
      title: "Klímatisztítás",
      description:
        "Vegyszeres mosással eltávolítom a port, penészt és allergéneket a beltéri egységből – higiénikusabb levegő és hatékonyabb hűtés.",
      ctaText: "Klímatisztítást kérek",
      popular: false,
    },
  ];

  return (
    <section id="szolgaltatasok" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            LAKOSSÁGI KLÍMÁS SZOLGÁLTATÁSOK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            <span className="text-primary">Klímás</span> szolgáltatások
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Klímatelepítés, karbantartás és tisztítás otthonába – megbízható, precíz és tiszta
            munkavégzéssel, gyors kiszállással és 100% elégedettségi garanciával.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-8 bg-card border transition-all duration-300 flex flex-col justify-between hover:border-primary hover:shadow-xl hover:shadow-primary/10 ${
                  service.popular ? "border-primary/50 ring-1 ring-primary/30" : "border-border/80"
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Legnépszerűbb
                  </span>
                )}

                <div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <Link
                  to={service.to}
                  className="inline-flex items-center justify-between w-full rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground border border-border/80 px-5 py-3.5 text-sm font-semibold text-foreground transition-all group"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
