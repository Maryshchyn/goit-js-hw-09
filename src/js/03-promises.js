import Notiflix from 'notiflix';
const refs = {
  onForm: document.querySelector('form'),
  delayFirst: document.querySelector('input[name="delay"]'),
  stepDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.button.addEventListener('submit', createPromise,);


function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay);
  })
  
  
};
 createPromise(2, 1500)

  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });




