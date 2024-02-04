"use strict";

let menuBtn = document.getElementById("menuBtn");
let menuCloseBtn = document.getElementById("menuCloseBtn");
let navUl = document.getElementById("navUl");
//$Ppmikey12$;

function navDisplay(params) {
  navUl.classList.toggle("showNav");
  menuBtn.classList.toggle("hide");
  menuCloseBtn.classList.toggle("showNav");
}

menuBtn.addEventListener("click", navDisplay);

menuCloseBtn.addEventListener("click", navDisplay);
