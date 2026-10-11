// Keeps a copy of the whole site on the device so it works offline.
//
// VERSION and the asset list are rewritten by .githooks/pre-commit on every
// commit; a new VERSION makes browsers install this file afresh.

const VERSION = "20261011060342";
const CACHE = `rosary-${VERSION}`;
const ASSETS = [
  "./",
  // assets:start
  "css/style.css",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "images/glorious-1/carl-bloch.webp",
  "images/glorious-1/matthias-grunewald.webp",
  "images/glorious-1/piero-della-francesca.webp",
  "images/glorious-2/andrea-mantegna.webp",
  "images/glorious-2/garofalo.webp",
  "images/glorious-2/john-singleton-copley.webp",
  "images/glorious-2/rembrandt.webp",
  "images/glorious-3/el-greco.webp",
  "images/glorious-3/juan-bautista-maino.webp",
  "images/glorious-3/titian.webp",
  "images/glorious-4/el-greco.webp",
  "images/glorious-4/guido-reni.webp",
  "images/glorious-4/titian.webp",
  "images/glorious-5/diego-velazquez.webp",
  "images/glorious-5/gentile-da-fabriano.webp",
  "images/joyful-1/bartolome-esteban-murillo.webp",
  "images/joyful-1/el-greco.webp",
  "images/joyful-1/fra-angelico.webp",
  "images/joyful-2/domenico-ghirlandaio.webp",
  "images/joyful-2/pontormo.webp",
  "images/joyful-2/rogier-van-der-weyden.webp",
  "images/joyful-3/federico-barocci.webp",
  "images/joyful-3/geertgen-tot-sint-jans.webp",
  "images/joyful-3/gerard-van-honthorst.webp",
  "images/joyful-4/fra-angelico.webp",
  "images/joyful-4/rembrandt.webp",
  "images/joyful-4/vittore-carpaccio.webp",
  "images/joyful-5/paolo-veronese.webp",
  "images/joyful-5/simone-martini.webp",
  "images/joyful-5/william-holman-hunt.webp",
  "images/luminous-1/andrea-del-verrocchio-and-leonardo-da-vinci.webp",
  "images/luminous-1/bartolome-esteban-murillo.webp",
  "images/luminous-1/piero-della-francesca.webp",
  "images/luminous-2/bartolome-esteban-murillo.webp",
  "images/luminous-2/maerten-de-vos.webp",
  "images/luminous-2/paolo-veronese.webp",
  "images/luminous-3/carl-bloch.webp",
  "images/luminous-3/fra-angelico.webp",
  "images/luminous-3/franz-xaver-kirchebner.webp",
  "images/luminous-4/fra-angelico.webp",
  "images/luminous-4/giovanni-bellini.webp",
  "images/luminous-4/raphael.webp",
  "images/luminous-5/carl-bloch.webp",
  "images/luminous-5/federico-barocci.webp",
  "images/luminous-5/fra-angelico.webp",
  "images/sorrowful-1/carl-bloch.webp",
  "images/sorrowful-1/el-greco-and-workshop.webp",
  "images/sorrowful-1/heinrich-hofmann.webp",
  "images/sorrowful-2/caravaggio.webp",
  "images/sorrowful-2/peter-paul-rubens.webp",
  "images/sorrowful-2/william-adolphe-bouguereau.webp",
  "images/sorrowful-3/anthony-van-dyck.webp",
  "images/sorrowful-3/gerard-van-honthorst.webp",
  "images/sorrowful-3/titian.webp",
  "images/sorrowful-4/el-greco.webp",
  "images/sorrowful-4/raphael.webp",
  "images/sorrowful-4/titian.webp",
  "images/sorrowful-5/bartolome-esteban-murillo.webp",
  "images/sorrowful-5/diego-velazquez.webp",
  "images/sorrowful-5/francisco-de-zurbaran.webp",
  "js/app.js",
  "js/calendar.js",
  "js/data/images.js",
  "js/data/mysteries.js",
  "js/data/prayers.js",
  "manifest.webmanifest",
  // assets:end
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        ASSETS.map(async (path) => {
          // Paintings rarely change, so let the browser revalidate them;
          // everything else is fetched fresh, past any cached copy.
          const response = path.startsWith("images/")
            ? await fetch(path)
            : await fetch(`${path}?v=${VERSION}`, { cache: "reload" });
          if (!response.ok) throw new Error(`${path}: ${response.status}`);
          await cache.put(path, response);
        })
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((name) => name !== CACHE).map((name) => caches.delete(name)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      return (await cache.match(request, { ignoreSearch: true })) || fetch(request);
    })()
  );
});
