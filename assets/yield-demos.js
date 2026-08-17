/* ═══════════════════════════════════════════════════════════════════
   YIELD · MOTION ENGINE
   Every animation demonstrates a real workflow. Nothing decorates.
   Steps cross-dissolve between two stacked frames rather than snapping.
   Demos run only while on screen. Under prefers-reduced-motion each one
   settles on its final, most informative frame and never loops.
   ═══════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

const H = (h,s)=>`<div class="fin"><div class="s-h">${h}</div><div class="s-sub">${s}</div></div>`;

/* ── marks: depth instead of flat blocks ──────────────────────── */
const ARC = (pct, val, size=52, color='#E8D068')=>{
  const r = size/2 - 3.5, c = 2*Math.PI*r;
  return `<div class="arc" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(245,241,234,.09)" stroke-width="3.5"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="3.5"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-pct/100)}"/>
    </svg>
    <span class="arc-val" style="font-size:${size*0.27}px">${val}</span></div>`;
};

const SPARK = (pts, color='#00E87A', w=214, h=44)=>{
  const id = 'sg'+Math.round(pts[0]*1e4)+pts.length;
  const max = Math.max(...pts), min = Math.min(...pts), span = (max-min)||1;
  const xy = pts.map((p,i)=>[ (i/(pts.length-1))*w, h-4-((p-min)/span)*(h-12) ]);
  const line = xy.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `0,${h} ${line} ${w},${h}`;
  const last = xy[xy.length-1];
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="height:${h}px">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity=".26"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
    <polygon points="${area}" fill="url(#${id})"/>
    <polyline points="${line}" fill="none" stroke="rgba(245,241,234,.5)" stroke-width="1.4"
      stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="7" fill="${color}" opacity=".2"/>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="3.2" fill="${color}"/>
  </svg>`;
};

const HALO = (color, pos='88% 8%')=>
  `<div class="s-halo" style="background:radial-gradient(circle 70px at ${pos},${color},transparent 70%)"></div>`;

const FACE = (slug)=>`<div data-face="${slug}" data-face-size="sm"></div>`;

/* ── the workflows ────────────────────────────────────────────── */
const DEMOS = {

/* HOME · the recovery console ---------------------------------- */
home:{
 cap:['Your cards, and what they owe you','The first move, ranked','What came back, proven'],
 steps:[
  ()=>H('Evening, Ben','Saturday, August 16')+
   `<div class="s-tile gold fin fin-2" style="padding:13px">
      ${HALO('rgba(201,162,39,.16)')}
      <div style="display:flex;gap:12px;align-items:center">
        <div style="width:96px;flex:none">${FACE('chase-sapphire-reserve')}</div>
        <div class="grow" style="min-width:0">
          <div class="s-lab">Recovered this year</div>
          <div class="s-mv lg" style="font-size:31px">$150</div>
          <div class="s-s">of the $795 annual fee</div>
        </div>
        ${ARC(19,'19%',46)}
      </div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="s-pill g">2 credits verified</div>
        <div class="grow"></div><div class="s-s">Chase · Visa Infinite</div></div>
    </div>
    <div class="s-trio fin fin-3">
      <div class="s-tile">${HALO('rgba(201,162,39,.13)','80% 0%')}<div class="s-mv">$35</div><div class="s-s">Ready now</div></div>
      <div class="s-tile">${HALO('rgba(0,232,122,.12)','80% 0%')}<div class="s-mv g">$150</div><div class="s-s">Verified</div></div>
      <div class="s-tile"><div class="s-mv">Aug 31</div><div class="s-s">Next expiry</div></div>
    </div>`,
  ()=>H('Evening, Ben','Saturday, August 16')+
   `<div class="s-lab fin fin-2">First move</div>
    <div class="s-tile gold fin fin-2">
      <div class="s-row"><div class="grow"><div class="s-t">Use the $25 DoorDash credit</div>
        <div class="s-s">Expires Aug 31 · Sapphire Reserve</div></div>
        <div class="s-pill gd">15 days</div></div></div>
    <div class="s-lab fin fin-3">Working for you</div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">CV</div><div class="grow">
      <div class="s-t">CeraVe fell $4.82 at Target</div><div class="s-s">Watchdog · seen this morning</div></div>
      <div style="text-align:right"><div class="s-mv g">$13.97</div><div class="s-mv strike">$18.79</div></div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="s-chip">SR</div><div class="grow">
      <div class="s-t">Statement closes Aug 21</div><div class="s-s">Pay before it reports</div></div>
      <div class="s-pill a">Timed</div></div></div>`,
  ()=>H('Proof ledger','Verified value, counted once')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="grow">
      <div class="s-t">Disney Bundle credit</div><div class="s-s g">Posted Aug 12 and reconciled</div></div>
      <div class="s-mv g">$7.00</div></div>
      <div class="s-rule"></div><div class="s-pill g">Charge seen · posted · matched</div></div>
    <div class="s-tile green fin fin-3"><div class="s-row"><div class="grow">
      <div class="s-t">Resy dining credit</div><div class="s-s">Posted Aug 4</div></div>
      <div class="s-mv g">$50.00</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="grow"><div class="s-t">Hotel credit</div>
      <div class="s-s">Observed. Not counted until it posts.</div></div><div class="s-mv dim">$300</div></div></div>
    <div class="s-foot fin fin-5"><div class="s-btn q">Pending money never lands here</div></div>`
 ]},

