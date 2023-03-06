class FormValidator {
  constructor(obj, formSelector){
    this._formSelector = formSelector;
    this._obj = obj;
    this._submitBtn = this._formSelector.querySelector(obj.buttonSelector);
    this._inputList = Array.from(this._formSelector.querySelectorAll(obj.inputSelector));
  }

  enableValidation() {
    this._form = this._formSelector;
    this._form.addEventListener('submit', this._disableDefaultEvent)
      this._form.addEventListener('input', () => {
      this.toggleBtn(this._form, this._obj)
    })
    this._addInputListeners()
    this.toggleBtn(this._form, this._obj)
  }

  _disableDefaultEvent(evt) {
    evt.preventDefault();
  }

  _handleFormInput(evt, obj) {
    this._input = evt.target;
    this._inputId = this._input.id;
    this._errorSpan = document.querySelector(`#${this._inputId}-error`);

    if(this._input.validity.valid) {
      this._input.classList.remove(obj.inputErrorClass)
      this._errorSpan.textContent = ''
    } else {
      this._input.classList.add(obj.inputErrorClass)
      this._errorSpan.textContent = this._input.validationMessage
    }
  }

  toggleBtn(form, obj) {
    this._isFormValid = form.checkValidity();
    this._submitBtn.disabled = !this._isFormValid;
    this._submitBtn.classList.toggle(obj.buttonDisabledClass, !this._isFormValid);
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
