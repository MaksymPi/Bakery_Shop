const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal__btn-close');

console.log(modal)

console.log(modalBtnOpen)
console.log(modalBtnClose)

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click',toggleModal);
modalBtnClose.addEventListener('click',toggleModal);