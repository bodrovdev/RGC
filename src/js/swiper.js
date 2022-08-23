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

//Слайдер из блока reviews

const reviews_slider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 25,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    
    1024: {
      slidesPerView: 3,
    }
  },

  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
}); 