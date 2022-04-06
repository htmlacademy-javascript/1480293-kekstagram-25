const fullPictures = document.querySelector('.big-picture');
fullPictures.classList.remove('hidden');

const similarListFragment = document.createDocumentFragment();

const closePopupButton = document.querySelector('big-picture__cancel');

const socialComment = document.querySelector('social__comment');

// Вариант 1

similarfullPictures.forEach(({url, likes, comments, socialComment, description}) => {

  const fullPictureElement = similarPictureTemplate.cloneNode(true);
  fullPictureElement.querySelector('.big-picture__img').src = url;
  fullPictureElement.querySelector('.likes-count').textContent = likes;
  fullPictureElement.querySelector('.comments-count').textContent = comments.length;
  fullPictureElement.querySelector('.social__comments') = socialComment.forEach(({avatar, name, alt}) => {
    const socialCommentsElement = socialCommentTemplate.cloneNode(true);
    socialCommentsElement.querySelector('.social__picture').alt = avatar;
    socialCommentsElement.querySelector('.social__picture').src = name;
    socialCommentsElement.querySelector('.social__text').textContent = alt;
  });
  fullPictureElement.querySelector('.social__caption').textContent = description;


  similarListFragment.appendChild(fullPictureElement);
});

fullPictures.appendChild(similarListFragment);




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
  popup.classList.remove('modal--show');
  document.querySelector('body').classList.remove('modal-open');
});


usersPictures.appendChild(similarListFragment);
