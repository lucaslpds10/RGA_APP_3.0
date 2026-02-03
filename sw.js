// Service Worker para ajudar com acesso a arquivos
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Passa as requisições normalmente
  event.respondWith(fetch(event.request));
});