function  navlinks() {
    
    const links = ['Homepage', 'Menu', 'Contacts'];
    const nav = document.querySelector('#nav');
    
    function addComponent(title) {
        const element = document.createElement('div');
        element.textContent = title;
        nav.appendChild(element);
    }

    for (let i = 0; i < links.length; i++) {
        addComponent(links[i]);
    }

}

export default navlinks