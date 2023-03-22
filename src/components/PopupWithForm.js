import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._submitForm = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._formInputs = this._form.querySelectorAll('.popup__input');
    this._submitBtn = this._popup.querySelector('.popup__btn-submit');
  }

  _getInputValues() {
    const inputsValue = {};
    this._formInputs.forEach((input) => {
      inputsValue[input.name] = input.value;
    });
    return inputsValue;
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

  changeBtnText() {
    this._submitBtn.textContent = 'Сохранение...'
  }

  returnBtnText() {
    this._submitBtn.textContent = 'Сохранить'
  }
}

export default PopupWithForm;
