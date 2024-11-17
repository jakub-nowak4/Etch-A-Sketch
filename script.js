const TEST_COLOR = "#563A9C";

//Values given in px
const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 500;

const GAP = 1;

const gridContainer = document.querySelector(".grid-container");

function createGrid(n) {
  const gridItemSize = calculateGridItemSize(n);

  for (let i = 0; i < n ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.cssText = `height: ${gridItemSize}px; width: ${gridItemSize}px; margin: ${GAP}px`;

    gridContainer.appendChild(gridItem);
  }
}

function calculateGridItemSize(numOfSquares) {
  return CONTAINER_WIDTH / numOfSquares - 2 * GAP;
}

function getGridSize() {
  let userInput = +prompt("Enter number of squares per side: ");

  while (Number.isNaN(userInput)) {
    alert("Incorrect value! Please try again.");
    userInput = +prompt("Enter number of squares per side: ");
  }

  return userInput;
}

const gridSize = getGridSize();
createGrid(gridSize);

//Events

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    e.target.style.cssText += `background: ${TEST_COLOR}`;
    console.log(e.target.style.cssText);
  });
});
