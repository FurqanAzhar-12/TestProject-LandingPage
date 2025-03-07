document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navList = nav.getElementsByTagName("ul");
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("nxt-btn");

  const pic = [
    "./assets/images/slider.jpg",
    "./assets/images/slider2.jpg",
    "./assets/images/slider3.jpg",
  ];
  let index = 0;

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navList[0].classList.toggle("show");
  });

  nextButton.addEventListener("click", () => {
    index = (index + 1) % 3;
    slide.getElementsByTagName("img")[0].src = pic[index];
  });
  prevButton.addEventListener("click", () => {
    index = (index - 1 + 3) % 3;
    slide.getElementsByTagName("img")[0].src = pic[index];
  });
});
