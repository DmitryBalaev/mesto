// Объявляем переменные
let btn = document.querySelectorAll('.cards__item-btn');
let editBtn = document.querySelector('.profile__edit-btn');
let closePopupBtn = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');
let popupOverlay =document.querySelector('.popup__overlay');

// Проходимся по nodeList и ищем кнопки
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

