import { getSinsynchronizeTime } from './utils.js';

const TITLE_MIN_LENGTH = 30;
const PRICE_MAX = 1000000;
const PRICE_MIN_BUNGALOW = 0;
const PRICE_MIN_FLAT = 1000;
const PRICE_MIN_HOTEL = 3000;
const PRICE_MIN_HOUSE = 5000;
const PRICE_MIN_PALACE = 10000;

const adForm = document.querySelector('.ad-form');
const formTitle = adForm.querySelector('#title');
const formPrice = adForm.querySelector('#price');
const typeOfHouse = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const placesNumber = adForm.querySelector('#capacity');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

// функция для валидации поля загловка объявления
const validationFieldTitle = (evt) => {
  if (evt.target === formTitle) {
    const valueLength = formTitle.value.length;
    if (valueLength < TITLE_MIN_LENGTH) {
      formTitle.setCustomValidity(`Еще ${TITLE_MIN_LENGTH - valueLength} символов`);
    } else {
      formTitle.setCustomValidity('');
    }
    formTitle.reportValidity();
  }
};

// функция для валидации полей количество комнат и количества мест
const validationFieldsNumberOfRoomsPlases = (evt) => {
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
};

// функция для изменения plfceholder поля "Цена за ночь"
const changePlaceholderFieldPrice = (evt) => {
  if (evt.target === typeOfHouse) {
    switch (typeOfHouse.value) {
      case 'bungalow':
        formPrice.placeholder = PRICE_MIN_BUNGALOW;
        break;
      case 'flat':
        formPrice.placeholder = PRICE_MIN_FLAT;
        break;
      case 'hotel':
        formPrice.placeholder = PRICE_MIN_HOTEL;
        break;
      case 'house':
        formPrice.placeholder = PRICE_MIN_HOUSE;
        break;
      case 'palace':
        formPrice.placeholder = PRICE_MIN_PALACE;
        break;
    }
  }
};

// функция для валидации полей тип жилья и  цены за ночь
const validationFieldType = (evt) => {
  if (evt.target === formPrice || evt.target === typeOfHouse) {
    const fieldValue = formPrice.value;
    switch (true) {
      case (fieldValue < +formPrice.placeholder):
        formPrice.setCustomValidity(`Цена должна быть больше ${+formPrice.placeholder}`);
        break;
      case (fieldValue > PRICE_MAX):
        formPrice.setCustomValidity(`Цена должна быть меньше ${PRICE_MAX}`);
        break;
      default:
        formPrice.setCustomValidity('');
        break;
    }
    formPrice.reportValidity();
  }
};

adForm.addEventListener('input', (evt) => {
  // валидация полей
  validationFieldTitle(evt);
  validationFieldsNumberOfRoomsPlases(evt);
  changePlaceholderFieldPrice(evt);
  validationFieldType(evt);
  // синхронизация времени заезда и выезда
  getSinsynchronizeTime(evt, timeIn, timeOut);
  getSinsynchronizeTime(evt, timeOut, timeIn);
});
