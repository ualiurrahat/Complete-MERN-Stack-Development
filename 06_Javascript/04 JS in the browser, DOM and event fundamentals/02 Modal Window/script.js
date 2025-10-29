'use strict';
const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// function to open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// function to close an open modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// loop to add event listenever when
// button to open modal is clicked.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// adding event handler to the close modal button
// whenever it is clicked.
btnCloseModal.addEventListener('click', closeModal);
// adding event handler to the overlay part of the app
// when anywhere of overlay part is clicked,
// the modal gest closed
overlay.addEventListener('click', closeModal);

// adding a keyboard event. if Esc key is pressed
// and modal is opened, then it will be closed.
// but this will occur only when Esc button is pressed
// not for any other keys.
// NOTE: The keyboard event is a global event
// so need to select the whole document.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  // condition to check if Esc button is pressed
  // and modal is hidden or open
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // modal is open. so calling closeModal function to close it.
    closeModal();
  }
});
