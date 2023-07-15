import { createHome } from "./home";
import { createMenu } from "./menu"
import { createContact } from "./contact"
import './style.css'

let newElement

function initialRender() {
    createContact.createContact();
};

initialRender();

const homeLink = document.querySelector('#homeLink');
homeLink.addEventListener('click', e => {
    console.log('switch to home');
});

const menuLink = document.querySelector('#menuLink');
menuLink.addEventListener('click', e => {
    console.log('switch to menu');
});

const contactLink = document.querySelector('#contactLink');
contactLink.addEventListener('click', e => {
    console.log('switch to contact');
});


