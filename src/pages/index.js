import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import './index.css';
import {initialCards, popupItem, btnEditProfile, closeButtons, btnAddCard, popupEditProfile, popupEditProfileUserNameInput, popupEditProfileUserProfessionInput, popupEditProfileForm, popupAddCard, popupAddCardForm, popupAddCardNameInput, popupAddCardImgInput, popupFullScreen, popupFullScreenDescriptions, popupFullScreenImg, profileUserName, profileProfession, cardList, formValidationObj} from '../utils/constants.js';



const editProfileValidator = new FormValidator(formValidationObj, popupEditProfileForm);
editProfileValidator.enableValidation(formValidationObj);
const addCardValidator = new FormValidator(formValidationObj, popupAddCardForm);
addCardValidator.enableValidation(formValidationObj);

function fillPopupFullScreen(link, name) {
  popupFullScreenImg.src = link
  popupFullScreenImg.alt = name
  popupFullScreenDescriptions.textContent = name
  openPopup(popupFullScreen)()
}

function fillInFormInputs() {
  popupEditProfileUserNameInput.value = profileUserName.textContent;
  popupEditProfileUserProfessionInput.value = profileProfession.textContent
}
function createCard(data) {
  const card = new Card(data.name, data.link, '#card-item', fillPopupFullScreen)
  const cardElement = card.generateCard();
  return cardElement
}

initialCards.forEach((data) => {
  cardList.append(createCard(data));
})

// Клик на overlay и Esp
function closePopupOnClickEsc (evt) {
  if(evt.key === 'Escape'){
    const currentPopup = document.querySelector('.popup_opened')
    closePopup(currentPopup)()
  }
}
 popupItem.forEach((item) => {
  item.querySelector('.popup__overlay').addEventListener('click', closePopup(item))
})

// Открытие попапов
function openPopup(popup) {
  document.addEventListener('keydown', closePopupOnClickEsc)
  return () => {
    popup.classList.add('popup_opened')
  }
}

btnEditProfile.addEventListener('click', function () {
  fillInFormInputs()
  openPopup(popupEditProfile)()
})
btnAddCard.addEventListener('click', function ()  {
  popupAddCardForm.reset();
  addCardValidator.toggleBtn(popupAddCardForm, formValidationObj);
  openPopup(popupAddCard)()
})

// Закрытие попапов
function closePopup(popup) {
  document.removeEventListener('keydown', closePopupOnClickEsc)
  return () => popup.classList.remove('popup_opened')
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup)());
})

// Сохранение value инпутов в профиле
function saveEditProfileValue() {
  profileUserName.textContent = popupEditProfileUserNameInput.value
  profileProfession.textContent = popupEditProfileUserProfessionInput.value
  closePopup(popupEditProfile)()
}
popupEditProfileForm.addEventListener('submit', saveEditProfileValue)

// Добавление новых карточек
function addNewCard() {
  const newCard = {
    name: popupAddCardNameInput.value,
    link: popupAddCardImgInput.value
  }
  cardList.prepend(createCard(newCard))
  closePopup(popupAddCard)()
}
popupAddCardForm.addEventListener('submit', addNewCard)

