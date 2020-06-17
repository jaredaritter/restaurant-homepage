import addComponent from "./addComponent";

function menu() {
    const pageInfo = {
        h1: 'Menu',
        p: ['Tacos al Pastor', 'Burrito', 'Lechon Asado', 'Quesadilla', 'Pollo con Mole', 'Chips and Guacamole']
    }

    const content = document.querySelector('#content');

    for (const prop in pageInfo) {
        addComponent(prop, pageInfo, content);
    }
}

export default menu