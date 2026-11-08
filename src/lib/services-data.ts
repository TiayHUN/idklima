// Service page content for ID Klíma.

export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  ogImage: string;
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  trustPoints: string[];
  intro: string;
  problem: { feeling: string; whyNotDelay: string; howWeSolve: string; result: string };
  detail: {
    includes: string[];
    recommendedFor: string;
    whenNeeded: string;
    process: string;
    result: string;
  };
  steps: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  areas: { name: string; to: string }[];
  areasNote: string;
  related: { name: string; to: string; description: string }[];
  faqs: { q: string; a: string }[];
  closingTitle: string;
  closingText: string;
  defaultService: string;
  defaultLocation: string;
};

const HERO_IMG =
  "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png";

export const SERVICE_STEPS = [
  {
    title: "Kapcsolatfelvétel",
    description:
      "Hívj telefonon vagy küldd el ajánlatkérésed az űrlapon. Írd meg a települést és a kért szolgáltatást.",
  },
  {
    title: "Helyszíni felmérés",
    description:
      "Megbeszéljük az igényeidet, szemrevételezzük a helyszínt, és felmérjük a kivitelezés feltételeit.",
  },
  {
    title: "Átlátható ajánlat",
    description:
      "Kapsz egy világos, kötelezettség nélküli árajánlatot a munka és az esetleges készülék áráról.",
  },
  {
    title: "Szakszerű kivitelezés",
    description:
      "Az egyeztetett időpontban, gondosan és tiszta munkavégzéssel elvégzem a klímás munkát.",
  },
  {
    title: "Garancia és utánkövetés",
    description:
      "A munka után tájékoztatlak a karbantartásról, és garanciát vállalok az elvégzett munkára.",
  },
];

export const SERVICE_WHY = [
  {
    title: "100% elégedettségi garancia",
    description:
      "Csak akkor vagyok kész, ha Te is elégedett vagy – ha bármi nem stimmel, visszajövök és javítom.",
  },
  {
    title: "Precíz, tiszta munkavégzés",
    description:
      "Gondos vagyok a részletekkel: nem hagyok magam után port, csomagolást vagy rendetlenséget.",
  },
  {
    title: "Gyors kiszállás",
    description: "Helyi szakemberként rövid úton érkezem, akár 48 órán belül.",
  },
  {
    title: "Helyi jelenlét",
    description: "Polgárdi telephelyről dolgozom Székesfehérvár 50 km-es körzetében.",
  },
  {
    title: "Több száz sikeres projekt",
    description: "Több száz elégedett ügyfél és 5 csillagos Google értékelés áll a munkám mögött.",
  },
];

