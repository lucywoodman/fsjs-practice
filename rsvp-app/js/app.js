// capture input from registrar form
const form = document.querySelector('#registrar');
const input = form.querySelector('input');

form.addEventListener('submit', (e) => {
    // by default, the browser will refresh on submit
    // we prevent this with:
    e.preventDefault();
    const text = input.value;
    // clears out input after submitting
    input.value = "";
    // adds input to a list
    const ul = document.querySelector('#invitedList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
});

