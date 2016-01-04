/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dest/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//promises
	var url = 'user/11';

	fetch(url).then(function (res) {
		if (res.ok) {
			res.json().then(function (data) {
				console.log(data.uid);
			});
		}
	});

	// var u = new URLSearchParams();
	// u.append('method', 'flickr.interestingness.getList');
	// u.append('api_key', '<insert api key here>');
	// u.append('format', 'json');
	// u.append('nojsoncallback', '1');

	// var apiCall = fetch('https://api.flickr.com/services/rest?' + u);

	// apiCall.then(function(response) {
	//   return response.json().then(function(json) {
	//     // photo is a list of photos.
	//     return json.photos.photo;
	//   });
	// }).then(function(photos) {
	//   photos.forEach(function(photo) {
	//     console.log(photo.title);
	//   });
	// });

/***/ }
/******/ ]);