import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';
import {initialCards, btnEditProfile, btnAddCard, popupEditProfileUserNameInput, popupEditProfileUserProfessionInput, popupEditProfileForm, popupAddCardForm, popupFullScreenSelector, popupFullScreenDescriptions, popupFullScreenImg, cardListSelector, formValidationObj, UserProfileSelectorObj} from '../utils/constants.js';

// Работа с данными пользователя
const userInfo = new UserInfo(UserProfileSelectorObj)

// Попап картинки
const popupWhitImage = new PopupWithImage(popupFullScreenSelector);
popupWhitImage.setEventListeners()

// Попап формы изменения данных Пользователя
const popupWithFormEdit = new PopupWithForm('.popup-edit', (data) => {
  userInfo.setUserInfo(data);
  popupWithFormEdit.close()
})

popupWithFormEdit.setEventListeners()


// Попап формы добавления карточки
const popupWithFormAddCard = new PopupWithForm('.popup-add', (data) => {
  cardSection.addItem(createCard(data))
  popupWithFormAddCard.close()
})

popupWithFormAddCard.setEventListeners()

// Добавляем на страницу 6 исходных карточек
const cardSection = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card)
}}, cardListSelector);

cardSection.renderItems();

// Возвращаем разметку карточки со слушателями
function createCard({name, link}) {
  const card = new Card(name, link, '#card-item', (link, name) => {
    popupWhitImage.open(link, name)
  })
  const cardElement = card.generateCard();
  return cardElement
}

// Валидация форм
const formEditProfileValidator = new FormValidator(formValidationObj, popupEditProfileForm);
formEditProfileValidator.enableValidation(formValidationObj);
const formAddCardValidator = new FormValidator(formValidationObj, popupAddCardForm);
formAddCardValidator.enableValidation(formValidationObj);

// Слушателеи кнопкок открытия попапов
btnEditProfile.addEventListener('click', function () {
  const profileValues = userInfo.getUserInfo();
  popupEditProfileUserNameInput.value = profileValues.name;
  popupEditProfileUserProfessionInput.value = profileValues.prof;
  popupWithFormEdit.open()
})
btnAddCard.addEventListener('click', function ()  {
  formAddCardValidator.toggleBtn(popupAddCardForm, formValidationObj);
  popupWithFormAddCard.open()
})
