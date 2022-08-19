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

let engineTabsButtons = document.querySelectorAll('.engin__tabs-button');
let engineTabsItems = document.querySelectorAll('.engin__tabs-itemset');

engineTabsButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    engineTabsButtons.forEach(
      (child) => child.classList.remove('engin__tabs-button--active')
    );
    engineTabsItems.forEach(
      (child) => child.classList.remove('engin__tabs-itemset--active')
    );

    item.classList.add('engin__tabs-button--active');
    document.getElementById(id).classList.add('engin__tabs-itemset--active');
  })
})

//Табы в блоке consult

let consultTabsButtons = document.querySelectorAll('.consult__tabs-button');
let consultTabsItems = document.querySelectorAll('.consult__tabs-itemset');

consultTabsButtons.forEach((item) => {
  item.addEventListener('click', (e) => {

    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    consultTabsButtons.forEach(
      (child) => child.classList.remove('consult__tabs-button--active')
    );
    consultTabsItems.forEach(
      (child) => child.classList.remove('consult__tabs-itemset--active')
    );

    item.classList.add('consult__tabs-button--active');
    document.getElementById(id).classList.add('consult__tabs-itemset--active');
  })
})


