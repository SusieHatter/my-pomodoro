const TOTAL_MIN = 25;
const TOTAL_SEC = 60;
const SECOND_VALUE = 100;
const MINUTE_VALUE = SECOND_VALUE * 60;

function createSecondTile(second) {
  console.log(second);
  const secondTile = document.createElement("div");
  secondTile.classList.add("second-tile");
  setTimeout(function () {
    secondTile.classList.add("second-tile-active");
  }, SECOND_VALUE * (second - 1));
  setTimeout(function () {
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

const timerEl = document.getElementById("timer");

for (let minute = 1; minute <= TOTAL_MIN; minute++) {
  const minuteTile = createMinuteTile(minute);
  timerEl.appendChild(minuteTile);
}
