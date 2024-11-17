const gridContainer = document.querySelector(".grid-container");

function createGrid(n) {
  for (let i = 0; i < n ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    gridContainer.appendChild(gridItem);
  }
}

createGrid(16);
