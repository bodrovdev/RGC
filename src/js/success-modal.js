import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Открытие модального окна с сообщением об успехе

let successModal = document.getElementById('successModal');
let successModalForm = document.querySelectorAll('.success-modal-form');
let successModalClose = document.getElementById('success-modal-close');

successModalForm.forEach((element) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault();

    successModal.classList.add('success-modal--opened');
    disableBodyScroll(element);

    // Array.from(element.elements).filter(tag => ["input", "textarea"]).forEach((item) => {
    //   item.value = '';
    // })
  })
})

successModalClose.addEventListener('click', () => {
  successModal.classList.remove('success-modal--opened');
  enableBodyScroll(successModal);
})

successModal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    successModal.classList.remove('success-modal--opened');
    enableBodyScroll(successModal);
  }
})