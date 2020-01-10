let hamburger = document.querySelector('.menu-icon ');
let hamburgerMenu = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('clicked');
  hamburgerMenu.classList.toggle('close-hamburger');
  hamburgerMenu.classList.toggle('scale-up-ver-center');
});
