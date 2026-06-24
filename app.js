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

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const NATURAL_PITCHES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

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

function interval(degree, semitones, name) {
  return { degree, semitones, name };
}

const I = {
  P1: interval(1, 0, "Unísono"),
  m2: interval(2, 1, "Segunda menor"),
  M2: interval(2, 2, "Segunda mayor"),
  A2: interval(2, 3, "Segunda aumentada"),
  m3: interval(3, 3, "Tercera menor"),
  M3: interval(3, 4, "Tercera mayor"),
  d4: interval(4, 4, "Cuarta disminuida"),
  P4: interval(4, 5, "Cuarta justa"),
  A4: interval(4, 6, "Cuarta aumentada"),
  d5: interval(5, 6, "Quinta disminuida"),
  P5: interval(5, 7, "Quinta justa"),
  A5: interval(5, 8, "Quinta aumentada"),
  m6: interval(6, 8, "Sexta menor"),
  M6: interval(6, 9, "Sexta mayor"),
  d7: interval(7, 9, "Séptima disminuida"),
  m7: interval(7, 10, "Séptima menor"),
  M7: interval(7, 11, "Séptima mayor"),
  P8: interval(8, 12, "Octava"),
  m9: interval(9, 13, "Novena menor"),
  M9: interval(9, 14, "Novena mayor"),
  A9: interval(9, 15, "Novena aumentada"),
  M10: interval(10, 16, "Décima mayor"),
  P11: interval(11, 17, "Oncena justa"),
  A11: interval(11, 18, "Oncena aumentada"),
  m13: interval(13, 20, "Trecena menor"),
  M13: interval(13, 21, "Trecena mayor")
};

const CHORDS = [
  { code: "M", name: "Mayor", symbol: "", intervals: [I.P1, I.M3, I.P5] },
  { code: "m", name: "Menor", symbol: "m", intervals: [I.P1, I.m3, I.P5] },
  { code: "aug", name: "Aumentado", symbol: "+", intervals: [I.P1, I.M3, I.A5] },
  { code: "dim", name: "Disminuido", symbol: "dim", intervals: [I.P1, I.m3, I.d5] },
  { code: "sus2", name: "Segunda suspendida", symbol: "sus2", intervals: [I.P1, I.M2, I.P5] },
  { code: "sus4", name: "Cuarta suspendida", symbol: "sus4", intervals: [I.P1, I.P4, I.P5] },
  { code: "add2", name: "Segunda añadida", symbol: "add2", intervals: [I.P1, I.M2, I.M3, I.P5] },
  { code: "add4", name: "Cuarta añadida", symbol: "add4", intervals: [I.P1, I.M3, I.P4, I.P5] },
  { code: "6", name: "Sexta mayor", symbol: "6", intervals: [I.P1, I.M3, I.P5, I.M6] },
  { code: "m6", name: "Sexta menor", symbol: "m6", intervals: [I.P1, I.m3, I.P5, I.M6] },
  { code: "7", name: "Séptima dominante", symbol: "7", intervals: [I.P1, I.M3, I.P5, I.m7] },
  { code: "maj7", name: "Séptima mayor", symbol: "maj7", intervals: [I.P1, I.M3, I.P5, I.M7] },
  { code: "m7", name: "Menor séptima", symbol: "m7", intervals: [I.P1, I.m3, I.P5, I.m7] },
  { code: "m(maj7)", name: "Menor con séptima mayor", symbol: "m(maj7)", intervals: [I.P1, I.m3, I.P5, I.M7] },
  { code: "dim7", name: "Séptima disminuida", symbol: "dim7", intervals: [I.P1, I.m3, I.d5, I.d7] },
  { code: "m7b5", name: "Semidisminuido", symbol: "m7b5", intervals: [I.P1, I.m3, I.d5, I.m7] },
  { code: "aug(maj7)", name: "Aumentado con séptima mayor", symbol: "+maj7", intervals: [I.P1, I.M3, I.A5, I.M7] },
  { code: "add9", name: "Mayor con novena añadida", symbol: "add9", intervals: [I.P1, I.M3, I.P5, I.M9] },
  { code: "m(add9)", name: "Menor con novena añadida", symbol: "m(add9)", intervals: [I.P1, I.m3, I.P5, I.M9] },
  { code: "9", name: "Novena dominante", symbol: "9", intervals: [I.P1, I.M3, I.P5, I.m7, I.M9] },
  { code: "maj9", name: "Novena mayor", symbol: "maj9", intervals: [I.P1, I.M3, I.P5, I.M7, I.M9] },
  { code: "m9", name: "Novena menor", symbol: "m9", intervals: [I.P1, I.m3, I.P5, I.m7, I.M9] },
  { code: "6/9", name: "Sexta con novena", symbol: "6/9", intervals: [I.P1, I.M3, I.P5, I.M6, I.M9] },
  { code: "m6/9", name: "Sexta menor con novena", symbol: "m6/9", intervals: [I.P1, I.m3, I.P5, I.M6, I.M9] },
  { code: "add11", name: "Mayor con oncena añadida", symbol: "add11", intervals: [I.P1, I.M3, I.P5, I.P11] },
  { code: "m(add11)", name: "Menor con oncena añadida", symbol: "m(add11)", intervals: [I.P1, I.m3, I.P5, I.P11] },
  { code: "11", name: "Oncena dominante", symbol: "11", intervals: [I.P1, I.M3, I.P5, I.m7, I.M9, I.P11] },
  { code: "m11", name: "Oncena menor", symbol: "m11", intervals: [I.P1, I.m3, I.P5, I.m7, I.M9, I.P11] },
  { code: "13", name: "Trecena dominante", symbol: "13", intervals: [I.P1, I.M3, I.P5, I.m7, I.M9, I.P11, I.M13] },
  { code: "maj13", name: "Trecena mayor", symbol: "maj13", intervals: [I.P1, I.M3, I.P5, I.M7, I.M9, I.P11, I.M13] },
  { code: "m13", name: "Trecena menor", symbol: "m13", intervals: [I.P1, I.m3, I.P5, I.m7, I.M9, I.P11, I.M13] }
];

