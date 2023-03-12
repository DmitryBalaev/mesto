import Popup from './Popup.js'

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.full-screen__image')
    this._description = this._popup.querySelector('.full-screen__descriptions')
  }

  open(src, alt) {
    this._image.src = src;
    this._image.alt = alt;
    this._description.textContent = alt;
    super.open()
  }
}

export default PopupWithImage;