/* SWITCHBOARD --------------------------------------------------- */
switchboard:{
 cap:['A bill on the wrong route','What it is worth, and what it costs','You make the change','Posted and matched'],
 steps:[
  ()=>H('Billing routes','Bills that could ride a benefit')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="s-chip">D+</div><div class="grow">
      <div class="s-t">Disney Bundle · $7.00 monthly</div><div class="s-s">Charging to Sapphire Reserve</div></div>
      <div class="s-pill gd">Look</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-s">Your Amex Gold covers this in full</div></div>
      <div class="s-mv">$7.00</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">WM</div><div class="grow">
      <div class="s-t">Walmart+ · $12.95 monthly</div><div class="s-s">Checking your cards</div></div>
      <div class="s-pill n">Reading</div></div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Ready when you are</div></div>`,
  ()=>H('What it is worth','And what it costs you')+
   `<div class="s-tile fin fin-2">
      <div class="s-row"><div class="grow"><div class="s-t">Issuer credit this period</div></div><div class="s-mv g">$7.00</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-t">Rewards given up</div></div><div class="s-mv w">$0.14</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-t">Fees from the change</div></div><div class="s-mv w">$0.00</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-t">Promotions lost</div></div><div class="s-mv dim">None</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-t">Interruption risk</div></div><div class="s-pill n">Low</div></div></div>
    <div class="s-foot fin fin-3"><div class="s-btn">Move it at Disney</div></div>`,
  ()=>H('You made the switch','Watching your statement')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">D+</div><div class="grow">
      <div class="s-t">Sapphire Reserve → Amex Gold</div><div class="s-s">Changed at the merchant Aug 9</div></div>
      <div class="s-pill gd">In motion</div></div>
      <div class="s-rule"></div>
      <div class="s-s">Waiting for the next charge to land on the new card. If it lands on the old one, this step reopens honestly.</div></div>
    <div class="s-foot fin fin-3"><div class="s-btn q">Issuers can take weeks</div></div>`,
  ()=>H('Credit posted','And matched to the charge')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">D+</div><div class="grow">
      <div class="s-t">Disney Bundle credit</div><div class="s-s g">Posted Aug 12 and reconciled</div></div>
      <div class="s-mv g">$7.00</div></div>
      <div class="s-rule"></div><div class="s-pill g">Charge seen · posted · matched once</div></div>
    <div class="s-tile fin fin-3"><div class="s-s">This is a record now, not a promise.</div></div>
    <div class="s-foot fin fin-4"><div class="s-btn o">See the proof row</div></div>`
 ]},

/* PRICE DROP REFUNDS -------------------------------------------- */
pricedrop:{
 cap:['Order email forwarded','The exact item, held','The price falls','The window is still open'],
 steps:[
  ()=>H('Receipts','One forwarded, reading it')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">AZ</div><div class="grow">
      <div class="s-t">Amazon order confirmation</div><div class="s-s">Forwarded 2 minutes ago</div></div>
      <div class="s-pill gd">Reading</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-s">Yield only ever sees what you forward. Never your inbox, never your location.</div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Nothing to act on yet</div></div>`,
  ()=>H('Watching','Exact item, not a guess')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
      <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Amazon · bought Aug 4</div></div>
      <div class="s-mv w">$18.97</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-s">Refund window</div></div>
      <div class="s-pill gd">Closes Sep 3</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-s">Anchored to the day you receive your product</div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Quiet until a deal</div></div>`,
  ()=>H('Price fell','On something you already bought')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
      <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Amazon · seen just now</div></div>
      <div style="text-align:right"><div class="s-mv strike">$18.97</div><div class="s-mv g">$14.24</div></div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-s g">The difference</div></div>
      <div class="s-mv g">$4.73</div></div></div>
    <div class="s-foot fin fin-3"><div class="s-btn q">Checking the window</div></div>`,
  ()=>H('Ask for the difference','11 days left on the window')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
      <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s g">Refund window open</div></div>
      <div class="s-mv g">$4.73</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-s">Window closes Sep 3</div></div><div class="s-pill r">11 days</div></div>
      <div class="s-meter r"><i style="width:63%"></i></div></div>
    <div class="s-tile fin fin-3"><div class="s-s">You make the ask. Yield never files anything as you.</div></div>
    <div class="s-foot fin fin-4"><div class="s-btn">Open Amazon to ask</div><div class="s-btn o">The evidence</div></div>`
 ]},

