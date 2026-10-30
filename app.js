const SEC_ORDER=["Безынерционные 30000","Безынерционные 20000","Безынерционные 10000","Безынерционные 8000","Безынерционные 6000","Безынерционные 4000","Безынерционные 3000","Безынерционные 2000","Безынерционные 1000","Байткастинговые классические","Байткастинговые низкопрофильные","Силовые мультипликаторы"];
const CAT=[];
function load(raw){let sec="";raw.split("\n").forEach(l=>{l=l.trim();if(!l)return;if(l[0]==="#"){sec=l.slice(1);return}
  const[n,g,r]=l.split(";");if(CAT.some(c=>c.name===n))return;
  const measured=/\*$/.test(r||"");const v=r?parseFloat(r.replace("*","").replace(",",".")):NaN;
  CAT.push({name:n,sec,gear:g.trim()+":1",r:Number.isFinite(v)?v:null,measured})})}
load(CAT_RAW);load(NODATA_RAW);
CAT.sort((a,b)=>SEC_ORDER.indexOf(a.sec)-SEC_ORDER.indexOf(b.sec));
const byName=new Map(CAT.map(c=>[c.name.toLowerCase(),c]));

const DEF_CAL={r:0.607,pts:"1 - 9\n2 - 10\n3 - 11\n4 - 12\n5 - 13\n7 - 15\n25 - 34\n30 - 39\n35 - 44\n50 - 60"};
const KEY="reel-calc-public-v1";
let S={from:"",to:"",speed:"",own:{},calR:DEF_CAL.r,calPts:DEF_CAL.pts,q:"",sec:""};
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&typeof s==="object"){if(s.own&&typeof s.own==="object")S.own=s.own}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({own:S.own}))}catch(e){}};
const $=id=>document.getElementById(id);
const fmt=(x,d=2)=>Number.isFinite(x)?x.toLocaleString("ru-RU",{minimumFractionDigits:d,maximumFractionDigits:d}):"—";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const getR=c=>c?(S.own[c.name]>0?S.own[c.name]:c.r):null;
const find=n=>byName.get(String(n||"").trim().toLowerCase());

$("catList").innerHTML=CAT.map(c=>`<option value="${esc(c.name)}">${esc(c.sec)} · ${c.gear}${c.r?" · "+fmt(c.r)+" м":""}</option>`).join("");
$("secSel").innerHTML=`<option value="">Все (${CAT.length})</option>`+SEC_ORDER.map(s=>`<option value="${esc(s)}">${esc(s)} (${CAT.filter(c=>c.sec===s).length})</option>`).join("");

function fit(){
  const r=+S.calR, pts=[];
  String(S.calPts).split("\n").forEach(l=>{const m=l.replace(",",".").match(/(\d+(?:\.\d+)?)\D+(\d+(?:[.,]\d+)?)/);if(m)pts.push([+m[1],+m[2].replace(",",".")])});
  if(!(r>0)||pts.length<2)return null;
  const n=pts.length,sx=pts.reduce((a,p)=>a+p[0],0),sy=pts.reduce((a,p)=>a+p[1]/r,0),
    sxx=pts.reduce((a,p)=>a+p[0]*p[0],0),sxy=pts.reduce((a,p)=>a+p[0]*p[1]/r,0),den=n*sxx-sx*sx;
  if(!den)return null;const B=(n*sxy-sx*sy)/den,A=(sy-B*sx)/n;return B>0?{A,B,n}:null;
}
function ctx(){
  const f=fit(),c=find(S.from),r=getR(c),sp=Math.round(+S.speed),s0=S.speed!==""&&sp>=1&&sp<=50?sp:null;
  if(!f||!c||!(r>0)||!s0)return {f,c,s0};
  const rpm=f.A+f.B*s0;return {f,c,s0,rpm,V:rpm*r};
}
function match(t,r){
  const exact=(t.V/r-t.f.A)/t.f.B;let s=Math.round(exact),note="";
  if(s<1){s=1;note="даже на 1 будет быстрее"}if(s>50){s=50;note="не догонит даже на 50"}
  return {s,exact,note,got:(t.f.A+t.f.B*s)*r};
}
function metaText(c){
  if(!c)return "Выберите катушку из списка";
  const r=getR(c),own=S.own[c.name]>0;
  return `${c.sec} · ${c.gear} · `+(r?`${fmt(r)} м за оборот${own?" (ваш замер)":c.measured?" (замер игрока)":""}`:"подмотки нет в таблице");
}
function ownBox(el,c,side){
  if(!c){el.hidden=true;return}
  const has=getR(c)>0,own=S.own[c.name]>0;
  if(has&&!own){el.hidden=true;return}
  el.hidden=false;
  el.innerHTML=`<span>${own?"Ваш замер для этой катушки":"Впишите свой замер: сколько метров смотано за сколько оборотов"}</span>
    <div class="row">
      <div class="field"><label for="${side}M">Метров</label><input id="${side}M" class="n" type="number" step="any" min="0" placeholder="30"></div>
      <div class="field"><label for="${side}T">Оборотов</label><input id="${side}T" class="n" type="number" step="any" min="0" placeholder="25"></div>
      <button type="button" class="primary" data-own="${side}">Сохранить</button>
      ${own?`<button type="button" data-clear="${side}">Убрать замер</button>`:""}
    </div>`;
}

