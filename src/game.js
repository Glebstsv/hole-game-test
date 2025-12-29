import characterSrc from "./assets/character.png";

const TOTAL_CELLS = 16;
const GRID_SIZE = 4;
const MOVE_INTERVAL_MS = 1000;

function createGrid(container) {
  const wrapper = document.createElement("div");
  wrapper.className = "grid";
  wrapper.setAttribute("role", "grid");

  for (let i = 0; i < TOTAL_CELLS; i += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.cell = String(i);
    cell.setAttribute("role", "gridcell");
    wrapper.append(cell); 
  }

  container.append(wrapper); 
  return wrapper;
}

function chooseRandomDifferent(currentIndex) {
  let next = Math.floor(Math.random() * TOTAL_CELLS);
  while (next === currentIndex) {
    next = Math.floor(Math.random() * TOTAL_CELLS);
  }
  return next;
}

export function initGame(hostElement) {
  const grid = createGrid(hostElement);

  const img = document.createElement("img");
  img.className = "character";
  img.src = characterSrc;
  img.alt = "character";
  img.draggable = false;

  let currentIndex = Math.floor(Math.random() * TOTAL_CELLS);
  const startCell = grid.querySelector(`[data-cell="${currentIndex}"]`);
  startCell.append(img); 
  setInterval(() => {
    const nextIndex = chooseRandomDifferent(currentIndex);
    const nextCell = grid.querySelector(`[data-cell="${nextIndex}"]`);
    nextCell.append(img); 
    currentIndex = nextIndex;
  }, MOVE_INTERVAL_MS);
}

export { chooseRandomDifferent };