const SCALES = [
  { name: "Mayor (Jónica)", intervals: [I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.M7] },
  { name: "Dórica", intervals: [I.P1, I.M2, I.m3, I.P4, I.P5, I.M6, I.m7] },
  { name: "Frigia", intervals: [I.P1, I.m2, I.m3, I.P4, I.P5, I.m6, I.m7] },
  { name: "Lidia", intervals: [I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.M7] },
  { name: "Mixolidia", intervals: [I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.m7] },
  { name: "Menor natural (Eólica)", intervals: [I.P1, I.M2, I.m3, I.P4, I.P5, I.m6, I.m7] },
  { name: "Locria", intervals: [I.P1, I.m2, I.m3, I.P4, I.d5, I.m6, I.m7] },
  { name: "Pentatónica mayor", intervals: [I.P1, I.M2, I.M3, I.P5, I.M6] },
  { name: "Pentatónica menor", intervals: [I.P1, I.m3, I.P4, I.P5, I.m7] },
  { name: "Blues mayor", intervals: [I.P1, I.M2, I.A2, I.M3, I.P5, I.M6] },
  { name: "Blues menor", intervals: [I.P1, I.m3, I.P4, I.A4, I.P5, I.m7] },
  { name: "Menor armónica", intervals: [I.P1, I.M2, I.m3, I.P4, I.P5, I.m6, I.M7] },
  { name: "Menor melódica", intervals: [I.P1, I.M2, I.m3, I.P4, I.P5, I.M6, I.M7] },
  { name: "Frigia dominante", intervals: [I.P1, I.m2, I.M3, I.P4, I.P5, I.m6, I.m7] },
  { name: "Lidia dominante", intervals: [I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.m7] },
  { name: "Alterada", intervals: [I.P1, I.m2, I.A2, I.M3, I.A4, I.A5, I.m7] },
  { name: "Mayor armónica", intervals: [I.P1, I.M2, I.M3, I.P4, I.P5, I.m6, I.M7] },
  { name: "Doble armónica", intervals: [I.P1, I.m2, I.M3, I.P4, I.P5, I.m6, I.M7] },
  { name: "Húngara menor", intervals: [I.P1, I.M2, I.m3, I.A4, I.P5, I.m6, I.M7] },
  { name: "Tonos enteros", intervals: [I.P1, I.M2, I.M3, I.A4, I.A5, I.m7] },
  { name: "Disminuida tono-semitono", intervals: [I.P1, I.M2, I.m3, I.P4, I.d5, I.m6, I.M6, I.M7] },
  { name: "Disminuida semitono-tono", intervals: [I.P1, I.m2, I.A2, I.M3, I.A4, I.P5, I.M6, I.m7] },
  { name: "Bebop dominante", intervals: [I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.m7, I.M7] },
  {
    name: "Cromática",
    forceSharpNames: true,
    intervals: [
      interval(1, 0, "Unísono"),
      interval(1, 1, "Unísono aumentado"),
      interval(2, 2, "Segunda mayor"),
      interval(2, 3, "Segunda aumentada"),
      interval(3, 4, "Tercera mayor"),
      interval(4, 5, "Cuarta justa"),
      interval(4, 6, "Cuarta aumentada"),
      interval(5, 7, "Quinta justa"),
      interval(5, 8, "Quinta aumentada"),
      interval(6, 9, "Sexta mayor"),
      interval(6, 10, "Sexta aumentada"),
      interval(7, 11, "Séptima mayor")
    ]
  }
];

