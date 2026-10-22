/* Clases 2/2 — Sacerdote, Chamán, Mago, Brujo, Druida */

CLASSES.push(
  {
    id: "priest",
    name: "Sacerdote",
    color: "#e7e2d8",
    roles: ["healer", "dps"],
    tagline: "La fe es un arma; la disciplina, un escudo.",
    fantasy: "El sacerdote decide si el grupo sobrevive por curación o por prevención. Forever le da Penance, Prayer of Mending y Shadow Word: Death, además de Fear Ward y Devouring Plague para todas las razas; Sombra deja de ser una batería de maná y gana identidad propia.",
    armor: "Tela",
    resource: "Maná",
    range: "Distancia",
    difficulty: 3,
    complexity: "Mucha responsabilidad, lectura constante",
    forever: "Miedo y Peste devoradora vienen de serie, Divine Spirit no cuesta talento, Disciplina recibe Penance y Sagrado Prayer of Mending. Sombra cambia de rol: más daño y crítica, menos soporte de maná.",
    pros: [
      "Los healers más completos: Sagrado para rendimiento, Disciplina para prevención y escudos.",
      "Fortaleza, Espíritu, disipación, resurrección y Fear Ward: utilidad de raid de primer nivel.",
      "Sombra aporta DoTs, Virote mental y daño sostenido; con DoTs que crítican, sube.",
      "Doce hechizos raciales de sacerdote dan variantes únicas según la raza."
    ],
    cons: [
      "Tela: la clase más frágil si la focusan.",
      "Movilidad limitada; los casteos largos sufren en mecánicas.",
      "Sombra ya no es una batería de maná y exige gestionar recursos; su identidad de raid está en debate.",
      "Mucha responsabilidad: un healer muerto suele costar el pull."
    ],
    verdicts: {
      dps: "Sí, Sombra. DoTs, Virote mental y ejecución con Shadow Word: Death; más sostenido que burst.",
      tank: "No. Tela y cero mitigación; si te focusan, necesitas ayuda.",
      healer: "Sí, el healer más completo. Disciplina o Sagrado; probablemente el rol más demandado.",
      hybrid: "Sí, healer + DPS. No tanquea, pero puedes alternar curación y Sombra con equipo."
    },
    specs: [
      { id: "disc", name: "Disciplina", roles: ["healer"], desc: "Escudos y prevención; un healer híbrido que evita el daño antes de curarlo." },
      { id: "holy", name: "Sagrado", roles: ["healer"], desc: "Curación pura y rendimiento; el healer clásico de raid, ahora con Prayer of Mending." },
      { id: "shadow", name: "Sombra", roles: ["dps"], desc: "DoTs, Virote mental y daño sostenido; gestión de maná y una identidad en reconstrucción." }
    ],
    races: ["humano", "enano", "elfo-de-la-noche", "gnomo", "no-muerto", "troll"],
    signature: ["Penance", "Prayer of Mending", "Fear Ward", "Shadow Word: Death"],
    pickIf: "Si quieres ser el pilar que mantiene vivo al grupo y te gusta leer el combate.",
    hook: "El healer que sostiene la raid; y si te cansas, Sombra también reparte.",
    keywords: "cura healer escudos sombra maná dispela resurrección"
  },
  {
    id: "shaman",
    name: "Chamán",
    color: "#3b8eea",
    roles: ["healer", "dps"],
    tagline: "La tormenta también puede ser un apoyo.",
    fantasy: "El chamán negocia con los elementos y pone tótems para que el grupo entero luche mejor. Forever elimina el totem twisting, añade una barra para soltar cuatro tótems y hace que los buffs lleguen a toda la raid, pero mantiene sus límites: sin tanque, sin Bloodlust y con poco control.",
    armor: "Malla",
    resource: "Maná",
    range: "Mixto",
    difficulty: 4,
    complexity: "Tótems, maná y decisiones por GCD",
    forever: "Tótems a 30 yardas y 5 minutos, barra de cuatro, Windfury/Grace/Strength para toda la raid, Fire Nova como hechizo y Lava Burst/Riptide como talentos cumbre. Sin twisting; Mejora pierde algo de identidad.",
    pros: [
      "Los tótems son utilidad única: Windfury, Mana Tide, Tremor, Grounding, resistencias y limpieza.",
      "En Forever los tótems clave llegan a toda la raid: más valor por GCD.",
      "Tres estilos: Elemental a distancia, Mejora en melé y Restauración para curar.",
      "Purga, shocks y tótems dan un PvP de control y burst muy divertido."
    ],
    cons: [
      "Gestión de tótems: son frágiles, tienen rango y consumen GCD/maná.",
      "No tiene especialización de tanque; el escudo no arregla la mitigación.",
      "Mejora es frágil al inicio y depende de Windfury y sus activaciones; la beta no lo ve fuerte.",
      "Restauración sufre por movilidad y maná; no hay Bloodlust/Heroism en Forever."
    ],
    verdicts: {
      dps: "Sí. Elemental a distancia o Mejora en melé; ambos con burst, tótems y una rotación con decisiones.",
      tank: "No. No hay tanque chamán: puedes aguantar mazmorras con escudo, pero no es un rol de raid.",
      healer: "Sí, Restauración. Cadenas de curación y tótems; muy fuerte en grupo, exigente con el maná.",
      hybrid: "Sí, healer + DPS. La clase de apoyo por excelencia, pero no cubre tanque."
    },
    specs: [
      { id: "ele", name: "Elemental", roles: ["dps"], desc: "Rayo, llamas y burst a distancia; tótems de daño y una rotación de casteo." },
      { id: "enh", name: "Mejora", roles: ["dps"], desc: "Melé con Windfury y tótems; picos de daño y apoyo, con menos margen de error." },
      { id: "resto", name: "Restauración", roles: ["healer"], desc: "Cadenas de curación y tótems; el healer de grupo que multiplica al resto." }
    ],
    races: ["enano", "orco", "tauren", "troll", "skyborne"],
    signature: ["Windfury Totem", "Mana Tide Totem", "Lava Burst", "Riptide"],
    pickIf: "Si te gustan los tótems, el burst elemental y ser el pegamento que hace mejor a todo el grupo.",
    hook: "Tótems, burst y apoyo: haces mejor a todo el grupo, y encima puedes curar.",
    keywords: "tótem elemental mejora restauración windfury maná apoyo raid"
  },
  {
    id: "mage",
    name: "Mago",
    color: "#69ccf0",
    roles: ["dps"],
    tagline: "El problema no es el fuego. Es que no puedes huir.",
    fantasy: "El mago convierte la distancia en una ventaja y el control en daño. Forever añade Arcane Blast, Ice Lance, Fingers of Frost y Frost Blast, pero también deja claro su punto débil: si el maná se acaba, el espectáculo termina.",
    armor: "Tela",
    resource: "Maná",
    range: "Distancia",
    difficulty: 4,
    complexity: "Maná, casteos y control de espacio",
    forever: "Arcano recibe un rediseño con Arcane Blast y Arcane Wrath; Escarcha gana Ice Lance y Frost Blast pero pierde ralentización masiva; Fuego recibe ajustes. La beta reporta problemas serios de maná en las tres ramas.",
    pros: [
      "Burst y AoE mágicos de primer nivel; las tres ramas tienen identidad clara.",
      "Control excelente: Polymorph, Frost Nova, Cone of Cold, Counterspell.",
      "Portales, teleport, comida/agua e Intelecto: la mejor utilidad de calidad de vida.",
      "Ice Block y Blink dan supervivencia y margen de juego en PvP."
    ],
    cons: [
      "Tela y poca autocuración; muere rápido si le focusan.",
      "Depende de maná y de castear; el movimiento corta el daño y la beta sufre.",
      "Inmunidades o resistencias al fuego/hielo pueden invalidar una rama.",
      "Poca utilidad de raid más allá de Intelecto y control; no cura ni tanquea."
    ],
    verdicts: {
      dps: "Sí. Burst, AoE y control; el lanzador más explosivo, con el maná como cordón de la seguridad.",
      tank: "No. Tela y cero herramientas de amenaza; su supervivencia es evitar el daño.",
      healer: "No. No cura; su apoyo es control, Intelecto y comida/portales.",
      hybrid: "No. DPS puro, pero con la mejor utilidad de calidad de vida."
    },
    specs: [
      { id: "arcane", name: "Arcano", roles: ["dps"], desc: "Control y daño arcano; en Forever la rama se rediseña alrededor de Arcane Blast." },
      { id: "fire", name: "Fuego", roles: ["dps"], desc: "Burst y críticos; el mago más explosivo cuando el azar y el maná acompañan." },
      { id: "frost", name: "Escarcha", roles: ["dps"], desc: "Control, hielo y supervivencia; el mago más seguro para aprender y para PvP." }
    ],
    races: ["humano", "gnomo", "orco", "no-muerto", "troll", "skyborne"],
    signature: ["Polymorph", "Ice Block", "Arcane Blast", "Portales"],
    pickIf: "Si quieres controlar el campo de batalla y reventar packs con una explosión bien colocada.",
    hook: "Control y explosión mágica: si sabes gestionar el maná, mandas en el campo.",
    keywords: "arcano fuego escarcha polimorfia portal maná burst aoe control"
  },
  {
    id: "warlock",
    name: "Brujo",
    color: "#9482c9",
    roles: ["dps"],
    tagline: "Los demonios no negocian. Tú sí.",
    fantasy: "El brujo convierte la desesperación en recursos: vida en maná, almas en piedras y demonios en carne de cañón. Forever reescribe su clase más que ninguna otra, con DoTs que crítican, maldiciones secundarias que liberan el espacio de maldición y piedras que se convierten en mejoras de arma.",
    armor: "Tela",
    resource: "Maná",
    range: "Distancia",
    difficulty: 3,
    complexity: "DoTs, mascota y recursos",
    forever: "Los DoTs pueden críticar, Life Tap escala con Espíritu, las piedras pasan a imbuir armas y las maldiciones secundarias liberan el espacio de maldición. Es la clase más reescrita y una de las más celebradas de la beta para subir de nivel y en mazmorras.",
    pros: [
      "DoTs y mascota permiten daño sostenido mientras te mueves; excelente solista.",
      "Soulstone, Healthstone, invocación, maldiciones y Banish: utilidad de raid única.",
      "Muy resistente para ser lanzador: Drain Life, mascota y piedra de alma.",
      "Aflicción, Demonología y Destrucción son tres estilos muy distintos; Troll Brujo es nuevo."
    ],
    cons: [
      "Los DoTs tardan en arrancar: en combates cortos pierde valor frente al burst.",
      "Gestión de mascota, almas y piedras; en Classic recolectar almas era un trabajo.",
      "Amenaza alta y movilidad limitada; el miedo se rompe con daño.",
      "Menos burst instantáneo que un mago; compite por el mismo botín de lanzador."
    ],
    verdicts: {
      dps: "Sí. DoTs, mascota y burst; daño sostenido y mucha solvencia. Tú eliges cuánto riesgo asumes.",
      tank: "No. La mascota puede tanquear momentáneamente, pero no es un rol de grupo.",
      healer: "No. Drena vida para sí mismo; no cura aliados.",
      hybrid: "No. DPS puro con mucha utilidad (piedras, invocaciones, maldiciones)."
    },
    specs: [
      { id: "aff", name: "Aflicción", roles: ["dps"], desc: "DoTs y drenajes; daño sostenido que ahora puede críticar y una autonomía enorme." },
      { id: "demo", name: "Demonología", roles: ["dps"], desc: "Mascota mejorada y resistencia; el brujo más sólido y el favorito de la beta." },
      { id: "destro", name: "Destrucción", roles: ["dps"], desc: "Fuego y caos; burst directo y AoE para cuando el objetivo debe caer ya." }
    ],
    races: ["humano", "gnomo", "orco", "no-muerto", "troll"],
    signature: ["Soulstone", "Healthstone", "Drain Life", "Invocar demonio"],
    pickIf: "Si te gusta el poder oscuro, tener siempre un plan B y no depender de nadie para sobrevivir.",
    hook: "DoTs, demonios y planes B: el poder oscuro con mucha autonomía.",
    keywords: "demonio dots miedo piedra de alma salud maldición aflicción demonología destrucción"
  },
  {
    id: "druid",
    name: "Druida",
    color: "#ff7d0a",
    roles: ["tank", "healer", "dps"],
    tagline: "Un cuerpo, todas las formas de ganar.",
    fantasy: "El druida es la clase que nunca se queda sin respuesta: oso para aguantar, gato para morder, búho para castigar y árbol para curar. Forever hace que las formas conserven pociones, raciales y activaciones, y convierte a Feral en una rotación de verdad.",
    armor: "Cuero",
    resource: "Maná / Rabia / Energía",
    range: "Mixto",
    difficulty: 5,
    complexity: "La clase más amplia del juego",
    forever: "Las formas mantienen pociones, raciales y activaciones; Feral gana Mangle, Berserk y una rotación real; Swiftmend ya no consume el HoT y Wild Growth es el nuevo talento cumbre; el oso recibe más amenaza. Las especializaciones híbridas son más viables.",
    pros: [
      "La navaja suiza: tanque, healer, melé y ranged con una sola clase.",
      "Rebirth (resurrección en combate), Innervate, Mark of the Wild y disipar maldiciones: utilidad brutal.",
      "Las formas dan movilidad, sigilo, tanqueo y daño; además, viaje instantáneo.",
      "Feral oso es un tanque sólido tras los buffs de amenaza; Resto aporta HoTs y Wild Growth."
    ],
    cons: [
      "Comodín de todos los oficios: no domina ningún rol como una clase especializada.",
      "El tanque oso exige equipo y gestión de rabia; el gato tiene una rotación exigente.",
      "Equilibrio sufre de maná y de menos herramientas; los híbridos pagan el precio.",
      "Comparte botín con muchas clases y cambiar de rol exige equipo y talentos."
    ],
    verdicts: {
      dps: "Sí. Equilibrio a distancia o Feral gato en melé; estilos muy distintos y con más apoyo en Forever.",
      tank: "Sí. Oso es un tanque con mucha vida, movilidad y amenaza; necesita equipo y saber cambiar de forma.",
      healer: "Sí. Restauración con HoTs, Swiftmend y Wild Growth; el healer más versátil.",
      hybrid: "Sí, la clase más flexible: cubre los tres roles con una sola ficha. El precio es especialización."
    },
    specs: [
      { id: "balance", name: "Equilibrio", roles: ["dps"], desc: "Búho, daño arcano/naturaleza y aura de crítico para el grupo." },
      { id: "feral", name: "Feral", roles: ["tank", "dps"], desc: "Oso para tanquear o gato para DPS melé; una sola rama, dos animales y dos ritmos." },
      { id: "resto", name: "Restauración", roles: ["healer"], desc: "HoTs, Swiftmend y Wild Growth; curación de grupo con mucha movilidad." }
    ],
    races: ["elfo-de-la-noche", "tauren", "skyborne"],
    signature: ["Forma de oso", "Rebirth", "Innervate", "Wild Growth"],
    pickIf: "Si no puedes elegir un solo rol o si quieres ser el comodín que el grupo necesita.",
    hook: "Todos los roles en una clase: el comodín que nunca sobra, si sabes cambiar de forma.",
    keywords: "oso gato búho árbol formas tanque healer dps rebirth innervate"
  }
);
