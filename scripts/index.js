// Рендер 6 карточек
function createCard(name, link) {
  const cardItem = cardItemTemplate.querySelector('.cards__item').cloneNode(true)
  const cardItemImage = cardItem.querySelector('.cards__item-img')
  cardItemImage.src = link
  cardItemImage.alt = name
  cardItem.querySelector('.cards__item-title').textContent = name
  cardItem.querySelector('.cards__item-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__item-btn_active')
  })
  cardItem.querySelector('.card__item-trash-btn').addEventListener('click', function (evt) {
    evt.target.parentElement.remove()
  })
  cardItemImage.addEventListener('click', openPopup(popupFullScreen))
  cardItemImage.addEventListener('click', function () {
    popupFullScreenImg.src = link
    popupFullScreenImg.alt = name
    popupFullScreenDescriptions.textContent = name
  })
  return cardItem
}
 initialCards.forEach((data) => {
  const card = createCard(data.name, data.link);
  cardList.append(card);
})

// Открытие попапов
function openPopup(popup) {
  return () => {
    popup.classList.add('popup_opened')
  }
}
btnEditProfile.addEventListener('click', function () {
  openPopup(popupEditProfile)()
  fillInFormInputs()
  enableValidation(formValidationObj)
})
btnAddCard.addEventListener('click', function ()  {
  openPopup(popupAddCard)()
  popupAddCardForm.reset()
  enableValidation(formValidationObj)
})

// Закрытие попапов
function closePopup(popup) {
  return () => popup.classList.remove('popup_opened')
}
function keyHandler (evt, popup){
  if(evt.key === 'Escape'){
    popup.classList.remove('popup_opened')
  }
}
popupAddCardForm.addEventListener('keydown', keyHandler('keydown', popupAddCard))
popupEditProfileOverlay.addEventListener('click', closePopup(popupEditProfile))
buttonClosePopupEditProfile.addEventListener('click', closePopup(popupEditProfile))
popupAddCardOverlay.addEventListener('click', closePopup(popupAddCard))
popupAddCardCloseBtn.addEventListener('click', closePopup(popupAddCard))
popupFullScreenCloseBtn.addEventListener('click', closePopup(popupFullScreen))
popupFullScreenOverlay.addEventListener('click', closePopup(popupFullScreen))
// Сохранение текста из инпутов

function fillInFormInputs() {
  popupEditProfileUserNameInput.value = profileUserName.textContent;
  popupEditProfileUserProfessionInput.value = profileProfession.textContent
}

// Сохранение value инпутов в профиле
function saveEditProfileValue() {
  profileUserName.textContent = popupEditProfileUserNameInput.value
  profileProfession.textContent = popupEditProfileUserProfessionInput.value
  closePopup(popupEditProfile)()
}
popupEditProfileForm.addEventListener('submit', saveEditProfileValue)

// Добавление новых карточек
function addNewCard() {
  closePopup(popupAddCard)()
  const newCard = createCard(popupAddCardNameInput.value, popupAddCardImgInput.value)
  cardList.prepend(newCard)
}
popupAddCardForm.addEventListener('submit', addNewCard)

