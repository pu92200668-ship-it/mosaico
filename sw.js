const CACHE_NAME = "juego-cache-v1";

const urlsToCache = [
"./",
"./index.html",
"./manifest.json",

"./main.js",
"./carga.js",
"./inicio.js",
"./juego.js",

"./l1.jpg",
"./l2.jpg",
"./l3.jpg",

"./icon-192.jpg",
"./icon-512.jpg"
];

self.addEventListener("install", function(event) {
event.waitUntil(
caches.open(CACHE_NAME).then(function(cache) {
return cache.addAll(urlsToCache);
})
);
});

self.addEventListener("fetch", function(event) {
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
