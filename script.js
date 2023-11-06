const checkboxInput = document.querySelector("input");
const svgContainer = document.querySelector(".svg-container");

const toggleChecboxState = () => {
  checkboxInput.checked = !checkboxInput.checked;
};

svgContainer.addEventListener("click", toggleChecboxState);
