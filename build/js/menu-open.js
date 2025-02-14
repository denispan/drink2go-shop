const navMenu = document.querySelector('.header__menu');
const navToggle = document.querySelector('.header__toggle');

navMenu.classList.add('header__menu--closed');
navMenu.classList.remove('header__menu--nojs');
navToggle.classList.remove('header__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMenu.classList.contains('header__menu--closed')) {
    navMenu.classList.remove('header__menu--closed');
    navToggle.classList.remove('header__toggle--closed');
    navMenu.classList.add('header__menu--opened');
    navToggle.classList.add('header__toggle--opened');
  } else {
    navMenu.classList.add('header__menu--closed');
    navMenu.classList.remove('header__menu--opened');
    navToggle.classList.remove('header__toggle--opened');
  }
});
