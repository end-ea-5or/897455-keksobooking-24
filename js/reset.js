import { map, marker, markerGroup, getAddPins, DEFAULT_COORDINATES, MAP_ZOOM_VALUE} from './map.js';
import { getFillAddress } from './utils.js';
import { dataList } from './api.js';
import { MAX_LENGTH_DATA } from './filter.js';
import { photoPreviewBlock, avatarPreview } from './file-upload.js';

const DEFAULT_PLACEHOLDER_VALUE = 1000;
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const coordinateField = adForm.querySelector('#address');

const getResetForms = () => {
  mapFilters.reset();
  adForm.reset();
  adForm.querySelector('input[name="price"]').placeholder = DEFAULT_PLACEHOLDER_VALUE;
  marker.setLatLng(DEFAULT_COORDINATES);
  getFillAddress(DEFAULT_COORDINATES, coordinateField);
  map.closePopup();
  markerGroup.clearLayers();
  getAddPins(dataList.slice(0, MAX_LENGTH_DATA));
  map.setView(DEFAULT_COORDINATES, MAP_ZOOM_VALUE);
  photoPreviewBlock.innerHTML = '';
  avatarPreview.src = '../img/icons/cupcake-grey.svg';
};

export {getResetForms};
