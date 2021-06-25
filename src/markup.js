import menu from './menu.json';
import menuTemplate from './templates/template.hbs';

const ingredientList = document.querySelector('.js-menu');

ingredientList.innerHTML = menuTemplate(menu);