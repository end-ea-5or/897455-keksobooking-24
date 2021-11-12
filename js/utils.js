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
const showDataGetError = () => {
  const sectionMap = document.querySelector('.map');
  const blockError = document.createElement('div');
  blockError.innerHTML = 'При загрузке данных с сервера произошла ошибка запроса';
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

export {
  getSinsynchronizeTime,
  getFillAddress,
  showDataGetError,
  getInactiveForm,
  getActiveForm,
  isEscapeKey
};
