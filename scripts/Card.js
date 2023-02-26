class Card {
  constructor(name, link, template, fillPopupFullScreen){
    this._template = template;
    this._cardImage = link;
    this._cardText = name;
    this._fillPopup = fillPopupFullScreen;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__item-img').src = this._cardImage;
    this._element.querySelector('.cards__item-img').alt = this._cardText;
    this._element.querySelector('.cards__item-title').textContent = this._cardText;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__item-trash-btn').addEventListener('click', (evt) => {
      evt.target.parentElement.remove()
    })

    this._element.querySelector('.cards__item-btn').addEventListener('click', (evt) => {
      evt.target.classList.toggle('cards__item-btn_active')
    })

    this._element.querySelector('.cards__item-img').addEventListener('click', () => {
      this._fillPopup(this._element.querySelector('.cards__item-img').src, this._element.querySelector('.cards__item-title').textContent)
    })
  }

}

export default Card;
