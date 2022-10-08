import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();
  let {
    elements: { delay, step, amount },
  } = evt.currentTarget;
  let elemDelay = Number(delay.value);
  let elemStep = Number(step.value);
  let elemAmount = Number(amount.value);
  if (elemDelay < 0 || elemStep < 0 || elemAmount <= 0) {
    alert('Date must be positive');
    return;
  }
  for (let position = 1; position <= elemAmount; position++) {
    createPromise(position, elemDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    elemDelay += elemStep;
  }
}

// const form = document.querySelector('.form');
// const btnSub = form.children[3];
// form.addEventListener('submit', onClick);
// btnSub.addEventListener('click', onClick);

// function onClick(e) {
//   e.preventDefault();
//   const delay = form.elements.delay.value;
//   const amount = Number(form.elements.amount.value);
//   const step = form.elements.step.value;

//   let sumStep = Number(delay);
//   let position = 1;
//   const intervalId = setInterval(() => {
//     if (position > amount) {
//       clearInterval(intervalId);
//       return;
//     }
//     createPromise(position, sumStep);
//     position++;
//     sumStep += Number(step);
//   }, sumStep);
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//   }
// }
