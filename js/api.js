import { showDataGetError } from './utils.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => { onSuccess(ads); })
    .catch(() => {
      showDataGetError();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(' https://24.javascript.pages.academy/keksobooking ', {
    method: 'POST',
    body,
  },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
