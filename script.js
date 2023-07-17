'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const blur = document.querySelector('.overlay');
const txtModal = document.querySelector('.modal');

const showPopup = function () {
  // console.log(e.target);
  txtModal.classList.remove('hidden');
  blur.classList.remove('hidden');
};
const closePopup = function () {
  txtModal.classList.add('hidden');
  blur.classList.add('hidden');
};

btnShowModal.forEach(ele => {
  ele.addEventListener('click', showPopup);
});
btnCloseModal.addEventListener('click', closePopup);

document.addEventListener('keydown',function (e){
  if (e.key === 'Escape' && !txtModal.classList.contains('hidden')) {
    closePopup();
  }
})
blur.addEventListener('click', closePopup);