/* WATCHDOG ------------------------------------------------------ */
watchdog:{
 cap:['A rhythm in your own spending','You name it once','Items on watch','Weeks of nothing',
      'A price moves in your favour','The evidence behind it'],
 steps:[
  ()=>H('Found a rhythm','From your own purchases')+
   `<div class="s-tile fin fin-2">${HALO('rgba(201,162,39,.13)')}
      <div class="s-row"><div class="s-chip">TG</div><div class="grow">
      <div class="s-t">Target</div><div class="s-s">About every week</div></div>
      <div class="s-pill a">Needs the exact item</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">WG</div><div class="grow">
      <div class="s-t">Walgreens</div><div class="s-s">About every month</div></div>
      <div class="s-pill a">Needs the exact item</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-s">A transaction says where you spent.
      <span class="hl">One tap names what you bought.</span></div></div>
    <div class="s-foot fin fin-5"><div class="s-btn q">Nothing is watched yet</div></div>`,
  ()=>H('Name it once','So the watch is exact')+
   `<div class="s-tile gold fin fin-2">${HALO('rgba(201,162,39,.15)')}
      <div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
      <div class="s-t">CeraVe Moisturizing Cream</div>
      <div class="s-s">19oz tub · Target</div></div>
      <div class="s-pill gd">Locked on</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-lab">From your order email</div>
        <div class="s-s">Name, size and store, not a guess</div></div></div></div>
    <div class="s-tile fin fin-3"><div class="s-s">Forward an order email and Watchdog locks on.
      <span class="hl">Receipt forwarding is off until you turn it on.</span></div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Now it has a price to hold</div></div>`,
  ()=>H('Watchdog','Prices watched, receipts honored')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">CV</div><div class="grow">
      <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Target · checks on app open</div></div>
      <div class="s-mv w">$18.79</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">OL</div><div class="grow">
      <div class="s-t">OLLY Multivitamin</div><div class="s-s">Walgreens · checked weekly</div></div>
      <div class="s-mv w">$19.99</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="s-chip">AG</div><div class="grow">
      <div class="s-t">AG1 Travel Packs</div><div class="s-s">Amazon · checked daily</div></div>
      <div class="s-mv w">$79.00</div></div></div>
    <div class="s-tile fin fin-5"><div class="s-row"><div class="s-chip">ND</div><div class="grow">
      <div class="s-t">Native Deodorant</div><div class="s-s">Walmart</div></div>
      <div class="s-pill gd">Just added</div></div></div>`,
  ()=>H('Quiet','Nothing worth saying')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="grow"><div class="s-t">CeraVe Moisturizing Cream</div></div><div class="s-pill n">Steady</div></div></div>
    <div class="s-tile fin fin-2"><div class="s-row"><div class="grow"><div class="s-t">OLLY Multivitamin</div></div><div class="s-pill n">Steady</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">AG1 Travel Packs</div></div><div class="s-pill n">Watching</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="grow"><div class="s-t">Nordic Flora Probiotic</div></div><div class="s-pill n">Quiet</div></div></div>
    <div class="s-foot fin fin-5"><div class="s-btn q">22 checks this week · nothing to say</div></div>`,
  ()=>H('Below usual','On something you already buy')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
      <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Target · seen this morning</div></div>
      <div style="text-align:right"><div class="s-mv g">$4.82</div><div class="s-s">below usual</div></div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-lab">Your usual</div><div class="s-mv w">$18.79</div></div>
        <div style="text-align:right"><div class="s-lab">Today at Target</div><div class="s-mv g">$13.97</div></div></div></div>
    <div class="s-foot fin fin-3"><div class="s-btn">Open at Target</div><div class="s-btn o">The evidence</div></div>`,
  ()=>H('The evidence','Where the number came from')+
   `<div class="s-tile green fin fin-2">
      ${HALO('rgba(0,232,122,.14)')}
      <div class="s-row"><div class="grow"><div class="s-t">90 days at Target</div>
        <div class="s-s">Your usual $18.79 · today $13.97</div></div>
        <div class="s-pill g">Drop caught</div></div>
      <div style="margin:9px 0 4px">
        ${SPARK([18.79,18.79,18.62,18.79,18.79,18.99,18.79,18.79,16.4,13.97],'#00E87A')}
      </div>
      <div class="s-row"><div class="s-lab" style="color:var(--muted)">Jun</div><div class="grow"></div>
        <div class="s-lab" style="color:var(--muted)">Today</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-s">Read from the public product page and your own receipts.
      <span class="hl">Never your inbox, never your location.</span></div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Counted once, when it lands</div></div>`
 ]},

/* BILL CREEP ---------------------------------------------------- */
billcreep:{
 cap:['Your own recurring bills','One of them climbed','Against the going rate'],
 steps:[
  ()=>H('Bill watch','From your own transactions')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">CH</div><div class="grow">
      <div class="s-t">Comcast internet</div><div class="s-s">Monthly · 14 months on record</div></div>
      <div class="s-mv w">$70.00</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">AD</div><div class="grow">
      <div class="s-t">Home security monitoring</div><div class="s-s">Monthly</div></div>
      <div class="s-mv w">$44.99</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="s-chip">GE</div><div class="grow">
      <div class="s-t">Auto insurance</div><div class="s-s">Renews Sep 1</div></div>
      <div class="s-mv w">$1,240</div></div></div>
    <div class="s-foot fin fin-5"><div class="s-btn q">Speaks only on creep</div></div>`,
  ()=>H('It crept','Nobody sent a notice')+
   `<div class="s-tile red fin fin-2"><div class="s-row"><div class="s-chip">CH</div><div class="grow">
      <div class="s-t">Comcast internet</div><div class="s-s r">Up $19.99 a month · two bills</div></div>
      <div style="text-align:right"><div class="s-mv strike">$70.00</div><div class="s-mv r">$89.99</div></div></div>
      <div class="s-meter r"><i style="width:100%"></i></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">AD</div><div class="grow">
      <div class="s-t">Home security monitoring</div><div class="s-s">Up $8.00</div></div>
      <div class="s-pill a">Review</div></div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Two flagged</div></div>`,
  ()=>H('In context','So you know what to ask for')+
   `<div class="s-tile red fin fin-2">
      <div class="s-row"><div class="grow"><div class="s-t">You now pay</div></div><div class="s-mv r">$89.99</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-t">Typical urban mid tier</div></div><div class="s-mv w">$74.00</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-t">You were paying</div></div><div class="s-mv dim">$70.00</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-s">Increases at renewal are common. Many people re-shop every year or two.</div></div>
    <div class="s-foot fin fin-4"><div class="s-btn">See the detail</div></div>`
 ]},

