// Объявляем переменные
const popup = document.querySelector('.popup')
const addPopup = document.querySelector('.popup-add')
const closeAddPoupBtn = addPopup.querySelector('.popup__btn-close')
const closeBtn = popup.querySelector('.popup__btn-close')
const editBtn = document.querySelector('.profile__edit-btn')
const addBtn = document.querySelector('.profile__add-btn')
const cardList = document.querySelector('.cards__list');
const cardItemTemplate = document.querySelector('#card-item').content;
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
// Рендер 6 карточек
const cardItemContent = initialCards.map(function (item) {
  return {
    title : item.name,
    link : item.link
  };
})
function render() {
  cardItemContent.forEach(renderCard);
}
function renderCard ({title, link}) {
  const cardItem = cardItemTemplate.querySelector('.cards__item').cloneNode(true);
  cardItem.querySelector('.cards__item-img').src = link;
  cardItem.querySelector('.cards__item-title').textContent = title;
  cardList.append(cardItem);
}
render();
// Открытие попапов
function openPopup (popup) {
  return () => popup.classList.add('popup_opened')
}
  editBtn.addEventListener('click', openPopup(popup));
  addBtn.addEventListener('click', openPopup(addPopup));
  // Закрытие попапов
function closePopup (popup) {
  return () => popup.classList.remove('popup_opened')
}
closeBtn.addEventListener('click', closePopup (popup))
closeAddPoupBtn.addEventListener('click', closePopup(addPopup))

  // function openPopup (popup) {
  //   return () => {
  //     console.log(popup)
  //     popup.classList.add('popup_opened')};
  // }
// // function editPopupOpen() {
// //   editPopup.classList.add('popup_opened');
// //   userNameInput.value = userName.textContent;
// //   userProfessionInput.value = userProfession.textContent;
// // }
// // function addCardPopupOpen() {
// //   popupNewCard.classList.add('popup_opened');
// // }
// // function popupClose() {
// //   popup.classList.remove('popup_opened');
// // }

// function saveProfile(event) {
//   event.preventDefault()
//   userName.textContent = userNameInput.value;
//   userProfession.textContent = userProfessionInput.value;
//   popupClose();
// }
// // profileForm.addEventListener('submit', saveProfile);
// // newCardAddBtn.addEventListener('click', addCardPopupOpen);
// // editBtn.addEventListener('click', editPopupOpen);
// // closePopupBtn.addEventListener('click', popupClose);


// function closePopup () {
//   return () => {
//     console.log(popup)
//     popup.classList.remove('popup_opened')};
// }

// newCardAddBtn.addEventListener('click', openPopup(popupNewCard))
// editBtn.addEventListener('click', openPopup(popup))
// closePopupBtn.addEventListener('click', closePopup(popup))
// closePopupBtn.addEventListener('click', closePopup(popupNewCard))

