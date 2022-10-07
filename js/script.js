document.querySelector(".menu").addEventListener("click", animacionMenu);
document.querySelector(".aMenu").addEventListener("click", animacionMenu);
document.querySelector(".aMenu2").addEventListener("click", animacionMenu);
document.querySelector(".aMenu3").addEventListener("click", animacionMenu);
window.addEventListener("scroll", revelarNav)

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

function revelarNav(){

}