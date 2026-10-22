/* Clases 1/2 — Guerrero, Paladín, Cazador, Pícaro */

CLASSES.push(
  {
    id: "warrior",
    name: "Guerrero",
    color: "#c79c6e",
    roles: ["tank", "dps"],
    tagline: "Acero, ira y una línea que no se rompe.",
    fantasy: "El guerrero no negocia con el peligro: lo ocupa. Con la carga como carta de presentación y la ira como combustible, cambia de actitud según el arma y el momento, desde un muro de escudo hasta una tormenta de golpes.",
    armor: "Placas",
    resource: "Ira",
    range: "Melé",
    difficulty: 3,
    complexity: "Exigente con el posicionamiento",
    forever: "La ira ahora se genera por velocidad y tipo de arma, no solo por daño; Victoria Rush y Maestría táctica vienen de serie y Grito de batalla llega a toda la raid. La beta arrancó con quejas de sed de ira que Blizzard fue corrigiendo.",
    pros: [
      "El kit de tanque más completo: mitigación, amenaza y movilidad con Carga e Intervenir.",
      "DPS melé muy escalable; Armas y Furia premian equipo y ejecución, y el daño en área es su terreno.",
      "No depende de maná: la ira convierte el ritmo del combate en recursos.",
      "Grito de batalla para toda la raid, Desgarrar armadura y control con Intimidar."
    ],
    cons: [
      "Casi todo es melé: si el jefe obliga a moverse, el daño cae.",
      "Sin autocuración fiable en el kit base; depende del healer y de saber usar Defensive Stance.",
      "La ira puede secarse al empezar o en fases sin daño entrante; la beta lo sufrió.",
      "Exige gestionar stances, armas y posicionamiento; no es una clase de piloto automático."
    ],
    verdicts: {
      dps: "Sí. Armas o Furia son melé de presión constante; Blizzard quiere al guerrero como el mejor daño en área y AoE melé. Necesita tiempo de actividad y un buen healer.",
      tank: "Sí, y es la referencia. Protección tiene el conjunto más completo de mitigación, amenaza y movilidad; el escudo y las stances perdonan errores, pero no todos.",
      healer: "No. No cura; su manera de proteger al grupo es aguantar y matar antes.",
      hybrid: "Sí, tanque + DPS. No cubre curación, pero puedes cambiar de rol con equipo y talentos."
    },
    specs: [
      { id: "arms", name: "Armas", roles: ["dps"], desc: "Arma a dos manos, sangrados y Overpower. Ritmo táctico y presión constante." },
      { id: "fury", name: "Furia", roles: ["dps"], desc: "Doble empuñadura y rabia; el DPS melé más agresivo cuando el equipo acompaña." },
      { id: "protection", name: "Protección", roles: ["tank"], desc: "Tanque de escudo con bloqueo, amenaza y supervivencia. El pilar de la primera línea." }
    ],
    races: ["humano", "enano", "elfo-de-la-noche", "gnomo", "orco", "no-muerto", "tauren", "troll", "skyborne"],
    signature: ["Carga", "Grito de batalla", "Muro de escudo", "Ejecutar"],
    pickIf: "Si quieres ser el que abre el pull y el que decide dónde se queda el grupo.",
    hook: "La primera línea de verdad: si te gusta abrir el pull y aguantar lo que venga, este es tu sitio.",
    keywords: "tanque espada escudo furia rabia cleave melé melee primera línea"
  },
  {
    id: "paladin",
    name: "Paladín",
    color: "#f58cba",
    roles: ["tank", "healer", "dps"],
    tagline: "La Luz también sabe llevar escudo.",
    fantasy: "Un caballero que reza, cura y castiga con el mismo martillo. Forever le da un golpe sagrado instantáneo, un sello de tanque que provoca y una Consagración de serie, sin quitarle sus límites: no tiene interrupt ni ralentizaciones fiables.",
    armor: "Placas",
    resource: "Maná",
    range: "Melé",
    difficulty: 3,
    complexity: "Tres roles, tres formas de jugar",
    forever: "Golpe sagrado desde nivel 6, los sellos ya no se consumen al juzgar, Seal of Fury permite tanquear con taunt y Consagración es de serie. Protección y Reprensión salen reforzadas; Sagrado pierde algo de retorno de maná.",
    pros: [
      "Único junto al druida que puede tanquear, curar y hacer DPS.",
      "Bendiciones, auras, manos, disipación e inmunidades: utilidad de grupo constante.",
      "Sagrado es un healer resistente; Protección gana un sello de tanque con taunt; Reprensión tiene burst y apoyo.",
      "Burbuja, Lay on Hands y salvaciones permiten rescatar pulls que parecían perdidos."
    ],
    cons: [
      "Depende del maná; si spamea curas o sellos, se queda seco.",
      "Movilidad baja y sin interrupt ni slow fiable: sufre en mecánicas de desplazamiento y casts.",
      "Reprensión tiene ventanas de daño y depende de críticos y activaciones; no es un DPS de rotación perfecta.",
      "Tanquear exige equipo, maná y gestión de sellos/juicios; el taunt no es un botón aparte."
    ],
    verdicts: {
      dps: "Sí, Reprensión. Burst sagrado, utilidad y algo de curación; ritmo pausado y dependiente de ventanas.",
      tank: "Sí, Protección. El sello de tanque de Forever y su supervivencia lo hacen real; le faltan interrupt y movilidad.",
      healer: "Sí, Sagrado. Healer de un objetivo, muy resistente, con bendiciones y burbujas; vigila el maná.",
      hybrid: "Sí, el rey: los tres roles en una sola clase. El precio es equipo y maná."
    },
    specs: [
      { id: "holy", name: "Sagrado", roles: ["healer"], desc: "Healer de un solo objetivo y bendiciones; eficiente, resistente y con herramientas de rescate." },
      { id: "prot", name: "Protección", roles: ["tank"], desc: "Tanque con escudo, sello nuevo y amenaza AoE; paciencia, maná y juicios bien puestos." },
      { id: "ret", name: "Reprensión", roles: ["dps"], desc: "DPS melé con burst sagrado, utilidad y apoyos puntuales de curación." }
    ],
    races: ["humano", "enano", "no-muerto"],
    signature: ["Golpe sagrado", "Seal of Fury", "Consagración", "Lay on Hands"],
    pickIf: "Si quieres ser el salvavidas del grupo y no te asusta llevar tres barras de responsabilidad.",
    hook: "Tres roles, burbujas y bendiciones: el salvavidas del grupo, con la Luz como excusa.",
    keywords: "luz cura escudo martillo bendición burbuja tanque healer retribución"
  },
  {
    id: "hunter",
    name: "Cazador",
    color: "#abd473",
    roles: ["dps"],
    tagline: "El mundo es tuyo si sabes dónde pisar.",
    fantasy: "Un rastreador con un compañero que muerde por ti. Forever hace que las mascotas escalen con tu equipo, las trampas se puedan usar en combate y Supervivencia se acerque al melé; el cazador sigue siendo el rey del mundo abierto.",
    armor: "Malla",
    resource: "Maná",
    range: "Distancia",
    difficulty: 2,
    complexity: "La más amable para empezar",
    forever: "Puntería automática con 0,5 s de quietud, Disparo apuntado a nivel 20, trampas usables en combate, mascotas que escalan y Lone Wolf. Es la clase con la beta más positiva.",
    pros: [
      "El mejor nivelador y solista: la mascota tanquea, cura y hace daño mientras tú disparas.",
      "Daño seguro a distancia, gran movilidad y control con trampas, congelar y distraer.",
      "La mascota aporta taunt, resurrección, buffs y daño; en Forever escala con tu equipo.",
      "Trae Tranquilizing Shot, aspectos, tracking y una curva de aprendizaje amable."
    ],
    cons: [
      "Gestionar mascota: si se muere, se descontrola o la dejas atrás, pierdes daño y utilidad.",
      "Zona muerta y dependencia del arma; el Auto Shot de Forever exige medio segundo quieto.",
      "Poca utilidad de raid más allá de aura, trampas y tranquilizar; no cura ni tanquea.",
      "Supervivencia melé sigue siendo frágil; no convierte al cazador en un tanque."
    ],
    verdicts: {
      dps: "Sí, el DPS más cómodo para empezar. A distancia, con mascota y control; daño sostenido más que burst.",
      tank: "No. La mascota puede aguantar un rato, pero no tiene mitigación ni amenaza de tanque de raid.",
      healer: "No. Cura a su mascota, no al grupo.",
      hybrid: "No. Es DPS puro; su versatilidad está en el mundo abierto y en la mascota."
    },
    specs: [
      { id: "bm", name: "Bestias", roles: ["dps"], desc: "Mascota protagonista; daño sostenido y una solvencia enorme en mundo abierto." },
      { id: "mm", name: "Puntería", roles: ["dps"], desc: "Disparo preciso a distancia, ideal para daño a un solo objetivo y objetivos prioritarios." },
      { id: "surv", name: "Supervivencia", roles: ["dps"], desc: "Trampas, control y golpes de melé; el cazador que se acerca y juega con el terreno." }
    ],
    races: ["humano", "enano", "elfo-de-la-noche", "orco", "tauren", "troll", "skyborne"],
    signature: ["Disparo apuntado", "Trampa congelante", "Tranquilizing Shot", "Mascota"],
    pickIf: "Si quieres explorar sin miedo, tener un compañero y pegar desde lejos con margen para aprender.",
    hook: "Mascota, distancia y el mejor nivelado: elige el camino cómodo sin renunciar al daño.",
    keywords: "mascota arco trampa distancia solo nivelar puntería bestias supervivencia"
  },
  {
    id: "rogue",
    name: "Pícaro",
    color: "#e8d66b",
    roles: ["dps"],
    tagline: "Si lo ves venir, no lo estás haciendo bien.",
    fantasy: "El pícaro no gana por resistencia, sino por información y timing. Sigilo, venenos y puntos de combo convierten cada objetivo en un problema que se resuelve desde la sombra, preferiblemente antes de que grite.",
    armor: "Cuero",
    resource: "Energía",
    range: "Melé",
    difficulty: 3,
    complexity: "Ritmo y control de recursos",
    forever: "La energía ahora se regenera de forma continua, las especializaciones de arma se fusionan y los venenos intercambian daño por cargas. La beta es escéptica con el daño blanco, pero Blizzard quiere al pícaro como el mejor en un solo objetivo.",
    pros: [
      "Daño altísimo a un solo objetivo y control de amenaza con Feint y Vanish.",
      "Sigilo, Sap, Blind y stunlock: rey del PvP y de saltarse packs.",
      "Lockpicking, detectar trampas y pickpocket dan utilidad fuera de combate.",
      "Sprint, Evasion y Vanish dan herramientas para sobrevivir y reposicionarse."
    ],
    cons: [
      "Muy frágil y cuerpo a cuerpo; los AoE y los adds le castigan.",
      "Poco daño AoE en Classic; depende de objetivos únicos y de no perder tiempo de actividad.",
      "La energía y los combo points limitan el ritmo; moverse o cambiar de objetivo duele.",
      "Poca demanda de más de un pícaro en algunos grupos; los venenos no sirven contra inmunes."
    ],
    verdicts: {
      dps: "Sí. Especialista en un solo objetivo con control y herramientas; brilla en jefes estáticos y PvP.",
      tank: "No. Evasion y Sprint ayudan a sobrevivir, pero no tiene mitigación ni amenaza de tanque.",
      healer: "No. Su utilidad es control y daño.",
      hybrid: "No. DPS puro; si quieres cambiar de rol, no es tu clase."
    },
    specs: [
      { id: "assa", name: "Asesinato", roles: ["dps"], desc: "Venenos y dagas; daño por la espalda y ejecuciones limpias." },
      { id: "combat", name: "Combate", roles: ["dps"], desc: "Espadas o mazas, energía constante y el DPS PvE clásico de referencia." },
      { id: "sub", name: "Sutileza", roles: ["dps"], desc: "Sigilo, control y burst desde las sombras; el rey del PvP." }
    ],
    races: ["humano", "enano", "elfo-de-la-noche", "gnomo", "orco", "no-muerto", "troll", "skyborne"],
    signature: ["Sigilo", "Sap", "Eviscerar", "Vanish"],
    pickIf: "Si te gusta el sigilo, el control y castigar a un solo objetivo hasta que no quede nada.",
    hook: "Sigilo, control y objetivo único: para quien disfruta matando sin que le vean.",
    keywords: "sigilo veneno dagas combos pvp single target lockpicking"
  }
);
