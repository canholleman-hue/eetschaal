// Network-first pages ensure newer deployments are visible; fallback to last cached build.
const CACHE='eetschaal-shell-2026-10-29-privacy-1';
const FILES=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',evt=>evt.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',evt=>evt.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('eetschaal-shell-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',evt=>{
  const req=evt.request, url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==self.location.origin)return;
  // Never cache version checks or backup files; always use live response.
  if(url.pathname.endsWith('/version.json'))return;
  evt.respondWith(fetch(req).then(response=>{
    if(response.ok && (req.mode==='navigate'||FILES.some(f=>url.pathname.endsWith(f.slice(1))))) {
      const clone=response.clone(); caches.open(CACHE).then(cache=>cache.put(req,clone));
    }
    return response;
  }).catch(async()=>await caches.match(req)||await caches.match('./index.html')||Response.error()));
});
