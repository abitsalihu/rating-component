"use strict";

//? HTML Elements

const buttonsCon = document.querySelector(".rating__buttons");
const fButton = document.querySelector(".first");
const sButton = document.querySelector(".second");
const thButton = document.querySelector(".third");
const foButton = document.querySelector(".fourth");
const fiButton = document.querySelector(".fifth");

//? Starting funciton
let rating;

//? Function
const removeClass = function (e) {
  fButton.classList.remove("active");
  sButton.classList.remove("active");
  thButton.classList.remove("active");
  foButton.classList.remove("active");
  fiButton.classList.remove("active");
  e.classList.add("active");
};

//?
console.log(rating);
buttonsCon.addEventListener("click", function (e) {
  rating = e.target.getAttribute("data-set");
  if (!rating) return;
  removeClass(e.target);
});
