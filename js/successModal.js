const successButton = document.querySelector('.successMessage__btn');
const exitButton = document.querySelector('.successMessage__exit');

// Функция, которая удаляет класс hidden и отображает successMessage
const showSuccessMessage = () => {
  successMessage.classList.remove('hidden');
  successMessage.style.display = 'block';
};

// Функция, которая добавляет класс hidden для запуска анимации исчезновения
const hideSuccessMessage = () => {
  successMessage.classList.add('hidden');

  // После завершения анимации, удаляем класс hidden и элемент из DOM
  setTimeout(() => {
    successMessage.classList.remove('hidden');
    successMessage.style.display = 'none';
  }, 500); // 500 миллисекунд - это время анимации, соответствует времени transition
};

// Обработчик события для кнопки "ok"
successButton.addEventListener('click', hideSuccessMessage);

// Обработчик события для кнопки "x"
exitButton.addEventListener('click', hideSuccessMessage);