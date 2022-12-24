// Объявляем переменные
const editBtn = document.querySelector('.profile__edit-btn');
const closePopupBtn = document.querySelector('.popup__btn-close');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile__user-name');
const userProfession = document.querySelector('.profile__profession');
const userNameInput = document.querySelector('.popup__input_user_name');
const userProfessionInput = document.querySelector('.popup__input_user_profession');
const profileForm = document.querySelector('.popup__form');

function popupOpen() {
  popup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userProfessionInput.value = userProfession.textContent;
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
editBtn.addEventListener('click', popupOpen);
closePopupBtn.addEventListener('click', popupClose);
