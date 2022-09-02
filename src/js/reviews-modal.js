import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Открытие модального окна "добавить отзыв"

let reviewsModal = document.getElementById('reviews-modal');
let reviewsModalOpen = document.querySelectorAll('.reviews-modal-button');
let reviewsModalClose = document.getElementById('reviews-modal-close');

function reviewsModalFunctions() {
  if (reviewsModal === null || reviewsModalOpen === null || reviewsModalClose === null) {
    return;
  }
  else {

    reviewsModalOpen.forEach((element) => {
      element.addEventListener('click', () => {
        reviewsModal.classList.add('reviews-modal--opened');
        disableBodyScroll(reviewsModal);
      })
    })
    
    reviewsModalClose.addEventListener('click', () => {
      reviewsModal.classList.remove('reviews-modal--opened');
      enableBodyScroll(reviewsModal);
    })
    
    reviewsModal.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        reviewsModal.classList.remove('reviews-modal--opened');
        enableBodyScroll(reviewsModal);
      }
    })
  }
}

reviewsModalFunctions();

//Вывод сообщения об успешной отправки формы

let reviewsModalMain = document.getElementById('reviews-modal-main');
let reviewsModalForm = document.getElementById('reviews-modal-form');
let reviewsModalSuccess = document.getElementById('reviews-modal-success');

function reviewsModalForms() {
  if (reviewsModalMain === null || reviewsModalForm === null || reviewsModalSuccess === null) {
    return;
  }
  else {
    reviewsModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      reviewsModalMain.classList.add('reviews-modal__inner--hidden');
      reviewsModalSuccess.classList.add('reviews-modal__success--shown');
    })
  }
}

reviewsModalForms();

//Обработка добавления файлов к форме, просмотр имени файла

let reviewsModalFileInput = document.getElementById('reviews-modal-file-input');
let reviewsModalFileButton = document.getElementById('reviews-modal-file-button');

function reviewsModalFiles() {
  if (reviewsModalFileInput === null || reviewsModalFileButton === null) {
    return;
  }
  else {
    reviewsModalFileButton.addEventListener('click', () => {
      reviewsModalFileInput.click();
    })
    
    reviewsModalFileInput.addEventListener('change', (e) => {
      const [file] = e.target.files;
    
      if(file.name.length < 20) {
        reviewsModalFileButton.textContent = file.name;
      }
      else {
        reviewsModalFileButton.textContent = `${file.name.slice(0, 3)}...${file.name.slice(-7, file.name.length)}`;
      }
    })
  }
}

reviewsModalFiles();