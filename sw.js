// godot-helper sw.js - updated: 1776253611
const CACHE = 'godot-helper-1776253611';
const CORE = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // sw.js, navigate(페이지 로드)는 SW가 개입하지 않음 → 항상 네트워크에서 직접 가져옴
  if (url.pathname.endsWith('sw.js')) return;
  if (e.request.mode === 'navigate') return;

  // 그 외 리소스(폰트, 아이콘 등): stale-while-revalidate
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const fp = fetch(e.request).then(res => {
          if (res && res.status === 200) cache.put(e.request, res.clone());
          return res;
        }).catch(() => null);
        return cached || fp;
      })
    )
  );
});

self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
