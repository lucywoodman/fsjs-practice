// capture input from registrar form
const form = document.querySelector('#registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');

form.addEventListener('submit', (e) => {
    // by default, the browser will refresh on submit
    // we prevent this with:
    e.preventDefault();
    const text = input.value;
    // clears out input after submitting
    input.value = "";
    // adds input and checkbox to a list
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
});

// changes the list item styling if checkbox checked
ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});