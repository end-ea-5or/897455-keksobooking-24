import { getData } from './api.js';
// import { simularAds } from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardListFragment = document.createDocumentFragment();

const getCreateCard = (list) => {
  list.forEach(({ author, offer }) => {
    const cardItem = cardTemplate.cloneNode(true);
    cardItem.querySelector('.popup__title').textContent = offer.title;
    cardItem.querySelector('.popup__text--address').textContent = offer.address;
    cardItem.querySelector('.popup__text--price').textContent = `${offer.price}  ₽/ночь`;
    const popupType = cardItem.querySelector('.popup__type');
    switch (offer.type) {
      case 'palace':
        popupType.textContent = 'Дворец';
        break;
      case 'flat':
        popupType.textContent = 'Квартира';
        break;
      case 'house':
        popupType.textContent = 'Дом';
        break;
      case 'bungalow':
        popupType.textContent = 'Бунгало';
        break;
      case 'hotel':
        popupType.textContent = 'Отель';
        break;
    }
    cardItem.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardItem.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    const features = cardItem.querySelector('.popup__features');
    const featuresList = features.querySelectorAll('li');
    if (offer.features) {
      featuresList.forEach((feature) => {
        const isAvailable = offer.features.some(
          (item) => feature.classList.contains(`popup__feature--${item}`),
        );
        if (!isAvailable) {
          feature.remove();
        }
      });
    }
    cardItem.querySelector('.popup__description').textContent = offer.description;
    const popupPhotos = cardItem.querySelector('.popup__photos');
    if (offer.photos) {
      offer.photos.forEach((link) => {
        const photo = popupPhotos.children[0].cloneNode(true);
        photo.src = link;
        popupPhotos.appendChild(photo);
      });
    } else {
      popupPhotos.remove();
    }
    popupPhotos.children[0].remove();
    cardItem.querySelector('.popup__avatar').src = author.avatar;
    cardListFragment.appendChild(cardItem);
  });
};

getData(getCreateCard);
export { cardListFragment };

