class Card {
  constructor(data, template, handleCardClick, handleTrashBtn, myId){
    this._data = data;
    this._template = template;
    this._cardImage = data.link;
    this._cardText = data.name;
    this._fillPopup = handleCardClick;
    this._handleTrashBtn = handleTrashBtn;
    this._ownerId = data.owner._id
    this._myId = myId
    this.cardId = data._id
  }

  _getTemplate() {
    this._cardElement = document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);

    return this._cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.cards__item-img')
    this._trashBtn = this._element.querySelector('.card__item-trash-btn')
    this._setEventListeners();
    this._checkMyCard()

    this._elementImage.src = this._cardImage;
    this._elementImage.alt = this._cardText;
    this._element.querySelector('.cards__item-title').textContent = this._cardText;

    return this._element;
  }

  deleteCard() {
    console.log(this)
    this._element.remove()
    this._element = null
    }

  _checkMyCard() {
    if(this._ownerId !== this._myId){
      this._trashBtn.remove()
    }
  }

  _toggleLike() {
    console.log(this._element)
    this._likeBtn.classList.toggle('cards__item-btn_active')
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector('.cards__item-btn');

    this._trashBtn.addEventListener('click',() => {
      this._handleTrashBtn()
    })

    this._likeBtn.addEventListener('click', () => {
      this._toggleLike()
    })

    this._elementImage.addEventListener('click', () => {
      this._fillPopup(this._data)
    })
  }

}

export default Card;
