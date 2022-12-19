// Объявляем переменные
let btn = document.querySelectorAll('.cards__item-btn');
let editBtn = document.querySelector('.profile__edit-btn');
let closePopupBtn = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');
let popupOverlay =document.querySelector('.popup__overlay');
let userName = document.querySelector('.profile__user-name');
let userProfession = document.querySelector('.profile__profession');
let userNameInput = document.querySelectorAll('.popup__input');
let submitBtn = document.querySelector('.popup__btn-submit');


submitBtn.addEventListener('click', function(event) {
  event.preventDefault()
  userName.textContent = userNameInput[0].value;
  userProfession.textContent = userNameInput[1].value;
  popup.classList.remove('popup_opened');
})

// Проходимся по nodeList и ищем кнопки like
btn.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('cards__item-btn_active'); // добавляем класс по клику
  })
} );
//  открытие попапа
editBtn.addEventListener('click',  function() {
  popup.classList.add('popup_opened');
});
// Закрытие попапа по клику на кнопки закрыть
closePopupBtn.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});
// Закрытие попапа по клику вне его
popupOverlay.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});

