/* в этот файл добавляет скрипты*/
const menuButton = document.querySelector('.toggle-button');
const mainNav = document.querySelector('.main-navigation');

menuButton.addEventListener('click', () => {
  if (!menuButton.classList.contains('toggle-button--opened')) {
    menuButton.classList.add('toggle-button--opened');
    mainNav.classList.add('main-navigation--opened');
  } else {
    menuButton.classList.remove('toggle-button--opened');
    mainNav.classList.remove('main-navigation--opened');
  }
});
