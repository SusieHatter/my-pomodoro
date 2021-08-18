const TOTAL_MIN = 25;
const TOTAL_SEC = 60;
const SECOND_VALUE = 1000;
const MINUTE_VALUE = SECOND_VALUE * 60;

const TICK = new Audio("tick.wav");

function createSecondTile(second) {
  const secondTile = document.createElement("div");
  secondTile.classList.add("second-tile");
  setTimeout(function () {
    secondTile.classList.add("second-tile-active");
  }, SECOND_VALUE * (second - 1));
  setTimeout(function () {
    TICK.play();
    secondTile.classList.remove("second-tile-active");
    secondTile.classList.add("second-tile-passed");
  }, SECOND_VALUE * second);
  return secondTile;
}

function createMinuteTile(minute) {
  const minuteTile = document.createElement("div");
  for (let second = 1; second <= TOTAL_SEC; second++) {
    const secondTile = createSecondTile(second + (minute - 1) * TOTAL_SEC);
    minuteTile.appendChild(secondTile);
  }
  minuteTile.classList.add("minute-tile");
  setTimeout(function () {
    minuteTile.classList.add("minute-tile-active");
  }, MINUTE_VALUE * (minute - 1));
  setTimeout(function () {
    minuteTile.classList.remove("minute-tile-active");
    minuteTile.classList.add("minute-tile-passed");
  }, MINUTE_VALUE * minute);
  return minuteTile;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeWrite(el, text, interval) {
  for (let i = 0; i < text.length; i++) {
    el.innerHTML += text.charAt(i);
    await wait(interval);
  }
}

const timerEl = document.getElementById("timer");
for (let minute = 1; minute <= TOTAL_MIN; minute++) {
  const minuteTile = createMinuteTile(minute);
  timerEl.appendChild(minuteTile);
}

const titleEl = document.getElementById("main-title");
const titleText = "Time to Focus!";
const typeInteral = 100;
typeWrite(titleEl, titleText, typeInteral);
