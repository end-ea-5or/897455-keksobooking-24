import { sendData } from './api.js';
import { getResetForms } from './reset.js';
import { showDataSendError, showDataSendSuccess } from './message-popup.js';

const adForm = document.querySelector('.ad-form');
const resetButton = adForm.querySelector('.ad-form__reset');

function setUserFormSubmit () {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(showDataSendSuccess, showDataSendError, new FormData(evt.target));
  });
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getResetForms();
});

export { setUserFormSubmit };