const INSTRUMENTS = [
  {
    id: "guitar",
    label: "Guitarra",
    tuningLabel: "Afinación estándar",
    fretboardTitle: "Guitarra · primera cuerda arriba · sexta cuerda abajo",
    ariaLabel: "Diapasón de guitarra de 15 trastes",
    strings: [
      { note: "E", pitch: 4, midi: 64, number: 1 },
      { note: "B", pitch: 11, midi: 59, number: 2 },
      { note: "G", pitch: 7, midi: 55, number: 3 },
      { note: "D", pitch: 2, midi: 50, number: 4 },
      { note: "A", pitch: 9, midi: 45, number: 5 },
      { note: "E", pitch: 4, midi: 40, number: 6 }
    ]
  },
  {
    id: "bass",
    label: "Bajo",
    tuningLabel: "Afinación estándar",
    fretboardTitle: "Bajo · primera cuerda arriba · cuarta cuerda abajo",
    ariaLabel: "Diapasón de bajo de 15 trastes",
    strings: [
      { note: "G", pitch: 7, midi: 43, number: 1 },
      { note: "D", pitch: 2, midi: 38, number: 2 },
      { note: "A", pitch: 9, midi: 33, number: 3 },
      { note: "E", pitch: 4, midi: 28, number: 4 }
    ]
  }
];

const BOARD = { width: 1320, height: 430, openWidth: 82, frets: 15 };
const POSITION_MAX_FRET = 12;
const POSITION_SPAN = 5;
const state = NOTES.map((note, pitch) => ({ note, pitch, active: false, color: "", displayName: "" }));
let activeInstrument = INSTRUMENTS[0];
let activeSequence = [];
let visiblePositions = [];
let activePatternKind = "";
let positionModeActive = false;
let noteSpelling = "sharp";

const controls = document.querySelector("#noteControls");
const fretboard = document.querySelector("#fretboard");
const fretLines = document.querySelector("#fretLines");
const stringsLayer = document.querySelector("#strings");
const markerLayer = document.querySelector("#fretMarkers");
const notesLayer = document.querySelector("#notesLayer");
const numbersLayer = document.querySelector("#fretNumbers");
const stringLabels = document.querySelector("#stringLabels");
const selectionStatus = document.querySelector("#selectionStatus");
const patternStatus = document.querySelector("#patternStatus");
const instrumentSelect = document.querySelector("#instrumentSelect");
const instrumentTuning = document.querySelector("#instrumentTuning");
const fretboardTitle = document.querySelector("#fretboard-title");
const chordRoot = document.querySelector("#chordRoot");
const chordType = document.querySelector("#chordType");
const chordView = document.querySelector("#chordView");
const chordString = document.querySelector("#chordString");
const chordRootFret = document.querySelector("#chordRootFret");
const chordPosition = document.querySelector("#chordPosition");
const scaleRoot = document.querySelector("#scaleRoot");
const scaleType = document.querySelector("#scaleType");
const scaleView = document.querySelector("#scaleView");
const scaleOctaves = document.querySelector("#scaleOctaves");
const scaleString = document.querySelector("#scaleString");
const scaleRootFret = document.querySelector("#scaleRootFret");
const scalePosition = document.querySelector("#scalePosition");

function noteName(pitch) {
  return state[pitch].displayName || NOTES[pitch][noteSpelling];
}

function alternateNoteName(item) {
  if (!item.displayName) {
    return item.note.flat === item.note.sharp ? "" : item.note.flat;
  }

  const enharmonics = [item.note.sharp, item.note.flat].filter((name, index, names) => (
    name && name !== item.displayName && names.indexOf(name) === index
  ));

  return enharmonics[0] || "";
}

