const makeParagraph = function (value) {
  const para = document.createElement('p');
  para.textContent = value;
  return para;
};

export default makeParagraph;
