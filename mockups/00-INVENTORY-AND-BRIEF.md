# YLD-BRAND-SITE — Phase 0 inventory + Phase 1 design brief

Source of truth: `/Users/sphinx/Documents/New project/Yield2` (app tree, `docs/`, `supabase/seed.sql`,
`src/screens/legal/legalContent.ts`). Nothing below is invented. Where the app is honest about a limit,
the site is too.

---

## PART 1 — WHAT YIELD ACTUALLY DOES TODAY

### The register the app speaks in

Pulled verbatim from shipped strings, because the site has to sound like the product:

- "Prepared moves. You hold the pen."
- "Agents read your own data, prepare the move and stop."
- "The credit is confirmed only when it posts and matches. Nothing is counted before then."
- "Position is stated, never graded, and payments always stay in your hands."
- "Yield never sees your login and cannot move money."
- "Your data is not for sale. Not to advertisers, not to brokers."
- "Quiet until a deal."

This is the whole brand voice. Concrete, short, refuses to overclaim. The legacy site violates all of it.

### Hero features (full selling treatment)

**1. Switchboard — Billing routes.**
Finds bills that could ride a benefit the user already pays for. Shows what the move is worth and what
it costs (rewards given up, fees, promotions lost, interruption risk). The user makes the change at the
merchant. Yield then watches the statement and confirms only when the credit posts and matches.
Shipped: `Switchboard`, `MeridianSwitchboardCase` routes.

