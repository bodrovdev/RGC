import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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