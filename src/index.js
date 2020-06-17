import navlinks from './navlinks.js';
import homepage from './homepage.js';
import contact from './contact.js';
import menu from './menu.js';

navlinks();
homepage();
pageLogic();

function pageLogic() {
    const nav = document.querySelectorAll('.nav-link');
    
    nav.forEach(ele => {
        ele.addEventListener('click', displayContent);
        // OTHER EASY WAY TO INITIALIZE?
        if (ele.textContent === 'Homepage') {
            ele.classList.add('active');
        }
    })
    
    function displayContent(e) {
        clearContent();
        setActiveTab(e);
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

    function setActiveTab(e) {
        nav.forEach(ele => {
            ele.classList.remove('active');
        })
        e.target.classList.add('active');
    }
};