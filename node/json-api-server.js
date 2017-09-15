var http = require('http')
var url = require('url')
var server = http.createServer( function(req, res){
	res.writeHead(200, { 'Content-Type': 'application/json' })
	data = url.parse(req.url,true)
	//console.log(typeof(data))
	if(data.pathname == '/api/parsetime'){
		var iso = data.query.iso;
		var date = new Date(iso);
		var newDate = {};
		newDate['hour'] = date.getHours();
		newDate['minute'] = date.getMinutes();
		newDate['second'] = date.getSeconds();
		return res.end(JSON.stringify(newDate))
	}
	if(data.pathname == '/api/unixtime'){
                var iso = data.query.iso;
                var date = new Date(iso);
                var newDate = {};
                newDate['unixtime'] = date.getTime();
                return res.end(JSON.stringify(newDate))
        }
})
server.listen(process.argv[2])
//server.listen(8080)

