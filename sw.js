// Keeps a copy of the whole site on the device so it works offline.
//
// VERSION and the asset list are rewritten by .githooks/pre-commit on every
// commit; a new VERSION makes browsers install this file afresh.

const VERSION = "20261011120754";
const CACHE = `rosary-${VERSION}`;
const ASSETS = [
  "./",
  // assets:start
  "css/style.css",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "images/glorious-1/bartholomeus-breenbergh.webp",
  "images/glorious-1/carl-bloch.webp",
  "images/glorious-1/cecco-del-caravaggio.webp",
  "images/glorious-1/matthias-grunewald.webp",
  "images/glorious-1/perugino.webp",
  "images/glorious-1/piero-della-francesca.webp",
  "images/glorious-1/samuel-van-hoogstraten.webp",
  "images/glorious-2/andrea-mantegna.webp",
  "images/glorious-2/garofalo.webp",
  "images/glorious-2/hans-suss-von-kulmbach.webp",
  "images/glorious-2/john-singleton-copley.webp",
  "images/glorious-2/rembrandt.webp",
  "images/glorious-3/el-greco.webp",
  "images/glorious-3/juan-bautista-maino.webp",
  "images/glorious-3/titian.webp",
  "images/glorious-3/workshop-of-bernard-van-orley.webp",
  "images/glorious-4/bergognone.webp",
  "images/glorious-4/bernardo-daddi.webp",
  "images/glorious-4/el-greco.webp",
  "images/glorious-4/guido-reni.webp",
  "images/glorious-4/luca-signorelli.webp",
  "images/glorious-4/marcellus-coffermans.webp",
  "images/glorious-4/titian.webp",
  "images/glorious-5/annibale-carracci.webp",
  "images/glorious-5/botticelli.webp",
  "images/glorious-5/diego-velazquez.webp",
  "images/glorious-5/gentile-da-fabriano.webp",
  "images/glorious-5/niccolo-di-buonaccorso.webp",
  "images/glorious-5/peter-paul-rubens.webp",
  "images/joyful-1/bartolome-esteban-murillo.webp",
  "images/joyful-1/el-greco.webp",
  "images/joyful-1/fra-angelico.webp",
  "images/joyful-1/george-hitchcock.webp",
  "images/joyful-1/gerard-david.webp",
  "images/joyful-1/hans-memling.webp",
  "images/joyful-1/jean-hey.webp",
  "images/joyful-1/joos-van-cleve.webp",
  "images/joyful-1/luca-giordano.webp",
  "images/joyful-1/petrus-christus.webp",
  "images/joyful-1/philippe-de-champaigne.webp",
  "images/joyful-2/domenico-ghirlandaio.webp",
  "images/joyful-2/pontormo.webp",
  "images/joyful-2/rogier-van-der-weyden.webp",
  "images/joyful-3/andrea-mantegna.webp",
  "images/joyful-3/antoniazzo-romano.webp",
  "images/joyful-3/el-greco-domenikos-theotokopoulos-and-workshop.webp",
  "images/joyful-3/el-greco.webp",
  "images/joyful-3/federico-barocci.webp",
  "images/joyful-3/fra-bartolommeo.webp",
  "images/joyful-3/geertgen-tot-sint-jans.webp",
  "images/joyful-3/gerard-david.webp",
  "images/joyful-3/gerard-van-honthorst.webp",
  "images/joyful-3/lorenzo-monaco.webp",
  "images/joyful-3/perugino.webp",
  "images/joyful-4/alvaro-pirez.webp",
  "images/joyful-4/fra-angelico.webp",
  "images/joyful-4/rembrandt.webp",
  "images/joyful-4/stefano-pozzi.webp",
  "images/joyful-4/vittore-carpaccio.webp",
  "images/joyful-5/abraham-hondius.webp",
  "images/joyful-5/paolo-veronese.webp",
  "images/joyful-5/simone-martini.webp",
  "images/joyful-5/william-holman-hunt.webp",
  "images/luminous-1/andrea-del-verrocchio-and-leonardo-da-vinci.webp",
  "images/luminous-1/bartolome-esteban-murillo.webp",
  "images/luminous-1/jacopo-bassano.webp",
  "images/luminous-1/perugino.webp",
  "images/luminous-1/piero-della-francesca.webp",
  "images/luminous-1/sebastiano-ricci.webp",
  "images/luminous-1/sebastien-bourdon.webp",
  "images/luminous-2/bartolome-esteban-murillo.webp",
  "images/luminous-2/giuseppe-maria-crespi.webp",
  "images/luminous-2/juan-de-flandes.webp",
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
  "images/luminous-5/netherlandish-antwerp-mannerist-painters.webp",
  "images/luminous-5/ugolino-da-siena.webp",
  "images/sorrowful-1/carl-bloch.webp",
  "images/sorrowful-1/el-greco-and-workshop.webp",
  "images/sorrowful-1/heinrich-hofmann.webp",
  "images/sorrowful-1/nicolas-poussin.webp",
  "images/sorrowful-1/raphael.webp",
  "images/sorrowful-2/caravaggio.webp",
  "images/sorrowful-2/girolamo-romanino.webp",
  "images/sorrowful-2/master-of-the-berswordt-altar.webp",
  "images/sorrowful-2/peter-paul-rubens.webp",
  "images/sorrowful-2/william-adolphe-bouguereau.webp",
  "images/sorrowful-3/adriaen-isenbrant.webp",
  "images/sorrowful-3/anthony-van-dyck.webp",
  "images/sorrowful-3/antonello-da-messina.webp",
  "images/sorrowful-3/edouard-manet.webp",
  "images/sorrowful-3/gerard-van-honthorst.webp",
  "images/sorrowful-3/titian.webp",
  "images/sorrowful-4/el-greco.webp",
  "images/sorrowful-4/hans-maler.webp",
  "images/sorrowful-4/jan-gossart.webp",
  "images/sorrowful-4/raphael.webp",
  "images/sorrowful-4/sebastiano-del-piombo.webp",
  "images/sorrowful-4/titian.webp",
  "images/sorrowful-5/bartolome-esteban-murillo.webp",
  "images/sorrowful-5/bernardo-daddi.webp",
  "images/sorrowful-5/carlo-crivelli.webp",
  "images/sorrowful-5/diego-velazquez.webp",
  "images/sorrowful-5/fra-angelico-2.webp",
  "images/sorrowful-5/fra-angelico.webp",
  "images/sorrowful-5/francisco-de-zurbaran.webp",
  "images/sorrowful-5/gerard-david.webp",
  "images/sorrowful-5/jan-provoost.webp",
  "images/sorrowful-5/lucas-cranach-the-elder.webp",
  "js/app.js",
  "js/calendar.js",
  "js/data/about.js",
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
