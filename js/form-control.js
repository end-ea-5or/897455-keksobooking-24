const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const inputList = adForm.querySelectorAll('fieldset');
const filtersList = mapFilters.querySelectorAll('select, fieldset');

const getInactiveForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  for (let index = 0; index < inputList.length; index++) {
    inputList[index].setAttribute('disabled', 'disabled');
  }
  for (let index = 0; index < filtersList.length; index++) {
    filtersList[index].setAttribute('disabled', 'disabled');
  }
};

const getActiveForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  for (let index = 0; index < inputList.length; index++) {
    inputList[index].removeAttribute('disabled', 'disabled');
  }
  for (let index = 0; index < filtersList.length; index++) {
    filtersList[index].removeAttribute('disabled', 'disabled');
  }
};

export {getInactiveForm, getActiveForm, adForm};