**2. Price Drop Refunds.**
The user forwards an order email. Yield holds the exact item and the merchant's refund window, and says
when the price falls while the window is still open. Manual tier only: Yield never files a claim and
never represents the user. Window anchors are real ("the day you receive your product", "the day of
purchase"). Shipped: `PriceDropRefundsList`, `MeridianDropEvidence`.

**3. Watchdog.**
Two ways in. Paste a product link to track one item. Or forward receipts, and Watchdog locks on to the
exact items bought repeatedly, by name, size and store. Stays silent until a deal. Shipped: `Watchdog`,
`WatchdogReceipts`, `SavingsDetail`.

**4. Bill Creep.**
Watches the user's own recurring bills for increases. Live categories: insurance renewals,
internet/cable, home security monitoring. Compares against published typical prices. Speaks only on
creep in the user's own bills. Shipped: `BillCreepDetail`.

**5. Point Max.**
Reads the last month of spend end to end and shows every purchase that sat on the wrong card, and what
that cost in points. When there is nothing, it says so: "Every purchase already sat on your best card."
Shipped: `PointsOptimizer`.

### Complete services grid (compact, but everything)

| Service | What it delivers | Shipped as |
|---|---|---|
| Credit Manager — The reading | What the bureaus will see and what sets it. Six mechanics. Stated, never graded. | `Credit`, `MeridianCreditStatus` |
| Credit Manager — Payment plans | Splits one dollar amount across revolving cards for this cycle. Payments stay in the user's hands. | `SubscriptionPlan` / planner |
| Credit Manager — AZEO | Portfolio state and feasibility. | Credit tab |
| Credit Manager — Limit increases | Per issuer eligibility and windows. | `MeridianCliCase` |
| Credit Manager — Credit Assurance | Watches whether the issuer reported a payment that met what each statement required, and shows the proof row. | `CreditAssurance` in Credit tab |
| Benefit register and expirations | Every credit on every card with its own clock. Tiered reminders. | `MeridianBenefitRegister`, `BenefitDetail` |
| Expiring credit sprint | Credits that close this month. | `ExpiringSprint` |
| Offer Radar | Targeted offers across the issuers the user carries, deduped and ranked. | `MeridianRadar`, `MeridianRadarOffer` |
| Retention brief | The user's own numbers before the annual fee call. | `RetentionScript` |
| Card ROI | Fees in against what actually came back, verified only. | `CardRoi`, `ROIReport` |
| Which card | Instant answer before paying. | `CardPicker` |
| Receipt forwarding | Opt-in private forwarding address. Makes the watch exact. Off until turned on. | `ObReceipts`, `WatchdogReceipts` |
| Trust Vault | Every automated read on the record. Read only connection. Verified value counted once. | `TrustVault` |
| Supported cards | 18 cards across 6 issuers (Amex, Chase, Citi, Capital One, Bank of America, Wells Fargo). | `SupportedCards` |

Verified fees from the catalog: Amex Platinum $895, Chase Sapphire Reserve $795, Capital One Venture X
$395, Amex Gold $325, Amex Green $150.

### Claims the new site must NOT make (the legacy site makes all of them)

- "AI agents act on your behalf" / "Booked. $100 credit applied." Agents prepare and stop.
- "Executes with Face ID confirmation." No automated purchase, booking or filing ships.
- Any score point promise. The app says "commonly observed", never "+18 FICO points".
- Guaranteed savings. Value is counted only when a credit posts and matches.

### IP line (binding)

Sell the outcome. Never the machinery. No pipeline names, no detection methodology, no policy sourcing,
no table or architecture language. "Yield watches your purchases and catches the refund window" is the
ceiling of explanation.

---

## PART 2 — DESIGN BRIEF

### What premium reads as in 2026, and what reads as slop

Research summary. Slop has a recognisable recipe: Inter headlines, purple to blue gradients, three
equal cards in a row, uniform 16px radius and 24px padding everywhere, stock 3D blobs, the same fade-in
on every element, and vague aspirational headlines that never name the product. The homogenisation is
structural, not only visual.

Premium in 2026 is the opposite move: type commissioned as brand infrastructure, semantic colour where
hue carries meaning, real product surfaces instead of illustration, deliberate variation in component
size and rhythm, motion that communicates state, and copy in a specific founder voice. Compliance text
is treated as editorial, because buyers now read it as a trust signal.

checkout.com is a loose reference for register and polish only. Yield must not resemble it: no white
enterprise ground, no gradient mesh, no equal card grids.

### Typography — the app's law, read off the shipped screens

The app ships three faces, and it assigns them **jobs**, not just roles. Getting this backwards is what
made the first pass read as a generic dark site rather than as Yield:

- **Schibsted Grotesk, bold** carries every title. "Credit", "Agents", "Before your cards report",
  "Watchdog". Titles are sans, tight, white.
- **Fraunces, italic** is the **money voice**, and nothing else. Every dollar figure, every percentage,
  every date. `$150`, `29.4%`, `$13.97`, `Jul 31`. Gold when it is value in play, green when it posted,
  red when it is leaving. This italic serif numeral against a bold sans title is the single most
  recognisable thing about the interface.
- **Spline Sans Mono**, uppercase and widely letterspaced, carries labels and metadata. "FIRST MOVE",
  "IN MOTION", "RECOVERED THIS YEAR", "22 CHECKS THIS WEEK".

One sanctioned exception: Fraunces italic may carry a single large display moment (the app uses
`Fraunces-Display-Welcome` and `-Brandmark` the same way). Direction C uses it once, for the manifesto
pull quote. Never for body copy, never for section headings.

### Material — Obsidian Night, ported to web

The ground is warm near-black, never pure `#000`. Surfaces are lifted warm graphite with a four stop
white overlay gradient, a hairline gold border, an inset top highlight and inset bottom darkness, so a
tile reads as a physical object with thickness.

```
ground     #0B0908   warm near-black
tile       #1C1713 → #131010 under a 4-stop white overlay
hairline   rgba(201,162,39,.14) → .28 when emphasised
bone       #F5F1EA   primary text
grey       #A9A199   secondary
muted      #7A736B   metadata
gold       #C9A227 · #E5B82A · #E8D068 · #F0D97A (gradient controls)
green      #00E87A   verified, posted, below usual
red        #FF4D4D   deadline, creep, leaving
amber      #E0912F   review, above band
```

Colour is semantic. Gold marks a claim Yield stands behind. Green means it posted. Red means a clock is
running or money is leaving. Nothing is coloured for decoration.

Component vocabulary, all lifted from the shipped screens: gold gradient pill buttons with a soft glow,
outlined dark pills as secondary, dot prefixed status pills in five states, rounded square monogram
chips for merchants and cards, thin gold meters, band scales with graduations, sparklines with a green
endpoint, and small stat trios with the money voice.

All of this lives in `yield-meridian.css`, which is the reusable system. The three directions are
structure and motion on top of one shared material.

### Motion philosophy

Motion demonstrates or it gets cut. Three sanctioned uses:

1. **Workflow demos.** A Yield styled iPhone frame animating one real journey end to end in a few
   seconds. Purchase seen, price fell, window open with a deadline. Loops with a visible rest state.
   This is the pattern that sells, and it is the only place motion runs continuously.
2. **State and evidence.** A value that resolves, a seal that lands once, a countdown that ticks. It
   clarifies what the product does.
3. **Arrival.** One restrained reveal per section, driven by scroll position, never a stagger cascade
   on every element.

Cut list: parallax for its own sake, floating 3D shapes, marquee logo belts, hover tilts, per element
fade-ins, anything that moves without teaching.

`prefers-reduced-motion` collapses every demo to its final, most informative frame. Nothing loops.

### The line I will not cross into slop

No gradient text. No purple. No equal three card grid as the primary feature layout. No emoji as
iconography, which is what the legacy site does throughout. No stock illustration. No uniform radius on
everything. No headline that could belong to another company.

### Copy law

Short, confident, concrete. No em dashes or hyphens used as rhetorical connectors. Banned vocabulary:
seamlessly, effortlessly, supercharge, unlock, elevate, revolutionise, empower. No exclamation marks.
Every claim names a real behaviour of the app.

The purpose line carries the brand: **Yield fights for your money.**

---

## PART 3 — SECTION ARCHITECTURE

The first pass was too thin. It arrived at the app and listed features. Every direction now sells the
problem before the fix, and layers proof the way the reference sites do.

1. **Hero.** Purpose line, the three symptoms, trust strip.
2. **The problem.** The leak ledger: five specific things that quietly go, arriving one line at a time
   as a counter climbs to $883. The accumulation is the argument.
3. **Why it works.** Three columns on incentive. Nobody on the other side is being careless.
4. **Getting started.** Three minutes, then it goes quiet.
5. **The work.** Five hero features, each with its own animated workflow demo in a Yield device frame.
6. **Everything else.** The complete services set, as a scroll driven horizontal rail (B), a
   typographic index (A), or a bento grid (C).
7. **A day with it on.** Six notices across sixteen hours, one of which is the sound of nothing
   happening. This is the section that sells the restraint.
8. **Trust.** What Yield reads, and exactly where it stops.
9. **Supported cards.** All eighteen with real fees.
10. **FAQ.** Six questions, answered in the product's own voice.
11. **Purpose.** The close.

### Motion inventory, per direction

| | A · Editorial | B · Product | C · Purpose |
|---|---|---|---|
| Signature | One **sticky instrument**: a single device that swaps workflow as the essay scrolls past it | Five **separate device demos**, one per feature, each a four beat journey | Leak ledger accumulation, then five demos paired with evidence panels |
| Hero | Typographic, counters resolving in the money voice | Live device running the home console | Full viewport indictment, staged leak |
| Services | Typographic index with hairline hover | Scroll driven horizontal rail | Bento grid with deliberate span variation |
| Restraint | Highest | Medium | Medium |

### Engineering notes

- `yield-meridian.css` is the shared system. `yield-demos.js` is the motion engine and the workflow
  scripts. Both are direction agnostic and carry straight into the buildout.
- Demos run only while on screen, and paint their opening frame on mount so a device is never blank.
- Entrance states are transition driven and gated on `html.js`, so a stalled observer or disabled
  scripting can never leave the page blank. There is also a failsafe reveal at 2.5 seconds.
- `prefers-reduced-motion` collapses every demo to its final, most informative frame, stops all
  looping, and disables the rail transform.
