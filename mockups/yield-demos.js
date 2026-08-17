/* ═══════════════════════════════════════════════════════════════════
   YIELD · MOTION ENGINE
   Every animation here demonstrates a real workflow. Nothing decorates.
   Demos run only while on screen. Under prefers-reduced-motion each one
   collapses to its final, most informative frame and never loops.
   ═══════════════════════════════════════════════════════════════════ */
(function(){
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
window.YIELD_RM = RM;

/* ── screen helpers ───────────────────────────────────────────── */
const H = (h,s)=>`<div class="fin"><div class="s-h">${h}</div><div class="s-sub">${s}</div></div>`;
const L = t=>`<div class="s-lab fin">${t}</div>`;

/* ── the workflows ────────────────────────────────────────────── */
const DEMOS = {

/* HOME · the recovery console ------------------------------------ */
home:{
 cap:['Your cards, and what they owe you','The first move, ranked','What came back, proven'],
 steps:[
  ()=>H('Evening, Ben','Saturday, August 16')+
   `<div class="s-tile gold fin fin-2">
      <div class="s-row"><div class="grow"><div class="s-s" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase">Chase</div>
      <div class="s-t" style="font-size:16px;margin-top:2px">Sapphire Reserve</div></div>
      <div class="s-pill g">2 credits verified</div></div>
      <div class="s-rule"></div>
      <div class="s-row"><div class="grow"><div class="s-s" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase">Recovered this year</div>
      <div class="mv lg" style="font-size:38px">$150</div>
      <div class="s-s">of the $795 annual fee</div></div>
      <div style="text-align:right"><div class="mv md w">19%</div></div></div>
      <div class="s-meter" style="margin-top:10px"><i style="width:19%"></i></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px" class="fin fin-3">
      <div class="s-tile" style="padding:10px"><div class="mv sm">$35</div><div class="s-s">Ready now</div></div>
      <div class="s-tile" style="padding:10px"><div class="mv sm">$150</div><div class="s-s">Verified</div></div>
      <div class="s-tile" style="padding:10px"><div class="mv sm">Aug 31</div><div class="s-s">Next expiry</div></div>
    </div>`,
  ()=>H('Evening, Ben','Saturday, August 16')+L('First move')+
   `<div class="s-tile gold fin fin-2">
      <div class="s-row"><div class="grow"><div class="s-t" style="font-size:15px">Use the $25 DoorDash credit</div>
      <div class="s-s">Expires Aug 31 · Sapphire Reserve · 15 days left</div></div>
      <div class="s-chip" style="width:30px;height:30px;font-size:14px;border-radius:999px;background:linear-gradient(180deg,var(--gold-pale),var(--gold));color:#191206">›</div></div>
    </div>
    <div class="s-lab fin fin-3">Working for you</div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">CV</div><div class="grow">
      <div class="s-t">CeraVe fell $4.82 at Target</div><div class="s-s">Watchdog · seen this morning</div></div>
      <div style="text-align:right"><div class="mv sm g">$13.97</div><div class="s-s mv strike" style="font-size:11px">$18.79</div></div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="s-chip">SR</div><div class="grow">
      <div class="s-t">Statement closes Aug 21</div><div class="s-s">Pay before it reports</div></div>
      <div class="s-pill a">Timed</div></div></div>`,
  ()=>H('Proof ledger','Verified value, counted once')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="grow">
      <div class="s-t">Disney Bundle credit</div><div class="s-s">Posted Aug 12 and reconciled</div></div>
      <div class="mv sm g">$7.00</div></div>
      <div class="s-rule"></div><div class="s-row"><div class="s-pill g">Charge seen · posted · matched</div></div></div>
    <div class="s-tile green fin fin-3"><div class="s-row"><div class="grow">
      <div class="s-t">Resy dining credit</div><div class="s-s">Posted Aug 4</div></div><div class="mv sm g">$50.00</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="grow"><div class="s-t">Hotel credit</div>
      <div class="s-s">Observed. Not counted until it posts.</div></div><div class="mv sm dim">$300</div></div></div>
    <div class="s-foot"><div class="s-btn q">Pending money never lands here</div></div>`
 ]},

/* PRICE DROP REFUNDS --------------------------------------------- */
pricedrop:{
 cap:['Order email forwarded','The exact item, held','The price falls','The window is still open'],
 steps:[
  ()=>H('Receipts','One forwarded, reading it')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">AZ</div><div class="grow">
     <div class="s-t">Amazon order confirmation</div><div class="s-s">Forwarded 2 minutes ago</div></div>
     <div class="s-pill gd">Reading</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">Yield only ever sees what you forward. Never your inbox, never your location.</div></div></div></div>
    <div class="s-foot"><div class="s-btn q">Nothing to act on yet</div></div>`,
  ()=>H('Watching','Exact item, not a guess')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
     <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Amazon · bought Aug 4</div></div>
     <div class="mv sm w">$18.97</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s">Refund window</div></div>
     <div class="s-pill gd">Closes Sep 3</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">Anchored to the day you receive your product</div></div></div></div>
    <div class="s-foot"><div class="s-btn q">Quiet until a deal</div></div>`,
  ()=>H('Price fell','On something you already bought')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
     <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Amazon · seen just now</div></div>
     <div style="text-align:right"><div class="mv strike">$18.97</div><div class="mv sm g">$14.24</div></div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s" style="color:var(--green)">The difference</div></div>
     <div class="mv sm g">$4.73</div></div></div>
    <div class="s-foot"><div class="s-btn q">Checking the window</div></div>`,
  ()=>H('Ask for the difference','11 days left on the window')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
     <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s" style="color:var(--green)">Refund window open</div></div>
     <div class="mv sm g">$4.73</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s">Window closes Sep 3</div></div><div class="s-pill r">11 days</div></div>
     <div class="s-meter r"><i style="width:63%"></i></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">You make the ask. Yield never files anything as you.</div></div></div></div>
    <div class="s-foot stack g8"><div class="s-btn">Open Amazon to ask</div><div class="s-btn o">The evidence</div></div>`
 ]},

/* SWITCHBOARD ---------------------------------------------------- */
switchboard:{
 cap:['A bill on the wrong route','What the move is worth, and what it costs','You make the change','Posted and matched'],
 steps:[
  ()=>H('Billing routes','Bills that could ride a benefit')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="s-chip">D+</div><div class="grow">
     <div class="s-t">Disney Bundle · $7.00 monthly</div><div class="s-s">Charging to Sapphire Reserve</div></div>
     <div class="s-pill gd">Look</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s">Your Amex Gold covers this in full</div></div>
     <div class="mv sm">$7.00</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">WM</div><div class="grow">
     <div class="s-t">Walmart+ · $12.95 monthly</div><div class="s-s">Checking your cards</div></div>
     <div class="s-pill n">Reading</div></div></div>
    <div class="s-foot"><div class="s-btn q">Ready when you are</div></div>`,
  ()=>H('What it is worth','And what it costs you')+
   `<div class="s-tile fin fin-2">
     <div class="s-row"><div class="grow"><div class="s-t">Issuer credit this period</div></div><div class="mv sm g">$7.00</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-t">Rewards given up</div></div><div class="mv sm">$0.14</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-t">Fees from the change</div></div><div class="mv sm">$0.00</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-t">Promotions lost</div></div><div class="mv sm dim">None</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-t">Interruption risk</div></div><div class="s-pill n">Low</div></div></div>
    <div class="s-foot"><div class="s-btn">Move it at Disney</div></div>`,
  ()=>H('You made the switch','Watching your statement')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">D+</div><div class="grow">
     <div class="s-t">Sapphire Reserve → Amex Gold</div><div class="s-s">Changed at the merchant Aug 9</div></div>
     <div class="s-pill gd">In motion</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s">Waiting for the next charge to land on the new card. If it lands on the old card, this step reopens honestly.</div></div></div></div>
    <div class="s-foot"><div class="s-btn q">Issuers can take weeks</div></div>`,
  ()=>H('Credit posted','And matched to the charge')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">D+</div><div class="grow">
     <div class="s-t">Disney Bundle credit</div><div class="s-s" style="color:var(--green)">Posted Aug 12 and reconciled</div></div>
     <div class="mv sm g">$7.00</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="s-pill g">Charge seen · credit posted · matched once</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">This is a record now, not a promise.</div></div></div></div>
    <div class="s-foot"><div class="s-btn o">See the proof row</div></div>`
 ]},

/* WATCHDOG -------------------------------------------------------- */
watchdog:{
 cap:['Seven items on watch','Weeks of nothing','A price moves in your favour','The evidence behind it'],
 steps:[
  ()=>H('Watchdog','Prices watched, receipts honored')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">CV</div><div class="grow">
     <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Target · checks on app open</div></div>
     <div class="mv sm w">$18.79</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">OL</div><div class="grow">
     <div class="s-t">OLLY Multivitamin</div><div class="s-s">Walgreens · checked weekly</div></div>
     <div class="mv sm w">$19.99</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">AG</div><div class="grow">
     <div class="s-t">AG1 Travel Packs</div><div class="s-s">Amazon · checked daily</div></div>
     <div class="mv sm w">$79.00</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="s-chip">ND</div><div class="grow">
     <div class="s-t">Native Deodorant</div><div class="s-s">Walmart</div></div><div class="s-pill gd">Just added</div></div></div>`,
  ()=>H('Quiet','Nothing worth saying')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="grow"><div class="s-t">CeraVe Moisturizing Cream</div></div><div class="s-pill n">Steady</div></div></div>
    <div class="s-tile fin fin-2"><div class="s-row"><div class="grow"><div class="s-t">OLLY Multivitamin</div></div><div class="s-pill n">Steady</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">AG1 Travel Packs</div></div><div class="s-pill n">Watching</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">Nordic Flora Probiotic</div></div><div class="s-pill n">Quiet until a deal</div></div></div>
    <div class="s-foot"><div class="s-btn q">22 checks this week · nothing to say</div></div>`,
  ()=>H('Below usual','On something you already buy')+
   `<div class="s-tile green fin fin-2"><div class="s-row"><div class="s-chip">CV<br>19oz</div><div class="grow">
     <div class="s-t">CeraVe Moisturizing Cream</div><div class="s-s">Target · seen this morning</div></div>
     <div style="text-align:right"><div class="mv sm g">$4.82</div><div class="s-s" style="font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase;font-size:8px">Below usual</div></div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;font-size:8px">Your usual</div>
       <div class="mv sm w">$18.79</div></div>
       <div style="text-align:right"><div class="s-s" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;font-size:8px">Today at Target</div>
       <div class="mv sm g">$13.97</div></div></div></div>
    <div class="s-foot stack g8"><div class="s-btn">Open at Target</div><div class="s-btn o">The evidence</div></div>`,
  ()=>H('The evidence','Where the number came from')+
   `<div class="s-tile fin fin-2">
     <div class="s-row"><div class="grow"><div class="s-t">90 days at Target</div></div><div class="s-pill g">Drop caught</div></div>
     <div style="height:44px;margin:10px 0;position:relative">
       <svg viewBox="0 0 240 44" style="width:100%;height:100%" preserveAspectRatio="none">
         <polyline points="0,14 30,15 60,13 90,16 120,15 150,18 180,17 210,32 240,34" fill="none" stroke="rgba(245,241,234,.45)" stroke-width="1.5"/>
         <circle cx="238" cy="34" r="4" fill="#00E87A"/>
       </svg></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s">Read from the public product page and your own receipts</div></div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">Never your inbox, never your location.</div></div></div></div>
    <div class="s-foot"><div class="s-btn q">Counted once, when it lands</div></div>`
 ]},

/* BILL CREEP ------------------------------------------------------ */
billcreep:{
 cap:['Your own recurring bills','One of them climbed','Against the going rate'],
 steps:[
  ()=>H('Bill watch','From your own transactions')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">CH</div><div class="grow">
     <div class="s-t">Comcast internet</div><div class="s-s">Monthly · 14 months on record</div></div>
     <div class="mv sm w">$70.00</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">AD</div><div class="grow">
     <div class="s-t">Home security monitoring</div><div class="s-s">Monthly</div></div><div class="mv sm w">$44.99</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">GE</div><div class="grow">
     <div class="s-t">Auto insurance</div><div class="s-s">Renews Sep 1</div></div><div class="mv sm w">$1,240</div></div></div>
    <div class="s-foot"><div class="s-btn q">Bill watch speaks only on creep</div></div>`,
  ()=>H('It crept','Nobody sent a notice')+
   `<div class="s-tile red fin fin-2"><div class="s-row"><div class="s-chip">CH</div><div class="grow">
     <div class="s-t">Comcast internet</div><div class="s-s" style="color:var(--red)">Up $19.99 a month · two bills</div></div>
     <div style="text-align:right"><div class="mv strike">$70.00</div><div class="mv sm r">$89.99</div></div></div>
     <div class="s-meter r"><i style="width:100%"></i></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">AD</div><div class="grow">
     <div class="s-t">Home security monitoring</div><div class="s-s">Up $8.00</div></div>
     <div class="s-pill a">Review</div></div></div>
    <div class="s-foot"><div class="s-btn q">Two flagged</div></div>`,
  ()=>H('$89.99','What you now pay, in context')+
   `<div class="s-tile red fin fin-2">
     <div class="s-row"><div class="grow"><div class="s-t">You now pay</div></div><div class="mv sm r">$89.99</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-t">Typical urban mid tier</div></div><div class="mv sm w">$74.00</div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-t">You were paying</div></div><div class="mv sm dim">$70.00</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">Increases at renewal are common. Many people re-shop coverage every year or two.</div></div></div></div>
    <div class="s-foot"><div class="s-btn">See the detail</div></div>`
 ]},

/* POINT MAX ------------------------------------------------------- */
pointmax:{
 cap:['Reads last month, end to end','Names every miss','What the gap cost'],
 steps:[
  ()=>H('Point Max','Your wallet, your statements')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="s-chip">July<br>31 reads</div><div class="grow">
     <div class="s-t">Point Max read July end to end</div><div class="s-s">Your wallet, your statements, published values</div></div></div>
     <div class="s-rule"></div>
     <div class="s-row"><div class="grow"><div class="s-s" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;font-size:8px">Prepared · 7:04 today</div></div>
     <div class="s-pill gd">Your move</div></div></div>
    <div class="s-foot"><div class="s-btn q">Working</div></div>`,
  ()=>H('14 misses','Spend that sat on the wrong card')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="s-chip">WF</div><div class="grow">
     <div class="s-t">Whole Foods · $120.40</div><div class="s-s">Platinum 1x · Gold earns 4x</div></div>
     <div class="mv sm">$3.60</div></div></div>
    <div class="s-tile gold fin fin-3"><div class="s-row"><div class="s-chip">DL</div><div class="grow">
     <div class="s-t">Delta · $420.00</div><div class="s-s">Sapphire 1x · Reserve earns 3x</div></div>
     <div class="mv sm">$8.40</div></div></div>
    <div class="s-tile green fin fin-3"><div class="s-row"><div class="s-chip">RY</div><div class="grow">
     <div class="s-t">Resy dining · $86.00</div><div class="s-s" style="color:var(--green)">Gold 4x used. Correct card.</div></div>
     <div class="s-pill g">Clean</div></div></div>`,
  ()=>H('$41.20','Left on the table last month')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="grow">
     <div class="s-s" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;font-size:8px">Total gap</div>
     <div class="mv lg" style="font-size:40px">$41.20</div>
     <div class="s-s">Dollar equivalent, from your own statements</div></div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow">
     <div class="s-s">When a month is clean, Yield says so instead of inventing a miss.</div></div></div></div>
    <div class="s-foot stack g8"><div class="s-btn">See the misses</div><div class="s-btn o">How it ran</div></div>`
 ]},

/* CREDIT MANAGER -------------------------------------------------- */
credit:{
 cap:['What the bureaus will see','Before your cards report','The plan, in your hands'],
 steps:[
  ()=>H('Credit','What your cards report, and when')+
   `<div class="s-tile fin fin-2">
     <div class="s-s" style="font-family:var(--mono);letter-spacing:.14em;text-transform:uppercase;text-align:center">Aggregate utilization</div>
     <div class="mv lg w center" style="font-size:38px;text-align:center">29.4%</div>
     <div class="s-s center" style="text-align:center">$7,780 in use of $26,500</div>
     <div style="display:flex;justify-content:center;margin-top:8px"><div class="s-pill a">Above 28.9</div></div>
     <div class="s-meter" style="margin-top:12px"><i style="width:49%"></i></div>
     <div class="s-s" style="font-size:8px;font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase;margin-top:8px">Bands from levels commonly observed on FICO models</div></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px" class="fin fin-3">
      <div class="s-tile" style="padding:10px"><div class="mv sm w">$7,780</div><div class="s-s">Balance</div></div>
      <div class="s-tile" style="padding:10px"><div class="mv sm w">$26,500</div><div class="s-s">Limit</div></div>
      <div class="s-tile" style="padding:10px"><div class="mv sm w">$154</div><div class="s-s">Min due</div></div>
    </div>`,
  ()=>H('Before your cards report','Closes, in the order they land')+
   `<div class="s-tile fin fin-2"><div class="s-row"><div class="s-chip">SR</div><div class="grow">
     <div class="s-t">Sapphire Reserve</div><div class="s-s">$2,340 of $8,000 · closes Aug 21</div>
     <div class="s-meter"><i style="width:29%"></i></div></div>
     <div style="text-align:right"><div class="mv sm">$640</div><div class="s-s">by Aug 19</div></div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="s-chip">FF</div><div class="grow">
     <div class="s-t">Freedom Flex</div><div class="s-s">$2,690 of $8,000 · closes Aug 26</div>
     <div class="s-meter"><i style="width:34%"></i></div></div>
     <div style="text-align:right"><div class="mv sm">$130</div><div class="s-s">by Aug 24</div></div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="grow">
     <div class="s-s">Bureaus see the statement, not what you owe today. <span class="hl">Pay before a close and that is what reports.</span></div></div></div></div>`,
  ()=>H('The plan','Timed to the closes')+
   `<div class="s-tile gold fin fin-2"><div class="s-row"><div class="grow">
     <div class="s-s" style="font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase;font-size:8px">This cycle</div>
     <div class="mv lg" style="font-size:36px">$800</div>
     <div class="s-s">split across three cards</div></div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">AZEO</div>
     <div class="s-s">One card reports, the rest zero</div></div><div class="s-pill n">Feasible</div></div></div>
    <div class="s-tile fin fin-3"><div class="s-row"><div class="grow"><div class="s-t">Limits</div>
     <div class="s-s">Headroom and request windows</div></div><div class="s-pill gd">2 open</div></div></div>
    <div class="s-tile fin fin-4"><div class="s-row"><div class="grow">
     <div class="s-s">Estimates are banded and assumptions named. <span class="hl">Payments always stay in your hands.</span></div></div></div></div>`
 ]}
};

/* ── runner ───────────────────────────────────────────────────── */
function mount(node){
  let demo = DEMOS[node.dataset.demo];
  if(!demo) return;
  const scope = node.closest('.demo') || document;
  const cap = scope.querySelector('.step');
  const ticksBox = scope.querySelector('.ticks');
  let ticks = [];
  const buildTicks = ()=>{
    if(!ticksBox) return;
    ticksBox.innerHTML = demo.steps.map(()=>'<i></i>').join('');
    ticks = [...ticksBox.children];
  };
  buildTicks();

  const draw = i=>{
    node.innerHTML = demo.steps[i]();
    if(cap) cap.textContent = demo.cap[i];
    ticks.forEach((t,j)=>t.classList.toggle('on', j===i));
    // setTimeout, not rAF: timers still fire in a backgrounded tab, so
    // a paused compositor can never leave the frame invisible.
    setTimeout(()=>node.querySelectorAll('.fin').forEach(e=>e.classList.add('on')), 20);
  };

  let i=0, timer=null, running=false;

  if(RM){
    draw(demo.steps.length-1);            // final, most informative frame
    node.__setDemo = key=>{
      if(!DEMOS[key] || key===node.dataset.demo) return;
      node.dataset.demo = key; demo = DEMOS[key]; buildTicks();
      draw(demo.steps.length-1);
    };
    return;
  }

  const tick = ()=>{
    draw(i);
    const last = i === demo.steps.length-1;
    i = (i+1) % demo.steps.length;
    timer = setTimeout(tick, last ? 3400 : 2300);
  };

  // Paint the opening frame immediately. The loop still waits for the
  // frame to be on screen, but the device is never blank before then.
  draw(0);

  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting && !running){ running=true; tick() }
    else if(!e.isIntersecting && running){ running=false; clearTimeout(timer) }
  }), {threshold:.3}).observe(node);

  /* Swap the running workflow without remounting. Used by the sticky
     device pattern, where one frame carries all five features. */
  node.__setDemo = key=>{
    if(!DEMOS[key] || key === node.dataset.demo) return;
    node.dataset.demo = key; demo = DEMOS[key]; buildTicks();
    clearTimeout(timer); i = 0;
    if(running) tick(); else draw(0);
  };
}
document.querySelectorAll('[data-demo]').forEach(mount);

