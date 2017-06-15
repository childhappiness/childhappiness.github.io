'use strict';var CACHE_NAME = 'v0.20-checworker',urlsToCache=['/','index.html','about.html','start.html','stories.html','support.html','offline.html','manifest.json','images/logo.svg','favicon-16x16.png','fonts/montserrat-extra-bold.woff','fonts/montserrat-extra-bold.woff2','images/25185-crop.jpg','images/25287-crop.jpg','images/24744-crop.jpg','images/24825-crop.jpg','fortune.html','images/fortune.jpg','hailat.html','images/hailat.jpg','james.html','images/james.jpg','joel.html','images/joel.jpg','aisha+swaleh.html','images/aisha.jpg','twins.html','images/twins.jpg'];
self.addEventListener('install',function(evt){evt.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(urlsToCache);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(evt){return self.clients.claim();});
self.addEventListener('fetch',function(evt){evt.respondWith(caches.match(evt.request).then(function(response){return response||fetch(evt.request);}).catch(function(){if(evt.request.headers.get('Accept').indexOf('text/html') !== -1){return caches.match('offline.html');}else if(evt.request.headers.get('Accept').indexOf('image') !== -1){return new Response('<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#ccc" d="M0 0h200v200h-200z"/><g fill="#fff"><path d="M58.268 67.168v65.664h83.465v-65.664h-83.465zm76.739 58.543h-69.62v-51.423h69.62v51.423zM69.132 120.173l14.348-15.081 5.377 2.325 16.963-18.059 6.676 7.988 3.015-1.819 16.301 24.646z"/><circle cx="85.708" cy="87.364" r="6.267"/></g></svg>',{ headers:{'Content-Type':'image/svg+xml'}});}}))});
