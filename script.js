"use strict";

const ICONS = {
  menu: '<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
  statistics: '<svg viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-10H4v10zM16 4v16h4V4h-4z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  continue: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
  number: '<svg viewBox="0 0 24 24"><path d="M13.17 4L11 8.83 8.83 4H4v16h4v-8.83L10.17 16h3.66L16 11.17V20h4V4h-6.83z"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>',
  prev: '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6 1.41 1.41z"/></svg>',
  timer: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
  moves: '<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>',
  hint: '<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.06-2.15 3.9z"/></svg>',
  undo: '<svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>',
  redo: '<svg viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.45 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>',
  restart: '<svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>',
  fullscreen: '<svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
  upload: '<svg viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>',
  success: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
  warning: '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"/></svg>',
  delete: '<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',
  save: '<svg viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
  about: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>',
  help: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>',
  info: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>',
  classic: '<svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>',
};

/* -------------------- CORE STATE -------------------- */
const CONFIG = {
  SIZES: [3, 4, 5, 6, 7],
  NUM_SEQUENCES: ['Classic', 'Spiral', 'Snake', 'Upside Down'],
  PHOTO_PRESETS: [
    { name: 'Raj', url: 'preset-1.jpg' },
    { name: 'Ronit', url: 'preset-2.jpg' },
    { name: 'Aradhya', url: 'preset-3.jpg' },
    { name: 'Lovely', url: 'preset-4.jpg' }, // Separated
    { name: 'Biklu', url: 'preset-5.jpg' }   // Separated (New)
  ],
  DIFFS: ['Easy', 'Medium', 'Hard'],
  DIFF_STEPS: { Easy: 30, Medium: 100, Hard: 250 }
};

let state = {
  size: 4,
  mode: 'Number',
  sequence: 'Classic',
  difficulty: 'Medium',
  customPhoto: null,
  game: null,
  isPaused: false
};

/* -------------------- INITIALIZATION -------------------- */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Inject Icons
  document.querySelectorAll('[data-icon]').forEach(el => {
    const iconName = el.dataset.icon;
    if (ICONS[iconName]) el.innerHTML = ICONS[iconName];
  });

  // 2. Load Storage
  const saved = localStorage.getItem('npp_v2_storage');
  if (saved) state = { ...state, ...JSON.parse(saved) };

  // 3. Setup UI Pickers
  initPickers();
  updateUI();

  // 4. Smooth Transition (Remove Loading)
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading-screen').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
    }, 300);
  }, 500);

  // 5. Touch / Mouse Handling
  initSwipeControls();
});

/* -------------------- SWIPE CONTROLS -------------------- */
function initSwipeControls() {
  let startX, startY, startTime;
  const board = document.getElementById('board');

  const handleStart = (e) => {
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    startTime = Date.now();
  };

  const handleEnd = (e) => {
    if (!state.game || state.isPaused) return;
    const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
    const endY = e.type.includes('touch') ? e.changedTouches[0].clientY : e.clientY;
    
    const dx = endX - startX;
    const dy = endY - startY;
    const duration = Date.now() - startTime;

    if (Math.hypot(dx, dy) < 20 || duration > 500) return; // Tap or too slow

    let direction = '';
    if (Math.abs(dx) > Math.abs(dy)) direction = dx > 0 ? 'right' : 'left';
    else direction = dy > 0 ? 'down' : 'up';

    // Find the tile that COULD move in this direction
    const blankIdx = state.game.board.indexOf(0);
    const n = state.game.size;
    const br = Math.floor(blankIdx / n), bc = blankIdx % n;
    
    let targetIdx = -1;
    if (direction === 'right') targetIdx = blankIdx - 1;
    if (direction === 'left')  targetIdx = blankIdx + 1;
    if (direction === 'up')    targetIdx = blankIdx + n;
    if (direction === 'down')  targetIdx = blankIdx - n;

    // Validate bounds and row alignment for horizontal
    if (targetIdx >= 0 && targetIdx < n * n) {
       const tr = Math.floor(targetIdx / n), tc = targetIdx % n;
       if (direction === 'left' || direction === 'right') {
         if (tr === br) moveTile(targetIdx);
       } else {
         moveTile(targetIdx);
       }
    }
  };

  board.addEventListener('touchstart', handleStart, {passive: true});
  board.addEventListener('touchend', handleEnd, {passive: true});
  board.addEventListener('mousedown', handleStart);
  board.addEventListener('mouseup', handleEnd);
}

/* -------------------- GAME LOGIC -------------------- */
function moveTile(idx) {
  if (!state.game || state.isPaused) return;
  const blankIdx = state.game.board.indexOf(0);
  const n = state.game.size;
  
  const r = Math.floor(idx / n), c = idx % n;
  const br = Math.floor(blankIdx / n), bc = blankIdx % n;

  if (r !== br && c !== bc) return; // Not in same row/col

  // Multi-slide logic
  const board = state.game.board;
  if (r === br) {
    const dir = bc > c ? 1 : -1;
    for (let i = bc; i !== c; i -= dir) {
      board[i] = board[i - dir];
    }
  } else {
    const dir = br > r ? 1 : -1;
    for (let i = br; i !== r; i -= dir) {
      board[i * n + bc] = board[(i - dir) * n + bc];
    }
  }
  board[idx] = 0;
  state.game.moves++;
  renderBoard();
  checkWin();
}

