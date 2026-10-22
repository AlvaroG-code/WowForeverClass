/* ============================================================
   COMPORTAMIENTO · razas, filtros de facción y matriz
   ============================================================ */

"use strict";

const FACTION_COLORS = {
  alliance: "#5b8fd6",
  horde: "#c4574a",
  both: "#b79ad8"
};

const raceState = { filter: "all" };
let raceFocusTimer = null;

function factionColor(faction) {
  return FACTION_COLORS[faction] || FACTION_COLORS.both;
}

function factionIcon(faction) {
  return faction === "alliance" ? "alliance" : faction === "horde" ? "horde" : "spark";
}

function classChipMarkup(classId, options) {
  const cls = classById(classId);
  if (!cls) return "";

  const settings = options || {};
  const newMark = settings.markNew
    ? `<span class="class-chip__new" aria-label="Nueva combinación">★</span>`
    : "";

  return `
    <button
      class="class-chip"
      type="button"
      style="--cls:${cls.color}"
      data-class-link="${cls.id}"
      title="${escapeHtml(cls.name)}${settings.markNew ? " · nueva combinación en Forever" : ""}"
    >
      ${classIconMarkup(cls.id)}
      ${escapeHtml(cls.name)}${newMark}
    </button>
  `;
}

function raceCardMarkup(race) {
  const color = factionColor(race.faction);
  const racials = race.racials.map(racial => {
    const typeClass = normalizeText(racial.type) === "pasivo" ? " racial__type--pasivo" : "";
    return `
      <div class="racial">
        <div class="racial__top">
          <h4>${escapeHtml(racial.name)}</h4>
          <span class="racial__type${typeClass}">${escapeHtml(racial.type)}</span>
        </div>
        <p>${escapeHtml(racial.desc)}</p>
      </div>
    `;
  }).join("");

  const markNew = race.id !== "skyborne";
  const baseClasses = race.variants ? race.sharedClasses : race.classes;
  const classChips = baseClasses
    .map(classId => classChipMarkup(classId, { markNew: markNew && isNewCombo(race.id, classId) }))
    .join("");

  const variants = race.variants
    ? `<div class="sky-paths">
        ${Object.entries(race.variants).map(([name, variant]) => {
          const variantColor = factionColor(variant.faction);
          const racialType = normalizeText(variant.racial.type) === "pasivo" ? " racial__type--pasivo" : "";
          const variantClasses = variant.classes
            .map(classId => classChipMarkup(classId))
            .join("");
          return `
            <article class="sky-path" style="--faction:${variantColor}">
              <p class="sky-path__faction">
                ${iconMarkup(factionIcon(variant.faction))}
                ${escapeHtml(name)} · ${variant.faction === "alliance" ? "Alianza" : "Horda"}
              </p>
              <div class="sky-path__racial">
                <h4>${escapeHtml(variant.racial.name)}</h4>
                <span class="racial__type${racialType}">${escapeHtml(variant.racial.type)}</span>
              </div>
              <p>${escapeHtml(variant.racial.desc)}</p>
              <div class="sky-path__classes">${variantClasses}</div>
            </article>
          `;
        }).join("")}
      </div>`
    : "";

  const priestNote = race.priest
    ? `<p class="race-card__priest">${iconMarkup("halo")}<span><strong>Raciales de Sacerdote:</strong> ${escapeHtml(race.priest)}</span></p>`
    : "";

  const badge = race.id === "skyborne"
    ? `<span class="race-card__badge">Nueva raza</span>`
    : "";

  return `
    <article
      class="race-card${race.id === "skyborne" ? " race-card--skyborne" : ""}"
      data-race-card="${race.id}"
      id="raza-${race.id}"
      tabindex="-1"
      style="--faction:${color}"
    >
      <header class="race-card__head">
        <span class="race-card__crest" aria-hidden="true"><span>${escapeHtml(race.initials)}</span></span>
        <div class="race-card__id">
          <p class="race-card__faction">${iconMarkup(factionIcon(race.faction))} ${escapeHtml(race.factionLabel)}</p>
          <h3>${escapeHtml(race.name)}</h3>
        </div>
        ${badge}
      </header>

      <p class="race-card__tagline">${escapeHtml(race.tagline)}</p>

      <div class="race-card__tags">
        ${race.tags.map(tag => `<span class="race-card__tag">${escapeHtml(tag)}</span>`).join("")}
      </div>

      <div class="race-card__racials">${racials}</div>
      ${priestNote}
      ${variants}

      <div class="race-card__lower">
        <div class="race-card__classes">
          <span class="race-card__label">${race.variants ? "Clases compartidas" : "Clases disponibles"} · ${baseClasses.length}</span>
          <div class="race-card__chips">${classChips}</div>
        </div>
        <p class="race-card__hook">${escapeHtml(race.hook)}</p>
      </div>
    </article>
  `;
}
function syncRaceFilterPills() {
  document.querySelectorAll("#race-filters [data-race-filter]").forEach(button => {
    const active = button.dataset.raceFilter === raceState.filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function applyRaceFilter(filter) {
  raceState.filter = filter;

  document.querySelectorAll("[data-race-card]").forEach(card => {
    const race = raceById(card.dataset.raceCard);
    if (!race) return;

    const visible = filter === "all"
      || (filter === "skyborne" ? race.id === "skyborne" : race.faction === filter || race.faction === "both");

    card.hidden = !visible;
  });

  syncRaceFilterPills();
}

function focusRace(id) {
  const card = document.querySelector(`[data-race-card="${id}"]`);
  if (!card) return;

  if (card.hidden) {
    applyRaceFilter("all");
  }

  card.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });

  card.classList.remove("is-target");
  void card.offsetWidth;
  card.classList.add("is-target");

  if (raceFocusTimer) clearTimeout(raceFocusTimer);
  raceFocusTimer = setTimeout(() => {
    card.classList.remove("is-target");
    raceFocusTimer = null;
  }, 2400);

  card.focus({ preventScroll: true });
}

function initRaceFilters() {
  const filters = document.getElementById("race-filters");

  if (filters) {
    filters.addEventListener("click", event => {
      const button = event.target.closest("[data-race-filter]");
      if (!button) return;
      applyRaceFilter(button.dataset.raceFilter);
    });
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-race-scroll]");
    if (!button) return;
    event.preventDefault();
    focusRace(button.dataset.raceScroll);
  });

  document.addEventListener("race:focus", event => {
    if (event.detail && event.detail.id) focusRace(event.detail.id);
  });

  window.focusRace = focusRace;
}

