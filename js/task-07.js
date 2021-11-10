const changeTextRef = document.querySelector('#text');
const changeInputRef = document.querySelector('#font-size-control');

changeInputRef.addEventListener('input', changeHandler);

function changeHandler({ target }) {
  if (target.value) {
    changeTextRef.style.fontSize = `${Number(target.value)}px`;
  }
}