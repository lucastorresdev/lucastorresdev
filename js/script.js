document.querySelector(".menu").addEventListener("click", animacionMenu);

let line1 = document.querySelector(".menu--line1");
let line2 = document.querySelector(".menu--line2");
let line3 = document.querySelector(".menu--line3");
let nav = document.querySelector(".display-none");
let body = document.querySelector(".main");

function animacionMenu(){
    line1.classList.toggle("activeMenu--line1");
    line2.classList.toggle("activeMenu--line2");
    line3.classList.toggle("activeMenu--line3");
    nav.classList.toggle("display-none")
    body.classList.toggle("blur")
}