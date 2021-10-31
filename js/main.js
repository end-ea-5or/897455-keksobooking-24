import {cardListFragment} from './cards.js';
import {getActiveForm} from './form-control.js';
import './form-validation.js';

getActiveForm();

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(cardListFragment.children[3]);
