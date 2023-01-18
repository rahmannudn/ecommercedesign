"use strict";
const overlay = document.querySelector(".overlay");
const listMenus = document.querySelector(".list-menus");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
const amount = document.querySelector(".amount");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const amountCartItem = document.querySelector(".amount-card-item");
const btnCart = document.querySelector(".btn-cart");
const productImage = document.querySelector(".product-image");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const btnAddToCart = document.querySelector(".btn-primary");
const cart = document.querySelector(".cart");

let amountItem = 0;
let imageProductIndex = 0;

const displayAmount = () => {
  amount.innerText = amountItem;
};

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

btnPlus.addEventListener("click", () => {
  amountItem++;
  displayAmount();
});

btnMinus.addEventListener("click", () => {
  if (amountItem === 0) return;
  amountItem--;
  displayAmount();
});

btnNext.addEventListener("click", () => {
  if (imageProductIndex === 3) return;
  imageProductIndex++;
  productImage.src = `images/image-product-${imageProductIndex + 1}.jpg`;
});

btnPrev.addEventListener("click", () => {
  if (imageProductIndex === 0) return;
  imageProductIndex--;
  productImage.src = `images/image-product-${imageProductIndex + 1}.jpg`;
});

btnCart.addEventListener("click", (e) => {
  if (cart.classList.contains("hidden")) {
    cart.classList.remove("hidden");
    return;
  }
  cart.classList.add("hidden");
  return;
});
