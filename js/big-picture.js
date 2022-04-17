import {photos} from './data.js';
import {getRandomtInclusive} from './util.js';
const similarFullPictures = document.querySelector('.big-picture');
const buttonCommentsLoader =  document.querySelector('.social__comments-loader');
let photoComments = [];



/*const commentLenght = 5;
buttonCommentsLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (commentLenght <= 25) {
    commentLenght += 5;
  }
  });*/



let renderFullPictures = (i) => {

  similarFullPictures.classList.remove('hidden');
  similarFullPictures.querySelector('.big-picture__img img').src = photos[i].url;
  similarFullPictures.querySelector('.likes-count').textContent = photos[i].likes;
  similarFullPictures.querySelector('.comments-count').textContent = photos[i].comments.length;
  similarFullPictures.querySelector('.social__caption').textContent = photos[i].description; //почему  не работает ниже?
  similarFullPictures.querySelector('.social__comments').innerHTML = '';
  const fragment = document.createDocumentFragment()
    for (let j = 0; j < 25; j++) {
    const newElement = document.createElement('li');
    newElement.classList.add('social__comment');
    newElement.innerHTML = '<img class="social__picture" src="" alt="">'+'<p class="social__text"></p>';
    newElement.querySelector('.social__picture').alt = photos[i].comments[getRandomtInclusive(0,24)].name;
    newElement.querySelector('.social__picture').src = photos[i].comments[getRandomtInclusive(0,24)].avatar;
    newElement.querySelector('.social__text').textContent = photos[i].comments[getRandomtInclusive(0,24)].message;
    fragment.appendChild(newElement);
    console.log(fragment);
  }
  console.log(fragment);
  similarFullPictures.querySelector('.social__comments').appendChild(fragment);


  console.log(similarFullPictures.querySelector('.social__comments'));
  //similarFullPictures.querySelector('.social__comments').slice(1, 3);

  return similarFullPictures;
};

const clearFullPictures = () => {
  similarFullPictures.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

};

export {renderFullPictures, clearFullPictures};


