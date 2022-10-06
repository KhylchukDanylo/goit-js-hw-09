import Notiflix from 'Notiflix';

const form = document.querySelector('.form');
const btnSub = form.children[3];
form.addEventListener('submit', onClick);
btnSub.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  const delay = form.elements.delay.value;
  const amount = Number(form.elements.amount.value);
  const step = form.elements.step.value;

  let sumStep = Number(delay);
  let position = 1;
  const intervalId = setInterval(() => {
    if (position > amount) {
      clearInterval(intervalId);
      return;
    }
    createPromise(position, sumStep);
    position++;
    sumStep += Number(step);
  }, sumStep);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  }
}
