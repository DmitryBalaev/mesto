import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';
import {initialCards, btnEditProfile, btnAddCard, popupEditProfileUserNameInput, popupEditProfileUserProfessionInput, popupEditProfileForm, popupAddCardForm, popupFullScreenSelector, popupFullScreenDescriptions, popupFullScreenImg, cardListSelector, formValidationObj, UserProfileSelectorObj} from '../utils/constants.js';

const userInfo = new UserInfo(UserProfileSelectorObj)

const popupWhitImage = new PopupWithImage(popupFullScreenSelector);
popupWhitImage.setEventListeners();


const popupWithFormEdit = new PopupWithForm('.popup-edit', () => {
  const inputValues = popupWithFormEdit.setInputValues();
  userInfo.setUserInfo(inputValues);
  popupWithFormEdit.close()
})
popupWithFormEdit.setEventListeners()

const popupWithFormAddCard = new PopupWithForm('.popup-add', () => {
  cardSection.addItem(createCard(popupWithFormAddCard.setInputValues()))
  popupWithFormAddCard.close()
})
popupWithFormAddCard.setEventListeners()

// Initial 6 card
const cardSection = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card)
}}, cardListSelector);

cardSection.renderItems();

function createCard({name, link}) {
  const card = new Card(name, link, '#card-item', fillPopupFullScreen)
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

btnEditProfile.addEventListener('click', function () {
  const profileValues = userInfo.getUserInfo();
  popupEditProfileUserNameInput.value = profileValues.name;
  popupEditProfileUserProfessionInput.value = profileValues.prof;
  popupWithFormEdit.open()
})
btnAddCard.addEventListener('click', function ()  {
  popupAddCardForm.reset();
  addCardValidator.toggleBtn(popupAddCardForm, formValidationObj);
  popupWithFormAddCard.open()
})