function renderCalc(){
  const t=ctx(),fc=find(S.from),tc=find(S.to);
  $("fromMeta").textContent=metaText(fc);$("toMeta").textContent=metaText(tc);
  ownBox($("fromOwn"),fc,"from");ownBox($("toOwn"),tc,"to");
  if(document.activeElement!==$("fromSpeed"))$("fromSpeed").value=t.s0||"";$("fromSpeedRange").value=t.s0||1;
  $("fromFlow").innerHTML=t.V?`${fmt(t.V,1)} м/мин · ${fmt(t.rpm,1)} об/мин`:"";
  const tr=getR(tc);
  if(!t.V||!tc||!(tr>0)){$("toResult").innerHTML=`<span class="of">${!t.f?"Проверьте шкалу скорости ниже":(!fc||!tc||!t.s0)?"Выберите обе катушки и скорость, на которой ловите":"Скорость появится, когда у обеих катушек будет подмотка"}</span>`;$("toFlow").textContent="";return}
  const m=match(t,tr);
  $("toResult").innerHTML=`<span class="big">${m.s}</span><span class="of">из 50${m.note?`<br><span class="note">${m.note}</span>`:`<br>точно ${fmt(m.exact,1)}`}</span>`;
  $("toFlow").textContent=`${fmt(m.got,1)} м/мин · ${fmt(t.f.A+t.f.B*m.s,1)} об/мин`;
}

function renderTable(){
  const t=ctx(),q=String(S.q||"").trim().toLowerCase();
  const rows=CAT.filter(c=>(!S.sec||c.sec===S.sec)&&(!q||c.name.toLowerCase().includes(q)||c.sec.toLowerCase().includes(q)));
  let html="",sec="";
  rows.forEach(c=>{
    if(c.sec!==sec){sec=c.sec;html+=`<tr class="grp"><td colspan="5">${esc(sec)}</td></tr>`}
    const r=getR(c),own=S.own[c.name]>0,isRef=find(S.from)===c,isSel=find(S.to)===c;
    let sp=`<span class="nd">—</span>`,mm=`<span class="nd">—</span>`;
    if(r>0&&t.V){if(isRef){sp=`<span class="sp">${t.s0}</span>`;mm=fmt(t.V,1)}else{const m=match(t,r);sp=`<span class="sp" title="${m.note||"точно "+fmt(m.exact,1)}">${m.s}</span>`;mm=fmt(m.got,1)}}
    html+=`<tr tabindex="0" data-name="${esc(c.name)}" class="${isSel?"sel":""}${isRef?" isref":""}"><td>${esc(c.name)}${own?'<span class="mine">ваш замер</span>':""}${isRef?'<span class="mine">ловлю на ней</span>':""}</td>
      <td class="num">${esc(c.gear)}</td><td class="num">${r>0?fmt(r):`<span class="nd">нет данных</span>`}</td><td class="num">${sp}</td><td class="num">${mm}</td></tr>`});
  $("allBody").innerHTML=html||`<tr class="grp"><td colspan="5">Ничего не найдено</td></tr>`;
  $("count").textContent=`${rows.length} шт.`;
}

function renderAll(){renderCalc();renderTable()}

$("fromIn").value=S.from;$("toIn").value=S.to;$("q").value=S.q||"";$("secSel").value=S.sec||"";
$("fromIn").addEventListener("input",e=>{S.from=e.target.value;renderCalc();if(find(S.from))renderTable()});
$("toIn").addEventListener("input",e=>{S.to=e.target.value;renderCalc();if(find(S.to))renderTable()});
const setSpeed=v=>{S.speed=v===""?"":Math.min(50,Math.max(1,Math.round(+v)||1));renderCalc();renderTable()};
$("fromSpeed").addEventListener("input",e=>setSpeed(e.target.value));
$("fromSpeed").addEventListener("change",e=>{setSpeed(e.target.value);e.target.value=S.speed});
$("fromSpeedRange").addEventListener("input",e=>setSpeed(e.target.value));
$("q").addEventListener("input",e=>{S.q=e.target.value;renderTable()});
$("secSel").addEventListener("change",e=>{S.sec=e.target.value;renderTable()});
document.querySelector(".calc").addEventListener("click",e=>{
  const side=e.target.dataset.own||e.target.dataset.clear;if(!side)return;
  const c=find(side==="from"?S.from:S.to);if(!c)return;
  if(e.target.dataset.clear){delete S.own[c.name]}else{const m=+$(side+"M").value,t=+$(side+"T").value;if(!(m>0&&t>0))return;S.own[c.name]=+(m/t).toFixed(4)}
  save();renderAll()});
const pick=tr=>{if(!tr||!tr.dataset.name)return;S.to=tr.dataset.name;$("toIn").value=S.to;renderCalc();renderTable();
  try{document.querySelector(".calc").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"})}catch(e){}};
$("allBody").addEventListener("click",e=>pick(e.target.closest("tr")));
$("allBody").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();pick(e.target.closest("tr"))}});
renderAll();
