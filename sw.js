/* NEXFOR · service worker
   Guarda el armazón de la app para que abra sin conexión.
   Los datos NO se guardan acá: van y vienen de Supabase. */
const CACHE = 'nexfor-3.0.0';
const BASICOS = [
  './', './index.html', './manifest.webmanifest',
  './escudo.png', './icon-192.png', './icon-512.png',
  './apple-touch-icon.png', './favicon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(e.request.method !== 'GET') return;
  /* a Supabase nunca le respondemos de la caché: los datos tienen que ser frescos */
  if(url.hostname.endsWith('supabase.co')) return;

  e.respondWith(
    caches.match(e.request).then(guardada => {
      const red = fetch(e.request).then(r => {
        if(r && r.status === 200 && url.origin === location.origin){
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return r;
      }).catch(() => guardada);
      return guardada || red;
    })
  );
});
