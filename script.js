
const cruces=[
  {n:"Cruz de San José",i:"⛪",d:"La más antigua de Chancayllo, con registros desde 1886. Encabeza todas las procesiones y es considerada el símbolo espiritual de la festividad. Su presencia marca el inicio y el fin de cada celebración."},
  {n:"Cruz de Arenillas",i:"🏜️",d:"La segunda más antigua, integrada hacia 1920. Al término de la festividad es trasladada a su lugar de reposo en la playa de Río Seco, acompañada por sus devotos en una peregrinación de 2 horas."},
  {n:"Cruz de Pescadores — Chancayllo",i:"🐟",d:"Representa a los pescadores del propio pueblo de Chancayllo. Una de las tres cruces de pescadores que participan en la festividad, uniendo el mar y la fe en una misma celebración."},
  {n:"Cruz de Pescadores — Huacho",i:"⚓",d:"Proveniente de Huacho, su presencia une a los pueblos hermanos de la costa norte de Lima en esta celebración centenaria. Símbolo de hermandad entre comunidades pesqueras."},
  {n:"Cruz de Pescadores — Chancay",i:"🌊",d:"Representa a los pescadores del puerto de Chancay. Su participación enriquece la diversidad y la pluralidad de la festividad, reuniendo a distintas comunidades costeras."},
  {n:"Cruz de San Pedro",i:"🗝️",d:"Se incorporó en el año 2001. Su Santo Madero fue donado por la subcomisión de Candelaria, continuando la hermosa tradición de donación entre cruces que caracteriza a esta festividad."},
  {n:"Cruz de La Capilla",i:"🕌",d:"Su Santo Madero fue donado por la Cruz de Arenillas. Representa el núcleo espiritual del pueblo y alberga a los Santos durante los días de descanso previos a la festividad."},
  {n:"Cruz de San Cayetano",i:"⭐",d:"Se integró a mediados de los años 50, marcando el inicio del crecimiento de la festividad. Su ingreso coincidió con la época en que la fiesta comenzó a atraer visitantes de todo el valle."},
  {n:"Cruz de La Candelaria",i:"🕯️",d:"Ingresó en 1979. Sus coloridos listones y la devoción de sus seguidores la convierten en una de las más queridas y esperadas de la festividad. Cada año sus adornos son renovados con esmero."},
  {n:"Cruz de Nazareno",i:"🙏",d:"Incorporada en 1988. Viste un característico manto morado con bordados dorados. Es una de las más veneradas; sus listones y flores son donados anualmente por fieles de diversas partes del país."},
  {n:"Cruz de 4 de Junio",i:"📅",d:"La más reciente de todas, representando al centro poblado 4 de Junio. Lleva apenas 2 años participando en la festividad, pero ya ha conquistado el corazón de los devotos con su colorida presencia."},
  {n:"Cruz del Colegio",i:"🏫",d:"Representa a la Institución Educativa Daniel Alcides Carrión, el orgullo educativo de Chancayllo. Los alumnos y docentes participan activamente tanto en la festividad como en el desfile cívico del día central."},
  {n:"Cruz de Los Gladiolos",i:"🌸",d:"Lleva el nombre de la hermosa flor gladiolo. Es una de las más espectaculares en cuanto a decoración, con abundantes flores y listones multicolores que la distinguen en cada procesión."}
];

