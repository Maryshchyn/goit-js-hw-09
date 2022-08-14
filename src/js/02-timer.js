import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
import { Notify } from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  clockface: document.querySelector('#datetime-picker'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notify.failure('please choose a date in the future');
      refs.startBtn.disabled = true;

      return;
    } else {
      refs.startBtn.disabled = false;
    }

    refs.startBtn.addEventListener('click', startTimer(selectedDates[0]));
  },
};
refs.startBtn.disabled = true;

flatpickr('#datetime-picker', options);

function startTimer(futureDate) {
  let intervalId = null;
  let isActive = false;

  if (isActive) {
    return;
  }

  isActive = true;
  const futureTime = futureDate.getTime();

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = futureTime - currentTime;
    const timeComponents = convertMs(deltaTime);

    if (deltaTime < 1000) {
      clearInterval(intervalId);
    }
    // watchFaceUpdate(time);
    console.log(Object.entries(timeComponents).forEach());
    Object.entries(timeComponents).forEach(([name, value]) => {
      document.querySelector([`data-${name}`]).textContent = addLeadingZero(value);
    }, 1000);
  });
}

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
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}