// Genera public/ribbon.svg: la cinta lima acanalada del moodboard de marca.
// Uso: node scripts/make-ribbon.mjs
import { writeFileSync } from "node:fs";

const W = 1200;
const H = 760;
const BANDS = 30;
const STEP = 25;
const X0 = 0; // la cinta nace de un punto en el borde izquierdo (twist = 0)
const X1 = W + 50;

const spine = (x) => 410 + 190 * Math.sin((x + 254) / 215 + 0.2) + 30 * Math.sin((x + 254) / 95 + 1.4);
const twist = (x) => Math.sin(x / 520); // 0 … 1: de canto a la izquierda, de frente a la derecha
const halfWidth = (x) => 165 * twist(x);
const lineY = (i, x) => spine(x) + (i / BANDS - 0.5) * 2 * halfWidth(x);

const dark = [18, 28, 14];
const lime = [223, 255, 106];
const glow = [244, 255, 190];
const mix = (a, b, k) => a.map((v, j) => Math.round(v + (b[j] - v) * k));
const hex = (c) => "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");

// Luz: la cara se ilumina cuando mira de frente y se apaga al ponerse de canto;
// cada canal es un poco más claro arriba que abajo, que es lo que da el relieve.
function shade(band, x) {
  const t = (band + 0.5) / BANDS - 0.5; // -0.5 … 0.5 a lo ancho
  const tw = twist(x);
  const facing = Math.pow(Math.abs(tw), 0.7);
  const across = 0.5 - t * Math.sign(tw); // 0 … 1, borde iluminado
  const rib = band % 2 === 0 ? 1 : 0.86;
  const k = Math.min(1, (0.12 + 0.88 * facing) * (0.45 + 0.6 * across) * rib);
  return k > 0.9 ? mix(lime, glow, (k - 0.9) / 0.1) : mix(dark, lime, k / 0.9);
}

let defs = "";
let paths = "";
for (let b = 0; b < BANDS; b++) {
  let top = "";
  let bottom = "";
  for (let x = X0; x <= X1; x += STEP) {
    top += `${top ? "L" : "M"}${x} ${lineY(b, x).toFixed(1)}`;
    bottom = `L${x} ${lineY(b + 1, x).toFixed(1)}` + bottom;
  }
  let stops = "";
  const STOPS = 16;
  for (let s = 0; s <= STOPS; s++) {
    const x = X0 + ((X1 - X0) * s) / STOPS;
    stops += `<stop offset="${(s / STOPS).toFixed(3)}" stop-color="${hex(shade(b, x))}"/>`;
  }
  defs += `<linearGradient id="b${b}" gradientUnits="userSpaceOnUse" x1="${X0}" x2="${X1}" y1="0" y2="0">${stops}</linearGradient>`;
  paths += `<path d="${top}${bottom}Z" fill="url(#b${b})"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><defs>${defs}</defs>${paths}</svg>\n`;
writeFileSync(new URL("../public/ribbon.svg", import.meta.url), svg);
console.log(`ribbon.svg: ${(svg.length / 1024).toFixed(1)} KB`);
