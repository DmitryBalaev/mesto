class Card {
  constructor(name, link, template, fillPopupFullScreen){
    this._template = template;
    this._cardImage = link;
    this._cardText = name;
    this._fillPopup = fillPopupFullScreen;
  }

  _getTemplate() {
    this._cardElement = document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);

    return this._cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.cards__item-img')
    this._setEventListeners();

    this._elementImage.src = this._cardImage;
    this._elementImage.alt = this._cardText;
    this._element.querySelector('.cards__item-title').textContent = this._cardText;

    return this._element;
  }

  _deleteCard() {
    this.closest('.cards__item').remove()
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('cards__item-btn_active')
  }

  _handleImageClick = () => this._fillPopup(this._cardImage, this._cardText);

  _setEventListeners() {
    this._element.querySelector('.card__item-trash-btn').addEventListener('click', this._deleteCard)

    this._element.querySelector('.cards__item-btn').addEventListener('click', this._toggleLike)

    this._elementImage.addEventListener('click', this._handleImageClick)
  }

}

export default Card;
