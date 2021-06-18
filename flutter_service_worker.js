'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "5f41dd0f78978353c5180e672686cb99",
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
".git/index": "0a054d947d449dfd22433c71dadcd4d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "163e59f4455c7f013114dc95f41aec23",
".git/logs/refs/heads/master": "163e59f4455c7f013114dc95f41aec23",
".git/logs/refs/remotes/origin/master": "11b6c81c4e13474882c29d0c0e55e129",
".git/objects/23/eb814f76d77eb587d372ec9bf1819d23ab5cce": "a766c8d6a36a6f52eae606dfe3f7bef5",
".git/objects/2e/40f396b7e92a864d504eb7e1ee838149916721": "6099cf2c5ae8aa686a75f7a6dbc38a02",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/9193e8e4d5afd63aa858aec431cafba768c4f6": "924469f5501f1c2c78656e7e978ac29e",
".git/objects/62/e3dbb9086b06b398dd58573baba5b404eae508": "465c8e53e33a68f4cb50c22d554a7c3f",
".git/objects/6c/733deae0ffd4c7fd4f3936bbb2bda0d8abd5d7": "a27169daa04fa4df3483a9cdbb4e2329",
".git/objects/70/41a924f0b2cf0dc6f6b17b97991e936ac9d04f": "22338426e97c68658ffa859b3c8babc2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/e4ffc02ef3c8edd169cde402d24f256e5eaa30": "cb35dd2d722341de494c746b1f437915",
".git/objects/7c/b13ac260be5c12ced16e13724e12d41344a858": "ab7cacfd05567652c55f4a8d9ffab02c",
".git/objects/7f/d736a106da311efed231330a41db1f72a6fdc1": "a7740b4a3d66e4cb9af1d17043fc2317",
".git/objects/82/4da9cd7d2b987fd02172596d4cb76537eac455": "97754518a6d98f3b370b68815fa4ba97",
".git/objects/8c/b7c967540c728bbee37ba6ccbf37567cbbe330": "35c5101287e4997ada41f992f12f3fde",
".git/objects/8e/f98ce62264bed6dcfa485693e1c0733488c4a9": "62cea6263c969b378a1d56bfeccaabcd",
".git/objects/90/45dad2831abf952df06d487918c6e04b25fa2f": "78a4f95bcd1eb1969ddbb50983332f0b",
".git/objects/94/862acd646c3d484beba6fb99bd5aac689e233e": "5da566529432f051f77d2fccb1dff7bc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/54b13417c236f0ee01f64bff936b1957edfea1": "68c3c303cf456cc1c998d79f315fa4e9",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/5b2aa70dee8652fd05491032e019ee62dab27e": "fc62051af4ad3e9c6fda69edbdb7467d",
".git/objects/ae/0b8be55fa8aab5364dd08f31748e3325bafcd6": "a706aa42d185340f2c981376edfd6d44",
".git/objects/b2/6e214d4d7577619fa3c5d0262f242c3979809b": "2b1be55580822f14469389952a73bfec",
".git/objects/be/2e03d3defbb6a4be9b3fc2c18f4de446e1f81a": "c3c97e8817601dd31a1cb510c9d003d9",
".git/objects/be/f89303cba7997760cad789f3eed00c06962c76": "27757a3c84bb00ae6b2dbfedd55d5b54",
".git/objects/c9/fc9aacb95a8dc13ddda26199e8642df3666558": "011c5eb53ee72b6fb10b500c5824efa3",
".git/objects/d3/fa3622efa1e8917b38dce05661e6735a54cf61": "94b631fa3f33179e9976ec947a5dbc7b",
".git/objects/dc/2e455232643684ec303e7e0c565b4e70218926": "9250da8031cf5c7c66099bc34a57b277",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e4/3fd0ac37a965af92725b93bfbe5f9ca7309048": "e5a9720c25a6d9bcbff830605dc17acf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f5/2af6c31dff826199f3d2f84ee937709dffb5e5": "acbbe9a026464197ffca1f058e3531c0",
".git/objects/ff/eb10193a3a8c950ccc6fa81329f2358258fb24": "533684072f76cca82aab70ba6edbca9a",
".git/refs/heads/master": "c973a1c759efeeb1ea9f585c3a87bc26",
".git/refs/remotes/origin/master": "c973a1c759efeeb1ea9f585c3a87bc26",
"assets/AssetManifest.json": "0fcfd37803470926ce63293d032cae60",
"assets/assets/images/chatappflutter.jpg": "15f4d11942b8b5f9eadf9213d92a16d4",
"assets/assets/images/fiverr.png": "149e85dd85c5e3022c7836548b458d55",
"assets/assets/images/flutterbook.jpg": "c0ad43b51c1adad5293d1c95b8a18aef",
"assets/assets/images/fluttersocial.jpg": "6e094ddf06482c5c7ba2b5e015da09e2",
"assets/assets/images/icons8-call-100.png": "214b35dfa36e5ceccb541793f3deb712",
"assets/assets/images/icons8-database-restore-64.png": "5dfc8e16fe72edf7da4d7bcb5f842ea1",
"assets/assets/images/icons8-developer-mode-64.png": "1e9386ea744d35309cf1d917a48a2ce6",
"assets/assets/images/icons8-idea-100.png": "eac9556f79376a6e36c39852e03ed830",
"assets/assets/images/icons8-mail-128.png": "6c745713b393b111701fb13416f15986",
"assets/assets/images/icons8-rotate-screen-80.png": "0c5d1014ab9f9c6923e9680ae95bd800",
"assets/assets/images/logo.png": "705eea2a587ccc80e2a5acc4c021ce98",
"assets/assets/images/me.jpg": "cbd79a1bb32059e95592640335f5dbdf",
"assets/assets/images/pjimage.jpg": "69c7a5c0d5b0d456b7ac385a8dd42174",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d9feba73daa44c3270ea85107315f0e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "705eea2a587ccc80e2a5acc4c021ce98",
"icons/icon-192.png": "705eea2a587ccc80e2a5acc4c021ce98",
"icons/icon-512.png": "705eea2a587ccc80e2a5acc4c021ce98",
"index.html": "d9673081d16538424c4dafb7637b7815",
"/": "d9673081d16538424c4dafb7637b7815",
"main.dart.js": "e56cfdad76f0a5b927c191880f38feb4",
"manifest.json": "d14ef0747e880c0a461597ad0480d07b",
"version.json": "0b94449177a57889e7fc202e79b11db0"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