/* POINT MAX ----------------------------------------------------- */
pointmax:{
 cap:['Reads last month, end to end','Names every miss','What the gap cost'],
 steps:[
  ()=>H('Point Max','Your wallet, your statements')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="s-chip">July<br>31</div><div class="grow">
      <div class="s-t">Point Max read July end to end</div><div class="s-s">Your wallet, your statements, published values</div></div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-lab">Prepared · 7:04 today</div></div>
      <div class="s-pill gd">Your move</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">Transactions read</div></div><div class="s-mv w">142</div></div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Working</div></div>`,
  ()=>H('14 misses','Spend that sat on the wrong card')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="s-chip">WF</div><div class="grow">
      <div class="s-t">Whole Foods · $120.40</div><div class="s-s">Platinum 1x · Gold earns 4x</div></div>
      <div class="s-mv">$3.60</div></div></div>
    <div class="s-tile gold fin fin-3"><div class="s-row"><div class="s-chip">DL</div><div class="grow">
      <div class="s-t">Delta · $420.00</div><div class="s-s">Sapphire 1x · Reserve earns 3x</div></div>
      <div class="s-mv">$8.40</div></div></div>
    <div class="s-tile green fin fin-4"><div class="s-row"><div class="s-chip">RY</div><div class="grow">
      <div class="s-t">Resy dining · $86.00</div><div class="s-s g">Gold 4x used. Correct card.</div></div>
      <div class="s-pill g">Clean</div></div></div>`,
  ()=>H('$41.20','Left on the table last month')+
   `<div class="s-tile gold fin fin-2"><div class="s-lab">Total gap</div>
      <div class="s-mv lg">$41.20</div>
      <div class="s-s">Dollar equivalent, from your own statements</div></div>
    <div class="s-tile fin fin-3"><div class="s-s">When a month is clean, Yield says so instead of inventing a miss.</div></div>
    <div class="s-foot fin fin-4"><div class="s-btn">See the misses</div><div class="s-btn o">How it ran</div></div>`
 ]},

/* CREDIT -------------------------------------------------------- */
credit:{
 cap:['What the bureaus will see','Before your cards report','The plan, in your hands'],
 steps:[
  ()=>H('Credit','What your cards report, and when')+
   `<div class="s-tile fin fin-2" style="text-align:center">
      ${HALO('rgba(224,145,47,.14)','50% 0%')}
      <div class="s-lab" style="letter-spacing:.16em">Aggregate utilization</div>
      <div style="display:flex;justify-content:center;margin:6px 0 4px">${ARC(49,'29.4%',74,'#E0912F')}</div>
      <div class="s-s">$7,780 in use of $26,500</div>
      <div style="display:flex;justify-content:center;margin-top:7px"><div class="s-pill a">Above 28.9</div></div></div>
    <div class="s-trio fin fin-3">
      <div class="s-tile"><div class="s-mv w">$7,780</div><div class="s-s">Balance</div></div>
      <div class="s-tile"><div class="s-mv w">$26,500</div><div class="s-s">Limit</div></div>
      <div class="s-tile"><div class="s-mv w">$154</div><div class="s-s">Min due</div></div></div>
    <div class="s-foot fin fin-4"><div class="s-btn q">Bands commonly observed on FICO models</div></div>`,
  ()=>H('Before your cards report','Closes, in the order they land')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">SR</div><div class="grow">
      <div class="s-t">Sapphire Reserve</div><div class="s-s">$2,340 of $8,000 · closes Aug 21</div>
      <div class="s-meter"><i style="width:29%"></i></div></div>
      <div style="text-align:right"><div class="s-mv">$640</div><div class="s-s">by Aug 19</div></div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">FF</div><div class="grow">
      <div class="s-t">Freedom Flex</div><div class="s-s">$2,690 of $8,000 · closes Aug 26</div>
      <div class="s-meter"><i style="width:34%"></i></div></div>
      <div style="text-align:right"><div class="s-mv">$130</div><div class="s-s">by Aug 24</div></div></div></div>
    <div class="s-tile fin fin-4"><div class="s-s">Bureaus see the statement, not what you owe today.
      <span class="hl">Pay before a close and that is what reports.</span></div></div>`,
  ()=>H('The plan','Timed to the closes')+
   `<div class="s-tile gold fin fin-2"><div class="s-lab">This cycle</div>
      <div class="s-mv lg">$800</div><div class="s-s">split across three cards</div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">AZEO</div>
      <div class="s-s">One card reports, the rest zero</div></div><div class="s-pill n">Feasible</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="grow"><div class="s-t">Limits</div>
      <div class="s-s">Headroom and request windows</div></div><div class="s-pill gd">2 open</div></div></div>
    <div class="s-tile fin fin-5"><div class="s-s">Estimates are banded and assumptions named.
      <span class="hl">Payments always stay in your hands.</span></div></div>`
 ]}
};

