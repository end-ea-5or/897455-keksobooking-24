import { simularAds } from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardListFragment = document.createDocumentFragment();

simularAds.forEach((card) => {
  const cardItem = cardTemplate.cloneNode(true);
  cardItem.querySelector('.popup__title').textContent = card.offer.title;
  cardItem.querySelector('.popup__text--address').textContent = card.offer.address;
  cardItem.querySelector('.popup__text--price').textContent = `${card.offer.price}  ₽/ночь`;
  const popupType = cardItem.querySelector('.popup__type');
  switch (card.offer.type) {
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
  cardItem.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardItem.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  const features = cardItem.querySelector('.popup__features');
  const featuresList = features.querySelectorAll('li');
  featuresList.forEach((feature) => {
    const isAvailable = card.offer.features.some(
      (item) => feature.classList.contains(`popup__feature--${item}`),
    );
    if (!isAvailable) {
      feature.remove();
    }
  });
  cardItem.querySelector('.popup__description').textContent = card.offer.description;
  const popupPhotos = cardItem.querySelector('.popup__photos');
  card.offer.photos.forEach((link) => {
    const photo = popupPhotos.children[0].cloneNode(true);
    photo.src = link;
    popupPhotos.appendChild(photo);
  });
  popupPhotos.children[0].remove();
  cardItem.querySelector('.popup__avatar').src = card.author.avatar;
  cardListFragment.appendChild(cardItem);
});

export { cardListFragment };

