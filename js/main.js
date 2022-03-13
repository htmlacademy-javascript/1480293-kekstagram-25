const getRandomtInclusive = function (min, max) {
  if (min<max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {

    console.log('Ошибка: минимальное число больше максимального');
    return false;
  }
};

getRandomtInclusive (1,20);


const getMaxLengthStr = function (str, maxlength) {
  if (str.length <= maxlength) {
    return true;
  } return false;
};

getMaxLengthStr ('Надеюсь работает верно', 10);
