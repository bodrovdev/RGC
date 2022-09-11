import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Открытие модального окна "заказать консультацию"
let consultModal = document.getElementById('consult-modal');
let consultModalOpen = document.querySelectorAll('.consult-modal-button');
let consultModalClose = document.getElementById('consult-modal-close');

consultModalOpen.forEach((element) => {
  element.addEventListener('click', () => {
    consultModal.classList.add('consult-modal--opened');
    disableBodyScroll(consultModal);
  })
})

consultModalClose.addEventListener('click', () => {
  consultModal.classList.remove('consult-modal--opened');
  enableBodyScroll(consultModal);
})

consultModal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    consultModal.classList.remove('consult-modal--opened');
    enableBodyScroll(consultModal);
  }
})

//Вывод сообщения об успешной отправки формы
let consultModalMain = document.getElementById('consult-modal-main');
let consultModalForm = document.getElementById('consultModalForm');
let consultModalSuccess = document.getElementById('consult-modal-success');

consultModalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  consultModalMain.classList.add('consult-modal__inner--hidden');
  consultModalSuccess.classList.add('consult-modal__success--shown');
})