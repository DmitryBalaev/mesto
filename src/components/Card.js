class Card {
  constructor(data, template, myId, {handleCardClick, handleTrashBtn, handleLike}) {
    this._data = data
    this._template = template
    this._cardImage = data.link
    this._cardText = data.name
    this._fillPopup = handleCardClick
    this._handleTrashBtn = handleTrashBtn
    this._handleLike = handleLike
    this._ownerId = data.owner._id
    this._myId = myId
    this._likes = data.likes
    this.cardId = data._id
  }

  _getTemplate() {
    this._cardElement = document.
      querySelector(this._template).
      content.querySelector('.cards__item').
      cloneNode(true)

    return this._cardElement
  }

  generateCard() {
    this._element = this._getTemplate()
    this._elementImage = this._element.querySelector('.cards__item-img')
    this._likeBtn = this._element.querySelector('.cards__item-btn')
    this._likeCount = this._element.querySelector('.cards__item-like-count')
    this._trashBtn = this._element.querySelector('.card__item-trash-btn')
    this._setEventListeners()

    this._elementImage.src = this._cardImage
    this._elementImage.alt = this._cardText
    this._element.querySelector('.cards__item-title').textContent = this._cardText

    this._checkMyCard()
    this.setLike(this._likes)
    this._checkOwnerLike()


    return this._element
  }

  deleteCard() {
    this._element.remove()
    this._element = null
  }

  _checkMyCard() {
    if (this._ownerId !== this._myId) {
      this._trashBtn.remove()
    }
  }

  isLike() {
    return this._likes.find(user => user._id === this._myId)
  }

  _checkOwnerLike() {
    this.isLike() ? this.showLike() : this.removeLike()
  }

  showLike = () => {
    this._likeBtn.classList.add('cards__item-btn_active')
  }

  removeLike = () => {
    this._likeBtn.classList.remove('cards__item-btn_active')
  }

  setLike(data) {
    this._likes = data
    this._likeCount.textContent = this._likes.length

  }

  _setEventListeners() {
    this._trashBtn.addEventListener('click', () => {
      this._handleTrashBtn()
    })

    this._likeBtn.addEventListener('click', this._handleLike)

    this._elementImage.addEventListener('click', () => {
      this._fillPopup(this._data)
    })
  }

}

export default Card