/* ── runner ───────────────────────────────────────────────────── */
function mount(node){
  let demo = DEMOS[node.dataset.demo];
  if(!demo) return;
  const scope = node.closest('.demo') || document;
  const cap = scope.querySelector('.step');
  const ticksBox = scope.querySelector('.ticks');

  // two stacked layers so a step cross-dissolves into the next
  node.innerHTML = '<div class="frame"></div><div class="frame"></div>';
  const layers = [...node.children];
  let front = 0, ticks = [];

  const buildTicks = ()=>{
    if(!ticksBox) return;
    ticksBox.innerHTML = demo.steps.map(()=>'<i></i>').join('');
    ticks = [...ticksBox.children];
  };
  buildTicks();

  const draw = (i, hold)=>{
    const next = layers[1-front], curr = layers[front];
    next.innerHTML = demo.steps[i]();
    if(window.YIELD_PAINT_FACES) window.YIELD_PAINT_FACES(next);
    next.classList.remove('out');
    void next.offsetWidth;                       // commit before transitioning
    curr.classList.remove('live'); curr.classList.add('out');
    next.classList.add('live');
    front = 1-front;

    if(cap && cap.textContent !== demo.cap[i]){
      cap.classList.add('fading');
      setTimeout(()=>{ cap.textContent = demo.cap[i]; cap.classList.remove('fading') }, 260);
    } else if(cap){ cap.textContent = demo.cap[i] }

    ticks.forEach((t,j)=>{
      t.classList.toggle('done', j < i);
      t.classList.toggle('on', j === i && !RM);
      if(j > i) t.classList.remove('on','done');
    });
    if(RM && ticks[i]) ticks[i].classList.add('done');

    // timers, not rAF: they still fire in a backgrounded tab, so a
    // paused compositor can never leave a frame stuck invisible
    setTimeout(()=>next.querySelectorAll('.fin').forEach(e=>e.classList.add('on')), 30);
  };

  let i = 0, timer = null, running = false;

  if(RM){
    draw(demo.steps.length-1);
    node.__setDemo = key=>{
      if(!DEMOS[key] || key === node.dataset.demo) return;
      node.dataset.demo = key; demo = DEMOS[key]; buildTicks(); draw(demo.steps.length-1);
    };
    return;
  }

  const tick = ()=>{
    draw(i);
    const last = i === demo.steps.length-1;
    i = (i+1) % demo.steps.length;
    timer = setTimeout(tick, last ? 3600 : 2500);
  };

  draw(0);   // never blank before it scrolls into view

  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting && !running){ running = true; tick() }
    else if(!e.isIntersecting && running){ running = false; clearTimeout(timer) }
  }), {threshold:.28}).observe(node);

  node.__setDemo = key=>{
    if(!DEMOS[key] || key === node.dataset.demo) return;
    node.dataset.demo = key; demo = DEMOS[key]; buildTicks();
    clearTimeout(timer); i = 0;
    if(running) tick(); else draw(0);
  };
}
document.querySelectorAll('[data-demo]').forEach(mount);