function resetDisplayNames() {
  state.forEach(item => { item.displayName = ""; });
}

function setManualMode() {
  resetDisplayNames();
  activeSequence = [];
  visiblePositions = [];
  activePatternKind = "";
  positionModeActive = false;
  patternStatus.textContent = "Selección manual";
}

function accidentalForOffset(offset) {
  if (offset === -2) return "bb";
  if (offset === -1) return "b";
  if (offset === 0) return "";
  if (offset === 1) return "#";
  if (offset === 2) return "##";
  return "";
}

function modulo(value, size) {
  return ((value % size) + size) % size;
}

function shortestPitchOffset(pitch, naturalPitch) {
  const offset = modulo(pitch - naturalPitch + 6, 12) - 6;
  return offset === -6 ? 6 : offset;
}

function degreeLetterOffset(degree) {
  return modulo(degree - 1, LETTERS.length);
}

function spellPatternNote(tonic, interval, pattern) {
  const pitch = modulo(tonic.pitch + interval.semitones, NOTES.length);
  if (pattern.forceSharpNames) return NOTES[pitch].sharp;

  const tonicLetterIndex = LETTERS.indexOf(tonic.label[0]);
  const letter = LETTERS[(tonicLetterIndex + degreeLetterOffset(interval.degree)) % LETTERS.length];
  const offset = shortestPitchOffset(pitch, NATURAL_PITCHES[letter]);

  return `${letter}${accidentalForOffset(offset)}` || NOTES[pitch][noteSpelling];
}

function selectedScaleTonic() {
  return TONICS[Number(scaleRoot.value)];
}

function selectedScale() {
  return SCALES[Number(scaleType.value)];
}

function selectedChordTonic() {
  return TONICS[Number(chordRoot.value)];
}

function selectedChord() {
  return CHORDS[Number(chordType.value)];
}

function rootFretPositions(tonic, stringIndex) {
  const string = activeInstrument.strings[stringIndex];
  const positions = [];

  for (let fret = 0; fret <= POSITION_MAX_FRET; fret += 1) {
    if ((string.pitch + fret) % NOTES.length === tonic.pitch) positions.push(fret);
  }

  return positions;
}

function handPositionWindows(rootFret) {
  const windows = Array.from({ length: POSITION_SPAN }, (_, offset) => ({
    start: rootFret - (POSITION_SPAN - 1 - offset),
    end: rootFret + offset
  }));

  return windows.filter(window => window.start >= 0 && window.end <= POSITION_MAX_FRET);
}

function buildScaleSequence(pattern, octaves) {
  const intervals = [];

  for (let octave = 0; octave < octaves; octave += 1) {
    pattern.intervals.forEach(interval => intervals.push(interval.semitones + octave * 12));
  }

  intervals.push(octaves * 12);
  return intervals;
}

function positionCandidatesForTarget(targetMidi, window) {
  return activeInstrument.strings.flatMap((string, stringIndex) => {
    const fret = targetMidi - string.midi;
    if (!fretInPositionWindow(fret, window)) return [];
    return [{ string, stringIndex, fret }];
  });
}

function fretInPositionWindow(fret, window) {
  if (fret < 0 || fret > POSITION_MAX_FRET) return false;
  if (fret >= window.start && fret <= window.end) return true;
  return fret === 0 && window.start <= 1;
}

function choosePositionCandidate(candidates, previous) {
  return candidates
    .map(candidate => ({
      candidate,
      score:
        Math.abs(candidate.fret - previous.fret) +
        Math.abs(candidate.stringIndex - previous.stringIndex) * 2 +
        (candidate.stringIndex > previous.stringIndex ? 8 : 0)
    }))
    .sort((a, b) => a.score - b.score)[0]?.candidate;
}

function buildScalePositionPath(tonic, pattern) {
  if (scaleView.value !== "position") return [];

  const stringIndex = Number(scaleString.value || 0);
  const rootFret = Number(scaleRootFret.value);
  const window = selectedWindow(scalePosition);
  if (!Number.isFinite(rootFret)) return [];
  if (!window) return [];

  const startString = activeInstrument.strings[stringIndex];
  const startMidi = startString.midi + rootFret;
  const intervals = buildScaleSequence(pattern, Number(scaleOctaves.value || 1));
  const path = [{
    string: startString,
    stringIndex,
    fret: rootFret,
    pitch: tonic.pitch,
    interval: 0
  }];

  let previous = path[0];

  for (const interval of intervals.slice(1)) {
    const targetMidi = startMidi + interval;
    const candidates = positionCandidatesForTarget(targetMidi, window);
    if (!candidates.length) break;

    const candidate = choosePositionCandidate(candidates, previous);
    if (!candidate) break;

    path.push({
      ...candidate,
      pitch: modulo(tonic.pitch + interval, NOTES.length),
      interval
    });
    previous = candidate;
  }

  return path;
}