const galeria=[
  {i:"🕌",n:"Las cruces en la capilla",d:"Las 13 Santísimas Cruces adornan la capilla de Chancayllo con sus coloridos listones y flores antes de las procesiones. Cada una representa un centro poblado y tiene su propia historia.",
  img:"img/capilla.jpeg"
  },
 
  {i:"✝",n:"Cruz de Arenillas",d:"La segunda más antigua de Chancayllo. Sus listones y sábanas son renovados cada año por sus devotos. Al cierre de la festividad es llevada a su lugar de reposo en la playa de Río Seco."},
  {i:"🙏",n:"Cruz de Nazareno",d:"Con su característico manto morado y bordados dorados, es una de las más veneradas. Sus flores y listones son donados por fieles devotos de diversas partes del país."},
  {i:"🌸",n:"Cruz de 4 de Junio",d:"La más nueva, con sus coloridas flores y cintas. Representa al centro poblado 4 de Junio y ya se ha ganado el afecto de los fieles de la festividad."},
  {i:"🎇",n:"Castillo pirotécnico",d:"El castillo de 10 pisos es uno de los momentos más esperados. Su quema ilumina el cielo de Chancayllo y despierta a todo el pueblo para el día central."},
  {i:"💃",n:"Verbena y baile",d:"La gran verbena en la plaza central trae artistas, cantantes, cómicos y orquestas nacionales. El pueblo baila marinera y música tradicional en los locales de la localidad."},
  {i:"🚶",n:"Procesión de las cruces",d:"Las cruces recorren las principales calles acompañadas por bandas de música. Los devotos las siguen en procesión en un acto de profunda fe y devoción."},
  {i:"🌊",n:"Despedida en Río Seco",d:"El martes final, las cruces de Arenillas y los Pescadores son llevadas a su lugar de reposo en Río Seco, en una peregrinación de 2 horas con devotos y público general."},
  {i:"⛪",n:"Capilla de Chancayllo",d:"El corazón espiritual de la festividad. La capilla alberga a las cruces y es el punto de partida de todas las procesiones y misas durante los 4 días de celebración."}
];

const cg=document.getElementById('cg');
cruces.forEach(c=>{
  const d=document.createElement('div');
  d.className='cc';
  d.innerHTML=`<div class="cc-i">${c.i}</div><div class="cc-n">${c.n}</div>`;
  d.onclick=function(){
    document.querySelectorAll('.cc').forEach(x=>x.classList.remove('sel'));
    this.classList.add('sel');
    const b=document.getElementById('cinfo');
    b.style.display='block';
    b.innerHTML=`<strong style="color:#f0abfc">${c.i} ${c.n}</strong><br><br>${c.d}`;
    b.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  cg.appendChild(d);
});

const gg=document.getElementById('gg');
galeria.forEach(g=>{
  const d=document.createElement('div');
  d.className='gi';
  d.innerHTML=`${g.i}<div class="gi-l">${g.n}</div>`;
  d.onclick=()=>{
    const big=document.getElementById('gbig');
    const ico=document.getElementById('gbi');
    const txt=document.getElementById('gbt');

    if(ico.textContent===g.i && big.classList.contains('show')){
      big.classList.remove('show');
    }
    else{
      ico.textContent=g.i;
      txt.innerHTML=`<strong style="color:#f0abfc">${g.n}</strong><br><br>${g.d}`;
      big.classList.add('show');
      big.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  };
  gg.appendChild(d);
});

function tab(id,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
}

function animCruz(el){el.style.transform='scale(1.5) rotate(20deg)';el.style.color='#f0abfc';setTimeout(()=>{el.style.transform='';el.style.color='';},500);}
function animFlor(el){el.style.transform='scale(2) rotate(-20deg)';setTimeout(()=>{el.style.transform='';},400);}

function boom(){
  const c=document.getElementById('fuegos');
  const e=['🎆','✨','🌟','💥','🎇','⭐','🌠','🎉','🎊','💫'];
  c.innerHTML='';
  for(let i=0;i<18;i++){
    setTimeout(()=>{
      const s=document.createElement('span');
      s.className='fp';
      s.textContent=e[Math.floor(Math.random()*e.length)];
      s.style.animationDelay=(Math.random()*.7)+'s';
      s.style.fontSize=(1.1+Math.random()*.9)+'rem';
      c.appendChild(s);
      setTimeout(()=>s.remove(),1500);
    },i*80);
  }
}

function upd(){
  const meta=new Date('2026-06-19T22:00:00');
  const now=new Date();
  const diff=meta-now;
  if(diff<=0){document.getElementById('cd').textContent='¡YA!';return;}
  document.getElementById('cd').textContent=Math.floor(diff/86400000);
  document.getElementById('ch').textContent=String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
  document.getElementById('cm').textContent=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
  document.getElementById('cs').textContent=String(Math.floor((diff%60000)/1000)).padStart(2,'0');
}
upd();setInterval(upd,1000);

const sc=document.getElementById('stars-c');
for(let i=0;i<28;i++){
  const s=document.createElement('div');
  s.className='star';
  s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${1.5+Math.random()*2}s`;
  sc.appendChild(s);
}
