/* ============================================================
   COMPORTAMIENTO · el oráculo aleatorio
   ============================================================ */

"use strict";

const ORACLE_HINTS = {
  all: "Modo sin filtros: cualquier clase y cualquiera de sus roles.",
  dps: "Solo entran clases con DPS. Las nueve pueden hacer daño.",
  tank: "Solo Guerrero, Paladín y Druida tienen una rama de tanque.",
  healer: "Solo Paladín, Sacerdote, Chamán y Druida pueden curar.",
  hybrid: "Clases con dos o más roles: Guerrero, Paladín, Sacerdote, Chamán y Druida."
};

const oracleState = {
  filter: "all",
  lastPick: null,
  rolling: false,
  rolls: 0
};

function secureRandomInt(max) {
  if (!Number.isFinite(max) || max <= 1) return 0;

  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    const range = 0x100000000;
    const limit = range - (range % max);
    const buffer = new Uint32Array(1);
    let value = 0;

    do {
      window.crypto.getRandomValues(buffer);
      value = buffer[0];
    } while (value >= limit);

    return value % max;
  }

  return Math.floor(Math.random() * max);
}

function pickRandom(items) {
  return items[secureRandomInt(items.length)];
}

function pickOracleRole(cls, filter) {
  if ((filter === "tank" || filter === "healer" || filter === "dps") && cls.roles.includes(filter)) {
    return filter;
  }
  return pickRandom(cls.roles);
}

function pickOracleSpec(cls, role) {
  const fitting = cls.specs.filter(spec => spec.roles.includes(role));
  return pickRandom(fitting.length ? fitting : cls.specs);
}

