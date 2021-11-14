import { getFillAddress, getActiveForm, getInactiveForm, showDataGetError } from './utils.js';
import { getCreateCard } from './cards.js';
import { getData } from './api.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const coordinateField = adForm.querySelector('#address');
const DEFAULT_COORDINATES = {
  lat: 35.6828,
  lng: 139.7595,
};

// при загрузке страницы она сначала переходит в неактивное состояние
window.onload = getInactiveForm(adForm, mapFilters);

// подключаем карту к странице
const map = L.map('map-canvas')
  .on('load', () => {
    getActiveForm(adForm, mapFilters);
    getFillAddress(DEFAULT_COORDINATES, coordinateField);
  })
  .setView(DEFAULT_COORDINATES, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// создаем слой
const markerGroup = L.layerGroup().addTo(map);

// cоздаем и добавляем на карту главную метку
const mainPin = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  DEFAULT_COORDINATES,
  {
    draggable: true,
    icon: mainPin,
  },
);

marker.addTo(map);

// заполнение поля адреса координатами маркера
marker.on('drag', () => {
  getFillAddress(marker.getLatLng(), coordinateField);
});

// функция для отрисовка меток похожих объявлений
const getAddPins = (tags) => {
  tags.forEach((element, index) => {
    const { lat, lng } = element.location;
    const pin = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const point = L.marker({
      lat,
      lng,
    },
    { icon: pin },
    );
    point.addTo(markerGroup).bindPopup(getCreateCard(tags).children[index]);
  });
  getCreateCard(tags);
};

getData(getAddPins, showDataGetError);

export { marker, DEFAULT_COORDINATES, map };
