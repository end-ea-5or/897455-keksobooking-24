const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// функция для заполнения карточки данными: название, адресс, цена, кол-во гостей и др.
const fillCardSomeData = (card, dataOffer, dataAuthor) => {
  card.querySelector('.popup__title').textContent = dataOffer.title;
  card.querySelector('.popup__text--address').textContent = dataOffer.address;
  card.querySelector('.popup__text--price').textContent = `${dataOffer.price}  ₽/ночь`;
  card.querySelector('.popup__text--capacity').textContent = `${dataOffer.rooms} комнаты для ${dataOffer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${dataOffer.checkin}, выезд до ${dataOffer.checkout}`;
  card.querySelector('.popup__description').textContent = dataOffer.description;
  card.querySelector('.popup__avatar').src = dataAuthor.avatar;
};

// функция для заполнения карточки данными типа жилья
const fillCardTypeOfHouse = (card, dataOffer) => {
  const popupType = card.querySelector('.popup__type');
  switch (dataOffer.type) {
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
};

// функция для заполнения карточки преимуществами жилья
const fillCardFeaturesData = (card, dataOffer) => {
  const features = card.querySelector('.popup__features');
  const featuresList = features.querySelectorAll('li');
  if (dataOffer.features) {
    featuresList.forEach((feature) => {
      const isAvailable = dataOffer.features.some(
        (item) => feature.classList.contains(`popup__feature--${item}`),
      );
      if (!isAvailable) {
        feature.remove();
      }
    });
  }
};

// функция для заполнения карточки фотографиями жилья
const fillCardPhotos = (card, dataOffer) => {
  const popupPhotos = card.querySelector('.popup__photos');
  if (dataOffer.photos) {
    dataOffer.photos.forEach((link) => {
      const photo = popupPhotos.children[0].cloneNode(true);
      photo.src = link;
      popupPhotos.appendChild(photo);
    });
  } else {
    popupPhotos.remove();
  }
  popupPhotos.children[0].remove();
};

// "основная" функция для создания карточки объявления
const getCreateCard = (list) => {
  const cardListFragment = document.createDocumentFragment();
  list.forEach(({ author, offer }) => {
    const cardItem = cardTemplate.cloneNode(true);
    fillCardSomeData(cardItem, offer, author);
    fillCardTypeOfHouse(cardItem, offer);
    fillCardFeaturesData(cardItem, offer);
    fillCardPhotos(cardItem, offer);
    cardListFragment.appendChild(cardItem);
  });
  return cardListFragment;
};

export { getCreateCard };

