var http = require('http');
http.get(process.argv[2],callback);
function callback(response){
	response.setEncoding('utf-8');
	response.on('data',function(data){
		console.log(data);
	});
	response.on('error',function(err){console.log(err)});
}
