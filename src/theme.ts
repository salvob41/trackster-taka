export interface Atmosphere {
  corp: string;
  runner: string;
  bg: string;
  panel: string;
  border: string;
  green: string;
}

export const ATMOSPHERES: Record<string, Atmosphere> = {
  'Neon Punk':    { corp:'#00e5ff', runner:'#ff2a6d', bg:'#040208', panel:'#0b0616', border:'#3d2370', green:'#00ff9c' },
  'Terminal':     { corp:'#00d060', runner:'#d0a000', bg:'#020a03', panel:'#051208', border:'#0a2010', green:'#00ff80' },
  'Midnight':     { corp:'#7070ff', runner:'#ff40c0', bg:'#07060f', panel:'#100e1a', border:'#201838', green:'#40ffb0' },
  'Blood & Void': { corp:'#ff5030', runner:'#c040ff', bg:'#0b0005', panel:'#180010', border:'#300020', green:'#40ffc0' },
};

/** The atmosphere the app uses. */
export const ATM = ATMOSPHERES['Neon Punk'];

export const C = {
  gold:   '#ffd600',
  red:    '#ff1744',
  purple: '#b560ff',
  badpub: '#1dbd55',
  mu:     '#20c0e0',
  link:   '#40d080',
  text:   '#e6ecff',
  dim:    '#7d6fb0',
};

export function hex2rgb(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

export function rgba(hex: string, alpha: number): string {
  return `rgba(${hex2rgb(hex)},${alpha})`;
}

/** Neon halo around a view. Needs the new architecture on Android 9+; ignored elsewhere. */
export function glow(hex: string, radius = 12, alpha = 0.6) {
  return { boxShadow: `0 0 ${radius}px ${rgba(hex, alpha)}` };
}

/** Neon halo around text. */
export function textGlow(hex: string, radius = 8) {
  return { textShadowColor: hex, textShadowRadius: radius, textShadowOffset: { width: 0, height: 0 } };
}

export type PlayMode = 'both' | 'corp' | 'runner';

export interface Faction {
  id: string;
  name: string;
  short: string;
  color: string;
}

export const CORP_FACTIONS: Faction[] = [
  { id:'hb',      name:'Haas-Bioroid', short:'HB',  color:'#b026ff' },
  { id:'jinteki', name:'Jinteki',      short:'JTK', color:'#ff1744' },
  { id:'nbn',     name:'NBN',          short:'NBN', color:'#ffd600' },
  { id:'weyland', name:'Weyland',      short:'WEY', color:'#39ff14' },
];

export const RUNNER_FACTIONS: Faction[] = [
  { id:'anarch',   name:'Anarch',   short:'ANA', color:'#ff5e00' },
  { id:'criminal', name:'Criminal', short:'CRI', color:'#00b3ff' },
  { id:'shaper',   name:'Shaper',   short:'SHA', color:'#00ff9c' },
];
