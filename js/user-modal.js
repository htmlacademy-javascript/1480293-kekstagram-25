import {isEscapeKey, isEnterKey} from './util.js';
//import {renderSimilarPictures} from './popup.js';
import {renderFullPictures, clearFullPictures} from './big-picture.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');
const image = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelector('.effects__preview');


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && document.querySelector('.text__hashtags') !== document.activeElement && document.querySelector('.text__description') !== document.activeElement) {
  /*if (isEscapeKey(evt)) {*/
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
  /*userModalOpenElement.files[0] = [];*/
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
  /*if (isEnterKey(evt) && document.querySelector('.text__hashtags') !== document.activeElement && document.querySelector('.text__description') !== document.activeElement) {*/
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


//SCALE
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue= document.querySelector('.scale__control--value');
scaleSmaller.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (parseInt(scaleValue.value) >= 50) {

    scaleValue.value = parseInt(scaleValue.value) - 25 + '%';
    const scaleValueImg = parseInt(scaleValue.value)/100;
    console.log(scaleValueImg)
    image.style.transform = `scale(${scaleValueImg})`;
  }
});

scaleBigger.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (parseInt(scaleValue.value) <= 75) {
    scaleValue.value = parseInt(scaleValue.value) + 25 + '%';
    const scaleValueImg = parseInt(scaleValue.value)/100;
    console.log(scaleValueImg)
    image.style.transform = `scale(${scaleValueImg})`;
  }
});

//ФИЛЬТР

const formImg = document.querySelector('.img-upload__form');
const divImg = document.querySelector('.img-upload__preview');
function onFilterChange (evt) {
  if (evt.target.matches('.effects__radio')) {
    divImg.className = `img-upload__preview effects__preview--${evt.target.value}`;
  }

}

formImg.addEventListener('change', onFilterChange);

// Фильтр «Хром»

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
/*console.log(document.querySelector('.effect-level__value').value);*/

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const filters = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};
/*
formImg.addEventListener('change', (evt) => {
  if (evt.target.value === 'none') {
    sliderElement.setAttribute('disabled', true);
    sliderElement.noUiSlider.destroy();
  } if (evt.target.value !== `none`)

  {
    sliderElement.removeAttribute('disabled');
    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      /*console.log(valueElement.value);
      return valueElement.value;*/
      /*divImg.style.filter = `grayscale(${valueElement.value})`;*/
  /*  });

    if (evt.target.value === `chrome` || evt.target.value === `sepia`) {
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1,
        connect: 'lower'
      });
    }
    if (evt.target.value === `marvin`) {
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 100,
        step: 1
      });
      divImg.style.filter = `invert(${valueElement.value})`;
    }
    if (evt.target.value === `phobos`) {
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1
      });
    }
    if (evt.target.value === `heat`) {
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      }); console.log(evt.target.value);
    }
  } console.log(evt.target.value);
  console.log(`filters.${evt.target.value}`);
  console.log(valueElement.value);
});*/


formImg.addEventListener('change', (evt) => {
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    console.log(valueElement.value);
    return valueElement.value;
    /*divImg.style.filter = `grayscale(${valueElement.value})`;*/
  });

  if (evt.target.value === `chrome` || evt.target.value == `sepia`) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
      connect: 'lower'
    });
  }
  if (evt.target.value === `marvin`) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    });
    divImg.style.filter = `invert(${valueElement.value})`;
  }
  if (evt.target.value === `phobos`) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    });
  }
  if (evt.target.value === `heat`) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    });/*
  } if (evt.target.value === `none`) {
    /*sliderElement.setAttribute('disabled', true);*/
    /*sliderElement.noUiSlider.destroy();*/

  } console.log(`filters.${evt.target.value}`);
  console.log(valueElement.value);
});



/*
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();

  /*console.log(filters.evt.target.value);*/
/*});*/


//Валидация

const form = document.querySelector('#upload-select-image');


const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const testString  = document.querySelector('.text__hashtags').value;
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/;

  if (testString.search(re) !== -1) {
    const isValid = pristine.validate();
    if (isValid) {
      form.submit();
    }
  }

});

/*const testHashtags = function (re, str) {
  if (str.search(re) !== -1) {
    form.submit();
  }
};

testHashtags(re, testString);*/

