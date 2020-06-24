function addCard(prop, object, parent) {
  const value = object[prop];
  if (prop === "h1") {
    const element = document.createElement(prop);
    element.textContent = value;
    parent.appendChild(element);
  } else if (prop === "item") {
    const element = document.createElement("div");
    element.classList.add("menu-items");
    value.forEach((obj) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardImg = document.createElement("div");
      const img = document.createElement("img");
      img.classList.add("card-img");
      img.setAttribute("src", obj.img);
      img.setAttribute("alt", obj.name);
      cardImg.appendChild(img);

      const cardText = document.createElement("div");
      const itemName = document.createElement("p");
      const itemPrice = document.createElement("p");
      cardText.classList.add("card-text");
      itemName.textContent = obj.name;
      itemPrice.textContent = obj.price;
      cardText.appendChild(itemName);
      cardText.appendChild(itemPrice);

      card.appendChild(cardImg);
      card.appendChild(cardText);
      element.appendChild(card);
    });
    parent.appendChild(element);
  } else {
    console.error("UNKNOWN PROP TYPE");
  }
}

export default addCard;
