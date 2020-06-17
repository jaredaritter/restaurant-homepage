import homepage from './homepage.js';
import navlinks from './navlinks.js';
import contact from './contact.js';
import menu from './menu.js';

navlinks();
homepage();
pageLogic();

function pageLogic() {
    const nav = document.querySelectorAll('.nav-link');
    
    nav.forEach(ele => {
        ele.addEventListener('click', displayContent);
    })
    
    function displayContent(e) {
        clearContent();
        const name = e.target.textContent;
        if (name === 'Homepage') {
            homepage();
        } else if (name === 'Menu') {
            menu();
        } else if (name === 'Contact') {
            contact();
        }
    }

    function clearContent() {
        const content = document.querySelector('#content');
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        };
    }
};