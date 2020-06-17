import addComponent from './addComponent';

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

    for (const prop in pageInfo) {
        addComponent(prop, pageInfo, content);
    }
}

export default homepage;