// Location page content for ID Klíma.

import {
  SERVICE_STEPS,
  SERVICE_WHY,
  ALL_SERVICES_RELATED,
  type ServicePageData,
} from "./services-data";

export type LocationPageData = ServicePageData;

export const locations: LocationPageData[] = [
  {
    slug: "velence",
    metaTitle: "Klímaszerelés Velencén | gyors helyi szakember",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Velencén és a Velencei-tó környékén. Helyi szakember, gyors kiszállás. Hívj: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png",
    heroTag: "HOL DOLGOZOM? – VELENCE",
    heroTitle: "Klímaszerelés Velencén és a Velencei-tó környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Velencén – helyi szakemberként rövid kiszállással és gyors időponttal.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Velence és a Velencei-tó partja népszerű üdülő- és lakóhely, ahol a nyári hőség miatt egyre többen telepítenek klímát. Helyi kiszállással vállalom a klímatelepítést, karbantartást és tisztítást – gyorsan, megbízhatóan, garanciával.",
    problem: {
      feeling:
        "A velencei ingatlanban a nyári meleg miatt elviselhetetlen a hőség, vagy a meglévő klíma nem hűt megfelelően és szagot áraszt.",
      whyNotDelay:
        "A főszezonban a szabad szerelési és karbantartási időpontok pillanatok alatt elfogynak – a kánikula előtt érdemes felkészülni.",
      howWeSolve:
        "Gyors helyi kiszállással felmérem az épületet, kiválasztjuk a legmegfelelőbb hűtő-fűtő klímát, és garanciával beépítem vagy kitisztítom.",
      result: "Megbízható hűtés és fűtés, tiszta beltéri levegő és 100% elégedettségi garancia.",
    },
    detail: {
      includes: [
        "Klímatelepítés családi házakba, lakásokba és üdülőkbe",
        "Szezonális karbantartás a nyár előtt",
        "Vegyszeres klímatisztítás a tisztább levegőért",
        "Midea és MDV készülékek forgalmazása és telepítése",
      ],
      recommendedFor:
        "Velencei és tóparti ingatlanok tulajdonosainak, akik megbízható helyi szakembert keresnek.",
      whenNeeded:
        "Új klíma telepítésekor, szezonális karbantartáshoz, vagy ha a meglévő klíma tisztításra szorul.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Velencén → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás, garanciás munka és komfortos hűtés a nyáron is.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Gárdony", to: "/" },
      { name: "Velence", to: "/hol-dolgozunk/velence" },
      { name: "Mór", to: "/hol-dolgozunk/mor" },
      { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
    ],
    areasNote: "Velence és a Velencei-tó környékén gyakran dolgozom az alábbi településeken is:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Velencén?",
        a: "Igen, Velence és a Velencei-tó környéke a szolgáltatási területem része. Rövid kiszállással vállalom a telepítést, karbantartást és tisztítást.",
      },
      {
        q: "Milyen hamar tudsz kijönni Velencére?",
        a: "A helyi jelenlét miatt rövid a kiszállás; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
      {
        q: "Mennyibe kerül a telepítés Velencén?",
        a: "A díj a készüléktől és a beépítés nehézségétől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Üdülőbe is vállalsz telepítést?",
        a: "Igen, üdülőkbe és nyaralókba is vállalok klímatelepítést és karbantartást, hogy a nyári pihenés kényelmes legyen.",
      },
    ],
    closingTitle: "Klímaszerelés Velencén? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként rövid kiszállással vállalom a klímás munkát Velencén. Kérj ajánlatot, és egyeztessünk időpontot!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Velence",
  },
  {
    slug: "mor",
    metaTitle: "Klímaszerelés Móron | megbízható helyi szakember",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Móron és környékén. Gyors kiszállás, garanciás munka. Hívj most: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/8d1cb7c2-c516-4784-95af-2303366dc828.png",
    heroTag: "HOL DOLGOZOM? – MÓR",
    heroTitle: "Klímaszerelés Móron és környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Móron – helyi szakemberként gyors kiszállással és garanciás kivitelezéssel.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/8d1cb7c2-c516-4784-95af-2303366dc828.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Mór és környéke a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást vállalom helyi kiszállással – a felméréstől a garanciás átadásig, korrekt kommunikációval.",
    problem: {
      feeling:
        "A lakás vagy családi ház gyorsan felmelegszik, a pihenés és alvás nehézkessé válik, a meglévő klíma pedig zajos, alig hűt vagy poros szagot fúj.",
      whyNotDelay:
        "A nyári hőség beálltakor a szerviz- és telepítési naptárak hetekre betelnek – sokkal egyszerűbb és kényelmesebb még időben időpontot egyeztetni.",
      howWeSolve:
        "Rövid kiszállással felmérem a móri ingatlant, tanácsot adok a helyes teljesítményre, és pormentes, tiszta munkavégzéssel elvégzem a telepítést vagy karbantartást.",
      result: "Csendes, megbízhatóan működő klímarendszer, garantált garanciális háttérrel.",
    },
    detail: {
      includes: [
        "Klímatelepítés családi házakba és lakásokba",
        "Szezonális karbantartás és beállítás",
        "Vegyszeres klímatisztítás",
        "Midea és MDV készülékek forgalmazása",
      ],
      recommendedFor: "Móri és környékbeli ingatlantulajdonosoknak.",
      whenNeeded: "Új klíma telepítésekor, karbantartáshoz vagy tisztításhoz.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Móron → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás és garanciás, megbízható munka.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Bicske", to: "/hol-dolgozunk/bicske" },
      { name: "Mór", to: "/hol-dolgozunk/mor" },
      { name: "Sárbogárd", to: "/" },
      { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
    ],
    areasNote: "Mór és környéke – az alábbi településeken is gyakran dolgozom:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Móron?",
        a: "Igen, Mór a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást is vállalok.",
      },
      {
        q: "Milyen hamar tudsz kijönni Móra?",
        a: "Helyi kiszállással rövid úton érkezem; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
      {
        q: "Mennyibe kerül a telepítés Móron?",
        a: "A díj a készüléktől és a beépítéstől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Karbantartást is vállalsz Móron?",
        a: "Igen, a szezonális karbantartást és a vegyszeres tisztítást is elvégzem helyi kiszállással.",
      },
    ],
    closingTitle: "Klímaszerelés Móron? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként gyors kiszállással vállalom a klímás munkát Móron. Kérj ajánlatot, és egyeztessünk!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Mór",
  },
  {
    slug: "bicske",
    metaTitle: "Klímaszerelés Bicskén | gyors és garanciás",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Bicskén és környékén. Helyi szakember, gyors kiszállás. Hívj: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png",
    heroTag: "HOL DOLGOZOM? – BICSKE",
    heroTitle: "Klímaszerelés Bicskén és környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Bicskén – helyi szakemberként gyors kiszállással és garanciás munkával.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Bicske és környéke a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást vállalok helyi kiszállással – megbízhatóan, garanciával, korrekt kommunikációval.",
    problem: {
      feeling:
        "Bicskén a kánikulában az épület belső tere elviselhetetlenül forróvá válik, vagy a korábbi klíma nem bírja a terhelést és büdös levegőt fúj.",
      whyNotDelay:
        "Amikor megérkezik a tartós 35 fok feletti hőség, minden klímaszerelő leterhelt lesz – érdemes még az elviselhető hetekben felmérni és beszerelni.",
      howWeSolve:
        "Bicskei helyszíni felmérést követően pontos árajánlatot adok, majd prémium szerszámokkal, faláttörés-porszívózással, tisztán és garanciával dolgozom.",
      result:
        "Egyenletes, kellemes hőmérséklet a lakásban vagy házban, 100% elégedettségi garanciával.",
    },
    detail: {
      includes: [
        "Klímatelepítés családi házakba és lakásokba",
        "Szezonális karbantartás és beállítás",
        "Vegyszeres klímatisztítás",
        "Midea és MDV készülékek forgalmazása",
      ],
      recommendedFor: "Bicskei és környékbeli ingatlantulajdonosoknak.",
      whenNeeded: "Új klíma telepítésekor, karbantartáshoz vagy tisztításhoz.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Bicskén → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás és garanciás, megbízható munka.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Bicske", to: "/hol-dolgozunk/bicske" },
      { name: "Mór", to: "/hol-dolgozunk/mor" },
      { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
      { name: "Tatabánya", to: "/" },
    ],
    areasNote: "Bicske és környéke – az alábbi településeken is gyakran dolgozom:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Bicskén?",
        a: "Igen, Bicske a szolgáltatási területem része. Telepítést, karbantartást és tisztítást is vállalok.",
      },
      {
        q: "Milyen hamar tudsz kijönni Bicskére?",
        a: "Helyi kiszállással rövid úton érkezem; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
      {
        q: "Mennyibe kerül a telepítés Bicskén?",
        a: "A díj a készüléktől és a beépítéstől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Midea és MDV klímát is tudsz hozni?",
        a: "Igen, hivatalos forgalmazóként a Midea és MDV készülékek beszerzéséről és telepítéséről is gondoskodom.",
      },
    ],
    closingTitle: "Klímaszerelés Bicskén? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként gyors kiszállással vállalom a klímás munkát Bicskén. Kérj ajánlatot, és egyeztessünk!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Bicske",
  },
  {
    slug: "dunaujvaros",
    metaTitle: "Klímaszerelés Dunaújvárosban | garanciás kivitelezés",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Dunaújvárosban és környékén. Gyors kiszállás, garancia. Hívj: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/8a9d6fff-c83b-48f8-ad34-28cbdde45500.png",
    heroTag: "HOL DOLGOZOM? – DUNAÚJVÁROS",
    heroTitle: "Klímaszerelés Dunaújvárosban és környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Dunaújvárosban – helyi szakemberként gyors kiszállással és garanciás munkával.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/8a9d6fff-c83b-48f8-ad34-28cbdde45500.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Dunaújváros a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást vállalok helyi kiszállással – a felméréstől a garanciás átadásig, gondos kivitelezéssel.",
    problem: {
      feeling:
        "Dunaújvárosban – különösen a panel- és tégla társasházakban – nyáron szinte megreked a hőség, a lakás nem tud kihűlni éjszaka sem.",
      whyNotDelay:
        "A főszezon közepén a panel klímatelepítésekre hatalmas a kereslet; ha időben lépsz, elkerülöd a hetekig tartó várakozási időt.",
      howWeSolve:
        "Tapasztalattal rendelkezem a dunaújvárosi társasházi és családi házas telepítésekben is: ipari porelszívással és szakszerű kültéri rögzítéssel szerelem be a klímát.",
      result: "Csendes, energiatakarékos hűtés, por- és koszmentesen átadott otthon.",
    },
    detail: {
      includes: [
        "Klímatelepítés panel- és családi házakba",
        "Szezonális karbantartás és beállítás",
        "Vegyszeres klímatisztítás",
        "Midea és MDV készülékek forgalmazása",
      ],
      recommendedFor: "Dunaújvárosi és környékbeli ingatlantulajdonosoknak.",
      whenNeeded: "Új klíma telepítésekor, karbantartáshoz vagy tisztításhoz.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Dunaújvárosban → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás és garanciás, megbízható munka.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Dunaújváros", to: "/hol-dolgozunk/dunaujvaros" },
      { name: "Adony", to: "/" },
      { name: "Rácalmás", to: "/" },
      { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
    ],
    areasNote: "Dunaújváros és környéke – az alábbi településeken is gyakran dolgozom:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Dunaújvárosban?",
        a: "Igen, Dunaújváros a szolgáltatási területem része. Telepítést, karbantartást és tisztítást is vállalok.",
      },
      {
        q: "Panelházba is vállalsz telepítést?",
        a: "Igen, panel- és társasházakba is vállalok klímatelepítést, a házszabályok és a műszaki feltételek figyelembevételével.",
      },
      {
        q: "Mennyibe kerül a telepítés Dunaújvárosban?",
        a: "A díj a készüléktől és a beépítéstől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Milyen hamar tudsz kijönni Dunaújvárosba?",
        a: "Helyi kiszállással rövid úton érkezem; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
    ],
    closingTitle: "Klímaszerelés Dunaújvárosban? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként gyors kiszállással vállalom a klímás munkát Dunaújvárosban. Kérj ajánlatot!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Dunaújváros",
  },
  {
    slug: "martonvasar",
    metaTitle: "Klímaszerelés Martonvásáron | gyors helyi szakember",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Martonvásáron és környékén. Gyors kiszállás, garancia. Hívj: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png",
    heroTag: "HOL DOLGOZOM? – MARTONVÁSÁR",
    heroTitle: "Klímaszerelés Martonvásáron és környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Martonvásáron – helyi szakemberként gyors kiszállással és garanciás munkával.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Martonvásár és környéke a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást vállalok helyi kiszállással – megbízhatóan, garanciával, korrekt kommunikációval.",
    problem: {
      feeling:
        "Martonvásáron és vonzáskörzetében az otthonok túlmelegszenek nyáron, vagy az őszi-téli átmeneti fűtéshez hiányzik egy gazdaságos hűtő-fűtő klíma.",
      whyNotDelay:
        "A kánikulai hetekben nehéz gyorsan megbízható szakembert találni, míg egy előre egyeztetett időponttal stresszmentes a folyamat.",
      howWeSolve:
        "Helyi kiszállással felmérem az igényeket, pontos árat adok és tiszta, precíz munkával beépítem vagy karbantartom a klímát.",
      result: "Komfortos klíma egész évben – hűtésre és gazdaságos fűtésre egyaránt felkészítve.",
    },
    detail: {
      includes: [
        "Klímatelepítés családi házakba és lakásokba",
        "Szezonális karbantartás és beállítás",
        "Vegyszeres klímatisztítás",
        "Midea és MDV készülékek forgalmazása",
      ],
      recommendedFor: "Martonvásári és környékbeli ingatlantulajdonosoknak.",
      whenNeeded: "Új klíma telepítésekor, karbantartáshoz vagy tisztításhoz.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Martonvásáron → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás és garanciás, megbízható munka.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
      { name: "Bicske", to: "/hol-dolgozunk/bicske" },
      { name: "Velence", to: "/hol-dolgozunk/velence" },
      { name: "Mór", to: "/hol-dolgozunk/mor" },
    ],
    areasNote: "Martonvásár és környéke – az alábbi településeken is gyakran dolgozom:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Martonvásáron?",
        a: "Igen, Martonvásár a szolgáltatási területem része. Telepítést, karbantartást és tisztítást is vállalok.",
      },
      {
        q: "Milyen hamar tudsz kijönni Martonvásárra?",
        a: "Helyi kiszállással rövid úton érkezem; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
      {
        q: "Mennyibe kerül a telepítés Martonvásáron?",
        a: "A díj a készüléktől és a beépítéstől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Karbantartást is vállalsz Martonvásáron?",
        a: "Igen, a szezonális karbantartást és a vegyszeres tisztítást is elvégzem helyi kiszállással.",
      },
    ],
    closingTitle: "Klímaszerelés Martonvásáron? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként gyors kiszállással vállalom a klímás munkát Martonvásáron. Kérj ajánlatot!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Martonvásár",
  },
  {
    slug: "siofok",
    metaTitle: "Klímaszerelés Siófokon | gyors helyi szakember",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Siófokon és a Balaton partján. Helyi szakember, gyors kiszállás, garancia. Hívj: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/8d1cb7c2-c516-4784-95af-2303366dc828.png",
    heroTag: "HOL DOLGOZOM? – SIÓFOK",
    heroTitle: "Klímaszerelés Siófokon és a Balaton-parti környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Siófokon – helyi szakemberként gyors kiszállással, apartmanokba és nyaralókba is, garanciával.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/8d1cb7c2-c516-4784-95af-2303366dc828.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Siófok és a Balaton-parti települések a szolgáltatási területem részei. A nyári hőségben különösen fontos a megbízható klíma – vállalom a klímatelepítést, karbantartást és tisztítást apartmanokba, nyaralókba és családi házakba is, gyors helyi kiszállással, garanciával.",
    problem: {
      feeling:
        "Siófokon és a Balaton partján a nyári kánikulában a lakás, apartman vagy nyaraló belseje elviselhetetlenül meleg lesz, vagy a meglévő klíma nem bírja a terhelést és büdös levegőt fúj.",
      whyNotDelay:
        "A főszezonban a telepítési és karbantartási időpontok pillanatok alatt elfogynak, a hőség pedig minden évvel korábban és tartósabban jelentkezik – érdemes még időben időpontot egyeztetni.",
      howWeSolve:
        "Gyors helyi kiszállással felmérem az apartmant vagy nyaralót, javaslom a megfelelő teljesítményű hűtő-fűtő klímát, és tiszta, precíz munkavégzéssel, garanciával elvégzem a telepítést vagy karbantartást.",
      result: "Megbízható, csendes hűtés a Balaton-parti nyárban, 100% elégedettségi garanciával.",
    },
    detail: {
      includes: [
        "Klímatelepítés családi házakba, lakásokba, apartmanokba és nyaralókba",
        "Szezonális karbantartás a nyári szezon előtt",
        "Vegyszeres klímatisztítás a higiénikusabb levegőért",
        "Midea és MDV készülékek forgalmazása és telepítése",
      ],
      recommendedFor:
        "Siófoki és Balaton-parti ingatlantulajdonosoknak, apartman- és nyaralótulajdonosoknak, akik megbízható helyi szakembert keresnek.",
      whenNeeded:
        "Új klíma telepítésekor, a szezon előtti karbantartáshoz, vagy ha a meglévő klíma tisztításra szorul.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Siófokon → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás, garanciás munka és komfortos hűtés a nyári szezonban is.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Siófok", to: "/hol-dolgozunk/siofok" },
      { name: "Balatonvilágos", to: "/" },
      { name: "Zamárdi", to: "/" },
      { name: "Balatonföldvár", to: "/" },
      { name: "Balatonlelle", to: "/" },
      { name: "Enying", to: "/" },
    ],
    areasNote: "Siófok és a Balaton-parti környék – az alábbi településeken is gyakran dolgozom:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Siófokon?",
        a: "Igen, Siófok és a Balaton-parti környék a szolgáltatási területem része. Telepítést, karbantartást és tisztítást is vállalok.",
      },
      {
        q: "Apartmanba vagy nyaralóba is vállalsz telepítést?",
        a: "Igen, apartmanokba és nyaralókba is vállalok klímatelepítést és karbantartást, hogy a Balaton-parti nyaralás kényelmes legyen.",
      },
      {
        q: "Milyen hamar tudsz kijönni Siófokra?",
        a: "Helyi kiszállással rövid úton érkezem; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
      {
        q: "Mennyibe kerül a telepítés Siófokon?",
        a: "A díj a készüléktől és a beépítés nehézségétől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Érdemes a szezon előtt időpontot foglalni?",
        a: "Mindenképp – a Balaton-parti főszezonban a telepítési és karbantartási időpontok gyorsan megtelnek, ezért érdemes hetekkel előre egyeztetni.",
      },
    ],
    closingTitle: "Klímaszerelés Siófokon? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként gyors kiszállással vállalom a klímás munkát Siófokon és a Balaton partján. Kérj ajánlatot, és egyeztessünk időpontot!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Siófok",
  },
  {
    slug: "varpalota",
    metaTitle: "Klímaszerelés Várpalotán | megbízható helyi szakember",
    metaDesc:
      "Klímatelepítés, karbantartás és tisztítás Várpalotán és környékén. Gyors kiszállás, garanciás munka. Hívj most: +36 20 805 1772!",
    ogImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png",
    heroTag: "HOL DOLGOZOM? – VÁRPALOTA",
    heroTitle: "Klímaszerelés Várpalotán és környékén",
    heroSubtitle:
      "Klímatelepítés, karbantartás és tisztítás Várpalotán – helyi szakemberként gyors kiszállással és garanciás, precíz kivitelezéssel.",
    heroImage:
      "https://vibe.filesafe.space/1793360822455392081/assets/2c0d9df8-1785-4b31-8fd1-54836a7bd4ab.png",
    trustPoints: ["Rövid kiszállás", "Gyors válasz", "Garanciás munka"],
    intro:
      "Várpalota és környéke a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást vállalok helyi kiszállással – családi házakba és lakásokba is, megbízhatóan, garanciával, korrekt kommunikációval.",
    problem: {
      feeling:
        "Várpalotán a nyári melegben az otthon gyorsan felmelegszik, a pihenés és alvás nehézkessé válik, vagy a meglévő klíma már nem hűt eléggé és poros, büdös levegőt fúj.",
      whyNotDelay:
        "A tartós hőség beálltakor a helyi szerelők naptárai hetekre megtelnek – sokkal egyszerűbb és kényelmesebb még időben időpontot egyeztetni a kánikula előtt.",
      howWeSolve:
        "Helyi kiszállással felmérem a várpalotai ingatlant, pontos árajánlatot adok, majd porszívós, tiszta munkavégzéssel és garanciával elvégzem a telepítést vagy karbantartást.",
      result: "Csendes, megbízhatóan működő klímarendszer, 100% elégedettségi garanciával.",
    },
    detail: {
      includes: [
        "Klímatelepítés családi házakba és lakásokba",
        "Szezonális karbantartás és beállítás",
        "Vegyszeres klímatisztítás és fertőtlenítés",
        "Midea és MDV készülékek forgalmazása és telepítése",
      ],
      recommendedFor:
        "Várpalotai és környékbeli ingatlantulajdonosoknak, akik megbízható helyi szakembert keresnek.",
      whenNeeded:
        "Új klíma telepítésekor, szezonális karbantartáshoz, vagy ha a meglévő klíma tisztításra vagy javításra szorul.",
      process:
        "Kapcsolatfelvétel → helyszíni felmérés Várpalotán → ajánlat → kivitelezés → garancia és utánkövetés.",
      result: "Gyors helyi kiszállás és garanciás, megbízható, tiszta munka.",
    },
    steps: SERVICE_STEPS,
    whyUs: SERVICE_WHY,
    areas: [
      { name: "Székesfehérvár", to: "/" },
      { name: "Várpalota", to: "/hol-dolgozunk/varpalota" },
      { name: "Pétfürdő", to: "/" },
      { name: "Berhida", to: "/" },
      { name: "Öskü", to: "/" },
      { name: "Inota", to: "/" },
      { name: "Mór", to: "/hol-dolgozunk/mor" },
    ],
    areasNote: "Várpalota és környéke – az alábbi településeken is gyakran dolgozom:",
    related: ALL_SERVICES_RELATED,
    faqs: [
      {
        q: "Vállalsz klímaszerelést Várpalotán?",
        a: "Igen, Várpalota a szolgáltatási területem része. Klímatelepítést, karbantartást és tisztítást is vállalok.",
      },
      {
        q: "Milyen hamar tudsz kijönni Várpalotára?",
        a: "Helyi kiszállással rövid úton érkezem; a felmérésre gyakran 48 órán belül időpontot tudunk egyeztetni.",
      },
      {
        q: "Mennyibe kerül a telepítés Várpalotán?",
        a: "A díj a készüléktől és a beépítés nehézségétől függ. Felmérés után kötelezettség nélküli árajánlatot adok.",
      },
      {
        q: "Van garancia a munkára?",
        a: "Igen, a kivitelezésre garanciát vállalok, a készülék garanciáját a gyártó biztosítja.",
      },
      {
        q: "Panel- vagy társasházba is vállalsz telepítést?",
        a: "Igen, panel- és társasházakba is vállalok klímatelepítést, a házszabályok és műszaki feltételek figyelembevételével.",
      },
      {
        q: "Érdemes a nyár előtt időpontot foglalni?",
        a: "Mindenképp – a kánikula közeledtével a szerelési időpontok gyorsan megtelnek, ezért érdemes hetekkel előre egyeztetni.",
      },
    ],
    closingTitle: "Klímaszerelés Várpalotán? Vedd fel velem a kapcsolatot!",
    closingText:
      "Helyi szakemberként gyors kiszállással vállalom a klímás munkát Várpalotán és környékén. Kérj ajánlatot, és egyeztessünk!",
    defaultService: "Klímatelepítés",
    defaultLocation: "Várpalota",
  },
];
