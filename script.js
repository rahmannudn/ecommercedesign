"use strict";
const overlay = document.querySelector(".overlay");
const listMenus = document.querySelector(".list-menus");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", function (e) {
  const element = e.target;
  if (!element.classList.contains("active")) {
    element.classList.add("active");
    listMenus.style.display = "block";
    overlay.style.display = "block";
    element.src = "images/icon-close.svg";
    body.style.overflow = "hidden";
    return;
  }
  element.classList.remove("active");
  listMenus.style.display = "none";
  overlay.style.display = "none";
  element.src = "images/icon-menu.svg";
  body.style.overflow = "auto";
});
