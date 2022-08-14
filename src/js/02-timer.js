import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  clockface: document.querySelector('#datetime-picker'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

const timer = {
  intervalId: null,
  isActive: false,
  start(future) {
    if (this.isActive) {
      return;
    }
    // const startTime = Date.now();
    const startTime = future;
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const countingTime =  currentTime - startTime;
      const time = convertMs(countingTime);
      if (countingTime < 1000) {
        clearInterval(intervalId);
        
  }
        watchFaceUpdate(time);
    }, 1000);
    console.log(intervalId)
  }
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('please choose a date in the future');
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
    // console.log(selectedDates[0]);
    
    refs.startBtn.addEventListener('click', () => {
      const futureDate = selectedDates[0].getTime();
      console.log()
  timer.start(futureDate);
})
  },
};
refs.startBtn.disabled = true;
flatpickr("#datetime-picker", options);
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
function watchFaceUpdate({ days, hours, minutes, seconds }){
  refs.dataDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataSeconds.textContent = `${seconds}`;
};
// timer.start();

console.log(convertMs(2000));