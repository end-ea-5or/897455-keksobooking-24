import { adForm } from './form-control.js';

const TITLE_MIN_LENGTH = 30;
//const TITLE_MAX_LENGTH = 100;
const PRICE_MAX_LENGTH = 1000000;

const formTitle = adForm.querySelector('#title');
const formPrice = adForm.querySelector('#price');
const roomNumber = adForm.querySelector('#room_number');
const placesNumber = adForm.querySelector('#capacity');

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
  // валидация поля цены за ночь
  if (evt.target === formPrice) {
    const valueLength = formTitle.value.length;
    if (valueLength > PRICE_MAX_LENGTH) {
      formPrice.setCustomValidity(`Максимальное значение должно быть меньше ${PRICE_MAX_LENGTH}`);
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
});
