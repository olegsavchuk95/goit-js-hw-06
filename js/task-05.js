const inputForm = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
console.log(inputForm);
console.log(userName);

inputForm.addEventListener('input', changeNameFn);

function changeNameFn({ target }) {
  if (target.value !== '') {
    userName.textContent = target.value;
  } else {
    userName.textContent = 'незнакомец';
  }
}