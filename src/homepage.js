import addComponent from './addComponent';
import Tacos from './1200x900px_Tacos_de_carnitas_carne_asada_y_al_pastor.jpg';

function homepage() {
  const pageInfo = {
    h1: 'YOLO TACO',
    img: [Tacos, 'homepage-img'],
    p: [
      "You want tacos? We got tacos. We have the best tacos you have ever put in your face. Don't believe us? Just ask Dave. *Listens intently*. Yeah Dave just yelled from the back that we definitely have the best tacos that you have ever put in your face. Sorry if you didn't hear him, he's pretty far away.",
      "We also have other items on the menu for your enjoyment. We have the staples like burritos and quesadillas, along with some of the classics like lechon asado and pollo con mole. We're going all over South and Central America here with a quick jaunt through the islands as well because it's all delicious. Come join us and put some food in your face!",
    ],
  };

  const content = document.querySelector('#content');

  for (const prop in pageInfo) {
    addComponent(prop, pageInfo, content);
  }
}

export default homepage;
