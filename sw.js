const CACHE_NAME = "takam-academy-v1";
const BASE = "/Saiful760/";
const OFFLINE_URL = BASE;
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll([OFFLINE_URL,BASE+"manifest.json"])).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;if(e.request.mode==="navigate"){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE_NAME).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match(OFFLINE_URL))));return}const u=new URL(e.request.url);if(u.origin===self.location.origin)e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok){const x=r.clone();caches.open(CACHE_NAME).then(z=>z.put(e.request,x))}return r})))});
