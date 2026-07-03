This is a professional README.md file tailored for Number Puzzle Pro, reflecting
the updated premium features, preset photo modes, and advanced swipe mechanics.

🧩 Number Puzzle Pro

Number Puzzle Pro is a high-performance, premium sliding-puzzle game built with
pure vanilla JavaScript, HTML5, and CSS3. It features a modern "glassmorphism"
UI, responsive touch/swipe mechanics, and a unique photo-preset system.

Version License Platform

✨ Key Features

🎮 Gameplay Modes

  - Number Mode: Solve classic sequences including Classic, Spiral, Snake, and
    Upside Down.
  - Photo Mode: Choose from premium local presets or upload your own image.
      - Presets Included: Raj, Ronit, Aradhya, Lovely & Biklu.
      - Custom Upload: Drag & drop or use your device camera.

🛠 Technical Highlights

  - Precision Swipe Controls: Smooth, lag-free directional swiping (Up, Down,
    Left, Right) with accidental movement rejection.
  - SVG Icon System: 100% emoji-free. Uses a custom-built lightweight SVG
    library for all UI elements.
  - Premium UI: Glassmorphism design, wood-textured tiles, and gold-leaf
    accents.
  - PWA Ready: Installable on mobile/desktop and works entirely offline via
    Service Workers.
  - Instant Load: Optimized initialization with a clean, square-logo loading
    screen.

📊 Progress Tracking

  - Dashboard: Track total wins, moves, best times, and streaks.
  - Resume Feature: Interrupted games are saved automatically. The Home screen
    displays your current progress (Size/Mode) for instant continuation.

🕹 Controls

| Method                 | Action                                                                    |
| :--------------------- | :------------------------------------------------------------------------ |
| **Touch / Mouse Drag** | Swipe a tile in any direction to slide it into the empty space.           |
| **Click / Tap**        | Standard click to move a tile (supports multi-tile sliding).              |
| **Keyboard**           | `Arrow Keys` (Move), `U` (Undo), `R` (Redo), `H` (Hint), `Space` (Pause). |

🚀 Getting Started

Prerequisites

Any modern web browser (Chrome, Safari, Firefox, Edge).

Installation

1.  Clone or download the repository.
2.  Place the preset-1.jpg to preset-4.jpg images in the assets/presets/ folder.
3.  Open index.html using a local server (like Live Server in VS Code) to enable
    PWA features.

# Example: Running with Python
python -m http.server 8000

📂 File Structure

├── index.html          # Main application structure
├── style.css           # Premium UI styles & Glassmorphism
├── script.js           # Core game logic, SVG library & Swipe engine
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline caching logic
├── assets/
│   ├── icons/          # App & Loading logo (logo.png)
│   └── presets/        # Preset images (preset-1.jpg, etc.)
└── pages/
    ├── about.html      # About the app
    ├── guide.html      # Detailed instructions
    └── privacy.html    # Privacy and Data terms

🔧 Configuration

You can easily extend the game by editing the CONFIG object in script.js:

  - Board Sizes: Add 8 or 10 to the SIZES array.
  - Difficulty: Adjust DIFF_STEPS to increase or decrease shuffle complexity.
  - Themes: Modify CSS variables in :root to change the gold/wood aesthetic.

⚖️ License

This project is licensed under the MIT License.

📞 Contact

For bug reports or feature requests, please contact the developer via the
Information panel inside the app.

© 2026 Number Puzzle Pro. All Rights Reserved.
