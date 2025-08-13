'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "78b2066473b5d953bb433f138ff6f171",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a8894685da5393cf3294b28699b8d53d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e93a7297d62c1938fe2da2fc9e13aad",
".git/logs/refs/heads/main": "e2d563fc1cb4d02d082b93493f658199",
".git/logs/refs/remotes/origin/main": "a82285941d3f2b789343cf53918c7722",
".git/objects/04/2dfb70dcf49b6d61efe6537bca399c967f705a": "35122bfd05f9646e0f612d5ff5133702",
".git/objects/04/465eaef5a4938681801bc2269e3552b4a17988": "0dcc7aef6662a5f2179c266c1ab3a010",
".git/objects/07/dcabcaa8ee7d8a1b175811bdd0b1378b9a0115": "8da2091cca76de8e89b74775f866feb5",
".git/objects/0c/ba46924cfc3e90647db8d95fefc05b48b812cd": "1aab0a9d33447fa861f8a3fa8a9c6af3",
".git/objects/0f/6b64b98f85d9dd85d0c0d35416c679f84c7116": "dacce409ea396d97d02382fb904c34d9",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/13/7c585ffb4efa4a0a17a0f25c594659bce0ddf1": "386eefdf2a251576278f9dfa01673a7d",
".git/objects/15/317142e18cf6bd1799fa8e5f292181bc5f78e4": "e62f798299b8469e6d06ace9ab1d30df",
".git/objects/18/cac534d2b76e2d36620102935f2e292dd0ef97": "308a95f8848e168a12a03985ee8bd562",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2a/dad01ecc296de5794737d5412f26d77a7448b6": "799bdca3e69784bfb29e79ae643ccea1",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/40/cff7b6fc16386182cbd9234f70962188ee0e70": "bd9adee71eaf5c6e011d6dc315e93e7d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/48/6f99217bd816cb48a06fe1037433686b33d936": "91d92501e113b122b5e3e3392ab277ca",
".git/objects/53/e54f4d4129ea82de85daf0ffb62cfd92e2ebe6": "e5fe3d510a0f145b0debbf2b128cf90b",
".git/objects/57/af838aa2e229d0328457b5fc8ae89a012986e7": "e7c36ccb9c02c1211d9a4afb97fc5516",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/6a1df78f540c1b7a217f19cd4de899fbe55ecf": "eac597290e675995971f9c890575256c",
".git/objects/64/36620aa69c73be2dd16f92d436d035c3c99abf": "2a1e20820500ba569727531399cee7f9",
".git/objects/68/022691546e76955a776aee8d2f408bcf57d005": "6780a6a37775f745fce424acb232e445",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/c506e0fb669ffcace0b13e38d709f1083963b6": "5f263bee6e13b0842a0c48d91e9c3cdd",
".git/objects/72/bb2f59e212c7bffff6c3f7641af3531caf21c2": "dd59d716ed4d116e58809627ba71fc66",
".git/objects/77/e1a90ad3a80e13333fd5bf518e22b81528d4a1": "6d58daf781d726b465c974cd450cd132",
".git/objects/84/388f6c6eb83364f9fb747211cd8b6aff2020bc": "15332508a3c65831a56529523a3b1523",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/29f878c684feb0fd7b37a4f466aaa36c81cf7f": "7a7b61bf154f4f5e9079a1f540db0d95",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/4cd3acf73e07a8a5ebc4957db10d8bf4b5006f": "20f898ca24b2c5f2ff15fe31ba91f470",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/af/df97eea039fcaa92c43561f180e826ab1ad4c1": "87dd6b289e3cf02dcf6d9e6a3f3a6583",
".git/objects/b3/2d890d0f43f76b3b2ada4c6c6bf589abe11b56": "77048023b1b26badefdb79a8323f858f",
".git/objects/b5/4c8a3c92f00c399b63a54a85a9f13af3009f63": "cea9f7aba9cb48adac9316c4e024a680",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d7be9d6d05a52a1c9567d79fd94cf61cb3035a": "ce0e8e053ba4aaa9a9c9ddd6c7e8fa06",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e4/9b2610dd0e2e0dab7f70c695e2847bb885023c": "e7d72d13c8ec7b0e27cd30ac5d8b8800",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e5/16dafa12d81cfff3f27b85076fb427ae7b87b0": "b32bb072ab174f6d8b68639c8a8b2b1e",
".git/objects/e5/99ba01e9106981a003f60fd53b30308e4c17d9": "1b7f39ed54cb2908461c96db68576eba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fe/21a853ae51bfaf8aa1013487d677721ac259d5": "f692c3380d8bb7000075395b15a9db3d",
".git/refs/heads/main": "a64bbf0df15ef284c41abe88eeabb38c",
".git/refs/remotes/origin/main": "a64bbf0df15ef284c41abe88eeabb38c",
"assets/AssetManifest.bin": "dd3c41df4fc344a6cc0d243204ae562f",
"assets/AssetManifest.bin.json": "eec10e1154c4e56ebf8791b299871525",
"assets/AssetManifest.json": "8a43dddf99d126da154a87824e3cfa45",
"assets/assets/Images/MegaStoresbanner.jpg": "7929ca1bab501cc4a0fe4def14735620",
"assets/assets/Images/MegaStoresTechnologyBanner.jpg": "784f931c45683fc55535f824b4c4199c",
"assets/assets/Images/OurServicesBanner_2.jpg": "372001e218527ee43a2e58b148dc7f97",
"assets/assets/Images/Reader_1.jpg": "a1f73acb49abc70a2bb4ee163dc5729f",
"assets/assets/Images/Reader_2.jpg": "59a4a9df5dd173e8e35daa6e458cef37",
"assets/assets/Images/Reader_3.jpg": "142a4767285e2777c6c19514bbe7a345",
"assets/assets/Images/RFID%2520banner.jpg": "5fdf69c1d593a46879c013db6691a345",
"assets/assets/Images/rfid.jpeg": "d6f86257f534505f708c76a4f9f3226e",
"assets/assets/Images/rfid_01.jpg": "31c17b7bbe7199a1844f8e12e29b7af8",
"assets/assets/Images/rfid_02.webp": "421b7e59864ffe72f5fb824aa3de69ba",
"assets/assets/Images/rfid_03.jpg": "24919013303e4f24f2100744545e5c4f",
"assets/assets/Images/Storebanner_4.jpg": "501aae58d41d92229741e03aba182889",
"assets/assets/Images/Storebanner_5.jpg": "ce633f6b579f1686ffcd7e7d769411e3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d73488d059bb0cac0dfa3a31309f20a8",
"assets/NOTICES": "7bbc7286f2c64d3e0f20fb9009a62f92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fc546f1b263730e0784f354ea75b21fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ec954c146520eb281a89a071fa514fd",
"/": "5ec954c146520eb281a89a071fa514fd",
"main.dart.js": "942f39bec6e9d53592ab4842daf9713f",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"MegaStoreIcon_16x16.png": "b70582995c21a634cf704d0a2c08a1cb",
"version.json": "980547175e325fe622a3362b84d55b6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
