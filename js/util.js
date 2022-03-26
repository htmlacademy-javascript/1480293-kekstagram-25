const getRandomtInclusive = (min, max) => {
  if (min<max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return false;
  }
};

export {getRandomtInclusive};


/*const getMaxLengthStr = function (str, maxlength) {
  if (str.length <= maxlength) {
    return true;
  } return false;
};*/
