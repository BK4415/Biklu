const CACHE_NAME = 'npp-premium-v2.1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './assets/icons/logo.png',
  './assets/presets/preset-1.jpg', // Raj
  './assets/presets/preset-2.jpg', // Ronit
  './assets/presets/preset-3.jpg', // Aradhya
  './assets/presets/preset-4.jpg', // Lovely
  './assets/presets/preset-5.jpg', // Biklu
  './pages/about.html',
  './pages/guide.html',
  './pages/privacy.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
