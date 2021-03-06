// CREATES AND APPENDS NEW ELEMENT TO THE PARENT ELEMENT. PARSES BASED ON PROP NAME
function addComponent(prop, object, parent) {
  const element = document.createElement(prop);
  const value = object[prop];
  if (prop === 'h1') {
    element.textContent = value;
  } else if (prop === 'img') {
    element.src = value[0];
    element.classList.add(value[1]);
  } else if (prop === 'p') {
    for (let i = 0; i < value.length - 1; i++) {
      const extra = document.createElement(prop);
      extra.textContent = value[i];
      parent.appendChild(extra);
    }
    element.textContent = value[value.length - 1];
  } else {
    console.error('UNKNOWN PROP TYPE');
  }
  parent.appendChild(element);
}

export default addComponent;
