import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

new FormValidator(formValidationObj, popupEditProfileForm).enableValidation(formValidationObj);
new FormValidator(formValidationObj, popupAddCardForm).enableValidation(formValidationObj);


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


 initialCards.forEach((data) => {
  const card = new Card(data.name, data.link, '#card-item', fillPopupFullScreen).generateCard();
  cardList.append(card);
})
// Клик на overlay и Esp
function closePopupOnClickEsc (evt) {
  if(evt.key === 'Escape'){
    const currentPopup = document.querySelector('.popup_opened')
    closePopup(currentPopup)()
  }
}
popupItem.forEach((item) => {
  item.firstElementChild.addEventListener('click', closePopup(item))
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
  popupAddCardForm.reset()
  new FormValidator(formValidationObj, '.popup__form_new-card').toggleBtn(popupAddCardForm, formValidationObj)
  openPopup(popupAddCard)()
})

// Закрытие попапов
function closePopup(popup) {
  document.removeEventListener('keydown', closePopupOnClickEsc)
  return () => popup.classList.remove('popup_opened')
}


buttonClosePopupEditProfile.addEventListener('click', closePopup(popupEditProfile))
popupAddCardCloseBtn.addEventListener('click', closePopup(popupAddCard))
popupFullScreenCloseBtn.addEventListener('click', closePopup(popupFullScreen))
// Сохранение текста из инпутов


// Сохранение value инпутов в профиле
function saveEditProfileValue() {
  profileUserName.textContent = popupEditProfileUserNameInput.value
  profileProfession.textContent = popupEditProfileUserProfessionInput.value
  closePopup(popupEditProfile)()
}
popupEditProfileForm.addEventListener('submit', saveEditProfileValue)

// Добавление новых карточек
function addNewCard() {
  const newCard = new Card(popupAddCardNameInput.value, popupAddCardImgInput.value, '#card-item', fillPopupFullScreen).generateCard();
  cardList.prepend(newCard)
  closePopup(popupAddCard)()
}
popupAddCardForm.addEventListener('submit', addNewCard)

