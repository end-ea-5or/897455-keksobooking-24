import { map, marker, DEFAULT_COORDINATES} from './map.js';
import { getFillAddress } from './utils.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const coordinateField = adForm.querySelector('#address');

const getResetForms = () => {
  mapFilters.reset();
  adForm.reset();
  marker.setLatLng(DEFAULT_COORDINATES);
  getFillAddress(DEFAULT_COORDINATES, coordinateField);
  map.closePopup();
  map.setView(DEFAULT_COORDINATES, 13);
};

export {getResetForms};
