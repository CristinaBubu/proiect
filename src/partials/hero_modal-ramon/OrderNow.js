const modalOpenClose = () => {
  const openModalBtn = document.querySelector('.order');
  const closeModalBtn = document.querySelector('.close');
  const modal = document.querySelector('[data-modal]');
  const modalContent = document.querySelector('.modal');
  
openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', event => {
  event.stopPropagation();
  toggleModal();
});
modalContent.addEventListener('click', event => {
  event.stopPropagation();
});
modal.addEventListener('click', event => {
  event.stopPropagation();
  toggleModal();
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  }
});
function toggleModal() {
  modal.classList.toggle('is-hidden');
  if (modal.classList.contains('is-hidden')) {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
};

modalOpenClose();





