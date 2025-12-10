self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("capybara-v1").then(c=>{
      return c.addAll([
        "./","./index.html","./player.png",
        "./capybara.png","./hedgehog.png",
        "./apple.png","./bomb.png",
        "./jump.wav","./hit.wav"
      ]);
    })
  );
});
self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
