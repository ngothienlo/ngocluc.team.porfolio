'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e3441de38aca260190b889d54572f602",
".git/config": "4579cd08b6626129c5cd8773c4c64c92",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bea63815969ff9ea6c493265ccbbebac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eaf2aa702b54c7b9fc2aced3f9491ca2",
".git/logs/refs/heads/master": "eaf2aa702b54c7b9fc2aced3f9491ca2",
".git/logs/refs/remotes/origin/master": "6e2a4ec5eb9fb70e1201adf759e933be",
".git/objects/13/59be5bb7ba90c31133c616f157d39de75ede67": "fe3212702136ab4e38c32e6dfef2164f",
".git/objects/26/82e6590cdb3c2828762992b11369e11b6b59d0": "2c3108517cf6ae22e62bc220601e41e3",
".git/objects/28/d069714b53964e3a5e2880a2d848dcab4da3e2": "17c589a74bd8dd56468c38b845f35f74",
".git/objects/32/200dc3ceb26adf2ac66eebb802b2a0cc612aed": "cf2bf930e307dfc3a09660daad418899",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/51/458471ec2a44cafb30cdfe293b2fefac32afe2": "649707c91038e642720f2e05cc6e8772",
".git/objects/51/8aef1ff07c1b217717ce1c2c3caa1aee0274f5": "a4cf476dc51f5f3a9efffdcdad7dbf6c",
".git/objects/55/1e601eafe0cae510d9f2420efd2cbced3e3db7": "1db8eae07a2232d55e2d416b42bfc43c",
".git/objects/56/cde50242ea9bb994ac407409778230c0cc01f4": "a716580fcd1828fd9584bae42959562b",
".git/objects/5f/19d28acb4da3c1ddfc7729d6024e6b5916f395": "cf7ef5c1007197bccd6ff94b3d4a6788",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/79/aaf5ce55e849ab3cff0718528f230a1d693df1": "a9f1fe89876d7de5bba8ee16fe809085",
".git/objects/85/4d39343e76ebbfa2ffcace781e6b71aaa3e84e": "736151456a751bf0e593f2cee5def1de",
".git/objects/95/81ef82423c1c115c2fb173839abe8ea9e3ff25": "ce762d7aab2b8897584522a265beebfd",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b7/6ddfdb9805e0168b2ccb56e6e6b125373aee96": "a2944a8220af3d37b374b8f7fd50e6c0",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c3/9a93dc7a96aa8eac378ecd8ec2cd48b1075624": "9b78bb03bd534da51eef16b4c3a131e7",
".git/objects/c8/293f915b24a9bdf5d16f18a7b076c0346a0e6b": "1164fa537a3b9b574e24f7ba771c5c6f",
".git/objects/ca/aa40a212633642e27bdeb50938d9fb86e8abc7": "4f407b8b9fbf38b7e6d9a90b53192e59",
".git/objects/df/1704b413ae9a90378596f67bee6e7d830debfe": "58a792017638d81000f0045ab1c07b74",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/fe/7b48538b34766779089daf4a23f0d009707a34": "a1201a0fe65164e85ad5f05928e30cad",
".git/objects/ff/a272feb0027e68e207d8cf45da043d87df7c5a": "bdd37849d8f41c2dfed3ffbfadaf6c16",
".git/refs/heads/master": "3f0053d462daea6b3f9664b897f1a78d",
".git/refs/remotes/origin/master": "3f0053d462daea6b3f9664b897f1a78d",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "314dd024048eda252123ea5f79e09256",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/images/programmer-3.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/NOTICES": "f5513cfadc97104bea430e9e1b016011",
"favicon.ico": "7003fe0a98fd6f7b9af4f39522f67981",
"index.html": "33630b4031bb64856d61def0671e7797",
"/": "33630b4031bb64856d61def0671e7797",
"main.dart": "6fb6e95a6b4427b7e7eb953f7250608c",
"main.dart.js": "f2231c9798461866962fb9a98aa78d97",
"version.json": "22373029b8b4e095dcd5f190f596254a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
