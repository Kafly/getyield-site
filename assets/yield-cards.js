/* ═══════════════════════════════════════════════════════════════════
   YIELD · CARD FACES
   The app's card design library, rendered for web. Gradients, issuer
   wordmarks, brand marks, watermarks, specular sweeps, corner glows and
   the Wells Fargo bar all come from src/lib/card-design/index.ts.
   Data lives in yield-cards.json so the two stay in step.
   ═══════════════════════════════════════════════════════════════════ */
(function(){
'use strict';

// The app paints the live face at 150deg. Mini faces reuse the same angle.
const FACE_ANGLE = 150;

const STYLE = {
  'sans':          'font-family:var(--sans);font-weight:600;letter-spacing:.14em',
  'sans-bold':     'font-family:var(--sans);font-weight:800;letter-spacing:.1em',
  'sans-tight':    'font-family:var(--sans);font-weight:700;letter-spacing:-.01em',
  'mono-bold':     'font-family:var(--mono);font-weight:600;letter-spacing:.16em',
  'serif-italic':  'font-family:var(--disp);font-style:italic;font-weight:600;font-variation-settings:"opsz" 100,"WONK" 1;letter-spacing:-.015em',
  'display-bebas': 'font-family:var(--sans);font-weight:800;letter-spacing:.04em;text-transform:uppercase',
};

function gradient(stops){
  if(!stops || !stops.length) return '#111';
  const step = 100/(stops.length-1 || 1);
  return `linear-gradient(${FACE_ANGLE}deg,` +
    stops.map((c,i)=>`${c} ${Math.round(i*step)}%`).join(',') + ')';
}

function highlightLayer(h){
  if(!h) return '';
  const pos = h.position === 'bottom-right' ? '82% 84%' : '18% 16%';
  return `<div class="cf-hl" style="background:radial-gradient(ellipse 60% 55% at ${pos},${h.color},transparent 70%)"></div>`;
}

function accentLayer(a){
  if(!a || a.type === 'none') return '';
  if(a.type === 'watermark-letter')
    return `<div class="cf-wm" style="color:${a.color}">${a.letter}</div>`;
  if(a.type === 'corner-glow'){
    const pos = a.position === 'bottom-right' ? '88% 88%' : '12% 12%';
    return `<div class="cf-hl" style="background:radial-gradient(circle at ${pos},${a.color},transparent 62%)"></div>`;
  }
  if(a.type === 'specular'){
    const stops = a.stops.map((c,i)=>{
      const at = a.locations ? Math.round(a.locations[i]*100) : Math.round(i*100/(a.stops.length-1));
      return `${c === 'transparent' ? 'rgba(255,255,255,0)' : c} ${at}%`;
    }).join(',');
    return `<div class="cf-hl" style="background:linear-gradient(115deg,${stops})"></div>`;
  }
  if(a.type === 'wf-red-bar')
    return `<div class="cf-bar"></div>`;
  return '';
}

/** Build one card face. `size` is 'lg' (catalogue) or 'sm' (in device). */
function faceHTML(design, size){
  const d = design;
  const issuerSize = size === 'sm' ? 5.5 : 9;
  const brandSize  = size === 'sm' ? 13 : 23;
  const subSize    = size === 'sm' ? 4.5 : 7.5;
  return `<div class="cf cf-${size}" style="background:${gradient(d.face.gradient)};
      box-shadow:0 10px 26px -10px ${d.shadowColor},inset 0 1px 0 rgba(255,255,255,.22),inset 0 -1px 0 rgba(0,0,0,.3)">
    ${highlightLayer(d.face.highlight)}
    ${accentLayer(d.accent)}
    <div class="cf-in">
      <div class="cf-issuer" style="${STYLE[d.issuer.style]};color:${d.issuer.color};font-size:${issuerSize}px">${d.issuer.text}</div>
      <div class="cf-brand">
        <div style="${STYLE[d.brand.style]};color:${d.brand.color};font-size:${brandSize}px;line-height:1">${d.brand.text}</div>
        ${d.brand.subTier ? `<div class="cf-sub" style="color:${d.brand.color};font-size:${subSize}px">${d.brand.subTier}</div>` : ''}
      </div>
      <div class="cf-chip"></div>
    </div>
  </div>`;
}

// Painting is exposed so the demo engine can fill faces in frames it
// renders after this file has loaded.
window.YIELD_PAINT_FACES = ()=>{};

fetch('/assets/yield-cards.json')
  .then(r=>r.json())
  .then(DESIGNS=>{
    window.YIELD_FACE = (slug, size)=>
      faceHTML(DESIGNS[slug] || DESIGNS.__fallback, size || 'lg');

    window.YIELD_PAINT_FACES = root=>{
      (root || document).querySelectorAll('[data-face]:empty').forEach(el=>{
        el.innerHTML = window.YIELD_FACE(el.dataset.face, el.dataset.faceSize || 'lg');
      });
    };
    window.YIELD_PAINT_FACES(document);
    document.dispatchEvent(new Event('yield:faces-ready'));
  })
  .catch(()=>{ /* faces are decoration; the catalogue still reads without them */ });
})();
