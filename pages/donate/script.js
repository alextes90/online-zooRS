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

//Working with line steps
const line = document.querySelector(".line");
const stepArr = document.querySelectorAll(".step__input");
const inputDonate = document.querySelector(".input-num");
const lineItemArr = document.querySelectorAll(".line-item");

line.addEventListener("change", function (e) {
  const stepValue = e.target.closest(".line-item");
  stepArr.forEach((el) => el.classList.remove("step-border"));
  if (!stepValue) return;
  console.log(stepValue.value);
  if (stepValue.value === "25") {
    stepArr[stepArr.length - 1].classList.add("step-border");
    inputDonate.value = 25;
  }
  if (stepValue.value === "50") {
    stepArr[stepArr.length - 2].classList.add("step-border");
    inputDonate.value = 50;
  }
  if (stepValue.value === "100") {
    stepArr[stepArr.length - 3].classList.add("step-border");
    inputDonate.value = 100;
  }
  if (stepValue.value === "250") {
    stepArr[stepArr.length - 4].classList.add("step-border");
    inputDonate.value = 250;
  }
  if (stepValue.value === "500") {
    stepArr[stepArr.length - 5].classList.add("step-border");
    inputDonate.value = 500;
  }
  if (stepValue.value === "1000") {
    stepArr[stepArr.length - 6].classList.add("step-border");
    inputDonate.value = 1000;
  }
  if (stepValue.value === "2000") {
    stepArr[stepArr.length - 7].classList.add("step-border");
    inputDonate.value = 2000;
  }
  if (stepValue.value === "5000") {
    stepArr[stepArr.length - 8].classList.add("step-border");
    inputDonate.value = 5000;
  }
});

inputDonate.addEventListener("input", function () {
  if (inputDonate.value === "25") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 1].classList.add("step-border");
    lineItemArr[lineItemArr.length - 1].checked = true;
    return;
  }
  if (inputDonate.value === "50") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 2].classList.add("step-border");
    lineItemArr[lineItemArr.length - 2].checked = true;
    return;
  }
  if (inputDonate.value === "100") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 3].classList.add("step-border");
    lineItemArr[lineItemArr.length - 3].checked = true;
    return;
  }
  if (inputDonate.value === "250") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 4].classList.add("step-border");
    lineItemArr[lineItemArr.length - 4].checked = true;
    return;
  }
  if (inputDonate.value === "500") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 5].classList.add("step-border");
    lineItemArr[lineItemArr.length - 5].checked = true;
    return;
  }
  if (inputDonate.value === "1000") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 6].classList.add("step-border");
    lineItemArr[lineItemArr.length - 6].checked = true;
    return;
  }
  if (inputDonate.value === "2000") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 7].classList.add("step-border");
    lineItemArr[lineItemArr.length - 7].checked = true;
    return;
  }
  if (inputDonate.value === "5000") {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    stepArr[stepArr.length - 8].classList.add("step-border");
    lineItemArr[lineItemArr.length - 8].checked = true;
    return;
  } else {
    stepArr.forEach((el) => el.classList.remove("step-border"));
    lineItemArr.forEach((el) => (el.checked = false));
  }
});
