/* ============================================================
   WoW: FOREVER — datos compartidos
   Revisión: 22 de octubre de 2026 · beta 1.60.1.70425
   Fuentes y notas al pie en index.html
   ============================================================ */

const GAME = {
  name: "World of Warcraft: Forever",
  short: "WoW: Forever",
  launch: "4 de noviembre de 2026",
  levelCap: 60,
  betaBuild: "1.60.1.70425",
  dataDate: "22 de octubre de 2026"
};

const ROLES = {
  tank: {
    label: "Tanque",
    plural: "Tanques",
    icon: "shield",
    color: "#8fb4cf",
    blurb: "Aguanta la primera línea, genera amenaza y marca el ritmo del pull."
  },
  healer: {
    label: "Healer",
    plural: "Healers",
    icon: "heal",
    color: "#74c795",
    blurb: "Mantiene vivo al grupo, dispela y decide cuándo gastar el maná."
  },
  dps: {
    label: "DPS",
    plural: "DPS",
    icon: "swords",
    color: "#df9567",
    blurb: "Convierte el equipo y la ejecución en daño, sin romper la amenaza."
  },
  hybrid: {
    label: "Multifunción",
    plural: "Multifunción",
    icon: "spark",
    color: "#b79ad8",
    blurb: "Puede cubrir más de un rol. El comodín que el grupo necesita."
  }
};

const CLASSES = [];
const RACES = [];

/* Las seis combinaciones que no existían en Classic. */
const NEW_COMBOS = [
  { race: "humano", cls: "hunter" },
  { race: "enano", cls: "shaman" },
  { race: "gnomo", cls: "priest" },
  { race: "orco", cls: "mage" },
  { race: "no-muerto", cls: "paladin" },
  { race: "troll", cls: "warlock" }
];

/* Filas de la matriz. Skyborne se divide en sus dos caminos de facción. */
const MATRIX_ROWS = [
  { race: "humano", faction: "alliance", label: "Humano", sub: "Alianza" },
  { race: "enano", faction: "alliance", label: "Enano", sub: "Alianza" },
  { race: "elfo-de-la-noche", faction: "alliance", label: "Elfo de la Noche", sub: "Alianza" },
  { race: "gnomo", faction: "alliance", label: "Gnomo", sub: "Alianza" },
  { race: "orco", faction: "horde", label: "Orco", sub: "Horda" },
  { race: "no-muerto", faction: "horde", label: "No-muerto", sub: "Horda" },
  { race: "tauren", faction: "horde", label: "Tauren", sub: "Horda" },
  { race: "troll", faction: "horde", label: "Troll", sub: "Horda" },
  { race: "skyborne", faction: "alliance", label: "Skyborne", sub: "Alta Orden · Alianza", variant: "Alta Orden" },
  { race: "skyborne", faction: "horde", label: "Skyborne", sub: "Windshaper · Horda", variant: "Windshaper" }
];

/* Utilidades de datos -------------------------------------------------- */

function classById(id) {
  return CLASSES.find(c => c.id === id);
}

function raceById(id) {
  return RACES.find(r => r.id === id);
}

function isNewCombo(raceId, classId) {
  if (raceId === "skyborne") return true;
  return NEW_COMBOS.some(c => c.race === raceId && c.cls === classId);
}

function classRolesLabel(cls) {
  return cls.roles.map(r => ROLES[r].label).join(" · ");
}

function hasRole(cls, role) {
  return cls.roles.includes(role);
}

function candidateClasses(role) {
  if (role === "all") return CLASSES.slice();
  if (role === "hybrid") return CLASSES.filter(c => c.roles.length >= 2);
  return CLASSES.filter(c => c.roles.includes(role));
}

function raceClasses(race, variant) {
  if (!race.variants || !variant) return race.classes.slice();
  if (variant === "Alta Orden") {
    return [...race.sharedClasses, "mage"];
  }
  if (variant === "Windshaper") {
    return [...race.sharedClasses, "shaman"];
  }
  return race.classes.slice();
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
