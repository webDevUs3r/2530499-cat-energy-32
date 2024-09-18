/* в этот файл добавляет скрипты*/


const heroButton = document.querySelector('.hero__button');

const changeModificatorOnButton = () => {
  const viewport = window.innerWidth;

  if (viewport >= 768) {
    if (heroButton.classList.contains('button--size-s')) {
      heroButton.classList.remove('button--size-s');
    }
    heroButton.classList.add('button--size-m');
  } else {
    if (!heroButton.classList.contains('button--size-s')) {
      heroButton.classList.add('button--size-s');
    }

    if (heroButton.classList.contains('button--size-m')) {
      heroButton.classList.remove('button--size-m');
    }
  }
};

if (heroButton) {
  changeModificatorOnButton();
  window.addEventListener('resize', changeModificatorOnButton);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.toggle-button');
  const mainNav = document.querySelector('.main-navigation');

  if (mainNav.classList.contains('main-navigation--no-js')) {
    mainNav.classList.remove('main-navigation--no-js');

    menuButton.addEventListener('click', () => {
      if (!menuButton.classList.contains('toggle-button--opened')) {
        menuButton.classList.add('toggle-button--opened');
        mainNav.classList.add('main-navigation--opened');
      } else {
        menuButton.classList.remove('toggle-button--opened');
        mainNav.classList.remove('main-navigation--opened');
      }
    });
  }
});
