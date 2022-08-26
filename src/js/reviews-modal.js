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

let modalFileInput = document.getElementById('reviews-modal-file-input');
let modalFileButton = document.getElementById('reviews-modal-file-button');

modalFileButton.addEventListener('click', () => {
  modalFileInput.click();
})

modalFileInput.addEventListener('change', (e) => {
  const [file] = e.target.files;
  console.log(file.name);

  if(file.name.length < 20) {
    modalFileButton.textContent = file.name;
  }
  else {
    modalFileButton.textContent = `${file.name.slice(0, 3)}...${file.name.slice(-7, file.name.length)}`;
  }
})