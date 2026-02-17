'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6c20cd6d4b1670d0b07b369cc1a9682a",
"version.json": "2ccba3932d3ebcc897fea146db5d1bfc",
"index.html": "2a1584771b9bf92c24522f291d415ee8",
"/": "2a1584771b9bf92c24522f291d415ee8",
"main.dart.js": "4bf8008a2b64f66a0ddb97344ebdd345",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"README.md": "404c1101fb40af87343f08d2bda68592",
"favicon.png": "897d42f5853588ac11a4e4a29525f088",
"icons/Icon-192.png": "3bbc2a41f66bbcceec317aec0c7f74c7",
"icons/Icon-maskable-192.png": "3bbc2a41f66bbcceec317aec0c7f74c7",
"icons/Icon-maskable-512.png": "93d548056f25e6304cb198cbeed06a5b",
"icons/Icon-512.png": "93d548056f25e6304cb198cbeed06a5b",
"manifest.json": "bc8c37c497063b3afd018e5f0a850cfa",
".git/config": "f28f2088e922ab3da0d1d07acb7f4711",
".git/objects/0c/57ba54347abacf20d69341aa4a740c701ed36a": "b48c4d9a48aeea3ac35e04bc8c02ddb7",
".git/objects/50/82f80af5b7ac4745fe96c24f168ba7af3f8b5a": "c4b2d6e707ade13d3230d80c6e5dd3f0",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6a/dd9f0252885e9ea0c6a8ff97070b18e2f36291": "aa4954625cfc140c6d6326e054dd2cb1",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/56/e10f97b068a9b6e2b511f128de0f32bac80e88": "4bf6578d3d63d6a3de75f31a5fbd601b",
".git/objects/51/28d448c44eeb53fd1d8fe4e87efaa8656ab728": "d85718f23335509a4d0548eaae0f0552",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/d1cb9261010afdd37765b92c9697263ce2e9b9": "55b877ca4e7f5b0d0dd9e6cd0f494e5b",
".git/objects/9c/9bda0b7a0d85a99d4b00d7172cff25a4ebde57": "a857066565004063c6a9258f65d895af",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/4e/389c7d602da95ec26cc3d997124bab30d2edc9": "f082c087f11299de67b0d236046e72df",
".git/objects/20/bc101ab078dbb00c6380c452c5f1451704c241": "2f2cb6257911eefaa12d4758b446151a",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/c14e5c340dc448429e0ca68f8282fcbddc3ab3": "98eb46e0140ab3e2195b6cf87281f3bd",
".git/objects/1a/6bac1537e636a2491837ceb5c2efaa0f6fb6a8": "25612c0bc465868828ca5c4976feee2d",
".git/objects/8a/e2f7687e17fab3476f6f0191d942e2c0880c40": "45b0cfa1a6e63a6102a7ef9154aee1c7",
".git/objects/7e/561534021091c152fd63b6376ea2e66c868583": "ade0ce393153d19a1c3988841713680f",
".git/objects/26/e3e44325e45b0bcc48734de49160d980ed421c": "d8a1117c8acb36b7c2c387c7e6c69ea7",
".git/objects/21/523af74d3f3521e5da7b47c7b12bf68a93c6f5": "34618ea29b4353da8bfe447a24596a39",
".git/objects/81/72a2958d4c5e5494de6bad1cbc7ea39f3bb33c": "3ea4f76cd6f7ee00194b65ebce81c77b",
".git/objects/88/e38d87228706ba417e0916c79befb953ff9d4f": "07d154475d65bf941de33e64d1734fa8",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/65/747db445bf9d4ac4ccc2c4d4b4bfb8ee0df266": "69707d6a217c063d68657c4115d36308",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/53/e4d2c3e87cd71e8fcc3bc38fdd81b629197495": "668afd8fc43a478546c5bab11e2541ef",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/d6bc2339fad83376d3b0c287aa37a5b590f429": "ffaa656c85a53dc408812b72a4ae32d1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/aa/2bda02ff051f1e1b662dd3174629894544f353": "ffeadf75cdd6a92081d4fc743f76fd3b",
".git/objects/db/4d32eb50bc4fab0e7aa00ed49404c1bce05ce2": "1f6f0f2063d343c2aee4c6c034137b82",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c3/f6f1698a1f1df7d7b74b6bc6cfb2a4d4c504cb": "a1b7513c0af5025f21dc7fc0123eb909",
".git/objects/cc/2f72ac5cbe393c41bdeb9b175ca32aebb21b37": "5a2600a98edf6e881ab29683b7aa752f",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/ff/8cf42963cfa350308c245d6f358f47aaa694b4": "7f460fd6f188d5b3bbb8a1ea408cce5c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/7d6168d19da8d78c2643bb53eb241db71dc581": "48417c1b002c2df70f97f9deea0efeac",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1e/af797c19230e2d9bf6e8deae8b687f671261d5": "6842709ef0f84ea0c6d4868174f98bae",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/13/3eaff4e98037bfdc51485b1a6990aaede8072f": "56a4eb8246a35f3019934bc6773a87b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19fef6e122085c116c5382d838e73534",
".git/logs/refs/heads/main": "19fef6e122085c116c5382d838e73534",
".git/logs/refs/remotes/origin/main": "9a7d767cccdd482b049655ceb3a11319",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "76681eed4784695d0d57c1c8d8693fdd",
".git/refs/remotes/origin/main": "76681eed4784695d0d57c1c8d8693fdd",
".git/index": "c89f36d56690346edc53dd45ec1d09ef",
".git/COMMIT_EDITMSG": "a00766f40160d9d5ad79fdcd4cf1d0cc",
"assets/NOTICES": "d10196da55cffcd39f5735ed020c6e10",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "282e62925e0845ac7e288c379fd0f74a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "2de38a3bae8714b5d5178b0d7c525e8a",
"assets/fonts/MaterialIcons-Regular.otf": "71f6d541a8783d1e106951117ddc279e",
"assets/assets/sounds/tap.wav": "72f8ec9e52717135b760df9a5aedfb40",
"assets/assets/sounds/impact.wav": "e6a656a0c33b41d7a6dd9e4b9ddc8616",
"assets/assets/sounds/sad.wav": "2bcddc6efa59374b495a6a1990c31b90",
"assets/assets/sounds/whoosh.wav": "77abf7e7f88cf2af38ff6de99ba568a7",
"assets/assets/sounds/fanfare.wav": "9d11bd53c90a09472f59d6dbdb15f802",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
