// Объявляем переменные
const editBtn = document.querySelector('.profile__edit-btn');
const newCardAddBtn = document.querySelector('.profile__add-btn');
const closePopupBtn = document.querySelector('.popup__btn-close');
const popup = document.querySelector('.popup');
const editPopup = document.querySelector('.popup_edit-profile');
const popupNewCard = document.querySelector('.popup_new-card');
const userName = document.querySelector('.profile__user-name');
const userProfession = document.querySelector('.profile__profession');
const userNameInput = document.querySelector('.popup__input_user_name');
const userProfessionInput = document.querySelector('.popup__input_user_profession');
const profileForm = document.querySelector('.popup__form_edit-profile');

function editPopupOpen() {
  editPopup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userProfessionInput.value = userProfession.textContent;
}
function addCardPopupOpen() {
  popupNewCard.classList.add('popup_opened');
}
function popupClose() {
  popup.classList.remove('popup_opened');
}

function profileSave(event) {
  event.preventDefault()
  userName.textContent = userNameInput.value;
  userProfession.textContent = userProfessionInput.value;
  popupClose();
}
profileForm.addEventListener('submit', profileSave);
newCardAddBtn.addEventListener('click', addCardPopupOpen);
editBtn.addEventListener('click', editPopupOpen);
closePopupBtn.addEventListener('click', popupClose);
