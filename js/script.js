const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],root=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
try{const t=localStorage.getItem('t');if(t)root.dataset.theme=t}catch(e){}
$('#th').onclick=()=>{const n=(root.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'))=='dark'?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('t',n)}catch(e){}};
const R=['Community-development leader','Digital marketing professional','Computer science student','Social media strategist'],ty=$('#ty');let i=0,j=0,x=0;
function tick(){const w=R[i];j+=x?-1:1;ty.textContent=w.slice(0,j);let d=x?28:65;if(!x&&j==w.length){x=1;d=1600}else if(x&&!j){x=0;i=(i+1)%R.length;d=250}setTimeout(tick,d)}
if(!rm)tick();
$$('h2,.sub,.card:not(.pj),.it,.sk,.ac p,.pj').forEach(e=>e.classList.add('rv'));
$$('.grid').forEach(g=>[...g.children].forEach((c,k)=>c.style.setProperty('--d',k*.08+'s')));
function cnt(b){const n=+b.dataset.n,s=b.dataset.s||'',t0=performance.now();(function f(t){const p=Math.min((t-t0)/1500,1);b.textContent=Math.round(n*(1-(1-p)**3)).toLocaleString()+s;if(p<1)requestAnimationFrame(f)})(t0)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');const b=$('[data-n]',e.target);if(b&&!rm)cnt(b);io.unobserve(e.target)}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
addEventListener('scroll',()=>{$('#pg').style.width=scrollY/Math.max(1,root.scrollHeight-innerHeight)*100+'%'},{passive:true});
addEventListener('pointermove',e=>{const c=e.target.closest?.('.sp');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
$$('.fl').forEach(b=>b.onclick=()=>{$$('.fl').forEach(o=>o.classList.toggle('on',o==b));$$('.pj').forEach(c=>{const s=b.dataset.f=='all'||c.dataset.c==b.dataset.f;c.hidden=!s;if(s){c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop')}})});
const cv=$('#net'),cx=cv.getContext('2d');let W,H,P=[],mx=-999,my=-999;
function rs(){const dp=devicePixelRatio||1;W=cv.offsetWidth;H=cv.offsetHeight;cv.width=W*dp;cv.height=H*dp;cx.setTransform(dp,0,0,dp,0,0);P=Array.from({length:Math.min(70,W/13|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45}))}
$('.hero').addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
$('.hero').addEventListener('pointerleave',()=>mx=-999);
function draw(){cx.clearRect(0,0,W,H);const c=getComputedStyle(cv).color;cx.fillStyle=cx.strokeStyle=c;P.forEach((p,a)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;cx.globalAlpha=.75;cx.beginPath();cx.arc(p.x,p.y,2,0,7);cx.fill();for(let k=a+1;k<P.length;k++){const q=P[k],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.globalAlpha=(1-d/130)*.4;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}const m=Math.hypot(p.x-mx,p.y-my);if(m<170){cx.globalAlpha=(1-m/170)*.9;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mx,my);cx.stroke()}});if(!rm)requestAnimationFrame(draw)}
addEventListener('resize',()=>{rs();if(rm)draw()});rs();draw();
