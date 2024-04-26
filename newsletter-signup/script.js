const emailInput = document.getElementById('email')
const errorMessage = document.getElementById('error-msg')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateEmail() {
  const email = emailInput.value.trim()

  if (!email) {
    emailInput.classList.remove('error')
    errorMessage.textContent = ''
  } else if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Valid email required'
    emailInput.classList.add('error')
  } else {
    errorMessage.textContent = ''
    emailInput.classList.remove('error')

    document.querySelector('main').classList.add('hidden')
    document.querySelector('.success-msg').classList.remove('hidden')

    const message = document.getElementById('message')
    message.innerHTML =
      'A confirmation email has been sent to <strong class="dark-slate-grey">' +
      email +
      '</strong>. Please open it and click the button inside to confirm your subscription.'
  }
}

document.getElementById('email-form').addEventListener('submit', event => {
  if (!validateEmail()) {
    event.preventDefault()
  }
})

function validateInput() {
  const email = emailInput.value.trim()

  if (!email) {
    emailInput.classList.remove('error')
    errorMessage.textContent = ''
  } else if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Valid email required'
    emailInput.classList.add('error')
  } else {
    errorMessage.textContent = ''
    emailInput.classList.remove('error')
  }
}

emailInput.addEventListener('input', () => {
  validateInput()
})

document.getElementById('dismiss').addEventListener('click', () => {
  document.querySelector('main').classList.remove('hidden')
  document.querySelector('.success-msg').classList.add('hidden')
})
