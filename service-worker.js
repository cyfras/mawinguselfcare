importScripts("/precache-manifest.1d065777bbd36a2b1d1bd38e35fe81fe.js", "/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v4.3.1"});
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate(0),
)

workbox.routing.registerRoute(
  new RegExp('https://reqres.in'),
  workbox.strategies.networkFirst(),
)

