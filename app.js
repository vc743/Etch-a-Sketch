const container = document.querySelector(".container");
const CONTAINER_SIZE = 500;
let currentGridSize = 16;

function createGrid(gridSize) {
  container.innerHTML = "";

  const squareSize = CONTAINER_SIZE / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#615FFF";
    });

    container.appendChild(square);
  }

  currentGridSize = gridSize;
}

// Initial grid
createGrid(16);

const sizeBtn = document.querySelector(".size-btn");
sizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter the number of squares per side (maximum 100):");
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1) {
    alert("Please enter a valid number");
    return;
  }

  if (newSize > 100) {
    alert("The maximum size is 100");
    return;
  }

  createGrid(newSize);
});

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  container.replaceChildren();
  createGrid(currentGridSize);
});
