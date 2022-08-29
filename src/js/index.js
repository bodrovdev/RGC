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

//Табы в блоке engine

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

//Табы в блоке consulting

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
console.log(subjectTitle);

window.addEventListener('load', () => {
  subjectTitle.forEach((element) => {
    if (element.textContent.length === 0) {
      element.classList.add('subject__desc-title--empty');
    }
  })
})