function syncOracleFilterPills() {
  document.querySelectorAll("#oracle-filters [data-oracle-filter]").forEach(button => {
    const active = button.dataset.oracleFilter === oracleState.filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateOracleFilter(filter) {
  oracleState.filter = filter;
  syncOracleFilterPills();

  const candidates = candidateClasses(filter);
  const count = document.getElementById("oracle-candidates");
  const hint = document.querySelector("#oracle-hint span");

  if (count) count.textContent = String(candidates.length);
  if (hint) hint.textContent = ORACLE_HINTS[filter] || ORACLE_HINTS.all;
}

function oracleResultMarkup(cls, role, spec, race, filter) {
  const roleMeta = ROLES[role];
  const filterLabel = filter === "all"
    ? "Sin filtro"
    : filter === "hybrid"
      ? "Multifunción"
      : ROLES[filter].label;

  const raceCell = race
    ? `<div class="oracle__pick-cell"><dt>Raza</dt><dd>${escapeHtml(race.name)}</dd></div>`
    : `<div class="oracle__pick-cell"><dt>Filtro</dt><dd>${escapeHtml(filterLabel)}</dd></div>`;

  const raceLine = race
    ? `<p class="oracle__pick-race">
        ${iconMarkup(race.faction === "alliance" ? "alliance" : race.faction === "horde" ? "horde" : "spark")}
        <span><strong>${escapeHtml(race.name)}</strong> · ${escapeHtml(race.factionLabel)} · ${escapeHtml(race.racials.slice(0, 2).map(racial => racial.name).join(" · "))}</span>
      </p>`
    : "";

  return `
    <div class="oracle__pick" style="--cls:${cls.color}">
      <div class="oracle__pick-top">
        <span class="oracle__pick-sigil">${classIconMarkup(cls.id)}</span>
        <div>
          <p class="oracle__pick-kicker">El oráculo ha hablado · Tirada ${padNumber(oracleState.rolls)}</p>
          <h3 class="oracle__pick-name">${escapeHtml(cls.name)}</h3>
          <p class="oracle__pick-tagline">${escapeHtml(cls.tagline)}</p>
        </div>
      </div>

      <div class="oracle__pick-roles">${cls.roles.map(roleId => roleChip(roleId)).join("")}</div>

      <dl class="oracle__pick-grid">
        <div class="oracle__pick-cell">
          <dt>Rol sugerido</dt>
          <dd style="color:${roleMeta.color}">${escapeHtml(roleMeta.label)}</dd>
        </div>
        <div class="oracle__pick-cell">
          <dt>Especialización</dt>
          <dd>${escapeHtml(spec.name)}</dd>
        </div>
        <div class="oracle__pick-cell">
          <dt>Dificultad</dt>
          <dd>${diffBars(cls.difficulty)}<span>${cls.difficulty} / 5</span></dd>
        </div>
        ${raceCell}
      </dl>

      ${raceLine}

      <p class="oracle__pick-why">${escapeHtml(cls.pickIf)}</p>

      <div class="oracle__pick-actions">
        <button class="btn btn--gold btn--small" type="button" data-class-open="${cls.id}">Abrir la ficha</button>
        <button class="btn btn--ghost btn--small" type="button" id="oracle-reroll">${iconMarkup("shuffle")} Otra tirada</button>
      </div>
    </div>
  `;
}

function animateOracleRoll(options) {
  const settings = options || {};
  const rollButton = document.getElementById("oracle-roll");
  const rollLabel = document.getElementById("oracle-roll-label");
  const result = document.getElementById("oracle-result");
  const stage = document.getElementById("oracle-stage");
  const raceToggle = document.getElementById("oracle-race-toggle");

  if (!rollButton || !result || oracleState.rolling) return;

  let pool = candidateClasses(oracleState.filter);
  if (pool.length > 1 && oracleState.lastPick) {
    const withoutLast = pool.filter(cls => cls.id !== oracleState.lastPick.id);
    if (withoutLast.length) pool = withoutLast;
  }

  const chosen = pickRandom(pool);
  const role = pickOracleRole(chosen, oracleState.filter);
  const spec = pickOracleSpec(chosen, role);
  const race = raceToggle && raceToggle.checked
    ? pickRandom(chosen.races.map(raceById).filter(Boolean))
    : null;

  oracleState.rolling = true;
  oracleState.rolls += 1;

  rollButton.disabled = true;
  rollButton.classList.add("is-rolling");
  if (rollLabel) rollLabel.textContent = "Leyendo el cielo…";
  if (stage) stage.classList.add("is-rolling");

  result.setAttribute("aria-live", "off");
  result.innerHTML = `
    <div class="oracle__rolling">
      <span class="oracle__rolling-glyph">${iconMarkup("dice")}</span>
      <p>Barajando las nueve sendas…</p>
      <strong class="oracle__rolling-name">${escapeHtml(chosen.name)}</strong>
    </div>
  `;

  const rollingName = result.querySelector(".oracle__rolling-name");
  const interval = setInterval(() => {
    const randomClass = pickRandom(CLASSES);
    if (rollingName) rollingName.textContent = randomClass.name;
  }, 65);

  const finish = () => {
    clearInterval(interval);

    oracleState.rolling = false;
    oracleState.lastPick = chosen;

    rollButton.disabled = false;
    rollButton.classList.remove("is-rolling");
    if (rollLabel) rollLabel.textContent = "Lanzar el destino";
    if (stage) stage.classList.remove("is-rolling");

    result.innerHTML = oracleResultMarkup(chosen, role, spec, race, oracleState.filter);
    result.setAttribute("aria-live", "polite");

    // El botón que tenía el foco desaparece durante la animación. Si el usuario
    // no ha movido el foco a otro sitio, devuélvelo a la acción equivalente.
    if (document.activeElement === document.body) {
      const nextFocus = settings.focusReroll
        ? document.getElementById("oracle-reroll")
        : rollButton;
      if (nextFocus) nextFocus.focus({ preventScroll: true });
    }
  };

  setTimeout(finish, prefersReducedMotion ? 0 : 950);
}

function initOracle() {
  const filters = document.getElementById("oracle-filters");
  const rollButton = document.getElementById("oracle-roll");
  const result = document.getElementById("oracle-result");

  if (!filters || !rollButton || !result) return;

  filters.addEventListener("click", event => {
    const button = event.target.closest("[data-oracle-filter]");
    if (!button) return;
    updateOracleFilter(button.dataset.oracleFilter);
  });

  rollButton.addEventListener("click", animateOracleRoll);

  result.addEventListener("click", event => {
    if (event.target.closest("#oracle-reroll")) animateOracleRoll({ focusReroll: true });
  });

  updateOracleFilter("all");
}

initOracle();