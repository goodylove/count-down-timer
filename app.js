const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const paragraph = document.querySelector(".para");

// get current time  and target  time
const currentYearTime = new Date().getFullYear();
const countDownTime = new Date(`may 1 ${currentYearTime} 00:00:00`);

// get the difference between current time and target time

function upDateCountDown() {
  const currentTime = new Date();
  const theDiffBtwTime = countDownTime - currentTime;
  let currentDay = Math.floor(theDiffBtwTime / 1000 / 60 / 60 / 24);
  let currentHour = Math.floor(theDiffBtwTime / 1000 / 60 / 60) % 24;
  let currentMinute = Math.floor(theDiffBtwTime / 1000 / 60) % 60;
  let currentSecond = Math.floor(theDiffBtwTime / 1000) % 60;

  currentHour = currentHour < 10 ? "0" + currentHour : currentHour;
  currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
  currentSecond = currentSecond < 10 ? "0" + currentSecond : currentSecond;
  day.innerHTML = currentDay;
  hour.innerHTML = currentHour;
  minute.innerHTML = currentMinute;
  second.innerHTML = currentSecond;

  if (theDiffBtwTime < 0) {
    endCountDown();
    paragraph.textContent = " Welcome to May 1st 2023";
  }
}

function endCountDown() {
  day.innerHTML = "00";
  hour.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
}
setInterval(upDateCountDown, 1000);

// function startCounting() {
//   if (theDiffBtwTime > 0) {
//     setInterval(upDateCountDown, 1000);
//   } else {
//     endCountDown();
//   }
// }
// setInterval(startCounting, 1000);
