import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


//Мобильное меню
let burger = document.getElementById('nav-burger');
let mobileMenu = document.getElementById('nav-mobile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobileMenu.classList.toggle('main-nav__mobile-menu--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobileMenu);
  }
  else {
    enableBodyScroll(mobileMenu);
  }
})

//Табы в блоке engine на главной странице

let engineTabsButtons = document.querySelectorAll('.engine__tabs-button');
let engineTabsItems = document.querySelectorAll('.engine__tabs-itemset');

engineTabsButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    engineTabsButtons.forEach(
      (child) => child.classList.remove('engine__tabs-button--active')
    );
    engineTabsItems.forEach(
      (child) => child.classList.remove('engine__tabs-itemset--active')
    );

    item.classList.add('engine__tabs-button--active');
    document.getElementById(id).classList.add('engine__tabs-itemset--active');
  })
})

//Табы в блоке consulting на главной странице

let consultTabsButtons = document.querySelectorAll('.consulting__tabs-button');
let consultTabsItems = document.querySelectorAll('.consulting__tabs-itemset');

consultTabsButtons.forEach((item) => {
  item.addEventListener('click', (e) => {

    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    consultTabsButtons.forEach(
      (child) => child.classList.remove('consulting__tabs-button--active')
    );
    consultTabsItems.forEach(
      (child) => child.classList.remove('consulting__tabs-itemset--active')
    );

    item.classList.add('consulting__tabs-button--active');
    document.getElementById(id).classList.add('consulting__tabs-itemset--active');
  })
})

//Сворачивание и разворачивание текста отзывов в блоке reviews

let readMore = document.querySelectorAll('.reviews__item-controller');
let reviewsBody = document.querySelectorAll('.reviews__item-body');

readMore.forEach((elem) => {
  elem.addEventListener('click', () => {
    reviewsBody.forEach((value) => {
      if (elem.parentElement === value.parentElement) {
        value.classList.toggle('reviews__item-body--full');
        value.classList.contains('reviews__item-body--full') ? 
          elem.children.item(0).textContent = 'Свернуть отзыв' : 
          elem.children.item(0).textContent = 'Читать весь отзыв';
      }
    })
  })
})

//Скрытие и показ заголовка элемента в зависимости от его наполнения на странице about в блоке subject

let subjectTitle = document.querySelectorAll('.subject__desc-title');

window.addEventListener('load', () => {
  subjectTitle.forEach((element) => {
    if (element.textContent.length === 0) {
      element.classList.add('subject__desc-title--empty');
    }
  })
})

//Скрытие и показ дополнительной информации на слайдах в блоке projects

let projectsSliderItem = document.querySelectorAll('.projects__slider-item');
let projectsLearnMore = document.querySelectorAll('.projects__bottom-learnmore');
let projectsDesc = document.querySelectorAll('.projects__item-desc');

projectsLearnMore.forEach((element) => {
  element.addEventListener('click', () => {
    projectsDesc.forEach((value) => {
     if (element.parentElement.parentElement === value.parentElement) {
      value.classList.add('projects__item-desc--active');
      element.parentElement.classList.add('projects__item-bottomline--disable')
     }
    })
  })
})

projectsSliderItem.forEach((element) => {
  element.addEventListener('mouseleave', () => {
    projectsDesc.forEach((value) => {
      projectsLearnMore.forEach((item) => {
        value.classList.contains('projects__item-desc--active') ? 
        value.classList.remove('projects__item-desc--active') 
        : value;

        item.parentElement.classList.contains('projects__item-bottomline--disable') ? 
        item.parentElement.classList.remove('projects__item-bottomline--disable') 
        : item;
      })
    })
  })
})