function renderBoard() {
  const container = document.getElementById('board');
  const n = state.game.size;
  const board = state.game.board;
  const cellSize = 100 / n;

  // Clear existing tiles but keep logic efficient
  container.innerHTML = '';
  board.forEach((val, i) => {
    if (val === 0) return;
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (state.game.mode === 'Photo') tile.classList.add('photo-tile');
    
    tile.style.width = `calc(${cellSize}% - 6px)`;
    tile.style.height = `calc(${cellSize}% - 6px)`;
    tile.style.left = `${(i % n) * cellSize}%`;
    tile.style.top = `${Math.floor(i / n) * cellSize}%`;

    if (state.game.mode === 'Photo') {
      const homeIdx = val - 1;
      const hx = homeIdx % n;
      const hy = Math.floor(homeIdx / n);
      tile.style.backgroundImage = `url(${state.game.photoURL})`;
      tile.style.backgroundSize = `${n * 100}% ${n * 100}%`;
      tile.style.backgroundPosition = `${(hx / (n-1)) * 100}% ${(hy / (n-1)) * 100}%`;
    } else {
      tile.textContent = val;
      tile.style.fontSize = `${Math.min(24, 80/n)}vw`;
    }

    tile.onclick = () => moveTile(i);
    container.appendChild(tile);
  });
  
  document.getElementById('hud-moves').textContent = state.game.moves;
}

/* -------------------- UI UTILS -------------------- */
function initPickers() {
  document.querySelectorAll('.picker-arrow').forEach(btn => {
    btn.onclick = () => {
      const type = btn.dataset.picker;
      const dir = parseInt(btn.dataset.dir);
      
      if (type === 'size') {
        let idx = CONFIG.SIZES.indexOf(state.size);
        state.size = CONFIG.SIZES[(idx + dir + CONFIG.SIZES.length) % CONFIG.SIZES.length];
      } else if (type === 'mode') {
        state.mode = state.mode === 'Number' ? 'Photo' : 'Number';
        state.sequence = state.mode === 'Number' ? CONFIG.NUM_SEQUENCES[0] : CONFIG.PHOTO_PRESETS[0].name;
      } else if (type === 'sequence') {
        const list = state.mode === 'Number' ? CONFIG.NUM_SEQUENCES : CONFIG.PHOTO_PRESETS.map(p => p.name);
        let idx = list.indexOf(state.sequence);
        state.sequence = list[(idx + dir + list.length) % list.length];
      } else if (type === 'difficulty') {
        let idx = CONFIG.DIFFS.indexOf(state.difficulty);
        state.difficulty = CONFIG.DIFFS[(idx + dir + CONFIG.DIFFS.length) % CONFIG.DIFFS.length];
      }
      
      updateUI();
      saveState();
    };
  });

  document.getElementById('btn-play').onclick = startNewGame;
}

function updateUI() {
  document.getElementById('picker-size').textContent = `${state.size} × ${state.size}`;
  document.getElementById('picker-mode').textContent = state.mode;
  document.getElementById('picker-sequence').textContent = state.sequence;
  document.getElementById('picker-difficulty').textContent = state.difficulty;
  
  const isPhoto = state.mode === 'Photo';
  document.getElementById('label-sequence').textContent = isPhoto ? 'Photo Style' : 'Sequence';
  document.getElementById('photo-upload-card').classList.toggle('hidden', !isPhoto);

  // Check for saved game
  const lastGame = localStorage.getItem('npp_last_game');
  const resumeBtn = document.getElementById('btn-continue');
  if (lastGame) {
    const lg = JSON.parse(lastGame);
    resumeBtn.classList.remove('hidden');
    document.getElementById('resume-meta').textContent = `${lg.size}×${lg.size} • ${lg.sequence}`;
    resumeBtn.onclick = () => resumeGame(lg);
  } else {
    resumeBtn.classList.add('hidden');
  }
}

function startNewGame() {
  let photoURL = null;
  if (state.mode === 'Photo') {
    const preset = CONFIG.PHOTO_PRESETS.find(p => p.name === state.sequence);
    photoURL = preset ? `assets/presets/${preset.url}` : state.customPhoto;
  }

  state.game = {
    size: state.size,
    mode: state.mode,
    sequence: state.sequence,
    board: generateSolvedBoard(state.size),
    moves: 0,
    photoURL: photoURL
  };

  shuffleBoard();
  document.getElementById('screen-home').classList.remove('active');
  document.getElementById('screen-game').classList.add('active');
  renderBoard();
}

function generateSolvedBoard(n) {
  const arr = Array.from({length: n*n - 1}, (_, i) => i + 1);
  arr.push(0);
  return arr;
}

function shuffleBoard() {
  const n = state.game.size;
  const steps = CONFIG.DIFF_STEPS[state.difficulty];
  let currentBlank = n * n - 1;

  for (let i = 0; i < steps; i++) {
    const neighbors = [];
    const r = Math.floor(currentBlank / n), c = currentBlank % n;
    if (r > 0) neighbors.push(currentBlank - n);
    if (r < n - 1) neighbors.push(currentBlank + n);
    if (c > 0) neighbors.push(currentBlank - 1);
    if (c < n - 1) neighbors.push(currentBlank + 1);

    const move = neighbors[Math.floor(Math.random() * neighbors.length)];
    state.game.board[currentBlank] = state.game.board[move];
    state.game.board[move] = 0;
    currentBlank = move;
  }
}

function saveState() {
  localStorage.setItem('npp_v2_storage', JSON.stringify({
    size: state.size, mode: state.mode, sequence: state.sequence, difficulty: state.difficulty
  }));
}

function checkWin() {
  const solved = generateSolvedBoard(state.game.size);
  if (state.game.board.every((v, i) => v === solved[i])) {
    setTimeout(() => alert("Victory!"), 500);
  }
}
