// функция для синхронизации полей времени заезда и выезда
const getSinsynchronizeTime = (evt, fieldOne, fieldTwo) => {
  if (evt.target === fieldOne) {
    for (let count = 0; count < fieldOne.children.length; count++) {
      if (fieldOne.children[count].selected) {
        fieldTwo.children[count].selected = true;
      }
    }
  }
};

// функция заполнения поля адреса (координаты)
const getFillAddress = ({ lat, lng }, field) => {
  const currentLat = lat.toFixed(5);
  const currentLng = lng.toFixed(5);
  field.value = `${currentLat}, ${currentLng}`;
};

// функция сообщения об ошибке получения данных
const showDataGetError = (errorText) => {
  const sectionMap = document.querySelector('.map');
  const blockError = document.createElement('div');
  blockError.innerHTML = `При загрузке данных с сервера произошла ошибка: ${errorText}`;
  blockError.style.cssText = 'position: absolute; z-index: 1000; background-color: rgb(246, 105, 105); color: white;';
  sectionMap.prepend(blockError);
};

// функция перехода формы в активное состояние
const getInactiveForm = (form, filter) => {
  form.classList.add('ad-form--disabled');
  filter.classList.add('ad-form--disabled');
  const inputList = form.querySelectorAll('fieldset');
  const filtersList = filter.querySelectorAll('select, fieldset');
  for (let index = 0; index < inputList.length; index++) {
    inputList[index].setAttribute('disabled', 'disabled');
  }
  for (let index = 0; index < filtersList.length; index++) {
    filtersList[index].setAttribute('disabled', 'disabled');
  }
};

// функция перехода формы в неактивное состояние
const getActiveForm = (form, filter) => {
  form.classList.remove('ad-form--disabled');
  filter.classList.remove('ad-form--disabled');
  const inputList = form.querySelectorAll('fieldset');
  const filtersList = filter.querySelectorAll('select, fieldset');
  for (let index = 0; index < inputList.length; index++) {
    inputList[index].removeAttribute('disabled', 'disabled');
  }
  for (let index = 0; index < filtersList.length; index++) {
    filtersList[index].removeAttribute('disabled', 'disabled');
  }
};

// проверка нажатия клавиши ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
function debounce(callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;
  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);
    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {
  getSinsynchronizeTime,
  getFillAddress,
  showDataGetError,
  getInactiveForm,
  getActiveForm,
  isEscapeKey,
  debounce
};
