# YLD-BRAND-SITE — build record

**Direction picked by Ben: B, product forward.** Built and shipped into the site root.
The three mockups stay in this folder as the design record. They are not part of the live site.

---

## What shipped

| File | What it is |
|---|---|
| `/index.html` | The homepage. Eleven sections. |
| `/terms.html` | Terms of Service, rewritten. 18 sections. |
| `/privacy.html` | Privacy Policy, rewritten. 12 sections. |
| `/assets/yield.css` | The Meridian design system for web. |
| `/assets/yield-demos.js` | Motion engine plus the seven workflow demos. |
| `/assets/legal.css` | Legal document layout. |
| `/assets/yield-mark.png` | The brandmark, extracted from the app icon with a transparent ground. |
| `/assets/yield-icon.png` | The app icon, used for Apple touch icon and social cards. |

## Ben's feedback, and what was done

**"Uses legacy site style, not Meridian."** The whole surface was rebuilt on the app's material.
The correction that mattered most was typographic: bold Schibsted Grotesk carries titles, and
**Fraunces italic is the money voice** for every dollar, percentage and date. Gold in play, green when
posted, red when leaving. Plus warm graphite tiles with a four stop overlay and inset top highlight,
gold gradient pill controls, dot prefixed status pills, monogram chips, gold meters, mono labels.

**"Fonts on the iPhone faces look too big."** The in screen scale dropped roughly one step across the
board. Titles 21 to 17.5px, row titles 13 to 11.5px, sub copy 11 to 9.5px, money 19 to 15px, pills 8 to
7px, chips 38 to 33px. The web surface kept its own scale, so the phone now reads as a smaller device
rather than a scaled up panel.

**"Looks like PowerPoint, want close to 3D and sophisticated."** The device is now a physical object.
A nine stop machined bezel gradient with alternating highlight and shadow facets, four inset shadows
for edge thickness, real side buttons, a rotateY and rotateX in perspective that eases toward the
viewer on hover, a diagonal glass glare layer above the content, layered drop shadows and a gold
ambient bloom underneath.

**"More remotion, smoother transitions."** Steps no longer swap. Each device carries two stacked
frames that hand off: the outgoing frame clears in 260ms while the incoming one arrives on a 200ms
delay, so the two never sit on top of each other as overlapping text. Inside each frame the elements
arrive on their own stagger. The caption cross fades, and the step ticks fill as a progress bar across
the step duration.

**"Everything fits within tiles."** Verified, not assumed. Every step of every demo was rendered into a
probe at both device sizes and measured. 48 renders, zero overflow.

**"Horizontal moving things users can actually move the dial."** The services shelf is now a real drag
rail: pointer drag with momentum glide, trackpad horizontal intent, arrow key support, a position
indicator that tracks how far along you are, and a grab cursor. It is no longer driven by page scroll.

**"Mind spacing by centering title in web pages."** All section heads are centred on a 64ch measure
with the eyebrow label above and the supporting line below. Body content keeps its own alignment.

**"Use actual yield logo."** Pulled from `assets/app-icon-1024.png` in the app project. The near black
ground was knocked out with a luminance keyed alpha and the glyph cropped to its bounding box, giving a
transparent gold mark. It sits in the nav, the footer, the coming soon modal and the purpose section,
paired with the wordmark set in Fraunces italic to match the app's brandmark spec.

## Round two — Ben's second pass

**"The money leaves quietly" → "Money leaves quietly."** Done.

**"Those numbers outside tiles."** The step numbers were absolutely positioned above the tile. They are
now gold rounded plates sitting inside it, with a corner glow behind.

**"Content on the iPhones looks paper plate, 2D, PPT like."** The screens now carry real depth rather
than flat rows:

- The **actual card face** from the app's design library renders inside the phone. The Sapphire
  Reserve chassis, its gradient, its issuer wordmark and its brand mark, all from `card-design`.
- **Arc rings** replaced flat progress bars for recovery and utilization, drawn as SVG with a rounded
  cap over a track.
- **Gradient area sparklines** replaced the bare polyline, with a fading fill under the curve and a
  haloed endpoint dot.
- **Coloured radial halos** sit behind key tiles, gold for value in play, green for verified, amber
  for the utilization band.

**"A little bit of colour where possible."** Section level tints, used semantically and kept faint:
red behind the problem section where money is leaving, green behind trust where it has landed, gold
behind the services shelf.

**"Use the card faces from the app."** The supported cards section is now eighteen real card faces
rather than text rows. The whole design catalog was extracted from `src/lib/card-design/index.ts` into
`assets/yield-cards.json` and rendered by `assets/yield-cards.js`, including issuer wordmarks, brand
marks, sub tiers, watermark letters, specular sweeps, corner glows and the Wells Fargo bar. Three
supported cards have no bespoke face in the app; they use the app's own `FALLBACK_DESIGN`, exactly as
the app does, rather than an invented one.

