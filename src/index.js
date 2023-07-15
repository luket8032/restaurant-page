import { createHome } from "./home";
import { createMenu } from "./menu"
import { createContact } from "./contact"
import './style.css'

let newElement

function initialRender() {
    createHome.createHome();
    newEventListeners();
};

initialRender();

function newEventListeners() {
    const homeLink = document.querySelector('#homeLink');
        homeLink.addEventListener('click', e => {
            document.body.innerHTML = ''
            createHome.createHome();
            newEventListeners();
    });

    const menuLink = document.querySelector('#menuLink');
        menuLink.addEventListener('click', e => {
            document.body.innerHTML = ''
            createMenu.createMenu();
            newEventListeners();
    });

    const contactLink = document.querySelector('#contactLink');
        contactLink.addEventListener('click', e => {
            document.body.innerHTML = ''
            createContact.createContact();
            newEventListeners();
    });
}


