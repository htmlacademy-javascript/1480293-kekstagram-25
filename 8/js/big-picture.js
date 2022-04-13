import {photos} from './data.js';
import {getRandomtInclusive} from './util.js';
const similarFullPictures = document.querySelector('.big-picture');

const renderFullPictures = (i) => {

  similarFullPictures.classList.remove('hidden');
  similarFullPictures.querySelector('.big-picture__img img').src = photos[i].url;
  similarFullPictures.querySelector('.likes-count').textContent = photos[i].likes;
  similarFullPictures.querySelector('.comments-count').textContent = photos[i].comments.length; //Hidden прибаляет в консоль почему-то
  similarFullPictures.querySelector('.social__picture').alt = photos[i].comments[getRandomtInclusive(0,7)].name;  //почему не работает comments[getRandomtInclusive(0,comments.length-1)].name;
  similarFullPictures.querySelector('.social__picture').src = photos[i].comments[getRandomtInclusive(0,7)].avatar;
  similarFullPictures.querySelector('.social__caption').textContent = photos[i].comments[getRandomtInclusive(0,7)].message;
  return similarFullPictures;
};


const clearFullPictures = () => {

  similarFullPictures.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

};

export {renderFullPictures, clearFullPictures};


