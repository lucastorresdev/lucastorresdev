document.querySelector(".menu").addEventListener("click", animacionMenu);
document.querySelector(".aMenu").addEventListener("click", animacionMenu);
document.querySelector(".aMenu2").addEventListener("click", animacionMenu);
document.querySelector(".aMenu3").addEventListener("click", animacionMenu);
document.querySelector(".copy").addEventListener("click", copiarTexto);
window.addEventListener("scroll", apareceFlecha);

let line1 = document.querySelector(".menu--line1");
let line2 = document.querySelector(".menu--line2");
let line3 = document.querySelector(".menu--line3");
let nav = document.querySelector(".menuEscondido");
let body = document.querySelector(".overflowVisible")

function animacionMenu(){
    line1.classList.toggle("activeMenu--line1");
    line2.classList.toggle("activeMenu--line2");
    line3.classList.toggle("activeMenu--line3");
    nav.classList.toggle("revelarMenu")
    nav.classList.toggle("menuEscondido")
    body.classList.toggle("overflorHidden")
    body.classList.toggle("overflowVisible")
}

function copiarTexto(){
   document.querySelector(".displayNone2").classList.toggle("textoCopiado"); 
   document.querySelector(".displayNone2").classList.toggle("displayNone2"); 
   setTimeout(()=>{
   document.querySelector(".textoCopiado").classList.toggle("displayNone2"); 
   document.querySelector(".textoCopiado").classList.toggle("textoCopiado"); 
   }, 1000)
   navigator.clipboard.writeText("lucasltorres1997@gmail.com");
}

function apareceFlecha(){
    if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)){
}else{
    document.querySelector(".flecha").classList.toggle("displayNone",scrollY<200);
}
        
}