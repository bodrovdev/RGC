import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

let modal = document.getElementById('consult-modal');
let modalOpen = document.querySelectorAll('.consult-modal-button');
let modalClose = document.getElementById('consult-modal-close');

modalOpen.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.add('consult-modal--opened');
    disableBodyScroll(modal);
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('consult-modal--opened');
  enableBodyScroll(modal);
})

modal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal.classList.remove('consult-modal--opened');
    enableBodyScroll(modal);
  }
})