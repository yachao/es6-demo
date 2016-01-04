//promises
var url = 'user/11';

fetch(url).then(function(res){
	if(res.ok){
		res.json().then(function(data){
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