import { getActiveForm } from './form-control.js';
import { adForm } from './form-control.js';
import { getFillAddress } from './utils.js';
import { simularAds } from './data.js';
import { cardListFragment } from './cards.js';

const coordinateField = adForm.querySelector('#address');
const DEFAULT_COORDINATES = {
  lat: 35.6828,
  lng: 139.7595,
};

// подключаем карту к странице
const map = L.map('map-canvas')
  .on('load', () => {
    getActiveForm();
    getFillAddress(DEFAULT_COORDINATES, coordinateField);
  })
  .setView(DEFAULT_COORDINATES, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

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

// отрисовка меток похожих объявлений
simularAds.forEach((element, index) => {
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
  point.addTo(map).bindPopup(cardListFragment.children[index]);
});
