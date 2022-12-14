// Объявляем переменные
let btn = document.querySelectorAll('.cards__item-btn');

// Проходимся по nodeList и ищем кнопки
btn.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('cards__item-btn_active') // добавляем класс по клику
  })
} );


