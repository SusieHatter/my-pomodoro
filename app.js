const TOTAL_MIN = 25;
const MINUTE_VALUE = 60000;

function createMinuteTile(minute) {
  const minuteTile = document.createElement("div");
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
