import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

let modal = document.getElementById('modal-consult');
let modalOpen = document.querySelectorAll('.consult-button');
let modalClose = document.getElementById('modal-consult-close');

modalOpen.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.add('consultation--opened');
    disableBodyScroll(modal);
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('consultation--opened');
  enableBodyScroll(modal);
})

modal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal.classList.remove('consultation--opened');
    enableBodyScroll(modal);
  }
})