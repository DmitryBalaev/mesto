import Popup from './Popup.js'

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.full-screen__image')
    this._description = this._popup.querySelector('.full-screen__descriptions')
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.name;
    this._description.textContent = data.name;
    super.open()
  }
}

export default PopupWithImage;
