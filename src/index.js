import './style.css';
import { initGame } from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const gameArea = document.createElement('div');
  gameArea.className = 'game';
  gameArea.innerHTML = '<h2>Игровое поле</h2>';

  
  app.append(gameArea);
  initGame(gameArea);
});