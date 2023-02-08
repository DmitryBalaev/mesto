function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector))
  formList.forEach((item) => {
    item.addEventListener('submit', disableDefaultEvent)
    item.addEventListener('input', () => {
      toggleBtn(item, obj)
    })
    addInputListeners(item, obj)
    toggleBtn(item, obj)
  })
}

function disableDefaultEvent(evt) {
  evt.preventDefault()
}

function handelFormInput(evt, obj) {
  const input = evt.target
  const inputId =input.id
  const errorSpan = document.querySelector(`#${inputId}-error`)

  if(input.validity.valid) {
    input.classList.remove(obj.inputErrorClass)
    errorSpan.textContent = ''
  } else {
    input.classList.add(obj.inputErrorClass)
    errorSpan.textContent = input.validationMessage
  }
}

function toggleBtn(form, obj) {
  const btnSubmit = form.querySelector(obj.buttonSelector)
  const isFormValid = form.checkValidity()
  btnSubmit.disabled = !isFormValid
  btnSubmit.classList.toggle(obj.buttonDisabledClass, !isFormValid)
}

function addInputListeners(form, obj) {
  const inputList = Array.from(form.querySelectorAll(obj.inputSelector))
  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      handelFormInput(evt, obj)
  })
})
}
enableValidation(formValidationObj)
