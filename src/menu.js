import { createHome } from "./home";

const createMenu = (() => {

    const createItem = (img, name, text) => {
        const item = document.createElement('div');
        const textContainer = document.createElement('div');
        const itemImg = document.createElement('img');
        const itemName = document.createElement('h1');
        const itemText = document.createElement('p');
        itemImg.setAttribute('src', `./photos/${img}`);
        itemName.textContent = name;
        itemText.textContent = text;
        item.classList.add('menu-item');
        textContainer.classList.add('menu-text');
        textContainer.append(itemName, itemText);
        item.append(itemImg, textContainer);
        return item
    }

    const createMenu = () => {
        const nav = createHome.createNav();
        const footer = createHome.createFooter();
        const menu = document.createElement('div')
        const heading = document.createElement('h1');
        const menuContainer = document.createElement('div');
        const itemOne = createItem(
            'patty_melt.webp',
            'Patty Melt',
            'Texas Toast, Large Beef Patty (5") (2), Monterey Jack Cheese (2 Slices), Grilled Onions (Regular), Creamy Pepper (Regular)'
        );
        const itemTwo = createItem(
            'Honey_BBQ_Chicken_Strip_Sandwich.webp',
            'Honey BBQ Chicken Strip Sandwhich',
            'Texas Toast, Chicken Strips, Monterey Jack Cheese (2 Slices), Honey BBQ (Regular)'
        );
        const itemThree = createItem(
            'Sweet_and_spicy_bacon_burger.webp',
            'Sweet and Spicy Bacon Burger',
            'Large Bun (5"), Large Beef Patty (5") (2), American Cheese and Monterey Jack Cheese (1), Bacon Slices (3), Grilled Onions (Regular), Sweet & Spicy (Regular), Mustard (Regular)'
        );
        const itemFour = createItem(
            'whatachickn_sandwich.webp',
            'Whatachickn Sandwhich',
            'Brioche Bun (4"), Whatachick’n Filet (1), Tomato (Regular), Leaf Lettuce (Regular), WhataSauce® (Regular)'
        );
        heading.textContent = 'Menu';
        menu.classList.add('menu');
        menuContainer.classList.add('menu-container');
        itemOne.classList.add('menu-item');
        itemTwo.classList.add('menu-item');
        itemThree.classList.add('menu-item');
        itemFour.classList.add('menu-item');
        menuContainer.append(itemOne, itemTwo, itemThree, itemFour);
        menu.append(heading, menuContainer);

        document.body.append(nav, menu, footer);
    }

    return {createMenu}
})();

export { createMenu };