"use strict";

// Theme
// Element Selector

const body = document.querySelector("body");
const header = document.querySelector(".header");
const left = document.querySelector(".left");
const container = document.querySelector(".container");
const themebtn = document.querySelector(".theme");
const themeIcon = document.querySelector(".themeicn");

// Theme Function

const theme = function () {
  body.classList.toggle("body--dark");
  header.classList.toggle("header--dark");
  left.classList.toggle("left--dark");
  container.classList.toggle("container--dark");
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");
};

// Theme Button

themebtn.addEventListener("click", theme);

// Generate Colors
// Element Selectors

const overlay = document.querySelector(".overlay");
const boxes = document.querySelectorAll(".item");
const text = document.querySelectorAll(".line");
const randomBtn = document.querySelector(".random");
let set1 = ["#"];
let set2 = ["#"];
let set3 = ["#"];
let set4 = ["#"];
let colors = [];
const colorCodes = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Function

const generate = function () {
  for (let i = 1; i <= 6; i++) {
    set1[i] = colorCodes[Math.floor(Math.random() * 16)];
    set2[i] = colorCodes[Math.floor(Math.random() * 16)];
    set3[i] = colorCodes[Math.floor(Math.random() * 16)];
    set4[i] = colorCodes[Math.floor(Math.random() * 16)];
  }

  colors[0] = set1.reduce((partialSum, a) => partialSum + a);
  colors[1] = set2.reduce((partialSum, a) => partialSum + a);
  colors[2] = set3.reduce((partialSum, a) => partialSum + a);
  colors[3] = set4.reduce((partialSum, a) => partialSum + a);

  for (let i = 0; i <= 3; i++) {
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].textContent = colors[i];
    text[i].style.color = colors[i];
  }
};

randomBtn.addEventListener("click", generate);

// Copy Code

for (let i = 0; i <= 3; i++) {
  boxes[i].addEventListener("click", function () {
    overlay.classList.remove("clicked");
    navigator.clipboard.writeText(boxes[i].textContent);
    setTimeout(function () {
      overlay.classList.add("clicked");
    }, 75);
  });
}
