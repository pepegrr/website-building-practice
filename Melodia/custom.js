'use strict';

//swiper initialization 

const swiper = new Swiper('.swiper', {

    direction: 'vertical',
    loop: false,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    centeredSlides: true,

    speed: 600,
});


//floor highlight

const floorImg = document.querySelector('.main__building');
const buttonNext = document.querySelector('.swiper-button-next');
const buttonPrev = document.querySelector('.swiper-button-prev');
const floorNumber = document.querySelector('.modal__floor-number');
const floorHighlight = function () {
    let currentFloor = document.querySelector('.swiper-slide-active').dataset.floor;
    console.log(currentFloor);
    floorImg.src = `img/floor${currentFloor}.png`;
    console.log(floorImg.src);
    floorNumber.textContent = currentFloor;
}

buttonNext.addEventListener('click', floorHighlight);
buttonPrev.addEventListener('click', floorHighlight);
swiper.on('slideChangeTransitionStart', floorHighlight);

//modal

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelector('.main__button');
const closeModal = document.querySelector('.modal__close');


showModal.addEventListener('click', function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.style.height = 'initial';
  window.scrollTo(0, 0);
})

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.style.height = '100%';
})


