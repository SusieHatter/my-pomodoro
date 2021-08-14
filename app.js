const TOTAL_MIN = 25;
const TOTAL_SEC = 60;
const MINUTE_VALUE = 1000;
const SECOND_VALUE = 100;

function createSecondTile(second) {
  const secondTile = document.createElement("div");
  secondTile.classList.add("second-tile");
  setTimeout(function () {
    secondTile.classList.add("second-tile-passed");
  }, SECOND_VALUE * second);
  return secondTile;
}

function createMinuteTile(minute) {
  const minuteTile = document.createElement("div");

  for (let second = 1; second <= TOTAL_SEC; second++) {
    const secondTile = createSecondTile(second);
    minuteTile.appendChild(secondTile);
  }

  minuteTile.classList.add("minute-tile");
  setTimeout(function () {
    minuteTile.classList.add("minute-tile-passed");
  }, MINUTE_VALUE * minute);
  return minuteTile;
}

const timerEl = document.getElementById("timer");

for (let minute = 1; minute <= TOTAL_MIN; minute++) {
  const minuteTile = createMinuteTile(minute);
  timerEl.appendChild(minuteTile);
}
