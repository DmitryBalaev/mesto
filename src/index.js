import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import '../pages/index.css';


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popupItem = document.querySelectorAll('.popup')
const btnEditProfile = document.querySelector('.profile__edit-btn')
const closeButtons = document.querySelectorAll('.popup__btn-close')
const btnAddCard = document.querySelector('.profile__add-btn')
const popupEditProfile = document.querySelector('.popup-edit')
const popupEditProfileUserNameInput = document.querySelector('.popup__input_user_name')
const popupEditProfileUserProfessionInput = document.querySelector('.popup__input_user_profession')
const popupEditProfileForm = document.querySelector('.popup__form_edit-profile')
const popupAddCard = document.querySelector('.popup-add')
const popupAddCardForm = popupAddCard.querySelector('.popup__form_new-card')
const popupAddCardNameInput = popupAddCard.querySelector('.popup__input_new-card_name')
const popupAddCardImgInput = popupAddCard.querySelector('.popup__input_new-card_link')
const popupFullScreen = document.querySelector('.popup-image')
const popupFullScreenDescriptions = popupFullScreen.querySelector('.full-screen__descriptions')
const popupFullScreenImg = popupFullScreen.querySelector('.full-screen__image')
const profileUserName = document.querySelector('.profile__user-name')
const profileProfession = document.querySelector('.profile__profession')
const cardList = document.querySelector('.cards__list')
const cardItemTemplate = document.querySelector('#card-item').content
const formValidationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  buttonSelector: '.popup__btn-submit',
  buttonDisabledClass: 'popup__btn-submit_disabled',
}

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

