import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Открытие модального окна "заказать консультацию"

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

//Вывод сообщения об успешной отправки формы

let modalMain = document.getElementById('consult-modal-main');
let modalForm = document.getElementById('consult-modal-form');
let modalSuccess = document.getElementById('consult-modal-success');

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modalMain.classList.add('consult-modal__inner--hidden');
  modalSuccess.classList.add('consult-modal__success--shown');
})