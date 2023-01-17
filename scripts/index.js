// Объявляем переменные
const popup = document.querySelector('.popup')
const btnEditProfile = document.querySelector('.profile__edit-btn')
const btnPopupClose = popup.querySelector('.popup__btn-close')
const btnAddCard = document.querySelector('.profile__add-btn')
const popupEditProfile = document.querySelector('.popup-edit')
const popupEditProfileUserNameInput = document.querySelector('.popup__input_user_name')
const popupEditProfileUserProfessionInput = document.querySelector('.popup__input_user_profession')
const popupEditProfileForm = document.querySelector('.popup__form_edit-profile')
const popupAddCard = document.querySelector('.popup-add')
const popupAddCardCloseBtn = popupAddCard.querySelector('.popup__btn-close')
const popupAddCardForm = popupAddCard.querySelector('.popup__form_new-card')
const popupAddCardNameInput = popupAddCard.querySelector('.popup__input_new-card_name')
const popupAddCardImgInput = popupAddCard.querySelector('.popup__input_new-card_link')
const popupFullScreen = document.querySelector('.popup-image')
const popupFullScreenDescriptions = popupFullScreen.querySelector('.full-screen__descriptions')
const popupFullScreenImg = popupFullScreen.querySelector('.full-screen__image')
const popupFullScreenCloseBtn = popupFullScreen.querySelector('.popup__btn-close')
const profileUserName = document.querySelector('.profile__user-name')
const profileProfession = document.querySelector('.profile__profession')
const cardList = document.querySelector('.cards__list')
const cardItemTemplate = document.querySelector('#card-item').content

// Рендер 6 карточек
const cardItemContent = initialCards.map(function (item) {
  return {
    title : item.name,
    link : item.link
  };
})
function renderInitialCards() {
  cardItemContent.forEach(renderCard)
}
function renderCard ({title, link}) {
  const cardItem = cardItemTemplate.querySelector('.cards__item').cloneNode(true)
  cardItem.querySelector('.cards__item-img').src = link
  cardItem.querySelector('.cards__item-title').textContent = title
  cardItem.querySelector('.cards__item-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__item-btn_active')
  })
  cardItem.querySelector('.card__item-trash-btn').addEventListener('click', function (evt){
    evt.target.parentElement.remove()
  })
  cardItem.querySelector('.cards__item-img').addEventListener('click', openPopup(popupFullScreen))
  cardItem.querySelector('.cards__item-img').addEventListener('click', function () {
    popupFullScreenImg.src = link
    popupFullScreenDescriptions.textContent = title
  })
  cardList.append(cardItem)
}
renderInitialCards();
// Открытие попапов
function openPopup (popup) {
  return () => {
    popup.classList.add('popup_opened')
    resetPopupAddCardValue()
  }}
btnEditProfile.addEventListener('click', openPopup(popupEditProfile))
btnEditProfile.addEventListener('click', saveProfileText)
btnAddCard.addEventListener('click', openPopup(popupAddCard))
// Закрытие попапов
function closePopup (popup) {
  return () => popup.classList.remove('popup_opened')
}
btnPopupClose.addEventListener('click', closePopup (popupEditProfile))
popupAddCardCloseBtn.addEventListener('click', closePopup(popupAddCard))
popupFullScreenCloseBtn.addEventListener('click', closePopup(popupFullScreen))
// Сохранение текста из инпутов
function saveProfileText () {
  popupEditProfileUserNameInput.value = profileUserName.textContent;
  popupEditProfileUserProfessionInput.value = profileProfession.textContent
}
// Обнуление value
function resetPopupAddCardValue (){
  popupAddCardNameInput.value = ''
  popupAddCardImgInput.value = ''
}
// Сохранение value инпутов в профиле
function saveEditProfileValue (evt) {
  evt.preventDefault()
  profileUserName.textContent = popupEditProfileUserNameInput.value
  profileProfession.textContent = popupEditProfileUserProfessionInput.value
  closePopup(popupEditProfile)()
}
popupEditProfileForm.addEventListener('submit', saveEditProfileValue)
// Добавление новых карточек
function addNewCard (evt) {
  evt.preventDefault()
  closePopup(popupAddCard)()
  renderNewCard()
}
function renderNewCard () {
  const newCard = cardItemTemplate.querySelector('.cards__item').cloneNode(true)
  const image = popupAddCardImgInput.value
  const title = popupAddCardNameInput.value
  newCard.querySelector('.cards__item-img').src = image
  newCard.querySelector('.cards__item-title').textContent = title
  newCard.querySelector('.cards__item-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__item-btn_active')
  })
  newCard.querySelector('.card__item-trash-btn').addEventListener('click', function (evt){
    evt.target.parentElement.remove()
  })
  newCard.querySelector('.cards__item-img').addEventListener('click', openPopup(popupFullScreen))
  newCard.querySelector('.cards__item-img').addEventListener('click', function () {
    popupFullScreenImg.src = image
    popupFullScreenDescriptions.textContent = title
  })
  cardList.prepend(newCard)
}
popupAddCardForm.addEventListener('submit', addNewCard)

