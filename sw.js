// Minimal service worker — just enough for PWA install
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
// No caching — everything goes to network
