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
const btnEditProfile = document.querySelector('.profile__edit-btn')
const buttonClosePopupEditProfile = document.querySelector('.popup__btn-close')
const btnAddCard = document.querySelector('.profile__add-btn')
const popupEditProfile = document.querySelector('.popup-edit')
const popupEditProfileUserNameInput = document.querySelector('.popup__input_user_name')
const popupEditProfileUserProfessionInput = document.querySelector('.popup__input_user_profession')
const popupEditProfileForm = document.querySelector('.popup__form_edit-profile')
const popupEditProfileOverlay = document.querySelector('.popup__overlay')
const popupAddCard = document.querySelector('.popup-add')
const popupAddCardCloseBtn = popupAddCard.querySelector('.popup__btn-close')
const popupAddCardForm = popupAddCard.querySelector('.popup__form_new-card')
const popupAddCardNameInput = popupAddCard.querySelector('.popup__input_new-card_name')
const popupAddCardImgInput = popupAddCard.querySelector('.popup__input_new-card_link')
const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay')
const popupFullScreen = document.querySelector('.popup-image')
const popupFullScreenDescriptions = popupFullScreen.querySelector('.full-screen__descriptions')
const popupFullScreenImg = popupFullScreen.querySelector('.full-screen__image')
const popupFullScreenOverlay = popupFullScreen.querySelector('.popup__overlay')
const popupFullScreenCloseBtn = popupFullScreen.querySelector('.popup__btn-close')
const profileUserName = document.querySelector('.profile__user-name')
const profileProfession = document.querySelector('.profile__profession')
const cardList = document.querySelector('.cards__list')
const cardItemTemplate = document.querySelector('#card-item').content
const formValidationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type_error',
  buttonSelector: '.popup__btn-submit',
  buttonDisabledClass: 'popup__btn-submit_disabled',
}
