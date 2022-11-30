"use strict";

//Burger PopUp-Menu

//Selectors
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");
const popUpMenu = document.querySelector(".popup-menu");
const close = document.querySelector(".exit-wraper");

//Functions
const showPopUp = function () {
  overlay.classList.remove("hidden");
  popUpMenu.classList.remove("hidden");
};

const closePopUp = function () {
  overlay.classList.add("hidden");
  popUpMenu.classList.add("hidden");
};

burgerMenu.addEventListener("click", showPopUp);
overlay.addEventListener("click", closePopUp);
close.addEventListener("click", closePopUp);

//Testimonials PopUp

const testimonialClick = document.querySelector(".wraper__testimonials");
const bigTestimonial = document.querySelector(".big-testimonial");
const closeTest = document.querySelector(".x-icon-position");

const openBigTestim = function (e) {
  const smalTestim = e.target.closest("img");
  if (!smalTestim) return;
  overlay.classList.remove("hidden");
  bigTestimonial.classList.remove("hidden");
};

const closeBigtestim = function () {
  overlay.classList.add("hidden");
  bigTestimonial.classList.add("hidden");
};

testimonialClick.addEventListener("click", openBigTestim);
overlay.addEventListener("click", closeBigtestim);
closeTest.addEventListener("click", closeBigtestim);

//Slider Pets

const circleButtons = document.querySelectorAll(".button-circle");
const upperContainer = document.querySelector(".upper__pets__card");
const bottomContainer = document.querySelector(".bottom__pets__card");
const pandas = document.querySelector(".pandas");
const eagles = document.querySelector(".eagles");
const cheetahs = document.querySelector(".cheetahs");
const gorillas = document.querySelector(".gorillas");
const alligators = document.querySelector(".alligators");
const penguins = document.querySelector(".penguins");
const cheetahs1000 = document.querySelector(".cheetahs__1000");
const penguins1000 = document.querySelector(".penguins__1000");

//for 1600px
const panda1600 = `
<div class="pets-card">
  <img
    class="pets-image"
    src="assets/images/pandas.png"
    alt="pandas"
  />
  <div class="pets-text">
    <p class="pets-text-bold">Giant Panda</p>
    <p class="pets-text-plain">Native to South West China</p>
  </div>
</div>`;
const eagles1600 = `<div class="pets-card">
<img
  class="pets-image"
  src="assets/images/Eagles.png"
  alt="eagles"
/>
<div class="pets-text">
  <p class="pets-text-bold">Eagles</p>
  <p class="pets-text-plain">Native to South America</p>
</div>
</div>`;
const gorillas1600 = `<div class="pets-card">
<img
  class="pets-image"
  src="assets/images/Gorillas.png"
  alt="gorillas"
/>
<div class="pets-text">
  <p class="pets-text-bold">Gorillas</p>
  <p class="pets-text-plain">Native to Congo</p>
</div>
</div>`;
const sloth1600 = `<div class="pets-card">
<img
  class="pets-image"
  src="assets/images/Sloth.png"
  alt="sloth"
/>
<div class="pets-text">
  <p class="pets-text-bold">Two-Toed Sloth</p>
  <p class="pets-text-plain">Maesoamerica, South America</p>
</div>
</div>`;
const cheetahs1600 = `<div class="pets-card">
<img
  class="pets-image"
  src="assets/images/Cheetahs.png"
  alt="cheetahs"
/>
<div class="pets-text">
  <p class="pets-text-bold">Cheetahs</p>
  <p class="pets-text-plain">Native to Africa</p>
</div>
</div>`;

const penguins1600 = `<div class="pets-card">
<img
  class="pets-image"
  src="assets/images/Penguins.png"
  alt="penguin"
/>
<div class="pets-text">
  <p class="pets-text-bold">Penguins</p>
  <p class="pets-text-plain">Native to Antarctica</p>
</div>
</div>`;

//CHeeking for 1000 and 1600
const petsContainer1000 = document.querySelector(
  ".container-pets-img-but__adapt-1000"
);
const checkhWidthPetCont = document.querySelector(".container-pets");
const petsContainer1600 = document.querySelector(".container-pets-img");

//Slider queue

const sliderQueue = [pandas, eagles, cheetahs, gorillas, alligators, penguins];

const sliderQueue1600 = [
  panda1600,
  eagles1600,
  gorillas1600,
  sloth1600,
  cheetahs1600,
  penguins1600,
];

//Add Eventlisterner to each button

let counter = 1;
let animate = false;

