const jsButton = document.querySelector('.js-button');
console.log(jsButton.classList.contains('js-button'));

const gamingButton = document.querySelector('.js-gaming-button');
const musicButton = document.querySelector('.js-music-button');
const techButton = document.querySelector('.js-tech-button');

function toggle(buttonName) {
  if (buttonName.classList.contains('is-toggled') === false) {
    gamingButton.classList.remove('is-toggled');
    musicButton.classList.remove('is-toggled');
    techButton.classList.remove('is-toggled');
    buttonName.classList.add('is-toggled');
  } else if (buttonName.classList.contains('is-toggled') === true) {
    buttonName.classList.remove('is-toggled');
  }
}