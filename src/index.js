import navlinks from './navlinks.js';
import homepage from './homepage.js';
import contact from './contact.js';
import menu from './menu.js';
import './style.css';

navlinks();
homepage();
pageLogic();

function pageLogic() {
  const nav = document.querySelectorAll('.nav-link');

  nav.forEach((ele) => {
    ele.addEventListener('click', displayNewContent);
    // IS THERE AN EASIER WAY TO SET STARTING TAB TO BE HIGHLIGHTED?
    if (ele.textContent === 'Homepage') {
      ele.classList.add('active');
    }
  });

  function displayNewContent(e) {
    clearContent();
    setActiveTab(e);
    renderChoice(e);
  }

  function clearContent() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }

  function setActiveTab(e) {
    nav.forEach((ele) => {
      ele.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  function renderChoice(e) {
    const name = e.target.textContent;
    if (name === 'Homepage') {
      homepage();
    } else if (name === 'Menu') {
      menu();
    } else if (name === 'Contact') {
      contact();
    }
  }
}
