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

const slideImage = document.querySelector('.slider-compare__image--before');

const scrubberSlide = () => {
  if (slideImage) {
    slideImage.style.width = '50%';
  }
};

scrubberSlide();
