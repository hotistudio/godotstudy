// ══════════════════════════════════════
//  Godot 학습 도우미 - Service Worker
//  버전을 올리면 캐시가 갱신됩니다
// ══════════════════════════════════════
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `godot-helper-${CACHE_VERSION}`;

// 캐시할 파일들
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// ── Install: 필수 파일 미리 캐싱 ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {
        // 일부 파일(아이콘 등)이 없어도 설치 진행
        return Promise.resolve();
      }))
      .then(() => self.skipWaiting()) // 새 SW 즉시 활성화
  );
});

// ── Activate: 옛날 캐시 청소 ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith('godot-helper-') && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim()) // 즉시 제어권 획득
  );
});

// ── Fetch: 네트워크 우선, 실패 시 캐시 (HTML용) / 캐시 우선 (정적 자원) ──
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // GET 요청만 처리
  if (req.method !== 'GET') return;

  // 외부 도메인은 스킵
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // HTML 문서는 네트워크 우선 (항상 최신 버전 확인)
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // 그 외(이미지, JSON 등)는 캐시 우선
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, resClone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
