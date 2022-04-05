import {getRandomtInclusive} from './util.js';

let id = 0;

let url = '';

const description = [
  'Закат',
  'Небо',
  'Рассвет',
  'Ночь',
  'День',
  'Красота',
];

const comments = [];

let message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const avatar = '';

const name = [
  'Артем',
  'Петя',
  'Вася',
  'Света',
];

const createComments = () => {
  return {
    id: id++,
    avatar: `img/avatar-${getRandomtInclusive(1,6)}.svg`,
    message: message[getRandomtInclusive(0,message.length-1)],
    name: name[getRandomtInclusive(0,name.length-1)],
  };
};
const numberOfComments = 3;

const createPhotoDescription = () => {
  return {
    id: id++,
    url: `photos/${id}.jpg`,
    description: description[getRandomtInclusive(0,description.length-1)],
    likes: getRandomtInclusive(15,200),
    comments: Array.from({length: numberOfComments}, createComments),
  };
};

const PhotoDescription = () => Array.from({length: 25}, createPhotoDescription);

export {PhotoDescription};