**"Review everywhere."** Added a **Clarity** section: the four things Yield is not. Knowing where a
product stops is worth as much as knowing what it does, and it is the strongest honest positioning
material the project had. It also lets the page say plainly that Yield earns nothing if you open a card.

**"Reactive to the device."** Verified at 1280, 1024, 768, 375 and 340. No horizontal overflow at any
width. Below 430px the device drops to the compact size that was already proven to fit rather than
shrinking the screen and reflowing the contents; below 340px it drops again and the 3D rotation is
removed.

### Two real bugs found and fixed in this round

1. **Class name collision.** The homepage's 1080px hero glow and the in tile halo were both called
   `.halo`. The page's inline `<style>` won over the stylesheet, so every in tile halo inherited a
   1080px box and pushed content out of its screen. The tile version is now `.s-halo`.
2. **The overflow check was measuring the wrong thing.** `.frame` is a flex column, so an oversized
   step was being silently squashed rather than overflowing, which clips text inside tiles instead of
   reporting a problem. Children now hold their natural height, which made the real overflow visible.
   Re-measured after the fix: **48 renders across both device sizes, zero overflow.**

## Round three — the pattern build

Ben's note: the getting started sequence skipped a real step, and pattern building is Yield's own
thing rather than plumbing. Both are now on the site.

**The sequence was wrong.** It read connect, then forward a receipt, which implies the user arrives
already knowing what to track. The product does not work that way. Yield reads your own purchases
first, works out what you buy on a rhythm, surfaces that pattern, and only then asks for the exact
item. Confirmed against the app: patterns sit in `Needs the exact item` and `Waiting on an order
email` states until a receipt names them, at which point `Watchdog locks on`.

The section is four steps now, not three:

1. Connect your cards
2. **Yield learns what you buy again** (new, and the user does nothing here)
3. Name the item, once
4. Then nothing, until it matters

The headline stays "Three minutes, then it goes quiet" because that is still the setup time, but it
carries a deck making the timing honest: only the first step needs you at a keyboard, Yield takes its
own time over the second, and it comes back once when it needs a name.

**Pattern building surfaced as a capability, in four places:**

- The Watchdog feature section now leads on it. Headline changed from "Quiet until there is a deal"
  to **"It learns what you buy again."**
- The Watchdog demo gained two opening steps: the pattern found from your own spending with nothing
  watched yet, then the item named and locked on. Six steps now, was four.
- A **Purchase patterns** card in the services rail.
- A new FAQ: how Yield decides what is worth watching.

All of it stays on the right side of the IP line. The site says Yield works out what you buy on a
rhythm and roughly how often. It never says how that is worked out.

Re-verified after the change: **52 renders, zero overflow**, captions matched to steps in every demo.
Four step cards at 1280 sit on one row at equal height with nothing clipped, two by two at 900, single
column below 620.

## Motion law compliance

Every animated element demonstrates or clarifies. The cut list held: no parallax, no floating shapes,
no logo belts, no hover tilts on content, no per element fade cascades. `prefers-reduced-motion`
settles every demo on its final frame, stops all looping, freezes the device transform, disables the
tick fill and removes the rail transform.

## Robustness

- Reveal states are gated on `html.js` and backed by a 2.5 second failsafe, so a stalled observer or
  disabled scripting can never leave the page blank.
- Frame entrances are transition driven, never `animation` with `both` fill, which strands content at
  opacity zero whenever a browser pauses animations.
- Each device paints its opening frame on mount, so it is never an empty screen before it scrolls in.
- No horizontal overflow at 375px. No console errors.

## Phase 4 — legal

Both documents were rewritten against the app's shipped `src/screens/legal/legalContent.ts`, which was
a year ahead of the old site. The old pages predated receipt forwarding, Watchdog, Switchboard, price
drop refunds, the Credit Manager and the AI processing disclosure.

**The marketing clauses** are Terms section 9, "Marketing, demonstrations and simulated screens", plus
Privacy section 9. Together they establish the right to present services through animated
demonstrations, simulated and recreated product screens, seeded and sample data, example figures and
composite scenarios, while stating plainly that demonstrations are illustrative and not guarantees,
that figures are examples unless labelled as verified, and that the app as delivered governs if a demo
and the product ever disagree. Privacy adds that demos are built from sample data and never from
customer data.

**Standing compliance lines held.** Terms section 11 keeps the CROA posture: no credit repair, no
offer to improve or fix a credit record, no approval odds or likelihood language for any credit
product, credit line increase, refund or retention offer, and no bureau disputes. Section 12 states no
guaranteed outcomes for any credit, refund, adjustment, retention offer or saving, and no guaranteed
change to any score or report. Outcomes are framed as what Yield pursues. Section 3 states the limits
as deliberate: Yield does not move money and does not act as you.
