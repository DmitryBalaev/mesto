class Card {
  constructor(name, link, template, handleCardClick){
    this._template = template;
    this._cardImage = link;
    this._cardText = name;
    this._fillPopup = handleCardClick;
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
    this._element.remove()
    this._element = null;
  }

  _toggleLike() {
    this._likeBtn.classList.toggle('cards__item-btn_active')
  }

  _handleImageClick = () => {
    this._fillPopup(this._cardImage, this._cardText);
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector('.cards__item-btn');

    this._element.querySelector('.card__item-trash-btn').addEventListener('click', () => {
      this._deleteCard()
    })

    this._likeBtn.addEventListener('click', () => {
      this._toggleLike()
    })
    
    this._elementImage.addEventListener('click', this._handleImageClick)
  }

}

export default Card;
