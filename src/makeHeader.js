const makeHeader = function (value) {
  const header = document.createElement('h1');
  header.textContent = value;
  console.log(header);
  return header;
};

export default makeHeader;
