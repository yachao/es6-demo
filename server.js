var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/user/:id', function(req, res){
	var id = 'p-' + req.params.id;
	res.json({uid: id});
});

http.listen(port);