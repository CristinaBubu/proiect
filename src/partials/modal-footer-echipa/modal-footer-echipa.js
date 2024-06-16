// ADAUGAT JS RAMON MODAL FOOTER POPUP
let modal = document.getElementById('footer-echipa');
let openBtn = document.getElementById('openBtn');
let span = document.getElementsByClassName('close-footer-echipa')[0];
let closeBtn = document.getElementById('closeBtn');

openBtn.onclick = function () {
  modal.style.display = 'block';
};

// span.onclick = function () {
//   modal.style.display = 'none';
// };

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
