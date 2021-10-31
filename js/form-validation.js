import { adForm } from './form-control.js';
import { getSinsynchronizeTime } from './utils.js';

let priceForHouse = 1000;
const TITLE_MIN_LENGTH = 30;
const PRICE_MAX = 1000000;
const PRICE_MIN_BUNGALOW = 0;
const PRICE_MIN_FLAT = 1000;
const PRICE_MIN_HOTEL = 3000;
const PRICE_MIN_HOUSE = 5000;
const PRICE_MIN_PALACE = 10000;

const formTitle = adForm.querySelector('#title');
const formPrice = adForm.querySelector('#price');
const typeOfHouse = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const placesNumber = adForm.querySelector('#capacity');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

adForm.addEventListener('input', (evt) => {
  // валидация поля загловка объявления
  if (evt.target === formTitle) {
    const valueLength = formTitle.value.length;
    if (valueLength < TITLE_MIN_LENGTH) {
      formTitle.setCustomValidity(`Еще ${TITLE_MIN_LENGTH - valueLength} символов`);
    } else {
      formTitle.setCustomValidity('');
    }
    formTitle.reportValidity();
  }
  // валидация полей тип жилья и  цены за ночь
  if (evt.target === typeOfHouse) {
    switch (typeOfHouse.value) {
      case 'bungalow':
        priceForHouse = PRICE_MIN_BUNGALOW;
        break;
      case 'flat':
        priceForHouse = PRICE_MIN_FLAT;
        break;
      case 'hotel':
        priceForHouse = PRICE_MIN_HOTEL;
        break;
      case 'house':
        priceForHouse = PRICE_MIN_HOUSE;
        break;
      case 'palace':
        priceForHouse = PRICE_MIN_PALACE;
        break;
    }
    formPrice.placeholder = priceForHouse;
  }
  if (evt.target === formPrice) {
    const valueLength = formTitle.value.length;
    if (valueLength > PRICE_MAX) {
      formPrice.setCustomValidity(`Максимальное значение должно быть меньше ${PRICE_MAX}`);
    }
    if (valueLength < priceForHouse) {
      formPrice.setCustomValidity(`Минимальное значение должно быть больше ${priceForHouse}`);
    }
    formPrice.reportValidity();
  }
  // валидация полей количество комнат и количества мест
  for (let counter = 0; counter < placesNumber.children.length; counter++) {
    placesNumber.children[counter].setAttribute('disabled', 'disabled');
  }
  if (evt.target === roomNumber) {
    switch (true) {
      case roomNumber.querySelector('[value="1"]').selected:
        placesNumber.querySelector('[value="1"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="1"]').selected = true;
        break;
      case roomNumber.querySelector('[value="2"]').selected:
        placesNumber.querySelector('[value="1"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="2"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="2"]').selected = true;
        break;
      case roomNumber.querySelector('[value="3"]').selected:
        placesNumber.querySelector('[value="1"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="2"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="3"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="2"]').selected = true;
        break;
      case roomNumber.querySelector('[value="100"]').selected:
        placesNumber.querySelector('[value="0"]').removeAttribute('disabled');
        placesNumber.querySelector('[value="0"]').selected = true;
        break;
    }
  }
  // синхронизация времени заезда и выезда
  getSinsynchronizeTime(evt, timeIn, timeOut);
  getSinsynchronizeTime(evt, timeOut, timeIn);
});
