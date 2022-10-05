import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputData = document.querySelector('#datetime-picker');
const btnStartTimer = document.querySelector('button[data-start]');
const dateDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const textLabel = document.querySelectorAll('.label');

textLabel.forEach(element => {
  element.textContent = element.textContent.toUpperCase();
});

const flatpickr = require('flatpickr');
flatpickr(inputData, {});

inputData.addEventListener('input', onInput);
btnStartTimer.addEventListener('click', onClickStartTimer);
btnStartTimer.setAttribute('disabled', true);

function onInput(e) {
  btnStartTimer.setAttribute('disabled', true);
  console.log();
  if (comparisonDateNum() > 0) {
    btnStartTimer.removeAttribute('disabled');
  }
}

function onClickStartTimer(ev) {
  btnStartTimer.setAttribute('disabled', true);
  const intervalId = setInterval(() => {
    console.log();
    if (!btnStartTimer.hasAttribute('disabled')) {
      clearInterval(intervalId);
      return;
    } else if (comparisonDateNum() === 0) {
      clearInterval(intervalId);
      return;
    }
    const dateUser = name(convertMs(dateInputInMs(inputData.value)));
    setDate(dateUser);
  }, 1000);
}

function name(params) {
  params.days = String(params.days).padStart(2, '0');
  params.hours = String(params.hours).padStart(2, '0');
  params.minutes = String(params.minutes).padStart(2, '0');
  params.seconds = String(params.seconds).padStart(2, '0');
  return params;
}

function setDate(dateUser) {
  dateDays.textContent = dateUser.days;
  dataHours.textContent = dateUser.hours;
  dataMinutes.textContent = dateUser.minutes;
  dataSeconds.textContent = dateUser.seconds;
}

function dateInputInMs(params) {
  return (mSeconds = new Date(params) - new Date());
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function newDateToDay() {
  const date = new Date();
  const getFullYear = date.getFullYear();
  const getMonth = date.getMonth() + 1;
  const getDate = String(date.getDate());
  const toGetDate = getDate.padStart(2, '0');
  return `${getFullYear}-${getMonth}-${toGetDate}`;
}

function numberDate(getDate) {
  const dateNum = getDate.split('-');
  return Number(dateNum.join(''));
}
function comparisonDateNum() {
  const numberDateInput = numberDate(inputData.value);
  const numberNewDate = numberDate(newDateToDay());
  //   console.log(numberDateInput, numberNewDate);
  if (numberDateInput <= numberNewDate) {
    window.alert('Please choose a date in the future');
  }
  return numberDateInput - numberNewDate;
}
