const createHome = (() => {
    const createNav = ()=> {
        const navElement = document.createElement('div');
        const heading = document.createElement('h1');
        const navList = document.createElement('ul');
        const homeLink = document.createElement('li');
        const menuLink = document.createElement('li');
        const contactLink = document.createElement('li');
        homeLink.setAttribute('id', 'homeLink');
        menuLink.setAttribute('id', 'menuLink');
        contactLink.setAttribute('id', 'contactLink');
        heading.textContent = 'Wiggy Biggy';
        homeLink.textContent = 'Home';
        menuLink.textContent = 'Menu';
        contactLink.textContent = 'Contact';
        navElement.classList.add('nav');
        navList.append(homeLink, menuLink, contactLink);
        navElement.append(heading, navList);
        return navElement
    }

    const createHero = () => {
        const hero = document.createElement('div');
        const heading = document.createElement('h1');
        const subText = document.createElement('p');
        const heroBtn = document.createElement('button');
        heading.textContent = 'The Best Whataburger in Katy, TX';
        subText.textContent = 'Come down and try some good food!';
        heroBtn.textContent = 'Order Now';
        hero.classList.add('content');
        hero.append(heading, subText, heroBtn);
        return hero
    }

    const createFooter = () => {
        const footer = document.createElement('div');
        const footerText = document.createElement('p');
        footerText.textContent = 'Made by Luke Tran';
        footer.classList.add('footer')
        footer.append(footerText)
        return footer
    }
    
    const createHome = () => {
        const nav = createNav();
        const content = createHero();
        const footer = createFooter();
        document.body.append(nav, content, footer);
    }

    return {createNav, createFooter, createHome}
})();

export { createHome };