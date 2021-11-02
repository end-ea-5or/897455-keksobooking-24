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
    const fieldValue = formPrice.value;
    switch (true) {
      case (fieldValue < priceForHouse && fieldValue !== 55555):
        formPrice.setCustomValidity(`Цена должна быть больше ${priceForHouse}`);
        break;
      case (fieldValue > PRICE_MAX && fieldValue !== 55555):
        formPrice.setCustomValidity(`Цена должна быть меньше ${PRICE_MAX}`);
        break;
      default:
        formPrice.setCustomValidity('');
        break;
    }
    formPrice.reportValidity();
  }
  // валидация полей количество комнат и количества мест
  if (evt.target === roomNumber || evt.target === placesNumber) {
    roomNumber.setCustomValidity('');
    placesNumber.setCustomValidity('');
    switch (true) {
      case (roomNumber.value === '1' && placesNumber.value !== '1'):
        evt.target.setCustomValidity('Для 1 комнаты количество мест может быть только для 1 гостя');
        break;
      case (roomNumber.value === '2' && placesNumber.value === '3'):
        evt.target.setCustomValidity('Для 2 комнат количество мест может быть для 1 или 2 гостей');
        break;
      case (roomNumber.value === '2' && placesNumber.value === '0'):
        evt.target.setCustomValidity('Для 2 комнат количество мест может быть для 1 или 2 гостей');
        break;
      case (roomNumber.value === '3' && placesNumber.value === '0'):
        evt.target.setCustomValidity('Для 3 комнат количество мест может быть для 1, 2 или 3 гостей');
        break;
      case (roomNumber.value === '100' && placesNumber.value !== '0'):
        evt.target.setCustomValidity('Для 100 комнат количество мест - не для гостей');
        break;
      default:
        break;
    }
    evt.target.reportValidity();
  }
  // синхронизация времени заезда и выезда
  getSinsynchronizeTime(evt, timeIn, timeOut);
  getSinsynchronizeTime(evt, timeOut, timeIn);
});
