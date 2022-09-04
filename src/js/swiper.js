import Swiper from 'swiper/bundle';

//Слайдер из блока about
const heading_slider = new Swiper('.heading__slider', {

  loop: true,
  speed: 800,

  breakpoints: {
    320: {
      direction: 'horizontal',
    },

    1024: {
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

//Слайдер из блока projects
const projects_slider = new Swiper('.projects__slider', {
  direction: 'horizontal',
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
    nextEl: '.projects__slider-button--next',
    prevEl: '.projects__slider-button--prev',
  },
});

//Слайдер из блока clients
const clients_slider = new Swiper('.clients__slider', {
  direction: 'horizontal',
  spaceBetween: 25,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.clients__slider-button--next',
    prevEl: '.clients__slider-button--prev',
  },
});

//Слайдер из блока certis
const certis_slider = new Swiper('.certis__slider', {
  direction: 'horizontal',
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
    nextEl: '.certis__slider-button--next',
    prevEl: '.certis__slider-button--prev',
  },
});

//Слайдер из блока contacts
const contacts_slider = new Swiper('.contacts__info-slider', {
  direction: 'horizontal',
  slidesPerView: 1,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".contacts__slider-pagination",
    type: "progressbar",
    clickable: true,
  },
});

const pageName = window.location.pathname.split('/')[1].split('.')[0];
let contactsSlides = document.querySelectorAll('.contacts__slider-item');
let contactsSlidesCurrent = document.getElementById('contacts-slider-current');
let contactsSlidesMax = document.getElementById('contacts-slider-max');

function contactsSlider() {
  if (pageName === 'contacts') {
    contactsSlidesCurrent.textContent = `0${contacts_slider.activeIndex + 1}`;

    contactsSlides.length < 10 ?
      contactsSlidesMax.textContent = `0${contactsSlides.length}` :
      contactsSlidesMax.textContent = contactsSlides.length;
  }
}

contactsSlider();

contacts_slider.on('activeIndexChange', () => {
  if (contacts_slider.activeIndex < 9) {
    contactsSlidesCurrent.textContent = `0${contacts_slider.activeIndex + 1}`;
  }
  else {
    contactsSlidesCurrent.textContent = contacts_slider.activeIndex + 1
  }
})