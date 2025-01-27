const CACHE_NAME = 'horario-app-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/css/clock.css',
  '/assets/css/variables.css',
  '/assets/css/animations.css',
  '/assets/js/app.js',
  '/assets/js/modules/clockUpdater.js',
  '/assets/js/modules/dateFormatter.js',
  '/assets/js/modules/timeFormatter.js',
  '/assets/img/favicon/favicon-16x16.png',
  '/assets/img/favicon/favicon-32x32.png',
  '/assets/img/favicon/android-chrome-192x192.png',
  '/assets/img/favicon/android-chrome-512x512.png'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
