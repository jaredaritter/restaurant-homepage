function homepage() {

    const pageInfo = {
        h1: 'Awesome Restaurant',
        img: [
            'src', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg'
        ],
        p: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facere aliquid eaque sapiente nesciunt sunt consequatur! Molestias ex fugit, minus unde quae dolorem veniam voluptatibus neque consequatur voluptatum blanditiis perspiciatis.', 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores tempora porro voluptatum in unde eaque doloremque delectus asperiores veniam, repellendus adipisci. Doloremque explicabo voluptatum modi voluptate optio aliquid cupiditate ratione a, sequi rem molestiae laudantium architecto? Blanditiis, soluta velit.'
        ]
    }

    const content = document.querySelector('#content');

    // CREATES AND APPENDS ELEMENTS TO THE CONTENT DIV. PARSES BASED ON PROP NAME
    function addComponent(prop) {
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
        }
        content.appendChild(element);
    }

    for (const prop in pageInfo) {
        addComponent(prop);
    }
}

export default homepage;