const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const inputList = adForm.querySelectorAll('fieldset');
const filtersList = mapFilters.querySelectorAll('select, fieldset');

const getInactiveForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].setAttribute('disabled', 'disabled');
  }
  for (let j = 0; j < filtersList.length; j++) {
    filtersList[j].setAttribute('disabled', 'disabled');
  }
};

const getActiveForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].removeAttribute('disabled', 'disabled');
  }
  for (let j = 0; j < filtersList.length; j++) {
    filtersList[j].removeAttribute('disabled', 'disabled');
  }
};

export {getInactiveForm, getActiveForm};