// Faces arrive from a fetch, so any frame drawn before then gets filled in.
document.addEventListener('yield:faces-ready', ()=>
  document.querySelectorAll('.frame').forEach(f=>window.YIELD_PAINT_FACES(f)));

/* ── reveal ───────────────────────────────────────────────────── */
const reveals = [...document.querySelectorAll('.rv')];
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target) }
}), {threshold:.08, rootMargin:'0px 0px -6% 0px'});
reveals.forEach(el=>io.observe(el));
setTimeout(()=>reveals.forEach(el=>{
  const r = el.getBoundingClientRect();
  if(r.top < innerHeight && r.bottom > 0) el.classList.add('in');
}), 2500);

/* ── counters ─────────────────────────────────────────────────── */
document.querySelectorAll('[data-count]').forEach(el=>{
  const target = parseFloat(el.dataset.count),
        pre = el.dataset.pre || '', post = el.dataset.post || '',
        dec = el.dataset.dec ? +el.dataset.dec : 0,
        delay = el.dataset.delay ? +el.dataset.delay : 0;
  const fmt = v=>pre + v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec}) + post;
  if(RM){ el.textContent = fmt(target); return }
  const o = new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; o.unobserve(el);
    setTimeout(()=>{
      const dur = 1400, t0 = performance.now();
      const step = t=>{ const p = Math.min(1,(t-t0)/dur), v = target*(1-Math.pow(1-p,3));
        el.textContent = fmt(v); if(p<1) requestAnimationFrame(step) };
      requestAnimationFrame(step);
    }, delay);
  }), {threshold:.5});
  o.observe(el);
});

/* ── meters ───────────────────────────────────────────────────── */
document.querySelectorAll('[data-fill]').forEach(el=>{
  const w = el.dataset.fill;
  if(RM){ el.style.width = w; return }
  el.style.width = '0%';
  new IntersectionObserver((es,ob)=>es.forEach(e=>{
    if(e.isIntersecting){ setTimeout(()=>el.style.width = w, 200); ob.disconnect() }
  }), {threshold:.5}).observe(el);
});

