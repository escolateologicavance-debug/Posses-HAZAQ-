const cacheName = 'hazaq-posses-v3';

const assets = [
    './',
    './index.html',
    './manifest.json',
    './logo-192.png',
    './logo-512.png'
];

self.addEventListener('install', event => {

    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', event => {

    if(event.request.url.includes('whatsapp.com')){
        return;
    }

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })

    );
});
