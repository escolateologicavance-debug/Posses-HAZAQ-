const cacheName = 'hazaq-posses-v2';
const assets = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('whatsapp.com')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
