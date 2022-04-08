import {photos} from './data.js';
const similarFullPictures = document.querySelector('.big-picture');

//const fullPicture = document.querySelector('.big-picture');
/*
const renderFullPictures = () => {

similarFullPictures.classList.remove('hidden');
similarFullPictures.querySelector('.big-picture__img img').src = photos[1].url;
similarFullPictures.querySelector('.likes-count').textContent = photos[1].likes;
similarFullPictures.querySelector('.comments-count').textContent = photos[1].comments.length; /*Hidden прибаляет в консоль почему-то*/
/*similarFullPictures.querySelector('.social__picture').alt = photos[1].comments[2].name;
similarFullPictures.querySelector('.social__picture').src = photos[1].comments[2].avatar;
similarFullPictures.querySelector('.social__caption').textContent = photos[1].comments[2].message;
return similarFullPictures;
};*/

const renderFullPictures = () => {

  similarFullPictures.classList.remove('hidden');
  similarFullPictures.querySelector('.big-picture__img img').src = photos[i].url;
  similarFullPictures.querySelector('.likes-count').textContent = photos[i].likes;
  similarFullPictures.querySelector('.comments-count').textContent = photos[i].comments.length; /*Hidden прибаляет в консоль почему-то*/
  similarFullPictures.querySelector('.social__picture').alt = photos[i].comments[i].name;
  similarFullPictures.querySelector('.social__picture').src = photos[i].comments[i].avatar;
  similarFullPictures.querySelector('.social__caption').textContent = photos[i].comments[i].message;
  return similarFullPictures;
  };



const clearFullPictures = () => {

  similarFullPictures.classList.add('hidden');

};

export {renderFullPictures, clearFullPictures};


/* Вариант 2

const renderFullPictures = (fullPictures) => {
  const popupFullPictures = fullPictures;

  popupFullPictures.querySelector('.big-picture__img img').src = photos[1].url;
  popupFullPictures.querySelector('.likes-count').textContent = photos[1].likes;
  popupFullPictures.querySelector('.comments-count').textContent = photos[1].comments.length; /*Hidden прибаляет в консоль почему-то*/
/*  popupFullPictures.querySelector('.social__picture').alt = photos[1].comments[2].name;
  popupFullPictures.querySelector('.social__picture').src = photos[1].comments[2].avatar; /*Не понятно*/
/*  popupFullPictures.querySelector('.social__caption').textContent = photos[1].comments[2].message;
  return popupFullPictures;

};*/

/*document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');
document.querySelector('body').classList.add('modal-open');


document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    fullPictures.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

closePopupButton.addEventListener('click', function () {
  fullPictures.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});*/
