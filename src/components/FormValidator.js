class FormValidator {
  constructor(obj, formSelector) {
    this._formSelector = formSelector
    this._obj = obj
    this._submitBtn = this._formSelector.querySelector(obj.buttonSelector)
    this._inputList = Array.from(this._formSelector.querySelectorAll(obj.inputSelector))
  }

  enableValidation() {
    this._form = this._formSelector
    this._form.addEventListener('submit', this._disableDefaultEvent)
    this._form.addEventListener('input', () => {
      this._toggleBtn(this._form, this._obj)
    })
    this._toggleBtn(this._form, this._obj)
    this._addInputListeners()
  }

  _disableDefaultEvent(evt) {
    evt.preventDefault()
  }

  _handleFormInput(evt, obj) {
    this._input = evt.target
    this._inputId = this._input.id
    this._errorSpan = document.querySelector(`#${this._inputId}-error`)

    if (!this._input.validity.valid) {
      this._input.classList.add(obj.inputErrorClass)
      this._errorSpan.textContent = this._input.validationMessage
    } if (this._input.validity.valid) {
      this._input.classList.remove(obj.inputErrorClass)
      this._errorSpan.textContent = ''
    }
  }

  resetErrorSpan = (obj) => {
    if (this._inputList.length >= 2) {
      this._inputList.forEach((item) => {
        item.classList.remove(obj.inputErrorClass)
        this._errorSpans = document.querySelectorAll(`#${item.id}-error`)
        this._errorSpans.forEach((item) => {
          item.textContent = ''
        })
      })
    } else {
      this._inputList.forEach((item) => {
        item.classList.remove(obj.inputErrorClass)
        this._errorSpan.textContent = ''
      })
    }
  }

  _toggleBtn(form, obj) {
    this._isFormValid = form.checkValidity()
    this._submitBtn.disabled = !this._isFormValid
    this._submitBtn.classList.toggle(obj.buttonDisabledClass, !this._isFormValid)
  }

  _addInputListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._handleFormInput(evt, this._obj)
      })
    })
  }
}

export default FormValidator
