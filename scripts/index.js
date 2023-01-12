// Объявляем переменные
const popup = document.querySelector('.popup')
const editPopup = document.querySelector('.popup-edit')
const addPopup = document.querySelector('.popup-add')
const closeAddPoupBtn = addPopup.querySelector('.popup__btn-close')
const closeBtn = popup.querySelector('.popup__btn-close')
const editBtn = document.querySelector('.profile__edit-btn')
const addBtn = document.querySelector('.profile__add-btn')
const userName = document.querySelector('.profile__user-name')
const userProfession = document.querySelector('.profile__profession')
const userNameInput = document.querySelector('.popup__input_user_name')
const userProfessionInput = document.querySelector('.popup__input_user_profession')
const profileForm = document.querySelector('.popup__form_edit-profile')
const addForm = addPopup.querySelector('.popup__form_new-card')
const newCardName = addPopup.querySelector('.popup__input_new-card_name')
const newCardImg = addPopup.querySelector('.popup__input_new-card_link')
const cardList = document.querySelector('.cards__list')
const cardItemTemplate = document.querySelector('#card-item').content
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
  cardItemContent.forEach(renderCard)
}
function renderCard ({title, link}) {
  const cardItem = cardItemTemplate.querySelector('.cards__item').cloneNode(true)
  cardItem.querySelector('.cards__item-img').src = link
  cardItem.querySelector('.cards__item-title').textContent = title
  cardItem.querySelector('.cards__item-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__item-btn_active')
  })
  cardList.append(cardItem)
}
render();
// Открытие попапов
function openPopup (popup) {
  return () => popup.classList.add('popup_opened')
}
editBtn.addEventListener('click', openPopup(editPopup))
editBtn.addEventListener('click', saveProfileText)
addBtn.addEventListener('click', openPopup(addPopup))
// Закрытие попапов
function closePopup (popup) {
  return () => popup.classList.remove('popup_opened')
}
closeBtn.addEventListener('click', closePopup (editPopup))
closeAddPoupBtn.addEventListener('click', closePopup(addPopup))
// Сохранение текста из инпутов
function saveProfileText () {
  userNameInput.value = userName.textContent;
  userProfessionInput.value = userProfession.textContent
}
// Сохранение value инпутов в профиле
function saveValue (evt) {
  evt.preventDefault()
  userName.textContent = userNameInput.value
  userProfession.textContent = userProfessionInput.value
  closePopup(editPopup)()
}
profileForm.addEventListener('submit', saveValue)
// Добавление новых карточек
function addNewCard (evt) {
  evt.preventDefault()
  closePopup(addPopup)()
  renderNewCard()
}
function renderNewCard () {
  const newCard = cardItemTemplate.querySelector('.cards__item').cloneNode(true)
  const image = newCardImg.value
  const title = newCardName.value
  newCard.querySelector('.cards__item-img').src = image
  newCard.querySelector('.cards__item-title').textContent = title
  newCard.querySelector('.cards__item-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__item-btn_active')
  })
  cardList.prepend(newCard)
}
addForm.addEventListener('submit', addNewCard)

