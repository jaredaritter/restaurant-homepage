const makeHeader = function (value) {
  const header = document.createElement('h1');
  header.textContent = value;
  return header;
};

export { makeHeader };
