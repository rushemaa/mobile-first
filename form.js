function showMessage(message) {
  const msg = document.querySelector('small');
  msg.innerText = message;
}

function showError(message) {
  showMessage(message);
}

function showSuccess() {
  showMessage('');
}

function validateEmail(input, invalidMsg) {
  const emailRegex = /[A-Z]/;

  const email = input.value.trim();
  if (emailRegex.test(email)) {
    return showError(invalidMsg);
  }
  return true;
}

const EMAIL_INVALID = 'Please enter your email address in lower case';
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector("input[type='email']");
  const emailValid = validateEmail(email, EMAIL_INVALID);
  if (emailValid) {
    showSuccess();
    form.submit();
  }
});
