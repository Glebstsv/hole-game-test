function createGrid(container) {
  console.log('Creating grid...');
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
  console.log('Initializing game...');
  
  if (!hostElement) {
    console.error('Host element not found');
    return;
  }

  const grid = createGrid(hostElement);

  const img = document.createElement("img");
  img.className = "character";
  img.src = "assets/character.png";
  img.alt = "character";
  img.draggable = false;

  img.onerror = function() {
    console.error('Failed to load image:', this.src);
    this.style.backgroundColor = '#ff0000';
    this.style.width = '50px';
    this.style.height = '50px';
    this.alt = 'Image failed to load';
  };

  img.onload = function() {
    console.log('Image loaded successfully:', this.src);
  };

  let currentIndex = Math.floor(Math.random() * 16);
  const startCell = grid.querySelector(`[data-cell="${currentIndex}"]`);
  
  if (startCell) {
    startCell.appendChild(img);
    console.log('Image added to cell:', currentIndex);
  } else {
    console.error('Start cell not found:', currentIndex);
  }

  const intervalMs = 1000;
  setInterval(() => {
    const nextIndex = chooseRandomDifferent(currentIndex);
    const nextCell = grid.querySelector(`[data-cell="${nextIndex}"]`);
    
    if (nextCell && img.parentNode) {
      nextCell.appendChild(img);
      currentIndex = nextIndex;
      console.log('Moved to cell:', nextIndex);
    }
  }, intervalMs);
}

// Делаем функцию глобальной
window.initGame = initGame;
console.log('game.js loaded, initGame function available:', typeof initGame);