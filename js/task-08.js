// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.



const form = document.querySelector('.login-form');
const input = document.querySelector('.js-input')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const meaningEl = event.currentTarget.elements;

    const email = meaningEl.email.value;
    const password = meaningEl.password.value;

    if(
        form.elements.email.value === '' ||
        form.elements.password.value === ''
        ) {
        return alert('Поля должны быть заполнены!')
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    form.reset();

};