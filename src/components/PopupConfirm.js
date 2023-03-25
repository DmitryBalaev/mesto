import Popup from "./Popup.js";

class PopupConfirm extends Popup {
  constructor(popupSelector, {submitCallback}) {
    super(popupSelector)
    this._submitBtn = this._popup.querySelector('.popup__btn-submit')
    this._form = this._popup.querySelector('.popup__form')
    this._submit = submitCallback
  }

  handleSubmitConfirm(confirm) {
    this._submit = confirm
  }

  open(data) {
    this._data = data
    console.log(this._data)
    super.open()
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submit(this._data)
    });

    super.setEventListeners()
  }

  changeBtnText() {
    this._submitBtn.textContent = 'Удаление...'
  }

  returnBtnText() {
    this._submitBtn.textContent = 'Да'
  }
}

export default PopupConfirm
