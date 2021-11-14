import { map, marker, markerGroup, getAddPins, DEFAULT_COORDINATES} from './map.js';
import { getFillAddress } from './utils.js';
import { dataList } from './api.js';
import { MAX_LENGTH_DATA } from './filter.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const coordinateField = adForm.querySelector('#address');

const getResetForms = () => {
  mapFilters.reset();
  adForm.reset();
  marker.setLatLng(DEFAULT_COORDINATES);
  getFillAddress(DEFAULT_COORDINATES, coordinateField);
  map.closePopup();
  markerGroup.clearLayers();
  getAddPins(dataList.slice(0, MAX_LENGTH_DATA));
  map.setView(DEFAULT_COORDINATES, 13);
};

export {getResetForms};
