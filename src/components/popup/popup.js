const demoStart = document.querySelector(".button--open-modal");
const demoStop = document.querySelector(".button--close-modal");
const body = document.querySelector("body");
const popup = document.querySelector(".popup");

export const activatePopup = () => {
  document.addEventListener("DOMContentLoaded", () => {
    demoStart.addEventListener("click", () => {
      popup.classList.toggle("popup--open");
      body.classList.toggle("scroll-off");
    });

    demoStop.addEventListener("click", () => {
      popup.classList.remove("popup--open");
      body.classList.remove("scroll-off");
    });
  });
};
