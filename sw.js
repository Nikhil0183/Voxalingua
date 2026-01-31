const CACHE_NAME = "voxalingua-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/languages.js",
  "/conversation.html",
  "/conversation.js",
  "/learn.html",
  "/learn.css",
  "/learn.js",
  "/history.html",
  "/history.js",
  "/manifest.json",
  "/icon.png"
];


// Install → cache files
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});


// Serve from cache first
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
