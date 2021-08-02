import templateMenuCard from '../templates/menu-card.hbs';
import menuData from '../menu.json';

const listMenuCardsRef = document.querySelector('.js-menu');

const menuCards = templateMenuCard(menuData);

listMenuCardsRef.innerHTML = menuCards;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('bodyRef');

const checkBoxRef =document.querySelector('#theme-switch-toggle'); 
checkBoxRef.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
    e.preventDefault();

    if (checkBoxRef.checked) {
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
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    checkBoxRef.checked = true;
}

function checkedFalse() {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
}

