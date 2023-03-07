export const initialCards = [
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
export const popupItem = document.querySelectorAll('.popup')
export const btnEditProfile = document.querySelector('.profile__edit-btn')
export const closeButtons = document.querySelectorAll('.popup__btn-close')
export const btnAddCard = document.querySelector('.profile__add-btn')
export const popupEditProfile = document.querySelector('.popup-edit')
export const popupEditProfileUserNameInput = document.querySelector('.popup__input_user_name')
export const popupEditProfileUserProfessionInput = document.querySelector('.popup__input_user_profession')
export const popupEditProfileForm = document.querySelector('.popup__form_edit-profile')
export const popupAddCard = document.querySelector('.popup-add')
export const popupAddCardForm = popupAddCard.querySelector('.popup__form_new-card')
export const popupAddCardNameInput = popupAddCard.querySelector('.popup__input_new-card_name')
export const popupAddCardImgInput = popupAddCard.querySelector('.popup__input_new-card_link')
export const popupFullScreen = document.querySelector('.popup-image')
export const popupFullScreenDescriptions = popupFullScreen.querySelector('.full-screen__descriptions')
export const popupFullScreenImg = popupFullScreen.querySelector('.full-screen__image')
export const profileUserName = document.querySelector('.profile__user-name')
export const profileProfession = document.querySelector('.profile__profession')
export const cardListSelector = '.cards__list';
export const formValidationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  buttonSelector: '.popup__btn-submit',
  buttonDisabledClass: 'popup__btn-submit_disabled',
}
