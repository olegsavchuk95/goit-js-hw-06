const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', checkFn);

function checkFn(e) {
  if (e.target.value.length === Number(e.target.dataset.length)) {
    updateClass('valid', 'invalid');
    return;
  }
  updateClass('invalid', 'valid');
}

function updateClass(addCl, remCl) {
  inputRef.classList.remove(remCl);
  inputRef.classList.add(addCl);
}