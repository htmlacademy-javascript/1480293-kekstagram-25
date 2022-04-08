import {isEscapeKey, isEnterKey} from './util.js';
import {usersPictures} from './popup.js';
import {renderFullPictures, clearFullPictures} from './big-picture.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};


function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  //renderFullPictures();

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  //clearFullPictures();


  document.removeEventListener('keydown', onPopupEscKeydown);
}

userModalOpenElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

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

/*

let addThumbnailClickHandler = function (phot, renderFullPicture) {
  phot.addEventListener('click', function () {
    userModalElement.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    renderFullPicture(phot);
   });
};

for (var i = 0; i < 25; i++) {
  addThumbnailClickHandler(usersPictures[i], renderFullPictures(photo[i]));
}
*/




/*
const form = document.querySelector('.img-upload__form');


const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

var testString  = document.querySelector('.text__hashtags').value;
const re = /^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/;
function testHashtags(re, str) {
  if (str.search(re) != -1) {
    console.log('содержит');
  } else {
    console.log('не содержит');
  }
}

testHashtags(re, testString);
*/
