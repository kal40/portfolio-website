(function () {
  let form = document.querySelector('#contact-form');
  let nameInput = document.querySelector('#name');
  let emailInput = document.querySelector('#email');
  let telInput = document.querySelector('#tel');
  let message = document.querySelector('#message');

  function showErrorMessage(input, message) {
    let container = input.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateName() {
    let value = nameInput.value;
    if (!value) {
      showErrorMessage(nameInput, 'Name is a required field');
      return false;
    }
    if (value.length < 6) {
      showErrorMessage(
        nameInput,
        'Name is too short. It must be at least 6 characters long.'
      );
      return false;
    }

    let hasSpaceSign = value.indexOf(' ');
    if (hasSpaceSign === -1) {
      showErrorMessage(
        nameInput,
        'You must enter a valid name with first and last name.'
      );
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    let hasAtSign = value.indexOf('@');
    if (hasAtSign === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address. ');
      return false;
    }

    let hasDot = value.indexOf('.');
    if (hasDot === -1) {
      showErrorMessage(emailInput, 'You must enter a valid emial address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateMessage() {
    let value = message.value;
    if (!value) {
      showErrorMessage(message, 'Message is a required field');
      return false;
    }

    if (value.length < 6) {
      showErrorMessage(
        message,
        'Message is too short. It must be at least 6 characters long.'
      );
      return false;
    }

    showErrorMessage(message, null);
    return true;
  }

  function validateForm() {
    let isEmailValid = validateEmail();
    let isNameValid = validateName();
    let isMessageValid = validateMessage();
    return isEmailValid && isNameValid && isMessageValid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      window.open(
        `mailto:karoly.lonich@smartcoder.dev?subject=Get in contact from smartcoder.dev&body=Contact name: ${nameInput.value} / Contact email: ${emailInput.value} / Tel: ${telInput.value} / Message: ${message.value}`
      );
    }
  });

  emailInput.addEventListener('input', validateEmail);
  nameInput.addEventListener('input', validateName);
  message.addEventListener('input', validateMessage);
})();
