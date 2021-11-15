import { dataList } from './api.js';
import { getAddPins, markerGroup } from './map.js';
import { debounce } from './utils.js';

const mapFilter = document.querySelector('.map__filters');
const roomsHouse = mapFilter.querySelector('[name="housing-rooms"]');
const guestsHouse = mapFilter.querySelector('[name="housing-guests"]');
const typeHouse = mapFilter.querySelector('[name="housing-type"]');
const priceHouse = mapFilter.querySelector('[name="housing-price"]');
const PRICE_MIN = 10000;
const PRICE_MAX = 50000;
const MAX_LENGTH_DATA = 10;

// функция для определения, совпадает ли выбранный тип жилья
const isTypeOfHousingSame = ({ offer: { type } }) =>
  typeHouse.value === type || typeHouse.value === 'any';

// функция для определения, совпадает ли стоимость жилья
const isPriceOfHouseSame = ({ offer: { price } }) => {
  switch (true) {
    case priceHouse.value === 'any':
      return true;
    case priceHouse.value === 'middle' && (price >= PRICE_MIN && price <= PRICE_MAX):
      return true;
    case priceHouse.value === 'low' && price < PRICE_MIN:
      return true;
    case priceHouse.value === 'high' && price > PRICE_MAX:
      return true;
    default:
      return false;
  }
};

// функция для определения, совпадает ли количество комнат
const isNumberOfRoomsSame = ({ offer: { rooms } }) =>
  +roomsHouse.value === rooms || roomsHouse.value === 'any';

// функция для определения, совпадает ли количество возможных гостей
const isNumberOfGuestsMatch = ({ offer: { guests } }) =>
  guestsHouse.value === 'any' || +guestsHouse.value === guests;

// функция для определения, есть ли выбранное преимущество в массиве преимуществ оффера
const isFeatureIncludes = ({ offer: { features } }) => {
  const listOfFeatures = mapFilter.querySelectorAll('[name="features"]:checked');
  const listOfFeaturesValues = Array.from(listOfFeatures, (item) => item.value); // массив из чекнутых преимуществ
  if (!features) { return false; }
  return listOfFeaturesValues.every((element) => features.includes(element));
};

// // отслеживаем изменения фильра и отрисовываем отфильтрованный массив данных
mapFilter.addEventListener('change', debounce(
  () => {
    markerGroup.clearLayers(); // предварительно очищаем слой меток на карте
    getAddPins(
      dataList.slice()
        .filter(isTypeOfHousingSame)
        .filter(isPriceOfHouseSame)
        .filter(isNumberOfRoomsSame)
        .filter(isNumberOfGuestsMatch)
        .filter(isFeatureIncludes)
        .slice(0, MAX_LENGTH_DATA));
  }));

export { MAX_LENGTH_DATA };
