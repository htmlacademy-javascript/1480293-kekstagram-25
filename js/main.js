import {renderSimilarSmallPictures} from './popup.js';

//import './big-picture.js';
//import './user-modal.js';
import {getData} from './api.js';

const NUMBER_OF_PHOTOS=25;

getData((similarPictures) => {
  //console.log(similarPictures);
  renderSimilarSmallPictures(similarPictures.slice(0, NUMBER_OF_PHOTOS-1));
  console.log(renderSimilarSmallPictures(similarPictures.slice(0, NUMBER_OF_PHOTOS-1)));
});
