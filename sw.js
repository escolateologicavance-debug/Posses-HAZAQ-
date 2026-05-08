const CACHE_NAME = 'hazaq-posses-v1';
const assets = [
'index.html',
'logo-192.png',
'logo-512.png'
];

self.addEventListener('install', e => {
e.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(assets);
})
);
});

self.addEventListener('fetch', e => {
// Permite que links externos (como o do WhatsApp) funcionem sem passar pelo cache
if (e.request.url.includes('api.whatsapp.com') || e.request.url.includes('wa.me')) {
return fetch(e.request);
}
e.respondWith(
caches.match(e.request).then(res => {
return res || fetch(e.request);
})
);
});