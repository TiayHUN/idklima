import { Star, Users, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: Star,
      text: "5 csillagos Google értékelések",
      highlight: "★ 5.0",
      color: "text-amber-400",
    },
    {
      icon: Users,
      text: "Több száz sikeres projekt",
      highlight: "100+",
      color: "text-primary",
    },
    {
      icon: CheckCircle2,
      text: "100% elégedettségi garancia",
      highlight: "100%",
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="bg-card/60 border-b border-border/50 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-border/60">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-4 pt-4 md:pt-0 first:pt-0 px-4 group"
              >
                <div className="p-3 rounded-xl bg-secondary border border-border group-hover:border-primary/50 transition-colors">
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div>
                  <span className="block text-lg font-bold text-foreground tracking-tight">
                    {item.text}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Megbízható, közvetlen helyi szakember Polgárdiról
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
