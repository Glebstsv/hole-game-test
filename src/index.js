import '/src/style.css';
import { initGame } from './game';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const title = document.createElement('h1');
  title.textContent = 'Игра "Лунка"';

  const gameArea = document.createElement('div');
  gameArea.className = 'game';
  gameArea.innerHTML = '<h2>Игровое поле</h2>';

  app.appendChild(title);
  app.appendChild(gameArea);

  initGame(gameArea);
});