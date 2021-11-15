const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const adForm = document.querySelector('.ad-form');
const avatarChooser = adForm.querySelector('.ad-form__field input[type="file"]');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const photoChooser = adForm.querySelector('.ad-form__upload input[type="file"]');
const photoPreviewBlock = adForm.querySelector('.ad-form__photo');

// колбэк для слушателя инпута
function getUploadFile(inputTypeFile, preview) {
  const file = inputTypeFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
}

avatarChooser.addEventListener('change', () => {
  getUploadFile(avatarChooser, avatarPreview);
});

photoChooser.addEventListener('change', () => {
  photoPreviewBlock.innerHTML = '';
  const photoImage = document.createElement('img');
  getUploadFile(photoChooser, photoImage);
  photoPreviewBlock.appendChild(photoImage);
});

export { photoPreviewBlock, avatarPreview };
