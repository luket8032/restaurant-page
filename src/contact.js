import { createHome } from "./home";

const createContact = (() => {

    const createInput = (type, name) => {
        const container = document.createElement('div');
        const input = document.createElement('input');
        const label = document.createElement('label');
        input.setAttribute('type', type);
        input.setAttribute('name', name);
        label.setAttribute('for', name);
        label.textContent = `${name}:`;
        container.append(label, input);
        container.classList.add('form-input');
        return container
    }

    const createTextarea = (name, cols, rows) => {
        const container = document.createElement('div');
        const message = document.createElement('textarea');
        const label = document.createElement('label');
        label.textContent = `${name}:`;
        message.setAttribute('name', name);
        message.setAttribute('rows', rows);
        message.setAttribute('cols', cols);
        label.setAttribute('for', name);
        container.append(label, message);
        container.classList.add('form-input');
        return container
    }

    const createForm = () => {
        const formContainer = document.createElement('div');
        const form = document.createElement('form');
        const name = createInput('text', 'Name');
        const email = createInput('email', 'Email');
        const message = createTextarea('Message', '30', '10');
        const buttonContainer = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = 'Send';
        formContainer.classList.add('form-container');
        buttonContainer.classList.add('submit');
        buttonContainer.append(button)
        form.append(name, email, message, buttonContainer);
        formContainer.append(form);
        return formContainer
    }

    const createContact = () => {
        const nav = createHome.createNav();
        const footer = createHome.createFooter();
        const form = createForm();
        const contact = document.createElement('div');
        const heading = document.createElement('h1');
        heading.textContent = 'Contact Us';
        contact.classList.add('content');
        contact.append(heading, form);
        
        document.body.append(nav, contact, footer)
    }

    return {createContact}
})();

export {createContact}