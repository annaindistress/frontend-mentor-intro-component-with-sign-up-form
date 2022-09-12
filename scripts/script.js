'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('form__input--invalid');

    if (input.nextElementSibling.classList.contains('form__error')) {
      input.nextElementSibling.remove();
    }
  });
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  inputs.forEach(input => {
    if (!input.validity.valid && !input.nextElementSibling.classList.contains('form__error')) {
      input.classList.add('form__input--invalid');

      const error = document.createElement('span');
      error.classList.add('form__error');

      if (input.validity.valueMissing) {
        error.textContent = `${input.dataset.type} cannot be empty`;
      } else if (input.validity.typeMismatch && input.dataset.type === 'Email Address') {
        error.textContent = 'Looks like this is not an email';
      }

      input.after(error);
    }
  });
});