function buildChordPositionShape(tonic, pattern) {
  if (chordView.value !== "position") return [];

  const stringIndex = Number(chordString.value || 0);
  const rootFret = Number(chordRootFret.value);
  const window = selectedWindow(chordPosition);
  if (!Number.isFinite(rootFret)) return [];
  if (!window) return [];

  const startString = activeInstrument.strings[stringIndex];
  const startMidi = startString.midi + rootFret;
  const intervals = [...new Set(pattern.intervals.map(interval => modulo(interval.semitones, NOTES.length)))];
  const rootPosition = {
    string: startString,
    stringIndex,
    fret: rootFret,
    pitch: tonic.pitch,
    interval: 0
  };

  return buildChordVoicing(intervals, rootPosition, startMidi, window);
}

function buildChordVoicing(intervals, rootPosition, startMidi, window) {
  const requiredStrings = Math.min(intervals.length, activeInstrument.strings.length);
  const continuousGroups = continuousStringGroups(requiredStrings).filter(group => group.includes(rootPosition.stringIndex));
  const openGroups = stringCombinations(requiredStrings).filter(group => group.includes(rootPosition.stringIndex));
  const groups = [
    ...continuousGroups,
    ...openGroups.filter(group => !continuousGroups.some(continuous => sameStringGroup(continuous, group)))
  ].sort((a, b) => chordGroupScore(a, rootPosition.stringIndex) - chordGroupScore(b, rootPosition.stringIndex));

  for (const group of groups) {
    const assignment = assignChordIntervalsToStrings(group, intervals, rootPosition, startMidi, window);
    if (assignment.length) return assignment;
  }

  return [];
}

function continuousStringGroups(size) {
  const groups = [];

  for (let start = 0; start <= activeInstrument.strings.length - size; start += 1) {
    groups.push(Array.from({ length: size }, (_, offset) => start + offset));
  }

  return groups;
}

function stringCombinations(size) {
  const groups = [];

  function collect(start, group) {
    if (group.length === size) {
      groups.push([...group]);
      return;
    }

    for (let index = start; index < activeInstrument.strings.length; index += 1) {
      group.push(index);
      collect(index + 1, group);
      group.pop();
    }
  }

  collect(0, []);
  return groups;
}

