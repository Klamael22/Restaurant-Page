import {pageLoadHome} from './page-load-home';
import {pageLoadMenu} from './page-load-menu';
import {pageLoadContact} from './page-load-contact';

const homeButton = document.getElementsByClassName('button')[0];
const menuButton = document.getElementsByClassName('button')[1];
const contactButton = document.getElementsByClassName('button')[2];

window.addEventListener('load', pageLoadHome)
homeButton.addEventListener('click', pageLoadHome)
menuButton.addEventListener('click', pageLoadMenu)
contactButton.addEventListener('click', pageLoadContact)

