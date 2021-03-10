// class that adds  visibility to the Element
const modalClass =  document.getElementById('add-modal');
// element that need to have the class added
// seems like querySelector is used often
// header button choses a child element
const buttonHeader = document.querySelector('header button');

// changing background
const background = document.getElementById('backdrop');

const toggleBackdrop = () => {
  background.classList.toggle('visible');
};

const addModalClass = () => {
  modalClass.classList.toggle('visible');
  toggleBackdrop();
};

buttonHeader.addEventListener('click', addModalClass);


const cancelButton = document.getElementsByClassName('btn--passive');

cancelButton[0].addEventListener('click', addModalClass);