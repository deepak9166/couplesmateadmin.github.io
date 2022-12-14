'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7cbd4021337f7255d7accca95fe98e1c",
"assets/assets/icons/category_icon.svg": "d220d3c03a74f819e62cb86d57f9cb39",
"assets/assets/icons/dashboard_icon.svg": "539a1b0e1755f880733a8dee8def998a",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/icon_upload.svg": "1269f498f8b3b96cd1c255077b93a8ec",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/question_icon.svg": "b90b7874cc859d4e7cdf48d1470611ce",
"assets/assets/icons/quiz_icon.svg": "294e2e224d6b0985bac4bcf63558bf44",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/user_icon.svg": "dd4f15a1ecf80dd8c75fecd7f40e47ba",
"assets/assets/icons/user_icon_2.svg": "dd4f15a1ecf80dd8c75fecd7f40e47ba",
"assets/assets/icons/video_icon.svg": "fac6fc95a22c2af5cb8578faff5125b5",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/2x/admin.png": "03cfb55a36fadcf94a7ec4036d2edd43",
"assets/assets/images/2x/category_icon.png": "03b5af16d52d539c23a1a84dab29fc4f",
"assets/assets/images/2x/close_eye_icon.png": "a22339d783d38709d440d3f6da2d2bc6",
"assets/assets/images/2x/close_icon.png": "2063eb6b86ca36f1603948ee53f8c386",
"assets/assets/images/2x/dashboard_icon.png": "838bb43ded34bb8e905acb6475284a3e",
"assets/assets/images/2x/icon_upload.png": "82e4a671d571dd31fcc070205d4ceb2c",
"assets/assets/images/2x/notification_ball.png": "bc6a823b7d27d4cd91198c6145702095",
"assets/assets/images/2x/open_eye.png": "372bae8cdf6c1bea1226218c8131688f",
"assets/assets/images/2x/search.png": "f7d4fc4663f6ee25677f279a71208eb3",
"assets/assets/images/2x/secure_guru.png": "718ecaa4545a0f398514aebabfd4fb63",
"assets/assets/images/2x/user_icon.png": "976644400c5b9f601f8a2f15cd522be7",
"assets/assets/images/3x/admin.png": "03cfb55a36fadcf94a7ec4036d2edd43",
"assets/assets/images/3x/category_icon.png": "03b5af16d52d539c23a1a84dab29fc4f",
"assets/assets/images/3x/close_eye_icon.png": "b10f928ac61f20e04186e2e5bf70c417",
"assets/assets/images/3x/close_icon.png": "2063eb6b86ca36f1603948ee53f8c386",
"assets/assets/images/3x/dashboard_icon.png": "838bb43ded34bb8e905acb6475284a3e",
"assets/assets/images/3x/icon_upload.png": "82e4a671d571dd31fcc070205d4ceb2c",
"assets/assets/images/3x/notification_ball.png": "bc6a823b7d27d4cd91198c6145702095",
"assets/assets/images/3x/open_eye.png": "5c595b8024cf65c32a113f737756db5a",
"assets/assets/images/3x/search.png": "f7d4fc4663f6ee25677f279a71208eb3",
"assets/assets/images/3x/secure_guru.png": "718ecaa4545a0f398514aebabfd4fb63",
"assets/assets/images/3x/user_icon.png": "976644400c5b9f601f8a2f15cd522be7",
"assets/assets/images/569-5693658_dummy-user-image-png-transparent-png.png": "26ed675a27d712d6aa1347a67e3f4022",
"assets/assets/images/admin.png": "a953bcaf368a754a577a6f26bce04442",
"assets/assets/images/category_icon.png": "f892c45d22b862f8ac2b169a484b9f65",
"assets/assets/images/close_eye_icon.png": "8a9ed9bb4f2a4348a89b774e4f7b843e",
"assets/assets/images/close_icon.png": "6c54e21c4cc9279b0c75996c1984d5ba",
"assets/assets/images/dashboard_icon.png": "16ce8f3c10380b994db004e3de0a1609",
"assets/assets/images/download.jpeg": "f4c71d5e6cdb03a4c12276372d093eb2",
"assets/assets/images/EmailIcon.png": "5b09516a959173711c2767368f001639",
"assets/assets/images/EyeIcon.png": "568e9718d477b27ee6e0a5a1f87aa999",
"assets/assets/images/icon_upload.png": "d9df188c4fedd8491a17f663354b1b26",
"assets/assets/images/lockIcon.png": "241723ebea3d05ef0a94a5b2d6da081d",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/notification_ball.png": "9e26307f6fd87a5b2cd131efdcbddaed",
"assets/assets/images/open_eye.png": "453fd30dd707ee4c667ec4f342439db9",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/search.png": "8a39304eea3f4a9ff9e335b8d31ee45a",
"assets/assets/images/secure_guru.png": "444ac78b29a107aa84222d0b3e093477",
"assets/assets/images/user_icon.png": "39246ac05e3a76f6dff72f3f3e25cd69",
"assets/FontManifest.json": "e1b2c589b7203e7a495615697411ad2f",
"assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/Lato-SemiBold.ttf": "57d69e1d4ce0cc10ace9264b4af92cf1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ac7f17b6573bb0a233d2914091c2a608",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "182e4c633f6610c58cf72d8f08031ee9",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"cors.json": "9a9dd87830d471dbf12de6cfd08c1e8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4eaf5f6a0b7a4f023aa77093c5c588bd",
"/": "4eaf5f6a0b7a4f023aa77093c5c588bd",
"main.dart.js": "458d248ecf813740c00f68bc1c7ddd10",
"manifest.json": "c670d3c1534d57357690ee0603c838f5",
"version.json": "25583141b61bfefcf75d0ddbac4711fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
