import Swiper from 'swiper/bundle';

//Слайдер из блока about
const heading_slider = new Swiper('.heading__slider', {

  direction: 'vertical',
  loop: true,

  // navigation: {
  //   nextEl: '.about__slider-button--next',
  //   prevEl: '.about__slider-button--prev',
  // },

}); 