// USER INPUTS

const emojiOneInput = document.querySelector("#emoji-one-input");
const emojiTwoInput = document.querySelector("#emoji-two-input");
const emojiThreeInput = document.querySelector("#emoji-three-input");

const widthInput = document.querySelector("#style-width-input");
const heightInput = document.querySelector("#style-height-input");
const backgroundColorInput = document.querySelector(
  "#style-background-color-input"
);

const counterInput = document.querySelector("#counter-input");

const confettiInput = document.querySelector("#confetti-function-input");

// DOM TO ALTER

const circleButtons = document.querySelectorAll(".circle-btn");
const counters = document.querySelectorAll(".counter");

// ACTIVITY 1

emojiOneInput.addEventListener("change", () => {
  circleButtons[0].innerText = emojiOneInput.value;
});

emojiTwoInput.addEventListener("change", () => {
  circleButtons[1].innerText = emojiOneInput.value;
});

emojiThreeInput.addEventListener("change", () => {
  circleButtons[2].innerText = emojiOneInput.value;
});

// ACTIVITY 2

circleButtons.forEach((eachCircle) => {
  eachCircle.addEventListener("mouseenter", () => {
    eachCircle.style.width = widthInput.value;
    eachCircle.style.height = heightInput.value;
    eachCircle.style.backgroundColor = backgroundColorInput.value;
  });
});

circleButtons.forEach((eachCircle) => {
  eachCircle.addEventListener("mouseleave", () => {
    eachCircle.style.width = "5px";
    eachCircle.style.height = "5px";
    eachCircle.style.backgroundColor = "white";
  });
});

// ACTIVITY 3

circleButtons.forEach((eachCircle, index) => {
  eachCircle.addEventListener("click", () => {
    let newValue = Number(counters[index].innerText) + Number(counterInput.value);
    counters[index].innerText = newValue
  });
});

// ACTIVITY 4

const canvas = document.querySelector("#custom_canvas");

const jsConfetti = new JSConfetti({ canvas });


circleButtons.forEach((eachCircle) => {
  eachCircle.addEventListener("click", () => {
    const cleanconfettiInput = confettiInput.value.split("").filter(e => e !== " ").join("")
    cleanconfettiInput === "addConfetti()" && jsConfetti.addConfetti();
  });
});
