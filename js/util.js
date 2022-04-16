const getRandomtInclusive = (min, max) => {
  if (min<max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return false;
  }
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

export {getRandomtInclusive, isEscapeKey, isEnterKey};


/*const getMaxLengthStr = function (str, maxlength) {
  if (str.length <= maxlength) {
    return true;
  } return false;
};*/