/* ── scroll reveal ────────────────────────────────────────────── */
const reveals = [...document.querySelectorAll('.rv,.rv-l')];
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target) }
}), {threshold:.08, rootMargin:'0px 0px -6% 0px'});
reveals.forEach(el=>io.observe(el));

// Failsafe. If the observer never reports (a backgrounded tab on load,
// an odd embedding), nothing stays hidden for more than a moment.
setTimeout(()=>{
  reveals.forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < innerHeight && r.bottom > 0) el.classList.add('in');
  });
}, 2500);

/* ── counters — a value resolving is itself the demonstration ──── */
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
      const dur=1300, t0=performance.now();
      const step=t=>{ const p=Math.min(1,(t-t0)/dur), v=target*(1-Math.pow(1-p,3));
        el.textContent=fmt(v); if(p<1) requestAnimationFrame(step) };
      requestAnimationFrame(step);
    }, delay);
  }), {threshold:.5});
  o.observe(el);
});

/* ── meters fill on entry ─────────────────────────────────────── */
document.querySelectorAll('[data-fill]').forEach(el=>{
  const w = el.dataset.fill;
  if(RM){ el.style.width = w; return }
  el.style.width = '0%';
  new IntersectionObserver((es,ob)=>es.forEach(e=>{
    if(e.isIntersecting){ setTimeout(()=>el.style.width=w, 180); ob.disconnect() }
  }), {threshold:.5}).observe(el);
});

