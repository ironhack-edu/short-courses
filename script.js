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

const emoji1InputCheck = document.querySelector("#emoji-1-input-check");
const emoji2InputCheck = document.querySelector("#emoji-2-input-check");
const emoji3InputCheck = document.querySelector("#emoji-3-input-check");
const emoji4InputCheck = document.querySelector("#emoji-4-input-check");
const emoji5InputCheck = document.querySelector("#emoji-5-input-check");
const emoji6InputCheck = document.querySelector("#emoji-6-input-check");
const emoji7InputCheck = document.querySelector("#emoji-7-input-check");
const emoji8InputCheck = document.querySelector("#emoji-8-input-check");

function isEmoji(str) {
  console.log(str);
  var ranges = [
    "(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])", // U+1F680 to U+1F6FF
  ];
  if (str.match(ranges.join("|"))) {
    return true;
  } else {
    return false;
  }
}

// DOM TO ALTER

const circleButtons = document.querySelectorAll(".circle-btn");
const counters = document.querySelectorAll(".counter");

// ACTIVITY 1

emojiOneInput.addEventListener("change", () => {
  if (isEmoji(emojiOneInput.value)) {
    circleButtons[0].innerText = emojiOneInput.value;
    // emoji1InputCheck.innerText = "Nice! Very good job!";
    // emoji1InputCheck.style.color = "lightgreen";
  } else {
    circleButtons[0].innerText = "";
    // emoji1InputCheck.innerText =
    //   "Not quite. Simply copy & paste an emoji here, like ❤️";
    // emoji1InputCheck.style.color = "salmon";
  }
});

emojiTwoInput.addEventListener("change", () => {
  if (isEmoji(emojiTwoInput.value)) {
    circleButtons[1].innerText = emojiTwoInput.value;
    // emoji2InputCheck.innerText = "Nice! Very good job!";
    // emoji2InputCheck.style.color = "lightgreen";
  } else {
    circleButtons[1].innerText = "";
    // emoji2InputCheck.innerText =
    //   "Not quite. Simply copy & paste an emoji here, like 🔥";
    // emoji2InputCheck.style.color = "salmon";
  }
});

emojiThreeInput.addEventListener("change", () => {
  if (isEmoji(emojiThreeInput.value)) {
    circleButtons[2].innerText = emojiThreeInput.value;
    // emoji3InputCheck.innerText = "Nice! Very good job!";
    // emoji3InputCheck.style.color = "lightgreen";
  } else {
    circleButtons[2].innerText = "";
    // emoji3InputCheck.innerText =
    //   "Not quite. Simply copy & paste an emoji here, like ✨";
    // emoji3InputCheck.style.color = "salmon";
  }
});

// ACTIVITY 2

const isPixel = (input) => {
  console.log(/\d/.test(input), input.includes("px"));
  return /\d/.test(input) && input.includes("px");
};

// widthInput.addEventListener("change", () => {
//   if (isPixel(widthInput.value)) {
//     emoji4InputCheck.innerText = "Nice! Very good job!";
//     emoji4InputCheck.style.color = "lightgreen";
//   } else {
//     emoji4InputCheck.innerText =
//       "Not quite. Simply add a value in pixels here, like 80px, don't forget to add the 'px' at the end and no spaces";
//     emoji4InputCheck.style.color = "salmon";
//   }
// }); 

// heightInput.addEventListener("change", () => {
//   if (isPixel(heightInput.value)) {
//     emoji5InputCheck.innerText = "Nice! Very good job!";
//     emoji5InputCheck.style.color = "lightgreen";
//   } else {
//     emoji5InputCheck.innerText =
//       "Not quite. Simply add a value in pixels here, like 80px, don't forget to add the 'px' at the end and no spaces";
//     emoji5InputCheck.style.color = "salmon";
//   }
// }); 

circleButtons.forEach((eachCircle) => {
  eachCircle.addEventListener("mouseenter", () => {
    eachCircle.style.width = widthInput.value;
    eachCircle.style.height = heightInput.value;
    eachCircle.style.backgroundColor = backgroundColorInput.value;
  });
});

circleButtons.forEach((eachCircle) => {
  eachCircle.addEventListener("mouseleave", () => {
    eachCircle.style.width = "60px";
    eachCircle.style.height = "60px";
    eachCircle.style.backgroundColor = "white";
  });
});

// ACTIVITY 3

circleButtons.forEach((eachCircle, index) => {
  eachCircle.addEventListener("click", () => {
    let newValue =
      Number(counters[index].innerText) + Number(counterInput.value);
    counters[index].innerText = newValue;
  });
});

// ACTIVITY 4

const canvas = document.querySelector("#custom_canvas");

const jsConfetti = new JSConfetti({ canvas });

circleButtons.forEach((eachCircle) => {
  eachCircle.addEventListener("click", () => {
    const cleanconfettiInput = confettiInput.value
      .split("")
      .filter((e) => e !== " ")
      .join("");
    cleanconfettiInput === "addConfetti()" && jsConfetti.addConfetti();
  });
});
