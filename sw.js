const CACHE_NAME = "makesense-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./main_screen_logic.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

// 1. Uložení souborů do mezipaměti při instalaci
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
});

// 2. Načítání souborů z mezipaměti při výpadku sítě / offline běhu
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }),
  );
});