/* ============================================================
   MATRIZ
   ============================================================ */

function matrixHeadMarkup() {
  const columns = CLASSES.map(cls => `
    <th scope="col" style="--cls:${cls.color}">
      <button
        class="matrix__class"
        type="button"
        data-class-open="${cls.id}"
        title="${escapeHtml(cls.name)}: abrir su ficha"
      >
        ${classIconMarkup(cls.id)}
        <span>${escapeHtml(cls.name)}</span>
      </button>
    </th>
  `).join("");

  return `
    <tr>
      <th scope="col" class="matrix__corner"><span>Raza <i>/</i> Clase</span></th>
      ${columns}
    </tr>
  `;
}

function matrixBodyMarkup() {
  return MATRIX_ROWS.map(row => {
    const race = raceById(row.race);
    if (!race) return "";

    const available = new Set(raceClasses(race, row.variant));
    const color = factionColor(row.faction);

    const cells = CLASSES.map(cls => {
      if (!available.has(cls.id)) {
        return `
          <td class="matrix__cell matrix__cell--no">
            <span aria-hidden="true">—</span>
            <span class="sr-only">${escapeHtml(cls.name)} no disponible para ${escapeHtml(row.label)}</span>
          </td>
        `;
      }

      const isNew = isNewCombo(row.race, cls.id);
      const label = `${cls.name} con ${row.label}${row.variant ? ` (${row.variant})` : ""}: ${isNew ? "nueva combinación" : "combinación clásica"}. Abrir ficha.`;

      return `
        <td class="matrix__cell" style="--cls:${cls.color}">
          <button
            class="matrix__cell-btn ${isNew ? "is-new" : "is-classic"}"
            type="button"
            data-class-open="${cls.id}"
            aria-label="${escapeHtml(label)}"
            title="${escapeHtml(label)}"
          >
            <span aria-hidden="true">${isNew ? "★" : "✓"}</span>
          </button>
        </td>
      `;
    }).join("");

    return `
      <tr data-matrix-row data-race="${row.race}" data-faction="${row.faction}" style="--faction:${color}">
        <th scope="row">
          <button class="matrix__race" type="button" data-race-scroll="${row.race}">
            <span>${escapeHtml(row.label)}${row.variant ? ` <em>${escapeHtml(row.variant)}</em>` : ""}</span>
            <small>${escapeHtml(row.sub)}</small>
          </button>
        </th>
        ${cells}
      </tr>
    `;
  }).join("");
}

function renderMatrix() {
  const head = document.getElementById("matrix-head");
  const body = document.getElementById("matrix-body");
  if (!head || !body) return;

  head.innerHTML = matrixHeadMarkup();
  body.innerHTML = matrixBodyMarkup();
}

function syncMatrixFilterPills() {
  const state = matrixState.filter;
  document.querySelectorAll("#matrix-filters [data-matrix-filter]").forEach(button => {
    const active = button.dataset.matrixFilter === state;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

const matrixState = { filter: "all" };

function applyMatrixFilter(filter) {
  matrixState.filter = filter;

  document.querySelectorAll("[data-matrix-row]").forEach(row => {
    const visible = filter === "all"
      || (filter === "skyborne"
        ? row.dataset.race === "skyborne"
        : row.dataset.faction === filter);

    row.hidden = !visible;
  });

  syncMatrixFilterPills();
}

function initMatrixFilters() {
  const filters = document.getElementById("matrix-filters");
  if (!filters) return;

  filters.addEventListener("click", event => {
    const button = event.target.closest("[data-matrix-filter]");
    if (!button) return;
    applyMatrixFilter(button.dataset.matrixFilter);
  });
}

/* ============================================================
   ARRANQUE
   ============================================================ */

function initRacesApp() {
  const grid = document.getElementById("race-grid");
  if (!grid) return;

  grid.innerHTML = RACES.map(raceCardMarkup).join("");

  initRaceFilters();
  applyRaceFilter("all");
  renderMatrix();
  initMatrixFilters();
  applyMatrixFilter("all");
}

initRacesApp();