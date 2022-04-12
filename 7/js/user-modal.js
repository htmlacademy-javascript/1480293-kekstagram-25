import {isEscapeKey, isEnterKey} from './util.js';
//import {usersPictures} from './popup.js';
import {renderFullPictures, clearFullPictures} from './big-picture.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');
const image = document.querySelector('.img-upload__preview img');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};


function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}


userModalOpenElement.addEventListener('change', function(evt) {
  evt.preventDefault();
  image.src = URL.createObjectURL(userModalOpenElement.files[0]);
  openUserModal();
});

/*
const inputElement = document.querySelector("#upload-file");
inputElement.addEventListener('change', handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  console.log(fileList);
  userModalElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};*/


userModalCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});


// показ фото


const onFullPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    clearFullPictures();
  }
};
const clickPictures = document.querySelectorAll('.picture');

const fullPictureCloseElement = document.querySelector('#picture-cancel');

const addThumbnailClickHandler = function (phot, renderFullPicture, i) {

  phot.addEventListener('click', function () {
    document.querySelector('body').classList.add('modal-open');
    renderFullPicture(i);
    document.addEventListener('keydown', onFullPictureEscKeydown);
  });
};

for (let i = 0; i < 25; i++) {
  addThumbnailClickHandler(clickPictures[i], renderFullPictures, i);
}


fullPictureCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearFullPictures();
  document.removeEventListener('keydown', onFullPictureEscKeydown);
});

fullPictureCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    clearFullPictures();
    document.removeEventListener('keydown', onFullPictureEscKeydown);
  }
});

const form = document.querySelector('#upload-select-image');

//Валидация
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  /*const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }*/

  const testString  = document.querySelector('.text__hashtags').value;
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/;

  if (testString.search(re) != -1) {
    const isValid = pristine.validate();
    if (isValid) {
      form.submit();
    }
  }

});

function testHashtags(re, str) {
  if (str.search(re) != -1) {
    form.submit();
  }
}

testHashtags(re, testString);


