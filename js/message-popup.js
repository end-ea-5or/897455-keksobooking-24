import { isEscapeKey } from './utils.js';
import { getResetForms } from './reset.js';

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    deleteMessage();
  }
};

// удалеие окна
function deleteMessage() {
  document.querySelector('.js_message').remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
}

// функция сообщения об ошибке отправки данных формы
const showDataSendError = (errorText) => {
  const errorBlock = errorTemplate.cloneNode(true);
  errorBlock.firstElementChild.classList.add('js_message');
  const errorParagraph = errorBlock.querySelector('.error__message');
  errorParagraph.innerHTML += `<br><span style="font-size: 50%;">${errorText}</span>`;
  const errorButton = errorBlock.querySelector('.js_message button');
  document.querySelector('body').appendChild(errorBlock);
  document.addEventListener('keydown', onMessageEscKeydown);
  const errorPopup = document.querySelector('.js_message');
  errorButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteMessage();
  });
  errorPopup.addEventListener('click', (evt) => {
    if (evt.target !== errorButton) {
      evt.preventDefault();
      deleteMessage();
    }
  });
};

// функция сообщения об успешной отправке данных формы
const showDataSendSuccess = () => {
  const successBlock = successTemplate.cloneNode(true);
  successBlock.firstElementChild.classList.add('js_message');
  document.querySelector('body').appendChild(successBlock);
  document.addEventListener('keydown', onMessageEscKeydown);
  const errorPopup = document.querySelector('.js_message');
  errorPopup.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteMessage();
  });
  getResetForms();
};

export { showDataSendError, showDataSendSuccess };