for (let i = 0; i < circleButtons.length; i++) {
  circleButtons[i].addEventListener("click", function () {
    if (animate) {
      return;
    }
    animate = true;
    for (let card of sliderQueue) {
      if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
      }
    }
    let randomFirstCard = Math.floor(Math.random() * 6);
    if (randomFirstCard === counter) {
      randomFirstCard++;
    }
    counter = randomFirstCard;
    upperContainer.append(sliderQueue[randomFirstCard % 6]);
    upperContainer.append(sliderQueue[(randomFirstCard + 1) % 6]);
    bottomContainer.append(sliderQueue[(randomFirstCard + 2) % 6]);
    bottomContainer.append(sliderQueue[(randomFirstCard + 3) % 6]);

    if (i === 1 || i === 3) {
      upperContainer.classList.add("move-left");
      setTimeout(function () {
        upperContainer.classList.remove("move-left");
        animate = false;
      }, 400);
      bottomContainer.classList.add("move-left");
      setTimeout(function () {
        bottomContainer.classList.remove("move-left");
        animate = false;
      }, 400);
    } else {
      upperContainer.classList.add("move-right");
      setTimeout(function () {
        upperContainer.classList.remove("move-right");
        animate = false;
      }, 400);
      bottomContainer.classList.add("move-right");
      setTimeout(function () {
        bottomContainer.classList.remove("move-right");
        animate = false;
      }, 400);
    }

    if (petsContainer1000.offsetWidth >= 1000) {
      cheetahs1000.style.display = "none";
      penguins1000.style.display = "none";
      upperContainer.append(sliderQueue[(randomFirstCard + 4) % 6]);
      bottomContainer.append(sliderQueue[(randomFirstCard + 5) % 6]);
    } else if (petsContainer1000.offsetWidth >= 640) {
      sliderQueue[(randomFirstCard + 4) % 6].classList.add("hidden");
      sliderQueue[(randomFirstCard + 5) % 6].classList.add("hidden");
    }

    if (checkhWidthPetCont.offsetWidth >= 1600) {
      petsContainer1600.innerHTML = "";
      petsContainer1600.innerHTML =
        sliderQueue1600[randomFirstCard % 6] +
        sliderQueue1600[(randomFirstCard + 1) % 6] +
        sliderQueue1600[(randomFirstCard + 2) % 6] +
        sliderQueue1600[(randomFirstCard + 3) % 6] +
        sliderQueue1600[(randomFirstCard + 4) % 6] +
        sliderQueue1600[(randomFirstCard + 5) % 6];

      if (i === 1 || i === 3) {
        petsContainer1600.classList.add("move-left");
        setTimeout(function () {
          petsContainer1600.classList.remove("move-left");
          animate = false;
        }, 400);
      } else {
        petsContainer1600.classList.add("move-right");
        setTimeout(function () {
          petsContainer1600.classList.remove("move-right");
          animate = false;
        }, 400);
      }
    }
  });
}

window.addEventListener("resize", function () {
  if (petsContainer1000.offsetWidth <= 1000) {
    sliderQueue[(counter + 4) % 6].classList.add("hidden");
    sliderQueue[(counter + 5) % 6].classList.add("hidden");
  }
  if (petsContainer1000.offsetWidth >= 1000) {
    for (let card of sliderQueue) {
      if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
      }
    }
    upperContainer.innerHTML = "";
    upperContainer.append(sliderQueue[counter % 6]);
    upperContainer.append(sliderQueue[(counter + 1) % 6]);
    upperContainer.append(sliderQueue[(counter + 4) % 6]);
    bottomContainer.innerHTML = "";
    bottomContainer.append(sliderQueue[(counter + 2) % 6]);
    bottomContainer.append(sliderQueue[(counter + 3) % 6]);
    bottomContainer.append(sliderQueue[(counter + 5) % 6]);
  }
  if (petsContainer1000.offsetWidth < 1600) {
    testimonialsArr.forEach((el) => {
      el.classList.add("hidden");
    });
    testimonialsArr[1].classList.remove("hidden");
    testimonialsArr[2].classList.remove("hidden");
    testimonialsArr[3].classList.remove("hidden");
    testimonialSlider.value = "0";
    counterTestim = 0;
  }
  if (checkhWidthPetCont.offsetWidth >= 1600) {
    testimonialsArr.forEach((el) => {
      el.classList.add("hidden");
    });
    testimonialsArr[0].classList.remove("hidden");
    testimonialsArr[1].classList.remove("hidden");
    testimonialsArr[2].classList.remove("hidden");
    testimonialsArr[3].classList.remove("hidden");
    testimonialSlider.value = "0";
    counterTestim = 0;
  }
});

//Testimonials slider 1600 - 1000
const testimonialSlider = document.querySelector(".inp-range");
const testimonialsArr = document.querySelectorAll(".testimon-img");
const milkaRiksha = document.querySelector(".mila-riksha");
const containerTestimonials = document.querySelector(".cont-testimon");

//Change testimonial
let counterTestim = 0;
testimonialSlider.addEventListener("input", function () {
  let sliderValue = +testimonialSlider.value;

  console.log(sliderValue);

  if (
    petsContainer1000.offsetWidth >= 1000 &&
    petsContainer1000.offsetWidth <= 1600
  ) {
    if (sliderValue > counterTestim) {
      counterTestim = sliderValue;
      testimonialsArr[counterTestim].classList.add("hidden");
      testimonialsArr[counterTestim + 3].classList.remove("hidden");
      testimonialsArr[counterTestim + 3].classList.add("animation");
    } else {
      counterTestim = sliderValue;
      testimonialsArr[counterTestim + 4].classList.add("hidden");
      testimonialsArr[counterTestim + 1].classList.remove("hidden");
      testimonialsArr[counterTestim + 1].classList.add("animation");
    }
  } else {
    if (sliderValue > counterTestim) {
      counterTestim = sliderValue;
      testimonialsArr[counterTestim - 1].classList.add("hidden");
      testimonialsArr[counterTestim + 3].classList.remove("hidden");
      testimonialsArr[counterTestim + 3].classList.add("animation");
    } else {
      counterTestim = sliderValue;
      testimonialsArr[counterTestim + 4].classList.add("hidden");
      testimonialsArr[counterTestim].classList.remove("hidden");
      testimonialsArr[counterTestim].classList.add("animation");
    }
  }
});