export const ALL_LOCATIONS = [
  { name: "Velence", to: "/hol-dolgozunk/velence" },
  { name: "Mór", to: "/hol-dolgozunk/mor" },
  { name: "Bicske", to: "/hol-dolgozunk/bicske" },
  { name: "Dunaújváros", to: "/hol-dolgozunk/dunaujvaros" },
  { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
];

export const ALL_SERVICES_RELATED = [
  {
    name: "Klímatelepítés",
    to: "/szolgaltatasok/klimatelepites",
    description: "Új split klíma szakszerű telepítése otthonra vagy irodába.",
  },
  {
    name: "Klímakarbantartás",
    to: "/szolgaltatasok/klimakarbantartas",
    description: "Szezonális karbantartás a megbízható működésért.",
  },
  {
    name: "Klímatisztítás",
    to: "/szolgaltatasok/klimatisztitas",
    description: "Vegyszeres mosás a higiénikusabb levegőért.",
  },
];

export const services: ServicePageData[] = [
  {
    slug: "klimatelepites",
    metaTitle: "Klímatelepítés Székesfehérváron | garanciás kivitelezés",
    metaDesc:
      "Klímatelepítés Székesfehérváron és 50 km-es körzetében: felmérés, ajánlat, szakszerű telepítés garanciával. Hívj most: +36 20 805 1772!",
    ogImage: HERO_IMG,
    heroTag: "KLÍMATELEPÍTÉS",
    heroTitle: "Klímatelepítés Székesfehérváron és környékén",
    heroSubtitle:
      "Új split klíma szakszerű telepítése otthonodba vagy munkahelyedre – felméréstől a garanciás átadásig, gondos kivitelezéssel.",
    heroImage: HERO_IMG,
    trustPoints: ["Garanciális kivitelezés", "Gyors válasz 48 órán belül", "Helyi szakember"],
    intro:
      "A klímatelepítés egy komolyabb beruházás, ahol a minőségi kivitelezésen múlik a berendezés élettartama és a napi komfort. Felmérem a helyszínt, ajánlom a megfelelő teljesítményű készüléket, majd tiszta munkavégzéssel, garanciával telepítem be a klímát.",
    problem: {
      feeling:
        "Nyáron elviselhetetlen a meleg a lakásban, éjszaka sem lehet aludni, a hordozható ventilátor nem elég.",
      whyNotDelay:
        "A hőséghullámok egyre gyakoribbak, és a szezonban a telepítési időpontok hetekre előre megtelnek – érdemes időben időpontot egyeztetni.",
      howWeSolve:
        "Helyszíni felmérés után megtervezem a csatlakozásokat és a beltéri/kültéri egység elhelyezését, majd egy nap alatt elvégzem a telepítést.",
      result: "Csendes, energiatakarékos hűtés és fűtés, garanciával és utókövetéssel.",
    },
    detail: {
      includes: [
        "Helyszíni felmérés és tanácsadás a készülék kiválasztásához",
        "Beltéri és kültéri egység rögzítése, vákuumolás",
        "Rézcső, kondenzvíz-levezetés és elektromos csatlakozás kiépítése",
        "Működéspróba, beállítás és használati tájékoztatás",
      ],
      recommendedFor:
        "Családi házak, lakások és irodák számára, ahol megbízható, csendes hűtésre és fűtésre van szükség.",
      whenNeeded:
        "Új klíma beszerelésekor, régi készülék cseréjekor, vagy ha eddig nem volt klíma a helyiségben.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés → árajánlat → telepítés → garanciás átadás és utánkövetés.",
      result: "Használatra kész, garanciás klímaberendezés, tisztán átadott munkaterülettel.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: ALL_LOCATIONS,
    areasNote:
      "Székesfehérváron és 50 km-es körzetében vállalok klímatelepítést – az alábbi településeken gyakran dolgozom:",
    related: ALL_SERVICES_RELATED.filter((s) => s.to !== "/szolgaltatasok/klimatelepites"),
    faqs: [
      {
        q: "Mennyibe kerül a klímatelepítés?",
        a: "A telepítés ára a készülék típusától és a beépítés nehézségétől függ (csatlakozások hossza, fúrási feladatok). Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Mennyi idő alatt készül el a telepítés?",
        a: "Egy átlagos split klíma telepítése néhány órát vesz igénybe; bonyolultabb beépítés esetén egy nap. Az időpontot előzetesen egyeztetjük.",
      },
      {
        q: "Van garancia a telepítésre?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját pedig a gyártó biztosítja. A pontos feltételekről az átadáskor tájékoztatlak.",
      },
      {
        q: "Milyen területen vállalsz telepítést?",
        a: "Székesfehérváron és annak 50 km-es körzetében. A kiszállás lehetőségéről a település megadásával egyeztetünk.",
      },
      {
        q: "Kell előkészület a telepítés előtt?",
        a: "Érdemes biztosítani a hozzáférést a falfelülethez és a kültéri egység helyéhez. A részleteket a felmérés során átbeszéljük.",
      },
      {
        q: "Segítesz klímát is választani?",
        a: "Igen, a felmérés alapján ajánlom a helyiséghez illő teljesítményű Midea vagy MDV készüléket, és gondoskodom a beszerzésről is.",
      },
    ],
    closingTitle: "Kérj ajánlatot klímatelepítésre!",
    closingText:
      "Vedd fel velem a kapcsolatot, egyeztessünk időpontot a helyszíni felmérésre, és találjuk meg a számodra legjobb megoldást.",
    defaultService: "Klímatelepítés",
    defaultLocation: "",
  },
  {
    slug: "klimakarbantartas",
    metaTitle: "Klímakarbantartás Székesfehérváron | szezonra kész",
    metaDesc:
      "Klímakarbantartás Székesfehérváron és környékén: tisztítás, nyomásvizsgálat, beállítás a megbízható működésért. Hívj most: +36 20 805 1772!",
    ogImage: HERO_IMG,
    heroTag: "KLÍMAKARBANTARTÁS",
    heroTitle: "Klímakarbantartás, hogy a nyár ne érjen meglepetésként",
    heroSubtitle:
      "Szezonális karbantartással megőrzöd a klíma teljesítményét és élettartamát – időben foglalj időpontot a kánikula előtt.",
    heroImage: HERO_IMG,
    trustPoints: ["Garanciás munka", "Gyors időpont", "Helyi szakember"],
    intro:
      "A rendszeres klímakarbantartás segít megőrizni a berendezés megfelelő működését és csökkenti a meghibásodás kockázatát. Készülj fel időben a nyári szezonra: ellenőrzöm a nyomást, tisztítom a szűrőket és beállítom a klímát a gazdaságosabb üzemhez.",
    problem: {
      feeling:
        "A klíma már nem hűt annyira, hangosabban működik, vagy szagot érez a levegőben bekapcsoláskor.",
      whyNotDelay:
        "A karbantartatlan klíma többet fogyaszt, hamarabb elromlik, és a szezonban a szervizidőpontok hetekre megtelnek.",
      howWeSolve:
        "Szezonális karbantartással ellenőrzöm a hűtőközeget, tisztítom a szűrőket és a kondenzátort, majd beállítom az optimális üzemet.",
      result: "Csendesebb, gazdaságosabb és megbízhatóbb hűtés a teljes szezonra.",
    },
    detail: {
      includes: [
        "Szűrők és beltéri egység tisztítása",
        "Hűtőközeg-nyomás ellenőrzése, utántöltés ha szükséges",
        "Kondenzvíz-levezetés és kültéri egység ellenőrzése",
        "Üzemi beállítás és teljesítmény-teszt",
      ],
      recommendedFor:
        "Minden klímaberendezéshez, amit évente legalább egyszer karbantartásra érdemes vinni a megbízható üzemhez.",
      whenNeeded:
        "A nyári és fűtési szezon előtt, illetve ha a klíma teljesítménye vagy hangja változott.",
      process:
        "Kapcsolatfelvétel → időpontegyeztetés → karbantartás helyszínen → beállítás és teszt → javaslat a következő karbantartásra.",
      result: "Megbízható, energiatakarékos üzem és hosszabb élettartam.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: ALL_LOCATIONS,
    areasNote:
      "Székesfehérváron és 50 km-es körzetében vállalok klímakarbantartást – az alábbi településeken gyakran dolgozom:",
    related: ALL_SERVICES_RELATED.filter((s) => s.to !== "/szolgaltatasok/klimakarbantartas"),
    faqs: [
      {
        q: "Milyen gyakran kell karbantartani a klímát?",
        a: "Évente legalább egyszer, a gyakran használt vagy porosabb környezetben működő klímáknál érdemes kétszer (hűtési és fűtési szezon előtt).",
      },
      {
        q: "Mennyi ideig tart a karbantartás?",
        a: "Egy beltéri és kültéri egységnél általában 1–2 órát vesz igénybe. Több egység vagy komolyabb szennyeződés esetén tovább tarthat.",
      },
      {
        q: "Van garancia a karbantartásra?",
        a: "A karbantartási munkára garanciát vállalok. Ha a karbantartás során hibát találok, előzetes egyeztetés után javítom.",
      },
      {
        q: "Milyen területen vállalsz karbantartást?",
        a: "Székesfehérváron és 50 km-es körzetében. A pontos településről egyeztessünk telefonon vagy az űrlapon.",
      },
      {
        q: "A karbantartás része a hűtőközeg utántöltése?",
        a: "A nyomás ellenőrzése igen; ha utántöltésre van szükség, azt külön díj ellenében, előzetes egyeztetés után végzem el.",
      },
      {
        q: "Érdemes a nyár előtt időpontot foglalni?",
        a: "Mindenképp – a kánikula közeledtével a szervizidőpontok gyorsan megtelnek, ezért érdemes hetekkel előre egyeztetni.",
      },
    ],
    closingTitle: "Foglalj időpontot karbantartásra!",
    closingText:
      "Készülj fel a szezonra időben – vedd fel velem a kapcsolatot, és egyeztessünk egy megfelelő időpontot a karbantartásra.",
    defaultService: "Klímakarbantartás",
    defaultLocation: "",
  },
  {
    slug: "klimatisztitas",
    metaTitle: "Klímatisztítás Székesfehérváron | vegyszeres mosás",
    metaDesc:
      "Klímatisztítás vegyszeres mosással Székesfehérváron és környékén: higiénikusabb levegő, kevesebb allergén. Hívj most: +36 20 805 1772!",
    ogImage: HERO_IMG,
    heroTag: "KLÍMATISZTÍTÁS",
    heroTitle: "Klímatisztítás a higiénikusabb levegőért",
    heroSubtitle:
      "A lerakódott szennyeződések és penész eltávolítása fontos a tisztább, egészségesebb levegőért – vegyszeres mosással, alaposan.",
    heroImage: HERO_IMG,
    trustPoints: ["Alapos vegyszeres mosás", "Gyors időpont", "Helyi szakember"],
    intro:
      "Ne feledkezz meg a klíma tisztításáról! A beltéri egységben lerakódott por, penész és szennyeződések rontják a levegő minőségét és a berendezés hatékonyságát. Vegyszeres mosással, alaposan megtisztítom a klímát, hogy újra higiénikus levegőt fújjon.",
    problem: {
      feeling:
        "A klíma bekapcsolásakor por- vagy penészszagot érzel, a levegő nem tűnik frissnek, vagy a családban valaki allergiás.",
      whyNotDelay:
        "A szennyezett klíma allergéneket és baktériumokat juttat a levegőbe, és a lerakódás rontja a hűtési hatékonyságot is.",
      howWeSolve:
        "Szétbontom a tisztítható alkatrészeket, vegyszeres mosással eltávolítom a lerakódást, majd fertőtlenítve összeszerellem.",
      result: "Friss, tiszta levegő és hatékonyabb, csendesebb klímaüzem.",
    },
    detail: {
      includes: [
        "Beltéri egység szétbontása és a tisztítható alkatrészek mosása",
        "Vegyszeres zsíroldás és fertőtlenítés",
        "Kondenzvíz-tálca és levezetés tisztítása",
        "Összeszerelés, teszt és használati tanácsadás",
      ],
      recommendedFor:
        "Családoknak, allergiásoknak és mindenkinek, aki tiszta levegőt és hatékony klímát szeretne.",
      whenNeeded:
        "Évente legalább egyszer, illetve ha a klíma szagot áraszt, vagy látható szennyeződés van rajta.",
      process:
        "Kapcsolatfelvétel → időpontegyeztetés → szétbontás és vegyszeres mosás → fertőtlenítés és teszt → átadás.",
      result: "Higiénikusabb levegő, kevesebb allergén és jobb hűtési teljesítmény.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: ALL_LOCATIONS,
    areasNote:
      "Székesfehérváron és 50 km-es körzetében vállalok klímatisztítást – az alábbi településeken gyakran dolgozom:",
    related: ALL_SERVICES_RELATED.filter((s) => s.to !== "/szolgaltatasok/klimatisztitas"),
    faqs: [
      {
        q: "Mennyibe kerül a klímatisztítás?",
        a: "A díj a tisztítandó egységek számától és a szennyeződés mértékétől függ. Helyszíni felmérés vagy telefonos egyeztetés után pontos árajánlatot adok.",
      },
      {
        q: "Mennyi ideig tart a tisztítás?",
        a: "Egy beltéri egységnél általában 1–1,5 óra. Több egység vagy erős szennyeződés esetén tovább.",
      },
      {
        q: "Van garancia a tisztításra?",
        a: "Igen, a tisztítási munkára garanciát vállalok. Ha bármilyen problémát észlelsz utána, jelezd és visszajövök.",
      },
      {
        q: "Milyen területen vállalsz tisztítást?",
        a: "Székesfehérváron és 50 km-es körzetében. A pontos településről egyeztessünk telefonon.",
      },
      {
        q: "Milyen szert használsz a tisztításhoz?",
        a: "Olyan vegyszereket, amelyek a klímaberendezések tisztítására kifejlesztettek, fertőtlenítő hatásúak és biztonságosak a beltéri használathoz.",
      },
      {
        q: "Érdemes a szezon előtt tisztíttatni?",
        a: "Igen, a tavaszi/őszi tisztítás a legjobb időpont: a klíma frissen és higiénikusan indulhatja a szezont.",
      },
    ],
    closingTitle: "Kérj ajánlatot klímatisztításra!",
    closingText:
      "Vedd fel velem a kapcsolatot, és egyeztessünk időpontot a klíma alapos, vegyszeres tisztítására.",
    defaultService: "Klímatisztítás",
    defaultLocation: "",
  },
];
