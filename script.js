"use strict";

let menuBtn = document.getElementById("menuBtn");
let menuCloseBtn = document.getElementById("menuCloseBtn");
let navUl = document.getElementById("navUl");
//$Ppmikey12$;

menuBtn.addEventListener("click", function (params) {
  navUl.classList.toggle("showNav");
  menuBtn.classList.toggle("hide");
  menuCloseBtn.classList.toggle("showNav");
});

menuCloseBtn.addEventListener("click", function (params) {
  navUl.classList.toggle("showNav");
  menuBtn.classList.toggle("hide");
  menuCloseBtn.classList.toggle("showNav");
});
