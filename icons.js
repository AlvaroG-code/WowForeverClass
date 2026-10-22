/* Icon sprite — line art original, sin arte de Blizzard */
const ICON_SPRITE = `
<svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <symbol id="i-swords" viewBox="0 0 24 24">
    <path d="M5 3l3 .5 8.5 8.5-2 2L6 5.5 5 3z"/>
    <path d="M19 3l-3 .5L7.5 12l2 2L18 5.5 19 3z"/>
    <path d="M4 21l3.5-3.5M20 21l-3.5-3.5"/>
  </symbol>
  <symbol id="i-shield" viewBox="0 0 24 24">
    <path d="M12 3l7 2.5v6c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9v-6L12 3z"/>
    <path d="M12 8v6M9 11h6"/>
  </symbol>
  <symbol id="i-heal" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8.5"/>
    <path d="M12 7.5v9M7.5 12h9"/>
  </symbol>
  <symbol id="i-spark" viewBox="0 0 24 24">
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"/>
    <path d="M18.5 16.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3z"/>
  </symbol>
  <symbol id="i-bow" viewBox="0 0 24 24">
    <path d="M5 21c-1.7-6 .1-12.4 4.2-17.5"/>
    <path d="M5 21L3 23M9.2 3.5L7 1.5"/>
    <path d="M9.2 3.5L5 21"/>
    <path d="M8 12.5h11M16 9.5l3 3-3 3"/>
  </symbol>
  <symbol id="i-dagger" viewBox="0 0 24 24">
    <path d="M12 2l2.2 2.2V12H9.8V4.2L12 2z"/>
    <path d="M8 12h8M12 12v6.5M9 21h6"/>
    <path d="M12 4.5v5"/>
  </symbol>
  <symbol id="i-halo" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5.5" rx="4" ry="2"/>
    <path d="M12 8v13M8 21h8"/>
    <path d="M4 3.5L5.5 5M20 3.5L18.5 5M12 1v1.5"/>
  </symbol>
  <symbol id="i-totem" viewBox="0 0 24 24">
    <path d="M9 3h6v5H9zM8 8h8v5H8zM10.5 13h3v8h-3z"/>
    <path d="M5 5L3 3M19 5l2-2"/>
    <path d="M18 10l-3 4h2l-2.5 3.5"/>
    <path d="M6 21h12"/>
  </symbol>
  <symbol id="i-arcane" viewBox="0 0 24 24">
    <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2z"/>
    <circle cx="18.5" cy="18" r="1.4"/>
    <path d="M3 19h4M5 17v4"/>
  </symbol>
  <symbol id="i-skull" viewBox="0 0 24 24">
    <path d="M5 10a7 7 0 1114 0v3l-2 2v3h-2l-1 2h-4l-1-2H7v-3l-2-2v-3z"/>
    <circle cx="9" cy="11" r="1.2"/>
    <circle cx="15" cy="11" r="1.2"/>
    <path d="M10 16h4M12 15v2"/>
  </symbol>
  <symbol id="i-paw" viewBox="0 0 24 24">
    <ellipse cx="12" cy="15.5" rx="5" ry="4"/>
    <circle cx="5.7" cy="10" r="1.9"/>
    <circle cx="9.5" cy="6.8" r="1.9"/>
    <circle cx="14.5" cy="6.8" r="1.9"/>
    <circle cx="18.3" cy="10" r="1.9"/>
  </symbol>
  <symbol id="i-crown" viewBox="0 0 24 24">
    <path d="M4 8l4 3 4-6 4 6 4-3-2 11H6L4 8z"/>
    <path d="M7 16h10"/>
  </symbol>
  <symbol id="i-alliance" viewBox="0 0 24 24">
    <path d="M12 3l7 2.5v6c0 4.4-3 7.5-7 9-4-1.5-7-4.6-7-9v-6L12 3z"/>
    <path d="M12 7.8l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4L12 7.8z"/>
  </symbol>
  <symbol id="i-horde" viewBox="0 0 24 24">
    <path d="M12 3l7 5v8l-7 5-7-5V8l7-5z"/>
    <path d="M8 9l4 3 4-3M8 15l4-3 4 3"/>
    <path d="M12 12v7"/>
  </symbol>
  <symbol id="i-dice" viewBox="0 0 24 24">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3"/>
    <circle cx="8.5" cy="8.5" r="1"/>
    <circle cx="15.5" cy="8.5" r="1"/>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="8.5" cy="15.5" r="1"/>
    <circle cx="15.5" cy="15.5" r="1"/>
  </symbol>
  <symbol id="i-search" viewBox="0 0 24 24">
    <circle cx="10.5" cy="10.5" r="6.5"/>
    <path d="M15.5 15.5L21 21"/>
  </symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24">
    <path d="M4 12h15M13 6l6 6-6 6"/>
  </symbol>
  <symbol id="i-close" viewBox="0 0 24 24">
    <path d="M5 5l14 14M19 5L5 19"/>
  </symbol>
  <symbol id="i-check" viewBox="0 0 24 24">
    <path d="M4 12.5l5 5L20 6.5"/>
  </symbol>
  <symbol id="i-x" viewBox="0 0 24 24">
    <path d="M6 6l12 12M18 6L6 18"/>
  </symbol>
  <symbol id="i-chevron" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6"/>
  </symbol>
  <symbol id="i-star" viewBox="0 0 24 24">
    <path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3z"/>
  </symbol>
  <symbol id="i-menu" viewBox="0 0 24 24">
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </symbol>
  <symbol id="i-info" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 10.5V17M12 7.2v.6"/>
  </symbol>
  <symbol id="i-book" viewBox="0 0 24 24">
    <path d="M4 4.5h6a3 3 0 013 3V21a2.5 2.5 0 00-2.5-2.5H4V4.5z"/>
    <path d="M20 4.5h-4a3 3 0 00-3 3V21a2.5 2.5 0 012.5-2.5H20V4.5z"/>
  </symbol>
  <symbol id="i-external" viewBox="0 0 24 24">
    <path d="M14 4h6v6M20 4l-9 9"/>
    <path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>
  </symbol>
  <symbol id="i-shuffle" viewBox="0 0 24 24">
    <path d="M4 7h3c5 0 5 10 10 10h3M17 14l3 3-3 3"/>
    <path d="M4 17h3c2.6 0 3.8-2.7 5.2-5.4M14.2 8.4C15.2 7.5 16.4 7 18 7h3M17 4l3 3-3 3"/>
  </symbol>
</svg>`;

document.body.insertAdjacentHTML("afterbegin", ICON_SPRITE);

function iconMarkup(name, className) {
  return `<svg class="icon ${className || ""}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}
