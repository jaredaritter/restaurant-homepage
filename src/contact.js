import makeHeader from './makeHeader.js';
import makeParagraph from './makeParagraph.js';

function contact() {
  const pageInfo = {
    h1: 'Contact Information',
    address1: '123 Awesome Restaurant Way',
    address2: 'Somewhere Far, FL 12345',
    phone: '555-5555',
    email: 'dummyEmailAddress@someEmail.com',
  };

  const content = document.querySelector('#content');

  for (const prop in pageInfo) {
    const value = pageInfo[prop];
    if (prop === 'h1') {
      content.appendChild(makeHeader(value));
    } else {
      content.appendChild(makeParagraph(value));
    }
  }
}

export default contact;
