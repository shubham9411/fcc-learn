var http = require('http')
var fs = require('fs')
var dst = ''
var server = http.createServer( function ( req, res ){
	src = fs.createReadStream(process.argv[3])
	src.on('data',function(data){dst += data;})
	src.on('end',function(){
		res.end(dst,'utf-8')
	})
});
server.listen(process.argv[2])
//server.listen(8080)
