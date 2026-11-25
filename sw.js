const CACHE_NAME = 'ai-assistant-v10.0';

const PRECACHE_ASSETS = [
  './',
  'index.html',
  'ai_tutor.js?v=10.0',
  'manifest.json',
  'vendor/katex/katex.min.css',
  'vendor/katex/katex.min.js',
  'vendor/katex/auto-render.min.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.map((n) => (n !== CACHE_NAME ? caches.delete(n) : null)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.hostname.includes('openrouter.ai') || url.hostname.includes('googleapis.com')) return;

  event.respondWith(
    fetch(event.request).then((res) => {
      if (res && res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
      }
      return res;
    }).catch(() => caches.match(event.request).then((c) => c || (event.request.mode === 'navigate' ? caches.match('index.html') : null)))
  );
});
