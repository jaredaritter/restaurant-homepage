// CREATES AND APPENDS ELEMENTS TO THE CONTENT DIV. PARSES BASED ON PROP NAME
function addComponent(prop, pageInfo, content) {
    const element = document.createElement(prop);
    const value = pageInfo[prop];
    if (prop === 'h1') {
        element.textContent = value;
    } else if (prop === 'img'){
        element.setAttribute(value[0], value[1]);
    } else if (prop === 'p') {
        for (let i = 0; i < value.length - 1; i++) {
            const extra = document.createElement(prop);
            extra.textContent = value[i];
            content.appendChild(extra);
        }
        element.textContent = value[value.length - 1];
    } else {
        console.error('ERROR');
    }
    content.appendChild(element);
}

export default addComponent