/* ── staged list arrival — the accumulation is the argument ───── */
document.querySelectorAll('[data-stagger]').forEach(box=>{
  const kids = [...box.children];
  if(RM){ kids.forEach(k=>k.classList.add('in')); return }
  kids.forEach(k=>k.classList.add('rv'));
  const gap = +box.dataset.stagger || 320;
  new IntersectionObserver((es,ob)=>es.forEach(e=>{
    if(!e.isIntersecting) return; ob.disconnect();
    kids.forEach((k,i)=>setTimeout(()=>k.classList.add('in'), i*gap));
  }), {threshold:.15}).observe(box);
});

/* ── DRAG RAIL — the visitor moves the dial ───────────────────── */
document.querySelectorAll('[data-rail]').forEach(wrap=>{
  const rail = wrap.querySelector('.rail');
  const bar  = wrap.parentElement.querySelector('.rail-hint .bar i');
  if(!rail) return;

  let x = 0, max = 0, down = false, startX = 0, startOff = 0, v = 0, lastX = 0, raf = null;

  const measure = ()=>{ max = Math.max(0, rail.scrollWidth - wrap.clientWidth); clamp(); apply() };
  const clamp = ()=>{ x = Math.max(-max, Math.min(0, x)) };
  const apply = ()=>{
    rail.style.transform = `translate3d(${x}px,0,0)`;
    if(bar){
      const p = max ? -x/max : 0;
      const track = 170, w = Math.max(28, track*(wrap.clientWidth/Math.max(rail.scrollWidth,1)));
      bar.style.width = w+'px';
      bar.style.transform = `translateX(${p*(track-w)}px)`;
    }
  };
  const glide = ()=>{
    v *= .93; x += v; clamp(); apply();
    if(Math.abs(v) > .4) raf = requestAnimationFrame(glide); else raf = null;
  };

  wrap.addEventListener('pointerdown', e=>{
    down = true; startX = e.clientX; startOff = x; lastX = e.clientX; v = 0;
    if(raf) cancelAnimationFrame(raf), raf = null;
    wrap.classList.add('dragging'); wrap.setPointerCapture(e.pointerId);
  });
  wrap.addEventListener('pointermove', e=>{
    if(!down) return;
    x = startOff + (e.clientX - startX); v = e.clientX - lastX; lastX = e.clientX;
    clamp(); apply();
  });
  const release = e=>{
    if(!down) return;
    down = false; wrap.classList.remove('dragging');
    try{ wrap.releasePointerCapture(e.pointerId) }catch(_){}
    if(!RM && Math.abs(v) > 1) raf = requestAnimationFrame(glide);
  };
  wrap.addEventListener('pointerup', release);
  wrap.addEventListener('pointercancel', release);

  // trackpad horizontal intent, and keyboard for anyone not using a pointer
  wrap.addEventListener('wheel', e=>{
    if(Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault(); x -= e.deltaX; clamp(); apply();
  }, {passive:false});
  wrap.tabIndex = 0;
  wrap.setAttribute('role','region');
  wrap.setAttribute('aria-label','Services, scrollable sideways');
  wrap.addEventListener('keydown', e=>{
    if(e.key === 'ArrowRight'){ x -= 320; clamp(); apply(); e.preventDefault() }
    if(e.key === 'ArrowLeft'){  x += 320; clamp(); apply(); e.preventDefault() }
  });
  wrap.querySelectorAll('a,button').forEach(el=>el.addEventListener('dragstart',e=>e.preventDefault()));

  addEventListener('resize', measure);
  measure();
});

/* ── nav ──────────────────────────────────────────────────────── */
const navEl = document.querySelector('nav');
if(navEl) addEventListener('scroll', ()=>navEl.classList.toggle('stuck', scrollY > 30), {passive:true});

/* ── coming soon ──────────────────────────────────────────────── */
const modal = document.getElementById('soon');
window.soon = e=>{ if(e) e.preventDefault(); modal && modal.classList.add('on') };
window.closeSoon = ()=>modal && modal.classList.remove('on');
addEventListener('keydown', e=>{ if(e.key === 'Escape') window.closeSoon() });

// The store badges are divs acting as buttons, so give them the keyboard
// activation a real button would already have.
document.querySelectorAll('[role="button"]').forEach(el=>{
  el.addEventListener('keydown', e=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); el.click() }
  });
});
})();
