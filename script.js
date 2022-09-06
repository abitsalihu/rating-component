"use strict";

//? HTML Elements

const ratingCon = document.querySelector(".container__rating");
const thankyouCon = document.querySelector(".container__thankyou");
const btnsCon = document.querySelector(".container__rating--buttons");
const fBtn = document.querySelector(".first");
const sBtn = document.querySelector(".second");
const thBtn = document.querySelector(".third");
const foBtn = document.querySelector(".fourth");
const fiBtn = document.querySelector(".fifth");

const submitBtn = document.querySelector(".container__rating--submit");
const userMsg = document.querySelector(".container__thankyou--userselection");

//? Starting funciton
let rating;

//? Function
const removeClass = function (e) {
  fBtn.classList.remove("active-btn");
  sBtn.classList.remove("active-btn");
  thBtn.classList.remove("active-btn");
  foBtn.classList.remove("active-btn");
  fiBtn.classList.remove("active-btn");
  e.classList.add("active-btn");
};

//? Event Listeners
btnsCon.addEventListener("click", function (e) {
  rating = e.target.getAttribute("data-set");
  if (!rating) return;
  removeClass(e.target);
});

submitBtn.addEventListener("click", () => {
  if (!rating) return;
  userMsg.textContent = `You selected ${rating} out of 5`;
  ratingCon.classList.add("hidden");
  thankyouCon.classList.remove("hidden");
});
