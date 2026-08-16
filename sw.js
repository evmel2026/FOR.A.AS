/* ============================================================
   FOR.A.AS · Service Worker · v5.3.1
   ------------------------------------------------------------
   El problema de antes: el index.html se servía desde la caché
   sin volver a preguntarle al servidor, así que la app instalada
   seguía mostrando la versión vieja para siempre.

   Ahora:
   · index.html va SIEMPRE a la red primero (network-first).
     Solo se usa la copia guardada si no hay internet.
   · Lo demás (escudo, íconos) va desde la caché, que es rápido,
     pero se refresca por atrás.
   · Cuando la app avisa ACTUALIZAR, este archivo toma el control
     al instante y la pantalla se recarga sola.

   Al publicar una versión nueva, cambiá VERSION acá también.
   ============================================================ */
const VERSION = '5.3.1';
const CACHE   = 'foraas-v' + VERSION;
const BASICOS = ['./', './index.html', './escudo.png', './manifest.json'];

/* ---------- instalación ---------- */
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(BASICOS.map(function(u){
        return c.add(new Request(u, {cache:'reload'})).catch(function(){});
      }));
    })
  );
  /* no esperamos: si la app pide actualizar, entramos enseguida */
});

/* ---------- activación: se borran las cachés viejas ---------- */
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(claves){
      return Promise.all(claves.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* ---------- la app nos dice que tomemos el control ---------- */
self.addEventListener('message', function(e){
  if(e.data && e.data.tipo === 'ACTUALIZAR') self.skipWaiting();
  if(e.data && e.data.tipo === 'VERSION' && e.source){
    e.source.postMessage({tipo:'VERSION', version: VERSION});
  }
});

/* ---------- qué hacer con cada pedido ---------- */
self.addEventListener('fetch', function(e){
  const req = e.request;
  if(req.method !== 'GET') return;

  const url = new URL(req.url);

  /* Supabase, fuentes y librerías: derecho a la red, sin tocar */
  if(url.origin !== location.origin) return;

  const esPagina = req.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('/index.html');

  if(esPagina){
    /* PRIMERO LA RED: acá estaba el problema */
    e.respondWith(
      fetch(new Request(req, {cache:'no-store'})).then(function(r){
        const copia = r.clone();
        caches.open(CACHE).then(function(c){ c.put('./index.html', copia); });
        return r;
      }).catch(function(){
        return caches.match('./index.html').then(function(g){
          return g || caches.match('./');
        });
      })
    );
    return;
  }

  /* el resto: caché primero, y se refresca por atrás */
  e.respondWith(
    caches.match(req).then(function(guardado){
      const red = fetch(req).then(function(r){
        if(r && r.status === 200){
          const copia = r.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copia); });
        }
        return r;
      }).catch(function(){ return guardado; });
      return guardado || red;
    })
  );
});
