import Glide from "@glidejs/glide";

export const slider = () => {
  let sliders = document.getElementsByClassName("glide");

  for (let i = 0; i < sliders.length; i++) {
    let glide = new Glide(sliders[i], {
      type: "carousel",
      startAt: 0,
      autoplay: 2000,
      perView: 1,
    });

    glide.mount();
  }
};
