const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const burgerSpan = document.querySelector(".burger__item");

export const activateBurger = () => {
  document.addEventListener("DOMContentLoaded", () => {
    burger.addEventListener("click", () => {
      burger.classList.toggle("burger--active");
      nav.classList.toggle("nav--expanded");
      burgerSpan.classList.toggle("burger__item--active");
    });
  });
};
