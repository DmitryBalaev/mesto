class FormValidator {
  constructor(obj, formSelector){
    this._formSelector = formSelector;
    this._obj = obj;
  }

  enableValidation() {
    this._form = this._formSelector;
    this._form.addEventListener('submit', this._disableDefaultEvent)
      this._form.addEventListener('input', () => {
      this.toggleBtn(this._form, this._obj)
    })
    this._addInputListeners(this._form, this._obj)
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
    this._btnSubmit = form.querySelector(obj.buttonSelector);
    this._isFormValid = form.checkValidity();
    this._btnSubmit.disabled = !this._isFormValid;
    this._btnSubmit.classList.toggle(obj.buttonDisabledClass, !this._isFormValid);
    console.log(this._btnSubmit.disabed)
  }

  _addInputListeners(form, obj) {
    this._inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    this._inputList.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._handleFormInput(evt, this._obj)
      })
    })
  }
}

export default FormValidator
