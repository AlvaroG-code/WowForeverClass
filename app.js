/* ============================================================
   COMPORTAMIENTO · navegación, clases, filtros y modal
   ============================================================ */

"use strict";

const CLASS_ICONS = {
  warrior: "swords",
  paladin: "shield",
  hunter: "bow",
  rogue: "dagger",
  priest: "halo",
  shaman: "totem",
  mage: "arcane",
  warlock: "skull",
  druid: "paw"
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function classIconName(id) {
  return CLASS_ICONS[id] || "spark";
}

function classIconMarkup(id) {
  return iconMarkup(classIconName(id));
}

function roleChip(role, extraClass) {
  const meta = ROLES[role];
  if (!meta) return "";
  return `<span class="role-chip ${extraClass || ""}" style="--role:${meta.color}">${iconMarkup(meta.icon)}${escapeHtml(meta.label)}</span>`;
}

function diffBars(level) {
  return `<span class="diff-bars" aria-hidden="true">${[1, 2, 3, 4, 5]
    .map(step => `<span class="diff-bar${step <= level ? " is-on" : ""}"></span>`)
    .join("")}</span>`;
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

/* ============================================================
   CABECERA Y NAVEGACIÓN MÓVIL
   ============================================================ */

function initHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  if (!toggle || !nav) return;

  const srLabel = toggle.querySelector(".sr-only");

  function setNav(open) {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (srLabel) srLabel.textContent = open ? "Cerrar menú" : "Abrir menú";
  }

  toggle.addEventListener("click", () => {
    setNav(!header.classList.contains("nav-open"));
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a")) setNav(false);
  });

  document.addEventListener("click", event => {
    if (!header.classList.contains("nav-open")) return;
    if (!header.contains(event.target)) setNav(false);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setNav(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020) setNav(false);
  });
}

/* ============================================================
   CONSTELACIÓN DEL HERO
   ============================================================ */

function renderOrbit() {
  const container = document.getElementById("orbit-nodes");
  if (!container) return;

  container.innerHTML = CLASSES.map((cls, index) => `
    <button
      class="orbit__node"
      type="button"
      style="--i:${index}; --cls:${cls.color}"
      data-class-open="${cls.id}"
      aria-haspopup="dialog"
      aria-label="${escapeHtml(cls.name)}: abrir su ficha"
    >
      <span class="orbit__node-icon">${classIconMarkup(cls.id)}</span>
      <span class="orbit__node-label">${escapeHtml(cls.name)}</span>
    </button>
  `).join("");
}

/* ============================================================
   REVEAL AL SCROLL
   ============================================================ */

function initReveal() {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));

  if (!items.length) return;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    items.forEach(item => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -8% 0px"
  });

  items.forEach(item => observer.observe(item));
}

/* ============================================================
   CLASES · FILTROS, BÚSQUEDA Y ORDEN
   ============================================================ */

const classState = {
  filter: "all",
  query: "",
  sort: "default"
};

function roleCount(role) {
  return candidateClasses(role).length;
}

function classHaystack(cls) {
  return normalizeText([
    cls.name,
    cls.tagline,
    cls.armor,
    cls.resource,
    cls.range,
    cls.complexity,
    cls.pickIf,
    cls.keywords,
    ...cls.roles.map(role => ROLES[role].label),
    ...cls.signature,
    ...cls.specs.flatMap(spec => [spec.name, spec.desc])
  ].join(" "));
}

function getFilteredClasses() {
  let list = candidateClasses(classState.filter);
  const query = normalizeText(classState.query.trim());

  if (query) {
    const terms = query.split(/\s+/).filter(Boolean);
    list = list.filter(cls => {
      const haystack = classHaystack(cls);
      return terms.every(term => haystack.includes(term));
    });
  }

  if (classState.sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "es"));
  } else if (classState.sort === "easy") {
    list.sort((a, b) => a.difficulty - b.difficulty || a.name.localeCompare(b.name, "es"));
  } else if (classState.sort === "hard") {
    list.sort((a, b) => b.difficulty - a.difficulty || a.name.localeCompare(b.name, "es"));
  }

  return list;
}

