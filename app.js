const NOTES = [
  { sharp: "C", flat: "C" },
  { sharp: "C#", flat: "Db" },
  { sharp: "D", flat: "D" },
  { sharp: "D#", flat: "Eb" },
  { sharp: "E", flat: "E" },
  { sharp: "F", flat: "F" },
  { sharp: "F#", flat: "Gb" },
  { sharp: "G", flat: "G" },
  { sharp: "G#", flat: "Ab" },
  { sharp: "A", flat: "A" },
  { sharp: "A#", flat: "Bb" },
  { sharp: "B", flat: "B" }
];

const TONICS = [
  { label: "C", pitch: 0, spelling: "sharp" },
  { label: "C#", pitch: 1, spelling: "sharp" },
  { label: "Db", pitch: 1, spelling: "flat" },
  { label: "D", pitch: 2, spelling: "sharp" },
  { label: "D#", pitch: 3, spelling: "sharp" },
  { label: "Eb", pitch: 3, spelling: "flat" },
  { label: "E", pitch: 4, spelling: "sharp" },
  { label: "F", pitch: 5, spelling: "flat" },
  { label: "F#", pitch: 6, spelling: "sharp" },
  { label: "Gb", pitch: 6, spelling: "flat" },
  { label: "G", pitch: 7, spelling: "sharp" },
  { label: "G#", pitch: 8, spelling: "sharp" },
  { label: "Ab", pitch: 8, spelling: "flat" },
  { label: "A", pitch: 9, spelling: "sharp" },
  { label: "A#", pitch: 10, spelling: "sharp" },
  { label: "Bb", pitch: 10, spelling: "flat" },
  { label: "B", pitch: 11, spelling: "sharp" }
];

const COLORS = [
  { value: "#f2c14e", label: "Amarillo" },
  { value: "#f28c45", label: "Naranja" },
  { value: "#ee765d", label: "Coral" },
  { value: "#e66f82", label: "Rosa" },
  { value: "#db83c9", label: "Magenta" },
  { value: "#b88ee8", label: "Violeta" },
  { value: "#7f91e8", label: "Índigo" },
  { value: "#5ca9e6", label: "Azul" },
  { value: "#57c7c3", label: "Turquesa" },
  { value: "#72b8a0", label: "Verde agua" },
  { value: "#69c779", label: "Verde" },
  { value: "#a9cf54", label: "Lima" }
];

const CHORDS = [
  { code: "M", name: "Mayor", symbol: "", intervals: [0, 4, 7] },
  { code: "m", name: "Menor", symbol: "m", intervals: [0, 3, 7] },
  { code: "aug", name: "Aumentado", symbol: "+", intervals: [0, 4, 8] },
  { code: "dim", name: "Disminuido", symbol: "dim", intervals: [0, 3, 6] },
  { code: "sus2", name: "Segunda suspendida", symbol: "sus2", intervals: [0, 2, 7] },
  { code: "sus4", name: "Cuarta suspendida", symbol: "sus4", intervals: [0, 5, 7] },
  { code: "add2", name: "Segunda añadida", symbol: "add2", intervals: [0, 2, 4, 7] },
  { code: "add4", name: "Cuarta añadida", symbol: "add4", intervals: [0, 4, 5, 7] },
  { code: "6", name: "Sexta mayor", symbol: "6", intervals: [0, 4, 7, 9] },
  { code: "m6", name: "Sexta menor", symbol: "m6", intervals: [0, 3, 7, 9] },
  { code: "7", name: "Séptima dominante", symbol: "7", intervals: [0, 4, 7, 10] },
  { code: "maj7", name: "Séptima mayor", symbol: "maj7", intervals: [0, 4, 7, 11] },
  { code: "m7", name: "Menor séptima", symbol: "m7", intervals: [0, 3, 7, 10] },
  { code: "m(maj7)", name: "Menor con séptima mayor", symbol: "m(maj7)", intervals: [0, 3, 7, 11] },
  { code: "dim7", name: "Séptima disminuida", symbol: "dim7", intervals: [0, 3, 6, 9] },
  { code: "m7b5", name: "Semidisminuido", symbol: "m7b5", intervals: [0, 3, 6, 10] },
  { code: "aug(maj7)", name: "Aumentado con séptima mayor", symbol: "+maj7", intervals: [0, 4, 8, 11] },
  { code: "add9", name: "Mayor con novena añadida", symbol: "add9", intervals: [0, 4, 7, 14] },
  { code: "m(add9)", name: "Menor con novena añadida", symbol: "m(add9)", intervals: [0, 3, 7, 14] },
  { code: "9", name: "Novena dominante", symbol: "9", intervals: [0, 4, 7, 10, 14] },
  { code: "maj9", name: "Novena mayor", symbol: "maj9", intervals: [0, 4, 7, 11, 14] },
  { code: "m9", name: "Novena menor", symbol: "m9", intervals: [0, 3, 7, 10, 14] },
  { code: "6/9", name: "Sexta con novena", symbol: "6/9", intervals: [0, 4, 7, 9, 14] },
  { code: "m6/9", name: "Sexta menor con novena", symbol: "m6/9", intervals: [0, 3, 7, 9, 14] },
  { code: "add11", name: "Mayor con oncena añadida", symbol: "add11", intervals: [0, 4, 7, 17] },
  { code: "m(add11)", name: "Menor con oncena añadida", symbol: "m(add11)", intervals: [0, 3, 7, 17] },
  { code: "11", name: "Oncena dominante", symbol: "11", intervals: [0, 4, 7, 10, 14, 17] },
  { code: "m11", name: "Oncena menor", symbol: "m11", intervals: [0, 3, 7, 10, 14, 17] },
  { code: "13", name: "Trecena dominante", symbol: "13", intervals: [0, 4, 7, 10, 14, 17, 21] },
  { code: "maj13", name: "Trecena mayor", symbol: "maj13", intervals: [0, 4, 7, 11, 14, 17, 21] },
  { code: "m13", name: "Trecena menor", symbol: "m13", intervals: [0, 3, 7, 10, 14, 17, 21] }
];

