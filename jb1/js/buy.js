const form = document.getElementById('form')
const username = document.getElementById('username')
const number = document.getElementById('number')
const address = document.getElementById('address')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (username.value === '' || username.value == null){
    messages.push('Username has to be filled');
  }
  if (number.value === '' || number.value == null){
    messages.push('Number has to be filled');
  }
  if (address.value === '' || address.value == null){
    messages.push('Address has to be filled');
  }
  if (messages.value > 0){
      e.preventDefault()
      errorElement.innerText = messages.join(', , ')
  }

})

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
