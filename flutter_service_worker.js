'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ba003239903495f572e30c726dfa7c93",
"assets/assets/images/states_name/Alabama.png": "c9918e0af4402d204e6828db4beabfa1",
"assets/assets/images/states_name/Alaska.png": "39564b89bcd59c41f7b925e03926190b",
"assets/assets/images/states_name/Arizona.png": "1a946531a7173fb62564d8f281eb1d6a",
"assets/assets/images/states_name/Arkansas.png": "57cc6465c0bcc7cbb0b4728166f4fc18",
"assets/assets/images/states_name/California.png": "65db65b50030ae5da0d1a42e3e4eae48",
"assets/assets/images/states_name/Colorado.png": "db3546177ee5c571aa09aad9713a4027",
"assets/assets/images/states_name/Connecticut.png": "7d1eed361cce7601af7ef06882edd933",
"assets/assets/images/states_name/Delaware.png": "03c6232c1b32ec6bea7a7c72800c8d7a",
"assets/assets/images/states_name/Florida.png": "92f24bd38d319d4217845902a1470b2b",
"assets/assets/images/states_name/Georgia.png": "b2d9bada51c304554090c41c3f333694",
"assets/assets/images/states_name/Hawaii.png": "15646379ccc8270db8765fe432e4a324",
"assets/assets/images/states_name/Idaho.png": "fb26e3e82adff64e6cbc1e1974e20b4c",
"assets/assets/images/states_name/Illinois.png": "1858ac18ccb725488c849447107b1d18",
"assets/assets/images/states_name/Indiana.png": "fc1001f8c90614adef38bc0c47ca4723",
"assets/assets/images/states_name/Iowa.png": "552a6d2efc736ba9fb30489e2eb43af2",
"assets/assets/images/states_name/Kansas.png": "06ac0d7e8e8ebae7160bcd2dd91f549f",
"assets/assets/images/states_name/Kentucky.png": "e56b62d147ba338effa008caf4f3d8cc",
"assets/assets/images/states_name/Louisiana.png": "93f0e821dac476625f0f5eac608f2d4a",
"assets/assets/images/states_name/Maine.png": "fb822ce8472c5370a04032ebaf0c5177",
"assets/assets/images/states_name/Maryland.png": "b1a4177efc089b5f8b2ad2048a549cbd",
"assets/assets/images/states_name/Massachusetts.png": "32e4e7ae2401fafc5a0789edc7d742ff",
"assets/assets/images/states_name/Michigan.png": "b0e30471c3f51799db47bbde5ce4aa5d",
"assets/assets/images/states_name/Minnesota.png": "623ff3f1439e5f089f0e01bd07f02347",
"assets/assets/images/states_name/Mississippi.png": "3313ed48446bc4123d4a1c66cf23a49c",
"assets/assets/images/states_name/Missouri.png": "0227ac74d09090660c3b567ecf811d96",
"assets/assets/images/states_name/Montana.png": "ebdab2a8e872806d01b77177ebf1541b",
"assets/assets/images/states_name/Nebraska.png": "1e124f22539990114d5ef2d75718bfd6",
"assets/assets/images/states_name/Nevada.png": "3a2d65bb47f8665325182ea84139df2c",
"assets/assets/images/states_name/New%2520Hampshire.png": "097fa64b20016a0ec31d191b4006996b",
"assets/assets/images/states_name/New%2520Jersey.png": "6c4693b2279f7751bbb6ce31b80bc1a8",
"assets/assets/images/states_name/New%2520Mexico.png": "c0c679cfd27b1069c3e5de6987e79fb2",
"assets/assets/images/states_name/New%2520York.png": "32775bf710fa086e04670110b692428b",
"assets/assets/images/states_name/North%2520Carolina.png": "c411a49e02a581564878b20d5c7163c9",
"assets/assets/images/states_name/North%2520Dakota.png": "ad726540b7643ea9c27395a4c25cc2e3",
"assets/assets/images/states_name/Ohio.png": "96ed34c521fb3385d26f405560fe4629",
"assets/assets/images/states_name/Oklahoma.png": "af9a6ece7c6af529a1359406cdea41fa",
"assets/assets/images/states_name/Oregon.png": "b9682052cbc78dfd6be6188a5f159f1a",
"assets/assets/images/states_name/Pennsylvania.png": "46a85b6b46b6e743a9c0a500df07f8a9",
"assets/assets/images/states_name/Rhode%2520Island.png": "9373ddd1cf4cc991298b09ef5ba7435e",
"assets/assets/images/states_name/South%2520Carolina.png": "db85a459ca978c0bd796210bd1d7f83c",
"assets/assets/images/states_name/South%2520Dakota.png": "4ee2e7b18ae2f6ea16dfed90bf2329d1",
"assets/assets/images/states_name/Tennessee.png": "dceba2104018918f078258ef02893ac9",
"assets/assets/images/states_name/Texas.png": "745633b53f1f382856b63aacffedf42f",
"assets/assets/images/states_name/USA%2520Map%2520Name%2520640.png": "c3c269d367c14d94e6fbea6628955281",
"assets/assets/images/states_name/USA%2520Map%2520Name.png": "2ae77f9e9efd1b8a7a5832e8a2cfcff9",
"assets/assets/images/states_name/usa%2520map%2520no%2520name%2520800.png": "0098dcccf3c00b67a821c64bca3c1176",
"assets/assets/images/states_name/usa%2520map%2520no%2520name.png": "89b507b3793eab2ef6005aaa645a775c",
"assets/assets/images/states_name/Utah.png": "69d5dc708baf273e4b42f376d10a599d",
"assets/assets/images/states_name/Vermont.png": "0042ab506ffb4845c7a46d4bfc26200b",
"assets/assets/images/states_name/Virginia.png": "ebab50f92415b0818248772dace09169",
"assets/assets/images/states_name/Washington.png": "2464ff0c21ed7a0796ae0499f60fe5e5",
"assets/assets/images/states_name/West%2520Virginia.png": "2c0ef86ee7a0ea8f1bb47d661a9da548",
"assets/assets/images/states_name/Wisconsin.png": "66731250b59d4bdd4b76da3794e566e1",
"assets/assets/images/states_name/Wyoming.png": "ae43a587ec9b71a4dc5434d2aa62a9c0",
"assets/assets/images/states_no_name/Alabama.png": "3b7107022997fd832e81e35e091571a1",
"assets/assets/images/states_no_name/Alaska.png": "19f6278fc0d244677648db5f07f47711",
"assets/assets/images/states_no_name/Arizona.png": "3ac8789e6450f0e95c3eadc449e806e9",
"assets/assets/images/states_no_name/Arkansas.png": "0941448cca7e40c88243a822e23102c2",
"assets/assets/images/states_no_name/California.png": "4d2b956594163a56b1ad4479d69cce8e",
"assets/assets/images/states_no_name/Colorado.png": "57eb482583e9cf544e7bf081d7e51ef4",
"assets/assets/images/states_no_name/Connecticut.png": "ab20e494e01cb87b7762374e02ca161c",
"assets/assets/images/states_no_name/Delaware.png": "420355057d8cfd515f59d629743387f6",
"assets/assets/images/states_no_name/Florida.png": "ee0ae02817a61aa86504d186ef90c6cd",
"assets/assets/images/states_no_name/Georgia.png": "3c68c422f35657642ab2c71ebfc4c767",
"assets/assets/images/states_no_name/Hawaii.png": "40827ec8ee6678ac4702d73ac9c5e4d9",
"assets/assets/images/states_no_name/Idaho.png": "a1e05cece86d45c146ec29b2a54c5c8d",
"assets/assets/images/states_no_name/Illinois.png": "a8e341cf98b94d97ee20e1a54585a7ec",
"assets/assets/images/states_no_name/Indiana.png": "f8348f738de008064b1beb1f3b63a75f",
"assets/assets/images/states_no_name/Iowa.png": "65f5edb744d3d5515fc44a315084d25e",
"assets/assets/images/states_no_name/Kansas.png": "5a6915307c7dc6e6b158d60186512661",
"assets/assets/images/states_no_name/Kentucky.png": "0eaabdb3bc67609372525fcab04abda9",
"assets/assets/images/states_no_name/Louisiana.png": "875192745d238674789f339f6e4080df",
"assets/assets/images/states_no_name/Maine.png": "9c7f6682efde9b7d628c8d8ba34b968c",
"assets/assets/images/states_no_name/Maryland.png": "d40a00ef65aab0e84b7544209c9d06bd",
"assets/assets/images/states_no_name/Massachusetts.png": "606b1e69a1812cc532672a54d837adb0",
"assets/assets/images/states_no_name/Michigan.png": "e81bd124ab0d0f37164b8b4dcef12d58",
"assets/assets/images/states_no_name/Minnesota.png": "3ca4fc18c17c7537d21a16f80fa308dc",
"assets/assets/images/states_no_name/Mississippi.png": "cb81970c413470b8bfcd5a715e86428d",
"assets/assets/images/states_no_name/Missouri.png": "5e26795b43ec141dfc4f3ac374923348",
"assets/assets/images/states_no_name/Montana.png": "af26d4e598b819180d8beed8c7e8f14c",
"assets/assets/images/states_no_name/Nebraska.png": "f57ddbf4ec9e6564b42bf8f5809f6c7c",
"assets/assets/images/states_no_name/Nevada.png": "53658fbbb2dc39d50f594b89b8a80101",
"assets/assets/images/states_no_name/New%2520Hampshire.png": "d4fc7d774efd2aaf472ff01eca98fb99",
"assets/assets/images/states_no_name/New%2520Jersey.png": "5f74c4d4f3beb2f706d61bc8991c9c06",
"assets/assets/images/states_no_name/New%2520Mexico.png": "ea4a3e027d63d3f05b0595ac85c59d4b",
"assets/assets/images/states_no_name/New%2520York.png": "0a12e8cb6303660b0e25b66c0c92397f",
"assets/assets/images/states_no_name/North%2520Carolina.png": "2cf89c8ab104c4308a114820646631bf",
"assets/assets/images/states_no_name/North%2520Dakota.png": "11ae500494388bc90d28b3d26f8e3e89",
"assets/assets/images/states_no_name/Ohio.png": "92a3e259a94c5afa3f3963211904bd4e",
"assets/assets/images/states_no_name/Oklahoma.png": "61b9fe5910f646eab1412b8c5c44d8e5",
"assets/assets/images/states_no_name/Oregon.png": "ae9c6b93e0554f40e7d02ca71c2eeb49",
"assets/assets/images/states_no_name/Pennsylvania.png": "22f95c161035a323bc1cbb3364addf21",
"assets/assets/images/states_no_name/Rhode%2520Island.png": "938f41b71f187a51199c47bb35dcaa0a",
"assets/assets/images/states_no_name/South%2520Carolina.png": "73856e249aacefedc4ef88537b59c7ad",
"assets/assets/images/states_no_name/South%2520Dakota.png": "0c1afcbcf6ed25e5676414fe1560e8ae",
"assets/assets/images/states_no_name/Tennessee.png": "dc6197160a1750081aac8be23cbafaa9",
"assets/assets/images/states_no_name/Texas.png": "ae399793252c1c270460dd9221df2971",
"assets/assets/images/states_no_name/USA%2520Color%2520Mao%2520No%2520Names%2520640.png": "31580cc2dccaecc4e6143b46436137b2",
"assets/assets/images/states_no_name/USA%2520Color%2520Mao%2520No%2520Names.png": "262ee7a35660af6b0852504e7d0179f6",
"assets/assets/images/states_no_name/USA%2520Color%2520Mao%2520No%2520Names300.png": "b6acae20ceb27a8191bc8f65fbd1bd4b",
"assets/assets/images/states_no_name/usa%2520map%2520no%2520name%2520640.png": "6826329f986a60b0eaadd271929610b6",
"assets/assets/images/states_no_name/usa%2520map%2520no%2520name%2520800.png": "0098dcccf3c00b67a821c64bca3c1176",
"assets/assets/images/states_no_name/usa-35713_1280.png": "3e33dc7174fac8e6cb284a512810d7c4",
"assets/assets/images/states_no_name/Utah.png": "f8450b19392c43965fbdc41bc2f13b3c",
"assets/assets/images/states_no_name/Vermont.png": "b30e86b7cc117a9187a15a3194e25c55",
"assets/assets/images/states_no_name/Virginia.png": "d6168e9810c1d6156f4ddd9670593cc5",
"assets/assets/images/states_no_name/Washington.png": "b286adea18d040afa58acdab8f8bb06c",
"assets/assets/images/states_no_name/West%2520Virginia.png": "323fc46685ef68c27233a1c46895b0c6",
"assets/assets/images/states_no_name/Wisconsin.png": "c0f83c3c2e8f648c287ed99214fca19d",
"assets/assets/images/states_no_name/Wyoming.png": "e1e5f290f397f1e21969a18d3688ad66",
"assets/assets/mixkit-tick-tock-clock-timer-1045.wav": "ad30dde3023da6345de74cffa70390fb",
"assets/assets/success-fanfare-trumpets.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/wrong-buzzer.mp3": "6e040c043a582ad044abe6628941b8eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7afe75621c2838cf8a1a2ee38bda8988",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "21a446be63f88e092811608e80945f9c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d020940a9811cec95ffe926ea6ba1ac3",
"/": "d020940a9811cec95ffe926ea6ba1ac3",
"main.dart.js": "5a98fa68e1e906cee5779a022c305268",
"manifest.json": "c48aa58f44ab0bfdf7e5293073dbf43b",
"version.json": "75b7dbb9aa17abd02059caf14c950eb2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
