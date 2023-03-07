import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import './index.css';
import {initialCards, popupItem, btnEditProfile, closeButtons, btnAddCard, popupEditProfile, popupEditProfileUserNameInput, popupEditProfileUserProfessionInput, popupEditProfileForm, popupAddCard, popupAddCardForm, popupAddCardNameInput, popupAddCardImgInput, popupFullScreenSelector, popupFullScreenDescriptions, popupFullScreenImg, profileUserName, profileProfession, cardListSelector, formValidationObj, popupOverlaySelector} from '../utils/constants.js';

const popupWhitImage = new PopupWithImage(popupFullScreenSelector);
popupWhitImage.setEventListeners();

const popupWithFormEdit = new PopupWithForm('.popup-edit', ({name, prof}) => {
  profileUserName.textContent = name;
  profileProfession.textContent = prof;
  popupWithFormEdit.close()
})
popupWithFormEdit.setEventListeners()

const popupWithFormAddCard = new PopupWithForm('.popup-add', ({name, link}) => {
  const newCard = new Card(name, link, '#card-item', fillPopupFullScreen)
  cardSection.addItem(newCard)
})
popupWithFormAddCard.setEventListeners()

// Initial 6 card
const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card)
}}, cardListSelector);

cardSection.renderItems();

function createCard(data) {
  const card = new Card(data.name, data.link, '#card-item', fillPopupFullScreen)
  const cardElement = card.generateCard();
  return cardElement
}
// Form validation
const editProfileValidator = new FormValidator(formValidationObj, popupEditProfileForm);
editProfileValidator.enableValidation(formValidationObj);
const addCardValidator = new FormValidator(formValidationObj, popupAddCardForm);
addCardValidator.enableValidation(formValidationObj);

function fillPopupFullScreen(link, name) {
  popupFullScreenImg.src = link
  popupFullScreenImg.alt = name
  popupFullScreenDescriptions.textContent = name
  popupWhitImage.open(link, name)
}

function fillInFormInputs() {
  popupEditProfileUserNameInput.value = profileUserName.textContent;
  popupEditProfileUserProfessionInput.value = profileProfession.textContent
}


// Клик на overlay и Esp
// function closePopupOnClickEsc (evt) {
//   if(evt.key === 'Escape'){
//     const currentPopup = document.querySelector('.popup_opened')
//     closePopup(currentPopup)()
//   }
// }
//  popupItem.forEach((item) => {
//   item.querySelector('.popup__overlay').addEventListener('click', closePopup(item))
// })

// Открытие попапов
// function openPopup(popup) {
//   // document.addEventListener('keydown', closePopupOnClickEsc)
//   return () => {
//     popup.classList.add('popup_opened')
//   }
// }

btnEditProfile.addEventListener('click', function () {
  fillInFormInputs()
  popupWithFormEdit.open()
})
btnAddCard.addEventListener('click', function ()  {
  popupAddCardForm.reset();
  addCardValidator.toggleBtn(popupAddCardForm, formValidationObj);
  popupWithFormAddCard.open()
})

// Закрытие попапов
// function closePopup(popup) {
//   document.removeEventListener('keydown', closePopupOnClickEsc)
//   return () => popup.classList.remove('popup_opened')
// }

// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup)());
// })

// Сохранение value инпутов в профиле
function saveEditProfileValue() {
  profileUserName.textContent = popupEditProfileUserNameInput.value
  profileProfession.textContent = popupEditProfileUserProfessionInput.value
  // closePopup(popupEditProfile)()
}
popupEditProfileForm.addEventListener('submit', saveEditProfileValue)

// Добавление новых карточек
// function addNewCard() {
//   const newCard = {
//     name: popupAddCardNameInput.value,
//     link: popupAddCardImgInput.value
//   }
//   cardList.prepend(createCard(newCard))
//   // closePopup(popupAddCard)()
// }
popupAddCardForm.addEventListener('submit', addNewCard)

