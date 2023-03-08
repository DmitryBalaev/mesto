import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._submitForm = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._formInputs = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputsValue = {};
    this._formInputs.forEach((input) => {
      inputsValue[input.name] = input.value;
    });

    return inputsValue;
  }

  setInputValues() {
    return this._getInputValues()
  }

  setEventListeners() {
    this._form.addEventListener('submit', () => {
      this._submitForm(this._getInputValues())
    });

    super.setEventListeners()
  }

  close() {
    this._form.reset()
    super.close()
  }
}

export default PopupWithForm;