function sameStringGroup(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function chordGroupScore(group, rootStringIndex) {
  const center = (group[0] + group[group.length - 1]) / 2;
  const gaps = group.slice(1).reduce((total, stringIndex, index) => (
    total + Math.max(0, stringIndex - group[index] - 1)
  ), 0);

  return Math.abs(center - rootStringIndex) + gaps * 3;
}

function assignChordIntervalsToStrings(group, intervals, rootPosition, startMidi, window) {
  const remainingStrings = group.filter(index => index !== rootPosition.stringIndex);
  const remainingIntervals = intervals.filter(interval => interval !== 0);
  const assignments = [rootPosition];
  const completed = [];

  function search(stringOffset, availableIntervals) {
    if (stringOffset >= remainingStrings.length) {
      if (availableIntervals.length === 0) completed.push([...assignments]);
      return;
    }

    const currentStringIndex = remainingStrings[stringOffset];
    const string = activeInstrument.strings[currentStringIndex];
    const options = availableIntervals
      .flatMap(interval => chordOptionsForString(interval, string, currentStringIndex, startMidi, window))
      .sort((a, b) => chordOptionScore(a, rootPosition) - chordOptionScore(b, rootPosition));

    for (const option of options) {
      assignments.push(option);
      search(stringOffset + 1, availableIntervals.filter(interval => interval !== option.interval));
      assignments.pop();
    }
  }

  search(0, remainingIntervals);

  return completed
    .map(assignment => ({
      assignment,
      score: chordVoicingScore(assignment, rootPosition)
    }))
    .sort((a, b) => a.score - b.score)[0]?.assignment.sort((a, b) => a.stringIndex - b.stringIndex) || [];
}

function chordOptionsForString(interval, string, stringIndex, startMidi, window) {
  const options = [];

  for (let octave = -2; octave <= 2; octave += 1) {
    const targetMidi = startMidi + interval + octave * 12;
    const fret = targetMidi - string.midi;
    if (!fretInPositionWindow(fret, window)) continue;
    options.push({
      string,
      stringIndex,
      fret,
      pitch: modulo(startMidi + interval, NOTES.length),
      interval
    });
  }

  return options;
}

function chordOptionScore(option, rootPosition) {
  return Math.abs(option.fret - rootPosition.fret) + Math.abs(option.stringIndex - rootPosition.stringIndex) * 2;
}

function chordVoicingScore(assignment, rootPosition) {
  const fretted = assignment.map(note => note.fret).filter(fret => fret > 0);
  const fretSpan = fretted.length ? Math.max(...fretted) - Math.min(...fretted) : 0;
  const strings = assignment.map(note => note.stringIndex).sort((a, b) => a - b);
  const stringGaps = strings.slice(1).reduce((total, stringIndex, index) => (
    total + Math.max(0, stringIndex - strings[index] - 1)
  ), 0);
  const rootDistance = assignment.reduce((total, note) => (
    total + Math.abs(note.fret - rootPosition.fret) + Math.abs(note.stringIndex - rootPosition.stringIndex)
  ), 0);

  return fretSpan * 8 + stringGaps * 5 + rootDistance;
}

function selectedWindow(selectElement) {
  const [start, end] = selectElement.value.split("-").map(Number);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
  return { start, end };
}

function updateStringOptions(selectElement) {
  const previousValue = selectElement.value;
  selectElement.innerHTML = activeInstrument.strings
    .map((string, index) => ({ string, index }))
    .reverse()
    .map(({ string, index }) => `<option value="${index}">Cuerda ${string.number} · ${string.note}</option>`)
    .join("");

  if ([...selectElement.options].some(option => option.value === previousValue)) {
    selectElement.value = previousValue;
  }
}

function updateRootFretOptions(tonic, stringSelect, rootFretSelect, positionSelect, viewSelect, extraControls = []) {
  const previousRoot = rootFretSelect.value;
  const positions = rootFretPositions(tonic, Number(stringSelect.value || 0));

  rootFretSelect.innerHTML = positions.length
    ? positions.map(fret => `<option value="${fret}">${fret === 0 ? "Al aire" : `Traste ${fret}`}</option>`).join("")
    : `<option value="">Sin tónica</option>`;

  if (positions.map(String).includes(previousRoot)) {
    rootFretSelect.value = previousRoot;
  }

  updateHandPositionOptions(rootFretSelect, positionSelect, viewSelect, positions, extraControls);
}

function updateHandPositionOptions(rootFretSelect, positionSelect, viewSelect, positions, extraControls = []) {
  const previousPosition = positionSelect.value;
  const rootFret = Number(rootFretSelect.value);
  const windows = Number.isFinite(rootFret) ? handPositionWindows(rootFret) : [];

  positionSelect.innerHTML = windows.length
    ? windows.map(window => `<option value="${window.start}-${window.end}">Trastes ${window.start} a ${window.end}</option>`).join("")
    : `<option value="">Sin posición</option>`;

  if ([...positionSelect.options].some(option => option.value === previousPosition)) {
    positionSelect.value = previousPosition;
  }

  const positionMode = viewSelect.value === "position";
  extraControls.forEach(control => { control.disabled = !positionMode; });
  rootFretSelect.disabled = !positionMode || !positions.length;
  positionSelect.disabled = !positionMode || !windows.length;
}

function updateScalePositionOptions() {
  updateRootFretOptions(selectedScaleTonic(), scaleString, scaleRootFret, scalePosition, scaleView, [scaleOctaves, scaleString]);
}

function updateChordPositionOptions() {
  updateRootFretOptions(selectedChordTonic(), chordString, chordRootFret, chordPosition, chordView, [chordString]);
}

function updateAllPositionOptions() {
  updateStringOptions(scaleString);
  updateStringOptions(chordString);
  updateScalePositionOptions();
  updateChordPositionOptions();
}

function stringY(index) {
  const padding = 40;
  return padding + index * ((BOARD.height - padding * 2) / (activeInstrument.strings.length - 1));
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
  chordRoot.innerHTML = tonicOptions;
  scaleRoot.innerHTML = tonicOptions;
  chordType.innerHTML = CHORDS.map((chord, index) => `<option value="${index}">${chord.code}</option>`).join("");
  scaleType.innerHTML = SCALES.map((scale, index) => `<option value="${index}">${scale.name}</option>`).join("");

  document.querySelector("#applyChord").addEventListener("click", () => {
    const tonic = selectedChordTonic();
    const chord = selectedChord();
    applyPattern(tonic, chord, `${tonic.label}${chord.symbol} · ${chord.name}`, "chord");
  });

  document.querySelector("#applyScale").addEventListener("click", () => {
    const tonic = selectedScaleTonic();
    const scale = selectedScale();
    applyPattern(tonic, scale, `${tonic.label} · ${scale.name}`, "scale");
  });

  [scaleRoot, scaleType, scaleView, scaleOctaves, scaleString, scaleRootFret, scalePosition].forEach(control => {
    control.addEventListener("change", () => {
      if (control === scaleRoot || control === scaleString || control === scaleView) {
        updateScalePositionOptions();
      } else if (control === scaleRootFret) {
        updateHandPositionOptions(scaleRootFret, scalePosition, scaleView, rootFretPositions(selectedScaleTonic(), Number(scaleString.value || 0)), [scaleOctaves, scaleString]);
      }

      if (activePatternKind === "scale") {
        const tonic = selectedScaleTonic();
        const scale = selectedScale();
        applyPattern(tonic, scale, `${tonic.label} · ${scale.name}`, "scale");
      }
    });
  });

  [chordRoot, chordType, chordView, chordString, chordRootFret, chordPosition].forEach(control => {
    control.addEventListener("change", () => {
      if (control === chordRoot || control === chordString || control === chordView) {
        updateChordPositionOptions();
      } else if (control === chordRootFret) {
        updateHandPositionOptions(chordRootFret, chordPosition, chordView, rootFretPositions(selectedChordTonic(), Number(chordString.value || 0)), [chordString]);
      }

      if (activePatternKind === "chord") {
        const tonic = selectedChordTonic();
        const chord = selectedChord();
        applyPattern(tonic, chord, `${tonic.label}${chord.symbol} · ${chord.name}`, "chord");
      }
    });
  });
}

function buildInstrumentSelector() {
  instrumentSelect.innerHTML = INSTRUMENTS
    .map((instrument, index) => `<option value="${index}">${instrument.label}</option>`)
    .join("");

  instrumentSelect.addEventListener("change", () => {
    activeInstrument = INSTRUMENTS[Number(instrumentSelect.value)];
    updateInstrumentText();
    updateAllPositionOptions();
    buildFretboard();
    if (activePatternKind === "scale") {
      const tonic = selectedScaleTonic();
      const scale = selectedScale();
      applyPattern(tonic, scale, `${tonic.label} · ${scale.name}`, "scale");
      return;
    }
    if (activePatternKind === "chord") {
      const tonic = selectedChordTonic();
      const chord = selectedChord();
      applyPattern(tonic, chord, `${tonic.label}${chord.symbol} · ${chord.name}`, "chord");
      return;
    }
    renderNotes();
  });

  updateInstrumentText();
  updateAllPositionOptions();
}

function updateInstrumentText() {
  instrumentTuning.textContent = activeInstrument.tuningLabel;
  fretboardTitle.textContent = activeInstrument.fretboardTitle;
  fretboard.setAttribute("aria-label", activeInstrument.ariaLabel);
}

function applyPattern(tonic, pattern, label, kind) {
  noteSpelling = tonic.spelling;
  state.forEach(item => {
    item.active = false;
    item.color = "";
    item.displayName = "";
  });
  activeSequence = [];
  activePatternKind = kind;
  positionModeActive = (kind === "scale" && scaleView.value === "position") || (kind === "chord" && chordView.value === "position");
  visiblePositions = [];

  pattern.intervals.forEach((interval, degreeIndex) => {
    const pitch = modulo(tonic.pitch + interval.semitones, NOTES.length);
    state[pitch].active = true;
    state[pitch].color = COLORS[degreeIndex % COLORS.length].value;
    state[pitch].displayName = spellPatternNote(tonic, interval, pattern);
    if (!activeSequence.includes(pitch)) activeSequence.push(pitch);
  });

  if (positionModeActive) {
    visiblePositions = kind === "scale"
      ? buildScalePositionPath(tonic, pattern)
      : buildChordPositionShape(tonic, pattern);
  }

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
      setManualMode();
      closeColorMenus();
      syncControls();
      renderNotes();
      return;
    }

    const button = event.target.closest(".note-toggle");
    if (!button) return;
    const item = state[Number(button.closest(".note-card").dataset.index)];
    item.active = !item.active;
    setManualMode();
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
    const noteLabel = card.querySelector(".note-name");
    const primaryName = noteName(item.pitch);
    const alternateName = alternateNoteName(item);

    card.querySelectorAll(".color-option").forEach(option => {
      option.disabled = Boolean(option.value && option.value !== item.color && usedColors.has(option.value));
      option.setAttribute("aria-selected", String(option.value === item.color));
    });

    card.style.setProperty("--note-color", item.color || "#777168");
    card.classList.toggle("active", item.active);
    card.classList.toggle("has-color", Boolean(item.color));
    noteLabel.querySelector("span").textContent = primaryName;
    noteLabel.querySelector("small").innerHTML = alternateName || "&nbsp;";
    selectedColor.classList.toggle("empty", !item.color);
    selectedColor.style.background = item.color || "transparent";
    trigger.setAttribute("aria-label", item.color ? `Cambiar color de ${primaryName}` : `Elegir color para ${primaryName}`);
    button.disabled = !item.color;
    button.setAttribute("aria-pressed", String(item.active));
    button.setAttribute("aria-label", item.color ? `${item.active ? "Desactivar" : "Activar"} nota ${primaryName}` : `Asigna un color para la nota ${primaryName}`);
  });
}

