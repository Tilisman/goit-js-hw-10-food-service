import templateMenuCard from '../templates/menu-card.hbs';
import menuData from '../menu.json';

const listMenuCards = document.querySelector('.js-menu');

const menuCards = templateMenuCard(menuData);

listMenuCards.innerHTML = menuCards;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

const checkBox =document.querySelector('#theme-switch-toggle'); 
checkBox.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
    e.preventDefault();

    if (checkBox.checked) {
        checkedTrue()
    } else {
        checkedFalse();
    }  
}

function checkCurrentTheme() {
    const currentTheme = localStorage.theme;
    if (currentTheme === Theme.DARK) {
        checkedTrue();
        return;
    } else {
        checkedFalse();
        return;
    }  
}

checkCurrentTheme();

function checkedTrue() {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    checkBox.checked = true;
}

function checkedFalse() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    // checkBox.checked = false;
}