function classCardMarkup(cls, index, total) {
  const roles = cls.roles.map(role => roleChip(role)).join("");

  return `
    <article class="class-card" style="--cls:${cls.color}">
      <button
        class="class-card__button"
        type="button"
        data-class-open="${cls.id}"
        aria-haspopup="dialog"
        aria-label="Abrir la ficha de ${escapeHtml(cls.name)}"
      >
        <span class="class-card__head">
          <span class="class-card__sigil">${classIconMarkup(cls.id)}</span>
          <span class="class-card__heading">
            <span class="class-card__index">Sendero ${padNumber(index + 1)} / ${padNumber(total)}</span>
            <span class="class-card__name">${escapeHtml(cls.name)}</span>
          </span>
          <span class="class-card__open" aria-hidden="true">${iconMarkup("arrow")}</span>
        </span>

        <span class="class-card__tagline">${escapeHtml(cls.tagline)}</span>
        <span class="class-card__roles">${roles}</span>

        <span class="class-card__balance">
          <span class="class-card__balance-item class-card__balance-item--pro">
            <span class="class-card__balance-label">+ Brilla</span>
            <span class="class-card__balance-text">${escapeHtml(cls.pros[0])}</span>
          </span>
          <span class="class-card__balance-item class-card__balance-item--con">
            <span class="class-card__balance-label">− Cede</span>
            <span class="class-card__balance-text">${escapeHtml(cls.cons[0])}</span>
          </span>
        </span>

        <span class="class-card__foot">
          <span class="class-card__meta">${escapeHtml(cls.armor)} <i>·</i> ${escapeHtml(cls.resource)} <i>·</i> ${escapeHtml(cls.range)}</span>
          <span class="class-card__diff" aria-label="Dificultad ${cls.difficulty} de 5">
            <span>Dificultad</span>
            ${diffBars(cls.difficulty)}
          </span>
        </span>
      </button>
    </article>
  `;
}

