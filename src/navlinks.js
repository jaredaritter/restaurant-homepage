function navlinks() {
  const links = ["Homepage", "Menu", "Contact"];
  const nav = document.querySelector("#nav");

  function addComponent(title) {
    const element = document.createElement("div");
    element.textContent = title;
    element.classList.add("nav-link");
    nav.appendChild(element);
  }

  for (let i = 0; i < links.length; i++) {
    addComponent(links[i]);
  }
}

export default navlinks;
