import Swiper from 'swiper/bundle';

//Слайдер из блока about
const heading_slider = new Swiper('.heading__slider', {

  loop: true,

  breakpoints: {
    320: {
      direction: 'horizontal',
    },
    
    768: {
      direction: 'vertical',
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}); 