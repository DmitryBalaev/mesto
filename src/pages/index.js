import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import './index.css';
import {initialCards, btnEditProfile, btnAddCard, popupEditProfileUserNameInput, popupEditProfileUserProfessionInput, popupEditProfileForm, popupAddCardForm, popupFullScreenSelector,  cardListSelector, formValidationObj, UserProfileSelectorObj, popupUpdateUserImage, userAvatar} from '../utils/constants.js';


// Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    authorization: '0924fc4a-7677-45df-b079-60f5e85d79cd',
    'Content-Type': 'application/json'
  }
})
// Рендер карточек на страницу
Promise.resolve(api.getInitialCards())
.then(res => {
  console.log(res)
  cardSection.renderItems(res.reverse())
  })
  .catch(err => console.log(err))

// Информация о пользователе
Promise.resolve(api.getUserInfo())
  .then(res => {
    userInfo.setUserInfo(res)
    userInfo.setUserAvatar(res)
  })
  .catch(err => {
    console.log(err)
  })

// Работа с данными пользователя
const userInfo = new UserInfo(UserProfileSelectorObj)

// Попап картинки
const popupWhitImage = new PopupWithImage(popupFullScreenSelector);
popupWhitImage.setEventListeners()

// Попап формы изменения аватара
const popupWithFormAvatar = new PopupWithForm('.popup-update-user-img', (data) => {
  popupWithFormAvatar.changeBtnText()
  Promise.resolve(api.sendAvatar(data))
  .then(res => {
    userInfo.setUserAvatar(res)
  })
  .catch(err => console.log(err))
  .finally(() => {
    popupWithFormAvatar.returnBtnText()
  })
  popupWithFormAvatar.close()
})
popupWithFormAvatar.setEventListeners()

// Попап формы изменения данных Пользователя
const popupWithFormEdit = new PopupWithForm('.popup-edit', (data) => {
  popupWithFormEdit.changeBtnText()
  Promise.resolve(api.sendUserData(data))
  .then(res => {
    userInfo.setUserInfo(res);
  })
  .catch(err => console.log(err))
  .finally(() => {
    popupWithFormEdit.returnBtnText()
  })
  popupWithFormEdit.close()
})
popupWithFormEdit.setEventListeners()

// Попап формы добавления карточки
const popupWithFormAddCard = new PopupWithForm('.popup-add', (data) => {
  popupWithFormAddCard.changeBtnText()
  Promise.resolve(api.sendNewCard(data))
  .then(res => {
    console.log(res)
    cardSection.addItem(createCard(res))
  })
  popupWithFormAddCard.close()
})
popupWithFormAddCard.setEventListeners()

// Добавляем на страницу 6 исходных карточек
const cardSection = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card)
}}, cardListSelector);

// Возвращаем разметку карточки со слушателями
function createCard({name, link}) {
  const card = new Card(name, link, '#card-item', (link, name) => {
    popupWhitImage.open(link, name)
  }
  )
  const cardElement = card.generateCard();
  return cardElement
}
// Валидация форм
const formEditProfileValidator = new FormValidator(formValidationObj, popupEditProfileForm);
const formAddCardValidator = new FormValidator(formValidationObj, popupAddCardForm);
const formUpdateUserImage = new FormValidator(formValidationObj, popupUpdateUserImage);

// Слушателеи кнопкок открытия попапов
btnEditProfile.addEventListener('click', function () {
  const profileValues = userInfo.getUserInfo();
  popupEditProfileUserNameInput.value = profileValues.name;
  popupEditProfileUserProfessionInput.value = profileValues.about;
  popupWithFormEdit.open()
  formEditProfileValidator.enableValidation()
})
btnAddCard.addEventListener('click', function ()  {
  popupWithFormAddCard.open()
  formAddCardValidator.enableValidation(formValidationObj);
})
userAvatar.addEventListener('click', function () {
  popupWithFormAvatar.open()
  formUpdateUserImage.enableValidation(formValidationObj)
})