/* ── staged list arrival — the accumulation IS the argument ───── */
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

/* ── horizontal rail, driven by vertical scroll ───────────────── */
document.querySelectorAll('[data-rail]').forEach(wrap=>{
  const rail = wrap.querySelector('.rail');
  if(!rail || RM || innerWidth < 760) return;
  let raf=null;
  const run=()=>{
    const r = wrap.getBoundingClientRect();
    const travel = rail.scrollWidth - wrap.clientWidth;
    if(travel <= 0) return;
    // progress across the window while the rail is in view
    const p = Math.max(0, Math.min(1, (innerHeight*0.85 - r.top) / (innerHeight*0.85 + r.height*0.5)));
    rail.style.transform = `translate3d(${-p*travel}px,0,0)`;
    raf=null;
  };
  addEventListener('scroll',()=>{ if(!raf) raf=requestAnimationFrame(run) }, {passive:true});
  addEventListener('resize',run); run();
});

/* ── nav condense ─────────────────────────────────────────────── */
const navEl = document.querySelector('nav');
if(navEl){
  addEventListener('scroll',()=>{
    navEl.style.background = scrollY > 40 ? 'rgba(11,9,8,.9)' : 'rgba(11,9,8,.74)';
  }, {passive:true});
}

/* ── coming soon ──────────────────────────────────────────────── */
window.soon = ()=>document.getElementById('soon')?.classList.add('on');
window.closeSoon = ()=>document.getElementById('soon')?.classList.remove('on');
addEventListener('keydown', e=>{ if(e.key==='Escape') window.closeSoon() });
})();
