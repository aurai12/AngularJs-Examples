var express = require('express');
var app = express();

app.set('views', 'examples');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.route('/*')
.get(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listing at http://localhost:%s', port);
});
