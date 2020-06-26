// DIFFERENT APPLICATIONS OF MODULE STRUCTURE FOR LEARNING. ALL PULL FROM SAME PAGEINFO SOURCE AND USE IMPORTED MODULES TO APPEND TO CONTENT DIV

import { makeHeader } from './makeHeader.js';
import { makeParagraph } from './makeParagraph.js';
// import { makeElement } from './makeElement.js';

function contact() {
  const pageInfo = {
    h1: 'Contact Information',
    address1: '123 Awesome Restaurant Way',
    address2: 'Somewhere Far, FL 12345',
    phone: '555-5555',
    email: 'dummyEmailAddress@someEmail.com',
  };

  const content = document.querySelector('#content');

  // APPENDED DIRECTLY FROM LOGIC
  for (const prop in pageInfo) {
    const value = pageInfo[prop];
    if (prop === 'h1') {
      content.appendChild(makeHeader(value));
    } else {
      content.appendChild(makeParagraph(value));
    }
  }

  // PUSHED TO ARRAY BY LOGIC THEN APPENDED AS GROUP AFTER
  // const arr = [];
  // for (const prop in pageInfo) {
  //   const value = pageInfo[prop];
  //   if (prop === 'h1') {
  //     arr.push(makeHeader(value));
  //   } else {
  //     arr.push(makeParagraph(value));
  //   }
  // }
  // arr.forEach((item) => content.appendChild(item));

  // UNIFIED MAKER MODULES UNDER PARENT MODULE. PUSHED TO ARRAY BY LOGIC THEN APPENDED AS GROUP AFTERWARDS
  //   const arr2 = [];
  //   for (const prop in pageInfo) {
  //     const value = pageInfo[prop];
  //     if (prop === 'h1') {
  //       arr2.push(makeElement().header(value));
  //     } else {
  //       arr2.push(makeElement().paragraph(value));
  //     }
  //   }
  //   arr2.forEach((item) => content.appendChild(item));
}

export default contact;