function syncClassFilterPills() {
  document.querySelectorAll("#class-filters [data-filter]").forEach(button => {
    const active = button.dataset.filter === classState.filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderClasses() {
  const grid = document.getElementById("class-grid");
  const count = document.getElementById("class-count");
  const clear = document.getElementById("class-clear");
  const empty = document.getElementById("class-empty");
  if (!grid) return;

  const list = getFilteredClasses();

  grid.innerHTML = list.length
    ? list.map((cls, index) => classCardMarkup(cls, index, list.length)).join("")
    : "";

  if (count) count.textContent = String(list.length);
  if (empty) empty.hidden = list.length !== 0;
  if (clear) {
    clear.hidden = !(classState.filter !== "all" || classState.query || classState.sort !== "default");
  }

  syncClassFilterPills();
}

function updateClassFilterCounts() {
  document.querySelectorAll("#class-filters [data-filter]").forEach(button => {
    const counter = button.querySelector(".pill__count");
    if (!counter) return;
    counter.textContent = String(roleCount(button.dataset.filter));
  });
}

function resetClassFilters() {
  classState.filter = "all";
  classState.query = "";
  classState.sort = "default";

  const search = document.getElementById("class-search");
  const sort = document.getElementById("class-sort");
  if (search) search.value = "";
  if (sort) sort.value = "default";

  renderClasses();
}
function initClassFilters() {
  const filters = document.getElementById("class-filters");
  const search = document.getElementById("class-search");
  const sort = document.getElementById("class-sort");
  const clear = document.getElementById("class-clear");
  const emptyReset = document.getElementById("class-empty-reset");

  if (filters) {
    filters.addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      classState.filter = button.dataset.filter;
      renderClasses();
    });
  }

  if (search) {
    search.addEventListener("input", () => {
      classState.query = search.value.trim();
      renderClasses();
    });
  }

  if (sort) {
    sort.addEventListener("change", () => {
      classState.sort = sort.value;
      renderClasses();
    });
  }

  if (clear) clear.addEventListener("click", resetClassFilters);
  if (emptyReset) emptyReset.addEventListener("click", resetClassFilters);

  updateClassFilterCounts();
  renderClasses();
}

/* ============================================================
   MODAL · FICHA COMPLETA
   ============================================================ */

const modal = document.getElementById("class-modal");
const modalPanel = document.getElementById("modal-panel");
const modalContent = document.getElementById("modal-content");

let modalCloseTimer = null;
let modalFocusTimer = null;
let lastModalFocus = null;

function classModalMarkup(cls) {
  const index = CLASSES.indexOf(cls) + 1;
  const total = CLASSES.length;
  const roleChips = cls.roles.map(role => roleChip(role)).join("");

  const stats = [
    ["Armadura", cls.armor],
    ["Recurso", cls.resource],
    ["Alcance", cls.range]
  ].map(([label, value]) => `
    <div class="modal-stat">
      <dt>${label}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join("");

  const difficultyStat = `
    <div class="modal-stat">
      <dt>Dificultad</dt>
      <dd>${diffBars(cls.difficulty)}<span>${cls.difficulty} / 5</span></dd>
    </div>
  `;

  const pros = cls.pros.map(pro => `<li>${escapeHtml(pro)}</li>`).join("");
  const cons = cls.cons.map(con => `<li>${escapeHtml(con)}</li>`).join("");

  const verdictOrder = ["tank", "healer", "dps", "hybrid"];
  const verdicts = verdictOrder.map(role => {
    const meta = ROLES[role];
    const fits = role === "hybrid" ? cls.roles.length >= 2 : cls.roles.includes(role);
    const title = role === "hybrid" ? "Multifunción" : meta.label;

    return `
      <article class="verdict ${fits ? "verdict--yes" : "verdict--no"}" style="--role:${meta.color}">
        <div class="verdict__top">
          <span class="verdict__icon">${iconMarkup(meta.icon)}</span>
          <span class="verdict__status">${fits ? "Encaja" : "Fuera de rol"}</span>
        </div>
        <h4>${title}</h4>
        <p>${escapeHtml(cls.verdicts[role])}</p>
      </article>
    `;
  }).join("");

  const specs = cls.specs.map(spec => `
    <article class="spec-card">
      <div class="spec-card__top">
        <h4>${escapeHtml(spec.name)}</h4>
        <span class="spec-card__roles">${spec.roles.map(role => roleChip(role)).join("")}</span>
      </div>
      <p>${escapeHtml(spec.desc)}</p>
    </article>
  `).join("");

  const signature = cls.signature
    .map(skill => `<span class="signature-chip">${escapeHtml(skill)}</span>`)
    .join("");

  const raceChips = cls.races.map(raceId => {
    const race = raceById(raceId);
    if (!race) return "";
    const isNew = isNewCombo(raceId, cls.id);
    return `
      <button class="race-chip" type="button" data-modal-race="${race.id}">
        ${escapeHtml(race.name)}${isNew ? "<em>Nueva</em>" : ""}
      </button>
    `;
  }).join("");

  return `
    <div class="modal-hero" style="--cls:${cls.color}">
      <span class="modal-hero__watermark" aria-hidden="true">${padNumber(index)}</span>

      <div class="modal-hero__top">
        <span class="modal-hero__sigil">${classIconMarkup(cls.id)}</span>
        <div>
          <p class="modal-hero__kicker">Sendero ${padNumber(index)} / ${padNumber(total)} · Ficha de clase</p>
          <h2 id="modal-title">${escapeHtml(cls.name)}</h2>
          <p class="modal-hero__tagline">${escapeHtml(cls.tagline)}</p>
        </div>
      </div>

      <div class="modal-hero__roles">${roleChips}</div>
      <p class="modal-hero__fantasy">${escapeHtml(cls.fantasy)}</p>

      <dl class="modal-stats">
        ${stats}
        ${difficultyStat}
      </dl>

      <p class="modal-hero__complexity">${iconMarkup("info")} ${escapeHtml(cls.complexity)}</p>
    </div>

    <div class="modal-body">
      <div class="modal-forever">
        <span class="modal-forever__tag">${iconMarkup("spark")} En Forever</span>
        <p>${escapeHtml(cls.forever)}</p>
      </div>

      <div class="modal-twocol">
        <section class="modal-block modal-block--pros">
          <h3>${iconMarkup("check")} Lo que hace bien</h3>
          <ul>${pros}</ul>
        </section>
        <section class="modal-block modal-block--cons">
          <h3>${iconMarkup("x")} Lo que le cuesta</h3>
          <ul>${cons}</ul>
        </section>
      </div>

      <section>
        <div class="modal-section-head">
          <h3>¿Por qué elegirla?</h3>
          <p>Veredicto para cada rol. Los roles que no cubre aparecen en gris; el resto explica qué aporta.</p>
        </div>
        <div class="verdict-grid">${verdicts}</div>
      </section>

      <section>
        <h3 class="modal-section-title">${iconMarkup("book")} Especializaciones</h3>
        <div class="spec-grid">${specs}</div>
      </section>

      <section>
        <h3 class="modal-section-title">${iconMarkup("star")} Habilidades insignia</h3>
        <div class="signature-chips">${signature}</div>
      </section>

      <section>
        <h3 class="modal-section-title">${iconMarkup("crown")} Razas que pueden jugarla</h3>
        <div class="race-chip-grid">${raceChips}</div>
        <p class="modal-races__note">Toca una raza para cerrar la ficha y saltar a sus raciales.</p>
      </section>

      <div class="modal-pick">
        <span>Elige esta clase si…</span>
        <p>${escapeHtml(cls.pickIf)}</p>
      </div>
    </div>
  `;
}
function openClassModal(id) {
  const cls = classById(id);
  if (!cls || !modal || !modalContent) return;

  if (modalCloseTimer) {
    clearTimeout(modalCloseTimer);
    modalCloseTimer = null;
  }

  if (modal.hidden) lastModalFocus = document.activeElement;

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalContent.innerHTML = classModalMarkup(cls);

  if (modalPanel) modalPanel.scrollTop = 0;

  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });

  if (modalFocusTimer) clearTimeout(modalFocusTimer);
  modalFocusTimer = setTimeout(() => {
    const closeButton = modal.querySelector(".modal__close");
    if (closeButton && !modal.hidden) closeButton.focus({ preventScroll: true });
  }, 60);
}

function closeModal(options) {
  if (!modal || modal.hidden) return;

  const settings = options || {};

  if (modalFocusTimer) {
    clearTimeout(modalFocusTimer);
    modalFocusTimer = null;
  }

  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  const finish = () => {
    if (!modal.classList.contains("is-open")) {
      modal.hidden = true;
      if (modalContent) modalContent.innerHTML = "";
    }
    modalCloseTimer = null;
  };

  if (prefersReducedMotion) {
    finish();
  } else {
    modalCloseTimer = setTimeout(finish, 320);
  }

  if (settings.restoreFocus !== false && lastModalFocus && document.contains(lastModalFocus)) {
    lastModalFocus.focus({ preventScroll: true });
  }

  lastModalFocus = null;
}

function initModalEvents() {
  if (!modal) return;

  document.addEventListener("click", event => {
    const raceTarget = event.target.closest("[data-modal-race]");

    if (raceTarget) {
      const raceId = raceTarget.dataset.modalRace;
      closeModal({ restoreFocus: false });

      const focusRace = () => {
        document.dispatchEvent(new CustomEvent("race:focus", { detail: { id: raceId } }));
      };

      if (prefersReducedMotion) focusRace();
      else setTimeout(focusRace, 260);
      return;
    }

    if (event.target.closest("[data-modal-close]")) {
      closeModal();
      return;
    }

    const opener = event.target.closest("[data-class-open], [data-class-link]");
    if (!opener) return;

    event.preventDefault();
    openClassModal(opener.dataset.classOpen || opener.dataset.classLink);
  });

  document.addEventListener("keydown", event => {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusables = Array.from(modal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(el => el.getClientRects().length > 0);

    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initApp() {
  initHeader();
  renderOrbit();
  initReveal();
  initClassFilters();
  initModalEvents();
}

window.openClassModal = openClassModal;
initApp();