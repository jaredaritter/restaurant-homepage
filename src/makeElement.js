const makeElement = function () {
  const header = function (value) {
    const header = document.createElement('h1');
    header.textContent = value;
    return header;
  };

  const paragraph = function (value) {
    const para = document.createElement('p');
    para.textContent = value;
    return para;
  };

  return {
    header,
    paragraph,
  };
};

export { makeElement };
