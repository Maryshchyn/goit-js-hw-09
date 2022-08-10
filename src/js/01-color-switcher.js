function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const TIMER_DELAY = 1000;


const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;

btnStart.addEventListener("click", changeColor)
btnStop.addEventListener("click", stopChangeColor)

function changeColor() {
  timerId = setInterval(() => {
     document.body.style.background = getRandomHexColor();
  }, TIMER_DELAY);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function stopChangeColor() {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
