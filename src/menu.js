import addCard from "./addCard";

function menu() {
    const pageInfo = {
        h1: 'Menu',
        item: [
            {
                name: 'Tacos al Pastor',
                price: 8,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg'
            },
            {
                name: 'Burrito',
                price: 9,
                img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/16/0/DV2904_Korean-BBQ-Burrito_s4x3.jpg.rend.hgtvcom.826.620.suffix/1539714414867.jpeg'
            },
            {
                name: 'Lechon Asado',
                price: 11,
                img: 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18194645/051135071-01-cuban-grilled-pork-with-mojo-recipe-main.jpg'
            },
            {
                name: 'Quesadilla',
                price: 7,
                img: 'https://ifoodreal.com/wp-content/uploads/2018/05/FG-vegetarian-quesadilla.jpg'
            },
            {
                name: 'Pollo con Mole',
                price: 12,
                img: 'https://pinaenlacocina.com/wp-content/uploads/2016/06/037.jpg'
            },
            {
                name: 'Chips and Guacamole',
                price: 5,
                img: 'https://dinnerthendessert.com/wp-content/uploads/2015/09/Chips-and-Guacamole-Close-500x453.jpg'
            }
        ]
    }

    const content = document.querySelector('#content');

    for (const prop in pageInfo) {
        addCard(prop, pageInfo, content);
    }
}

export default menu