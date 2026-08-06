const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const events=[
 {day:1,hour:18,minute:0,name:'RUSH PARAÍSO',label:'SEGUNDA-FEIRA — 18:00'},
 {day:2,hour:18,minute:0,name:'RUSH DUSK',label:'TERÇA-FEIRA — 18:00'},
 {day:3,hour:18,minute:0,name:'RUSH 999 NOVATOS',label:'QUARTA-FEIRA — 18:00'},
 {day:3,hour:21,minute:0,name:'SOLDO',label:'QUARTA-FEIRA — 21:00'},
 {day:4,hour:20,minute:30,name:'WORLD BOSS',label:'QUINTA-FEIRA — 20:30'},
 {day:6,hour:20,minute:30,name:'TW — GUERRA TERRITORIAL',label:'SÁBADO — 20:30'},
 {day:0,hour:20,minute:30,name:'TW — GUERRA TERRITORIAL',label:'DOMINGO — 20:30'}
];
function getNextEvent(){const now=new Date();return events.map(e=>{const d=new Date(now);let diff=(e.day-now.getDay()+7)%7;d.setDate(now.getDate()+diff);d.setHours(e.hour,e.minute,0,0);if(d<=now)d.setDate(d.getDate()+7);return{...e,date:d}}).sort((a,b)=>a.date-b.date)[0]}
function tick(){const name=document.getElementById('proximo-evento');if(!name)return;const e=getNextEvent(),ms=e.date-new Date();const vals={days:Math.floor(ms/86400000),hours:Math.floor(ms/3600000)%24,mins:Math.floor(ms/60000)%60,secs:Math.floor(ms/1000)%60};name.textContent=e.name;const label=document.getElementById('data-proximo-evento');if(label)label.textContent=e.label;Object.entries(vals).forEach(([k,v])=>{const el=document.getElementById('cd-'+k);if(el)el.textContent=String(v).padStart(2,'0')});const legacy=document.getElementById('contador-evento');if(legacy)legacy.textContent=`${vals.days}d ${String(vals.hours).padStart(2,'0')}:${String(vals.mins).padStart(2,'0')}:${String(vals.secs).padStart(2,'0')}`}
tick();setInterval(tick,1000);
const recruitForm=document.getElementById('recruit-form');
if(recruitForm)recruitForm.addEventListener('submit',e=>{e.preventDefault();const msg=document.getElementById('form-message');if(msg)msg.hidden=false;msg?.scrollIntoView({behavior:'smooth',block:'center'});});
