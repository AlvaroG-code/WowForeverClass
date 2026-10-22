/* Razas — raciales revisados en la beta del 15 de octubre de 2026 */

RACES.push(
  {
    id: "humano",
    name: "Humano",
    initials: "HU",
    faction: "alliance",
    factionLabel: "Alianza",
    tagline: "Voluntad inquebrantable, ambición sin techo.",
    tags: ["PvP", "Crítico", "Versátil"],
    racials: [
      { name: "Voluntad de supervivencia", type: "Activo", desc: "Rompe los efectos de aturdimiento. 2 min de reutilización." },
      { name: "Percepción", type: "Activo", desc: "Aumenta mucho la detección de enemigos en sigilo durante 20 s." },
      { name: "Saña", type: "Pasivo", desc: "+2% de crítico con cualquier arma; sustituye a Especialización en espadas." },
      { name: "El espíritu humano", type: "Pasivo", desc: "+5% de Espíritu." }
    ],
    classes: ["warrior", "paladin", "hunter", "rogue", "priest", "mage", "warlock"],
    hook: "El comodín de la Alianza: crítico, PvP y una raza para casi todo.",
    priest: "Gracia divina y Feedback: cura instantánea y castigo al maná enemigo.",
    keywords: "pvp crítico espada voluntad percepción alianza versátil"
  },
  {
    id: "enano",
    name: "Enano",
    initials: "EN",
    faction: "alliance",
    factionLabel: "Alianza",
    tagline: "Piedra, pólvora y orgullo de Khaz Modan.",
    tags: ["Defensivo", "Tanque", "Healer"],
    racials: [
      { name: "Forma de piedra", type: "Activo", desc: "Inmunidad a sangrado, veneno y enfermedad; reduce el daño físico recibido durante 8 s." },
      { name: "Buscar tesoro", type: "Pasivo", desc: "Rastrea cofres cercanos y añade probabilidad de encontrar objetos extra." },
      { name: "Furia de la tierra", type: "Pasivo", desc: "+2% de daño y curación críticos; sustituye a Especialización en mazas." },
      { name: "Cazador de bestias mayores", type: "Pasivo", desc: "+5% de daño contra bestias." }
    ],
    classes: ["warrior", "paladin", "hunter", "rogue", "priest", "shaman"],
    hook: "El kit defensivo más limpio; tanque o healer con Forma de piedra.",
    priest: "Plegaria desesperada y Castigar: autocuración y control de humanoides.",
    keywords: "defensivo tanque healer stoneform veneno sangrado chamán nuevo"
  },
  {
    id: "elfo-de-la-noche",
    name: "Elfo de la Noche",
    initials: "EL",
    faction: "alliance",
    factionLabel: "Alianza",
    tagline: "La noche guarda secretos que no piensa contar.",
    tags: ["Movilidad", "PvP", "Sigilo"],
    racials: [
      { name: "Luz de Elune", type: "Activo", desc: "+10% de crítico durante 15 s." },
      { name: "Fundirse con las sombras", type: "Activo", desc: "Otorga sigilo mientras permaneces quieto." },
      { name: "Rapidez", type: "Pasivo", desc: "+1% de esquiva y +2% de velocidad; se acumula con otros aumentos." },
      { name: "Espíritu de fuego fatuo", type: "Pasivo", desc: "+75% de velocidad mientras estás muerto." }
    ],
    classes: ["warrior", "hunter", "rogue", "priest", "druid"],
    hook: "Movilidad, sigilo y crítico; ideal para PvP y clases ágiles.",
    priest: "Flechas estelares y Gracia de Elune: daño arcano y evasión.",
    keywords: "movilidad pvp sigilo elune druida crítico alianza"
  },
  {
    id: "gnomo",
    name: "Gnomo",
    initials: "GN",
    faction: "alliance",
    factionLabel: "Alianza",
    tagline: "Si se puede desmontar, se puede mejorar.",
    tags: ["Lanzador", "PvP", "Utilidad"],
    racials: [
      { name: "Escapista", type: "Activo", desc: "Rompe raíces y ralentizaciones, y protege brevemente contra ellas." },
      { name: "¡Eureka!", type: "Activo", desc: "Mejora de 8 s de eficiencia de habilidades; también potencia Power Word: Shield y no afecta a los DoTs." },
      { name: "Mente expansiva", type: "Pasivo", desc: "+5% al máximo de maná, ira o energía, según tu recurso." },
      { name: "Especialización en ingeniería", type: "Pasivo", desc: "Los dispositivos de ingeniería son más fiables." }
    ],
    classes: ["warrior", "rogue", "priest", "mage", "warlock"],
    hook: "Lanzador técnico y PvP contra control de movimiento; gran mago, brujo o sacerdote.",
    priest: "Destello confuso y Plan de contingencia: control y escudo de emergencia.",
    keywords: "caster pvp escape eureka maná ingeniería sacerdote nuevo"
  },
  {
    id: "orco",
    name: "Orco",
    initials: "OR",
    faction: "horde",
    factionLabel: "Horda",
    tagline: "La fuerza no se pide prestada.",
    tags: ["Ráfaga", "PvP", "Antiaturdimiento"],
    racials: [
      { name: "Furia sangrienta", type: "Activo", desc: "+10% de poder de ataque y hechizos durante 15 s; 3 min de reutilización." },
      { name: "Romper maldición", type: "Activo", desc: "Disipa maldiciones y efectos negativos; reduce un 5% el daño mágico recibido." },
      { name: "Salvaje", type: "Pasivo", desc: "+1% de crítico; sustituye a Especialización en hachas." },
      { name: "Dureza", type: "Pasivo", desc: "Reduce un 20% la duración de los aturdimientos." }
    ],
    classes: ["warrior", "hunter", "rogue", "shaman", "mage", "warlock"],
    hook: "Burst, anti-stun y mago nuevo; muy sólido para melé y PvP.",
    keywords: "burst pvp anti stun hacha furia sangrienta mago nuevo horda"
  },
  {
    id: "no-muerto",
    name: "No-muerto",
    initials: "NM",
    faction: "horde",
    factionLabel: "Horda",
    tagline: "La muerte no es el final. Es una ventaja.",
    tags: ["PvP", "Sostén", "Nuevo paladín"],
    racials: [
      { name: "Voluntad de los Renegados", type: "Activo", desc: "Elimina encanto, miedo y sueño; ya no otorga inmunidad." },
      { name: "Canibalizar", type: "Activo", desc: "Consume un cadáver para recuperar 35% de vida y maná con el tiempo." },
      { name: "Respiración acuática", type: "Pasivo", desc: "Respira bajo el agua un 300% más de tiempo." },
      { name: "Toque de la tumba", type: "Pasivo", desc: "Tus ataques pueden drenar vida; 30% para casters y 20% para melé, con 25 s de enfriamiento interno." }
    ],
    classes: ["warrior", "paladin", "rogue", "priest", "mage", "warlock"],
    hook: "PvP contra miedo y control; el paladín Renegado es la combinación estrella.",
    priest: "Toque de debilidad y Sacrificio oscuro: daño reflejado y maná a cambio de vida.",
    keywords: "pvp miedo canibalizar paladín nuevo horda sustain"
  },
  {
    id: "tauren",
    name: "Tauren",
    initials: "TA",
    faction: "horde",
    factionLabel: "Horda",
    tagline: "La montaña camina contigo.",
    tags: ["Tanque", "Vida", "Aturdimiento"],
    racials: [
      { name: "Pisotón de guerra", type: "Activo", desc: "Aturde a los enemigos cercanos durante 2 s; 90 s de reutilización." },
      { name: "Cultivo", type: "Activo", desc: "Recolecta hierbas extra sin Herbalism; 15 min de reutilización." },
      { name: "Carrera de llanura", type: "Pasivo", desc: "La velocidad aumenta al moverte de forma continua; +3% a la velocidad montado." },
      { name: "Resistencia", type: "Pasivo", desc: "+5% de vida y +2% de daño/curación críticos." }
    ],
    classes: ["warrior", "hunter", "shaman", "druid"],
    hook: "La raza más resistente; tanque o healer con vida extra y stun AoE.",
    keywords: "tanque vida stun pvp druida chamán horda resistencia"
  },
  {
    id: "troll",
    name: "Troll",
    initials: "TR",
    faction: "horde",
    factionLabel: "Horda",
    tagline: "Rápido para golpear, más rápido para curarse.",
    tags: ["Celeridad", "Sostén", "DPS"],
    racials: [
      { name: "Berserking", type: "Activo", desc: "+10% de velocidad de ataque y casteo durante 10 s." },
      { name: "Regeneración rápida", type: "Activo", desc: "Recupera un 50% de la vida máxima con el tiempo." },
      { name: "Matanza de bestias", type: "Pasivo", desc: "+5% de daño contra bestias." },
      { name: "Regeneración", type: "Pasivo", desc: "El 20% de la regeneración de vida continúa en combate." }
    ],
    classes: ["warrior", "hunter", "rogue", "priest", "shaman", "mage", "warlock"],
    hook: "Haste, sustain y DPS; el brujo troll es nuevo y encaja de maravilla.",
    priest: "Maleficio de debilidad y Guardia de las sombras: efecto negativo y daño reflejado.",
    keywords: "haste sustain dps brujo nuevo horda regeneración"
  },
  {
    id: "skyborne",
    name: "Skyborne",
    initials: "SK",
    faction: "both",
    factionLabel: "Alianza u Horda",
    tagline: "El cielo no es un límite. Es una carretera.",
    tags: ["Nueva raza", "Movilidad", "Celeridad"],
    racials: [
      { name: "Caminar por el aire", type: "Activo", desc: "Planea durante 10 s controlando la dirección; 90 s de reutilización." },
      { name: "Bendición del viento", type: "Pasivo", desc: "+3% de celeridad para melé, a distancia y hechizos." },
      { name: "Percepción elemental", type: "Pasivo", desc: "+5% de daño contra elementales." }
    ],
    variants: {
      "Alta Orden": {
        faction: "alliance",
        racial: { name: "Leer línea ley", type: "Activo", desc: "+100% de regeneración de vida y maná; se puede usar en movimiento y dura al menos 30 s." },
        classes: ["warrior", "hunter", "rogue", "druid", "mage"]
      },
      "Windshaper": {
        faction: "horde",
        racial: { name: "Vista del cielo", type: "Activo", desc: "+10% de velocidad de movimiento y montado durante 30 s; 15 min si encuentras una convergencia elemental." },
        classes: ["warrior", "hunter", "rogue", "druid", "shaman"]
      }
    },
    sharedClasses: ["warrior", "hunter", "rogue", "druid"],
    classes: ["warrior", "hunter", "rogue", "druid", "mage", "shaman"],
    hook: "La nueva raza: movilidad aérea, 3% de celeridad y una facción que eliges tú.",
    keywords: "nueva raza movilidad planeo haste alianza horda mago chamán"
  }
);
