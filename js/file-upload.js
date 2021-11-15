const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const adForm = document.querySelector('.ad-form');
const avatarChooser = adForm.querySelector('.ad-form__field input[type="file"]');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const photoChooser = adForm.querySelector('.ad-form__upload input[type="file"]');
const photoPreviewBlock = adForm.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

photoChooser.addEventListener('change', () => {
  photoPreviewBlock.innerHTML = '';
  const photos = Array.from(photoChooser.files);
  photos.forEach((item) => {
    item.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => item.name.endsWith(it));
    if (matches) {
      const photoImage = document.createElement('img');
      photoImage.src = URL.createObjectURL(item);
      photoPreviewBlock.appendChild(photoImage);
    }
  });
});

export { photoPreviewBlock, avatarPreview };