const SCALES = [
  { name: "Mayor (Jónica)", intervals: [0, 2, 4, 5, 7, 9, 11] },
  { name: "Dórica", intervals: [0, 2, 3, 5, 7, 9, 10] },
  { name: "Frigia", intervals: [0, 1, 3, 5, 7, 8, 10] },
  { name: "Lidia", intervals: [0, 2, 4, 6, 7, 9, 11] },
  { name: "Mixolidia", intervals: [0, 2, 4, 5, 7, 9, 10] },
  { name: "Menor natural (Eólica)", intervals: [0, 2, 3, 5, 7, 8, 10] },
  { name: "Locria", intervals: [0, 1, 3, 5, 6, 8, 10] },
  { name: "Pentatónica mayor", intervals: [0, 2, 4, 7, 9] },
  { name: "Pentatónica menor", intervals: [0, 3, 5, 7, 10] },
  { name: "Blues mayor", intervals: [0, 2, 3, 4, 7, 9] },
  { name: "Blues menor", intervals: [0, 3, 5, 6, 7, 10] },
  { name: "Menor armónica", intervals: [0, 2, 3, 5, 7, 8, 11] },
  { name: "Menor melódica", intervals: [0, 2, 3, 5, 7, 9, 11] },
  { name: "Frigia dominante", intervals: [0, 1, 4, 5, 7, 8, 10] },
  { name: "Lidia dominante", intervals: [0, 2, 4, 6, 7, 9, 10] },
  { name: "Alterada", intervals: [0, 1, 3, 4, 6, 8, 10] },
  { name: "Mayor armónica", intervals: [0, 2, 4, 5, 7, 8, 11] },
  { name: "Doble armónica", intervals: [0, 1, 4, 5, 7, 8, 11] },
  { name: "Húngara menor", intervals: [0, 2, 3, 6, 7, 8, 11] },
  { name: "Tonos enteros", intervals: [0, 2, 4, 6, 8, 10] },
  { name: "Disminuida tono-semitono", intervals: [0, 2, 3, 5, 6, 8, 9, 11] },
  { name: "Disminuida semitono-tono", intervals: [0, 1, 3, 4, 6, 7, 9, 10] },
  { name: "Bebop dominante", intervals: [0, 2, 4, 5, 7, 9, 10, 11] },
  { name: "Cromática", intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
];

// De la primera cuerda (arriba) a la sexta (abajo).
const STRINGS = [
  { note: "E", pitch: 4, number: 1 },
  { note: "B", pitch: 11, number: 2 },
  { note: "G", pitch: 7, number: 3 },
  { note: "D", pitch: 2, number: 4 },
  { note: "A", pitch: 9, number: 5 },
  { note: "E", pitch: 4, number: 6 }
];

const BOARD = { width: 1320, height: 430, openWidth: 82, frets: 15 };
const state = NOTES.map((note, pitch) => ({ note, pitch, active: false, color: "" }));
let noteSpelling = "sharp";

const controls = document.querySelector("#noteControls");
const fretLines = document.querySelector("#fretLines");
const stringsLayer = document.querySelector("#strings");
const markerLayer = document.querySelector("#fretMarkers");
const notesLayer = document.querySelector("#notesLayer");
const numbersLayer = document.querySelector("#fretNumbers");
const stringLabels = document.querySelector("#stringLabels");
const selectionStatus = document.querySelector("#selectionStatus");
const patternStatus = document.querySelector("#patternStatus");

function noteName(pitch) {
  return NOTES[pitch][noteSpelling];
}

function stringY(index) {
  const padding = 40;
  return padding + index * ((BOARD.height - padding * 2) / (STRINGS.length - 1));
}

function fretBoundary(fret) {
  const usable = BOARD.width - BOARD.openWidth;
  const normalization = 1 - Math.pow(2, -BOARD.frets / 12);
  return BOARD.openWidth + usable * ((1 - Math.pow(2, -fret / 12)) / normalization);
}

function fretCenter(fret) {
  if (fret === 0) return BOARD.openWidth / 2;
  return (fretBoundary(fret - 1) + fretBoundary(fret)) / 2;
}

function buildHarmonySelectors() {
  const tonicOptions = TONICS.map((tonic, index) => `<option value="${index}">${tonic.label}</option>`).join("");
  document.querySelector("#chordRoot").innerHTML = tonicOptions;
  document.querySelector("#scaleRoot").innerHTML = tonicOptions;
  document.querySelector("#chordType").innerHTML = CHORDS.map((chord, index) => `<option value="${index}">${chord.code}</option>`).join("");
  document.querySelector("#scaleType").innerHTML = SCALES.map((scale, index) => `<option value="${index}">${scale.name}</option>`).join("");

  document.querySelector("#applyChord").addEventListener("click", () => {
    const tonic = TONICS[Number(document.querySelector("#chordRoot").value)];
    const chord = CHORDS[Number(document.querySelector("#chordType").value)];
    applyPattern(tonic, chord.intervals, `${tonic.label}${chord.symbol} · ${chord.name}`);
  });

  document.querySelector("#applyScale").addEventListener("click", () => {
    const tonic = TONICS[Number(document.querySelector("#scaleRoot").value)];
    const scale = SCALES[Number(document.querySelector("#scaleType").value)];
    applyPattern(tonic, scale.intervals, `${tonic.label} · ${scale.name}`);
  });
}

function applyPattern(tonic, intervals, label) {
  noteSpelling = tonic.spelling;
  state.forEach(item => {
    item.active = false;
    item.color = "";
  });

  [...new Set(intervals)].forEach((interval, degree) => {
    const pitch = (tonic.pitch + interval) % 12;
    state[pitch].active = true;
    state[pitch].color = COLORS[degree].value;
  });

  patternStatus.textContent = label;
  syncControls();
  renderNotes();
}

function buildControls() {
  controls.innerHTML = state.map((item, index) => {
    const flatName = item.note.flat === item.note.sharp ? "" : item.note.flat;
    return `
      <article class="note-card" data-index="${index}">
        <span class="note-name"><span>${item.note.sharp}</span><small>${flatName || "&nbsp;"}</small></span>
        <div class="control-row">
          <div class="color-picker">
            <button class="color-trigger" type="button" aria-label="Elegir color para ${item.note.sharp}${flatName ? ` o ${flatName}` : ""}" aria-expanded="false">
              <span class="selected-color empty" aria-hidden="true"></span>
              <span class="picker-arrow" aria-hidden="true"></span>
            </button>
            <div class="color-menu" role="listbox" aria-label="Colores para ${item.note.sharp}${flatName ? ` o ${flatName}` : ""}" hidden>
              ${COLORS.map(color => `<button class="color-option" type="button" role="option" value="${color.value}" aria-label="${color.label}" aria-selected="false" style="--option-color: ${color.value}"></button>`).join("")}
              <button class="color-option clear-color" type="button" role="option" value="" aria-label="Quitar color" aria-selected="true">×</button>
            </div>
          </div>
          <button class="note-toggle" type="button" aria-label="Asigna un color para la nota ${item.note.sharp}" aria-pressed="false" disabled></button>
        </div>
      </article>
    `;
  }).join("");

  controls.addEventListener("click", event => {
    const trigger = event.target.closest(".color-trigger");
    if (trigger) {
      const menu = trigger.nextElementSibling;
      const willOpen = menu.hidden;
      closeColorMenus();
      menu.hidden = !willOpen;
      trigger.setAttribute("aria-expanded", String(willOpen));
      return;
    }

    const colorOption = event.target.closest(".color-option");
    if (colorOption && !colorOption.disabled) {
      const item = state[Number(colorOption.closest(".note-card").dataset.index)];
      item.color = colorOption.value;
      if (!item.color) item.active = false;
      patternStatus.textContent = "Selección manual";
      closeColorMenus();
      syncControls();
      renderNotes();
      return;
    }

    const button = event.target.closest(".note-toggle");
    if (!button) return;
    const item = state[Number(button.closest(".note-card").dataset.index)];
    item.active = !item.active;
    patternStatus.textContent = "Selección manual";
    syncControls();
    renderNotes();
  });

  syncControls();
}

function closeColorMenus() {
  document.querySelectorAll(".color-menu").forEach(menu => { menu.hidden = true; });
  document.querySelectorAll(".color-trigger").forEach(trigger => trigger.setAttribute("aria-expanded", "false"));
}

document.addEventListener("click", event => {
  if (!event.target.closest(".color-picker")) closeColorMenus();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeColorMenus();
});

function syncControls() {
  const usedColors = new Set(state.map(item => item.color).filter(Boolean));

  document.querySelectorAll(".note-card").forEach(card => {
    const item = state[Number(card.dataset.index)];
    const selectedColor = card.querySelector(".selected-color");
    const trigger = card.querySelector(".color-trigger");
    const button = card.querySelector(".note-toggle");

    card.querySelectorAll(".color-option").forEach(option => {
      option.disabled = Boolean(option.value && option.value !== item.color && usedColors.has(option.value));
      option.setAttribute("aria-selected", String(option.value === item.color));
    });

    card.style.setProperty("--note-color", item.color || "#777168");
    card.classList.toggle("active", item.active);
    card.classList.toggle("has-color", Boolean(item.color));
    selectedColor.classList.toggle("empty", !item.color);
    selectedColor.style.background = item.color || "transparent";
    trigger.setAttribute("aria-label", item.color ? `Cambiar color de ${item.note.sharp}` : `Elegir color para ${item.note.sharp}`);
    button.disabled = !item.color;
    button.setAttribute("aria-pressed", String(item.active));
    button.setAttribute("aria-label", item.color ? `${item.active ? "Desactivar" : "Activar"} nota ${item.note.sharp}` : `Asigna un color para la nota ${item.note.sharp}`);
  });
}

function buildFretboard() {
  STRINGS.forEach((string, index) => {
    const y = stringY(index);
    const label = document.createElement("div");
    label.className = "string-label";
    label.style.top = `${y}px`;
    label.innerHTML = `${string.note}<small>${string.number}</small>`;
    stringLabels.append(label);

    const line = document.createElement("div");
    line.className = "guitar-string";
    line.style.top = `${y}px`;
    line.style.height = `${1.1 + index * 0.42}px`;
    stringsLayer.append(line);
  });

  for (let fret = 1; fret <= BOARD.frets; fret += 1) {
    const wire = document.createElement("div");
    wire.className = "fret-wire";
    wire.style.left = `${fretBoundary(fret)}px`;
    fretLines.append(wire);

    const number = document.createElement("span");
    number.className = "fret-number";
    number.style.left = `${fretCenter(fret)}px`;
    number.textContent = fret;
    numbersLayer.append(number);
  }

  [3, 5, 7, 9, 15].forEach(addSingleMarker);
  [12].forEach(addDoubleMarker);
}

function addSingleMarker(fret) {
  const dot = document.createElement("span");
  dot.className = "position-dot";
  dot.style.left = `${fretCenter(fret)}px`;
  dot.style.top = "50%";
  markerLayer.append(dot);
}

function addDoubleMarker(fret) {
  [35, 65].forEach(top => {
    const dot = document.createElement("span");
    dot.className = "position-dot";
    dot.style.left = `${fretCenter(fret)}px`;
    dot.style.top = `${top}%`;
    markerLayer.append(dot);
  });
}

function renderNotes() {
  const fragments = document.createDocumentFragment();
  const activeNotes = state.filter(item => item.active);

  STRINGS.forEach((string, stringIndex) => {
    for (let fret = 0; fret <= BOARD.frets; fret += 1) {
      const pitch = (string.pitch + fret) % 12;
      const item = state[pitch];
      if (!item.active) continue;

      const marker = document.createElement("span");
      const label = noteName(pitch);
      marker.className = "note-marker";
      marker.style.left = `${fretCenter(fret)}px`;
      marker.style.top = `${stringY(stringIndex)}px`;
      marker.style.setProperty("--note-color", item.color);
      marker.setAttribute("aria-label", `${label}, cuerda ${string.number}, ${fret === 0 ? "al aire" : `traste ${fret}`}`);
      marker.innerHTML = `<span class="marker-label">${label}</span>`;
      fragments.append(marker);
    }
  });

  notesLayer.replaceChildren(fragments);
  selectionStatus.textContent = activeNotes.length
    ? `${activeNotes.length} ${activeNotes.length === 1 ? "nota activa" : "notas activas"}: ${activeNotes.map(item => noteName(item.pitch)).join(" · ")}`
    : "Ninguna nota activa";
}

document.querySelector("#clearButton").addEventListener("click", () => {
  state.forEach(item => { item.active = false; });
  patternStatus.textContent = "Selección manual";
  syncControls();
  renderNotes();
});

buildHarmonySelectors();
buildControls();
buildFretboard();
renderNotes();
