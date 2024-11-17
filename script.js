let currentColor = "#9D12EE";

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

  attachGridItemEvents();
}

function calculateGridItemSize(numOfSquares) {
  return CONTAINER_WIDTH / numOfSquares - 2 * GAP;
}

function getGridSize() {
  let userInput = +prompt("Enter number of squares per side: ");
  console.log(userInput);

  while (Number.isNaN(userInput) || +userInput > 100 || +userInput === 0) {
    alert("Incorrect value! Please try again.");
    userInput = +prompt("Enter number of squares per side: ");
  }

  return userInput;
}

function attachGridItemEvents() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      e.target.style.cssText += `background: ${currentColor}`;
    });
  });
}

const gridSize = getGridSize();
createGrid(gridSize);

//Events

const resetBtn = document.querySelector(".btn");

resetBtn.addEventListener("click", () => {
  //Remove old
  gridContainer.innerHTML = "";

  const gridSize = getGridSize();
  createGrid(gridSize);
});

const colorPicker = document.querySelector("#color");

colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
});
