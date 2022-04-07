import {photos} from './data.js';

const fullPictures = document.querySelector('.big-picture');
fullPictures.classList.remove('hidden');

const closePopupButton = document.querySelector('.big-picture__cancel');


fullPictures.querySelector('.big-picture__img img').src = photos[1].url;
fullPictures.querySelector('.likes-count').textContent = photos[1].likes;
fullPictures.querySelector('.comments-count').textContent = photos[1].comments.length; /*Hidden прибаляет в консоль почему-то*/
fullPictures.querySelector('.social__picture').alt = photos[1].comments[2].name;
fullPictures.querySelector('.social__picture').src = photos[1].comments[2].avatar; /*Не понятно*/
fullPictures.querySelector('.social__caption').textContent = photos[1].comments[2].message;

document.querySelector('.social__comment-count').classList.add('hidden');
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
});
