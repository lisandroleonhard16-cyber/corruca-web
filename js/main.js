// === DATOS A COMPLETAR ===
const C={wa:"5491151031825",ig:"corruca.cajas",mail:"corrucacajas@gmail.com",addr:"Lisandro de la torre 3648, Caseros, Argentina"};
// =========================
const $=id=>document.getElementById(id);
const waBase="https://wa.me/"+C.wa;
$("ig").href="https://instagram.com/"+C.ig;$("igt").textContent="@"+C.ig;
const esMovil=/Android|iPhone|iPad/i.test(navigator.userAgent);
const mailLink=esMovil?"mailto:"+C.mail:"https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(C.mail);
$("mail").href=$("fmail").href=mailLink;
if(!esMovil){$("mail").target=$("fmail").target="_blank";};$("mailt").textContent=C.mail;
$("wa").href=$("wa2").href=waBase;$("wat").textContent="+"+C.wa;
$("map").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(C.addr);$("addr").textContent=C.addr;
$("y").textContent=new Date().getFullYear();
document.querySelectorAll("[data-car]").forEach(c=>{const t=c.querySelector(".track");
c.querySelectorAll("button").forEach(b=>b.onclick=()=>t.scrollBy({left:b.dataset.d*(t.firstElementChild.offsetWidth+16),behavior:"smooth"}))});
$("f").addEventListener("submit",e=>{e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f)),err=$("err");
const l=+d.l,a=+d.a,h=+d.h,q=+d.q;
if(!d.nombre.trim()||!d.tel.trim()||!/\S+@\S+\.\S+/.test(d.mail)){err.textContent="Completá nombre, teléfono y un email válido.";return}
if(!(l>=200&&a>=200&&h>=100)){err.textContent="La medida mínima es 200 × 200 × 100 mm (largo × ancho × alto).";return}
if(!(q>=500)){err.textContent="La cantidad mínima es de 500 cajas.";return}
err.textContent="";
const m=`Hola CORRUCA, quiero hacer un pedido:\n• Nombre: ${d.nombre}\n• Empresa: ${d.empresa||"-"}\n• Teléfono: ${d.tel}\n• Email: ${d.mail}\n• Tipo: ${d.tipo}\n• Impresión: ${d.imp}\n• Medidas: ${l} x ${a} x ${h} mm\n• Cantidad: ${q}\n• Comentarios: ${d.c||"-"}`;
window.open(waBase+"?text="+encodeURIComponent(m),"_blank")});