import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

let modal = document.getElementById('reviews-modal');
let modalOpen = document.querySelectorAll('.reviews-modal-button');
let modalClose = document.getElementById('reviews-modal-close');

modalOpen.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.add('reviews-modal--opened');
    disableBodyScroll(modal);
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('reviews-modal--opened');
  enableBodyScroll(modal);
})

modal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal.classList.remove('reviews-modal--opened');
    enableBodyScroll(modal);
  }
})