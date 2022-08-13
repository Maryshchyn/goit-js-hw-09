
import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const btnStart = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
    // console.log(selectedDates[0]);
  },
};

btnStart.disabled = true;
flatpickr("#datetime-picker", options);

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  clockface: document.querySelector('#datetime-picker'),
  dataDays: document.querySelector('data-days'),
  dataHours: document.querySelector('data-hours'),
  dataMinutes: document.querySelector('data-minutes'),
  dataSeconds: document.querySelector('data-seconds'),
};



refs.startBtn.addEventListener('click', () => {
  timer.start();
  
  
})

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
  
};

const timer = {
  intervalId: null,
  isActive: false,
  
  start() {
    if (this.isActive) {
      
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();

      const countingTime = currentTime - startTime;
      const { days, hours, minutes, seconds } = convertMs(countingTime)
      
      console.log(`${ days } ${ hours } ${ minutes } ${ seconds } `)
    }, 1000);
     
    
  }
  
};
function watchFaceUpdate(){
  refs.dataDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataDays.textContent = `${seconds}`;
  
};
watchFaceUpdate()

timer.start();



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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
