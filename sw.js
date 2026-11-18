const CACHE_NAME = 'lana-master-v6.1';

const PRECACHE_ASSETS = [
  './',
  'index.html',
  'unit1_data.js?v=6.0',
  'unit2_data.js?v=6.0',
  'unit3_data.js?v=6.0',
  'unit4_data.js?v=6.0',
  'unit5_data.js?v=6.0',
  'ai_tutor.js?v=6.1',
  'manifest.json',
  'vendor/katex/katex.min.css',
  'vendor/katex/katex.min.js',
  'vendor/katex/auto-render.min.js',
  'vendor/katex/fonts/KaTeX_AMS-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2',
  'vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2',
  'vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Main-Bold.woff2',
  'vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2',
  'vendor/katex/fonts/KaTeX_Main-Italic.woff2',
  'vendor/katex/fonts/KaTeX_Main-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2',
  'vendor/katex/fonts/KaTeX_Math-Italic.woff2',
  'vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2',
  'vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2',
  'vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Script-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size1-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size2-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size3-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size4-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2'
];

// Install: Cache all core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching v6.0 assets...');
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[ServiceWorker] Pre-cache warning:', err);
      });
    })
  );
});

// Activate: Immediately purge old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-First for local JS/HTML so updates show immediately, fallback to cache when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Bypass AI endpoints
  if (url.hostname.includes('openrouter.ai') || url.hostname.includes('googleapis.com')) {
    return;
  }

  // Network-First strategy with automatic cache update
  event.respondWith(
    fetch(event.request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
      }
      return networkResponse;
    }).catch(() => {
      // Offline fallback: serve from cache
      return caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});
