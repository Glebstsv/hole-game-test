function createGrid(container) {
  const wrapper = document.createElement("div");
  wrapper.className = "grid";
  wrapper.setAttribute("role", "grid");

  for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.cell = String(i);
    cell.setAttribute("role", "gridcell");
    wrapper.appendChild(cell);
  }

  container.appendChild(wrapper);
  return wrapper;
}

function chooseRandomDifferent(currentIndex) {
  let next = Math.floor(Math.random() * 16);
  while (next === currentIndex) {
    next = Math.floor(Math.random() * 16);
  }
  return next;
}

function initGame(hostElement) {
  const grid = createGrid(hostElement);

  const img = document.createElement("img");
  img.className = "character";
  img.src = "assets/character.png";
  img.alt = "character";
  img.draggable = false;

  let currentIndex = Math.floor(Math.random() * 16);
  const startCell = grid.querySelector(`[data-cell="${currentIndex}"]`);
  startCell.appendChild(img);

  const intervalMs = 1000;
  setInterval(() => {
    const nextIndex = chooseRandomDifferent(currentIndex);
    const nextCell = grid.querySelector(`[data-cell="${nextIndex}"]`);
    nextCell.appendChild(img);
    currentIndex = nextIndex;
  }, intervalMs);
}

window.initGame = initGame;