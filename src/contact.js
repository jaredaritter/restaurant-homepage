import addComponent from "./addComponent";

function contact() {
    
    const pageInfo = {
        h1: 'Contact Information',
        p: ['123 Awesome Restaurant Way', 'Somewhere Far, FL 12345']
    }

    const content = document.querySelector('#content');

    for (const prop in pageInfo) {
        addComponent(prop, pageInfo, content);
    }
}

export default contact