function buildFretboard() {
  stringLabels.replaceChildren();
  stringsLayer.replaceChildren();
  fretLines.replaceChildren();
  markerLayer.replaceChildren();
  numbersLayer.replaceChildren();

  activeInstrument.strings.forEach((string, index) => {
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
  const activeNotes = activeSequence.length
    ? activeSequence.map(pitch => state[pitch]).filter(item => item.active)
    : state.filter(item => item.active);

  if (positionModeActive) {
    visiblePositions.forEach(position => {
      const item = state[position.pitch];
      const marker = createNoteMarker(position.string, position.stringIndex, position.fret, item);
      fragments.append(marker);
    });
  } else {
    activeInstrument.strings.forEach((string, stringIndex) => {
      for (let fret = 0; fret <= BOARD.frets; fret += 1) {
        const pitch = (string.pitch + fret) % 12;
        const item = state[pitch];
        if (!item.active) continue;

        const marker = createNoteMarker(string, stringIndex, fret, item);
        fragments.append(marker);
      }
    });
  }

  notesLayer.replaceChildren(fragments);
  selectionStatus.textContent = positionModeActive && !visiblePositions.length
    ? (activePatternKind === "scale" ? "Posición no disponible para esa cuerda y octavas" : "Acorde no disponible en esa posición")
    : activePatternKind === "scale" && positionModeActive && visiblePositions.length < requestedScaleNoteCount()
    ? `${visiblePositions.length} notas visibles: ${visiblePositions.map(position => noteName(position.pitch)).join(" · ")}`
    : activeNotes.length
    ? `${activeNotes.length} ${activeNotes.length === 1 ? "nota activa" : "notas activas"}: ${activeNotes.map(item => noteName(item.pitch)).join(" · ")}`
    : "Ninguna nota activa";
}

function requestedScaleNoteCount() {
  if (activePatternKind !== "scale") return 0;
  return selectedScale().intervals.length * Number(scaleOctaves.value || 1) + 1;
}

function createNoteMarker(string, stringIndex, fret, item) {
  const marker = document.createElement("span");
  const label = noteName(item.pitch);
  marker.className = "note-marker";
  marker.style.left = `${fretCenter(fret)}px`;
  marker.style.top = `${stringY(stringIndex)}px`;
  marker.style.setProperty("--note-color", item.color);
  marker.setAttribute("aria-label", `${label}, cuerda ${string.number}, ${fret === 0 ? "al aire" : `traste ${fret}`}`);
  marker.innerHTML = `<span class="marker-label">${label}</span>`;
  return marker;
}

document.querySelector("#clearButton").addEventListener("click", () => {
  state.forEach(item => { item.active = false; });
  setManualMode();
  syncControls();
  renderNotes();
});

buildHarmonySelectors();
buildInstrumentSelector();
buildControls();
buildFretboard();
renderNotes();
