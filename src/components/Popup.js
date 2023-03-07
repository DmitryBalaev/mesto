import {closeButtonSelector} from '../utils/constants.js';
import {popupOverlaySelector} from '../utils/constants.js';


class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._popupOpenClass = 'popup_opened';
    this._closeBtn = this._popup.querySelector(closeButtonSelector);
    this._overlay = this._popup.querySelector(popupOverlaySelector);
  }

  open = () => {
    this._popup.classList.add(this._popupOpenClass)
    document.addEventListener('keydown', this._handleEscClose)
  }

  close = () => {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose = (evt) => {
    if(evt.key === 'Escape'){
      this.close()
    }
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', this.close);
    this._overlay.addEventListener('click', this.close)
  }
}

export default Popup;
