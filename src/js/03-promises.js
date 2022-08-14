import Notiflix from 'notiflix';
const refs = {
  onForm: document.querySelector('form'),
  delayFirst: document.querySelector('input[name="delay"]'),
  stepDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.onForm.addEventListener('submit', e => {
  e.preventDefault();
  const elements = e.target.elements;
  const amountValues = elements.amount.value;
  const delayValues = Number(elements.delay.value);
  const stepValues = Number(elements.step.value);
  let delayStepCounter = 0;
  let promisePosition = 0;

  for (let i = 0; i < amountValues; i += 1){
    promisePosition += 1;
    delayStepCounter = delayValues + stepValues * i;
    createPromise(promisePosition, delayStepCounter).then(sucsesMessage => {
    Notiflix.Notify.success(sucsesMessage);
  })
  .catch((rejectMessage) => {
    
    Notiflix.Notify.failure(rejectMessage);
  });
    
  }
});

function createPromise(position, delay) {

  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);

      }
      promisCounter = 0;
    }, delay);
  })
  
  
};
//  createPromise(2, 1500)

//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
    
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });




