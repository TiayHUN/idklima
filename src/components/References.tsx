export function References() {
  const images = [
    {
      src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/mXreKS21hLP0guz1eyLn/749286130_122107492137391080_785228220503423047_n--2-.jpg",
      title: "Klíma referencia – telepítés",
    },
    {
      src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/mXreKS21hLP0guz1eyLn/771616770_122116212891391080_8106054827854633841_n--2-.jpg",
      title: "Klíma referencia – beltéri egység",
    },
    {
      src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/mXreKS21hLP0guz1eyLn/774362114_122116214349391080_3911186372748422417_n--1-.jpg",
      title: "Klíma referencia – kültéri egység",
    },
    {
      src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/mXreKS21hLP0guz1eyLn/947f27b3-680c-434a-93eb-c925d5b9506a.jfif",
      title: "Klíma referencia – telepítés részlet",
    },
    {
      src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/mXreKS21hLP0guz1eyLn/356301ae-f555-4784-8e33-77fdbb6132c7.jfif",
      title: "Klíma referencia – szerelés",
    },
    {
      src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/mXreKS21hLP0guz1eyLn/attachment-1791818964738046044.jpg",
      title: "Klíma referencia – karbantartás / tisztítás",
    },
  ];

  return (
    <section id="referenciak" className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            REFERENCIÁK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Klímaszerelés <span className="text-primary">valódi referenciákkal</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Minden munka más, ezért a referenciák között saját kivitelezéseimet és valós
            munkafolyamatokat mutatok be.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-border/80 bg-card aspect-[4/3] shadow-md hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  Valós munka
                </span>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
