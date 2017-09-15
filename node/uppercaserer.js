var map = require('through2-map')
var http = require('http')
var server = http.createServer(function(req,res){
	if(req.method != 'POST'){
		return res.end('Only POST method allowed')
	}
	req.pipe(map(function(data) {
		a = data.toString();
		return a.toUpperCase();
	})).pipe(res);
})
server.listen(process.argv[2])
//server.listen(8080)
