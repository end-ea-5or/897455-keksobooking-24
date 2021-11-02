import { getRandomIntFromRange } from './utils.js';

const USER_PIC_NUMBERS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const ADS_TITLES = ['Красивая квартира', 'Дом у реки', 'Отличное предложение', 'Комната для студента', 'Дом с видом на мост', 'Хорошая квартирка', 'Место для сна'];
const ADS_NUMBER = 10;
const LOCATION_COORDS = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
};
const PRICE = {
  MIN: 100,
  MAX: 8000,
};
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const NUMBER_OF_RUMS = 5;
const NUMBER_OF_GUESTS = 10;
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS_LIST = ['отличное место', 'подходит для пар', 'не сдается студентам'];
const PHOTOS_LINKS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createAd = () => {
  const locationCoordinates = [getRandomIntFromRange(LOCATION_COORDS.LAT_MIN, LOCATION_COORDS.LAT_MAX, 5), getRandomIntFromRange(LOCATION_COORDS.LNG_MIN, LOCATION_COORDS.LNG_MAX, 5)];
  const featuresList = FEATURES.slice().sort(() => Math.random() - 0.5).slice(0, getRandomIntFromRange(0, FEATURES.length));
  return {
    author: {
      avatar: `img/avatars/user${  USER_PIC_NUMBERS[getRandomIntFromRange(0, USER_PIC_NUMBERS.length - 1)]  }.png`,
    },
    offer: {
      title: ADS_TITLES[getRandomIntFromRange(0, ADS_TITLES.length - 1)],
      address: `${locationCoordinates[0]  }, ${  locationCoordinates[1]}`,
      price: getRandomIntFromRange(PRICE.MIN, PRICE.MAX),
      type: TYPES[getRandomIntFromRange(0, TYPES.length - 1)],
      rooms: getRandomIntFromRange(1, NUMBER_OF_RUMS),
      guests: getRandomIntFromRange(1, NUMBER_OF_GUESTS),
      checkin: CHECK_TIMES[getRandomIntFromRange(0, CHECK_TIMES.length - 1)],
      checkout: CHECK_TIMES[getRandomIntFromRange(0, CHECK_TIMES.length - 1)],
      features: featuresList,
      description: DESCRIPTIONS_LIST[getRandomIntFromRange(0, DESCRIPTIONS_LIST.length - 1)],
      photos: PHOTOS_LINKS.slice(0, getRandomIntFromRange(1, PHOTOS_LINKS.length)),
    },
    location: {
      lat: locationCoordinates[0],
      lng: locationCoordinates[1],
    },
  };
};

const simularAds = Array.from({length: ADS_NUMBER}, createAd);
export {simularAds};
