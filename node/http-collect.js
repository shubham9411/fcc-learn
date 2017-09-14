var bl = require('bl')
var http = require('http')
http.get(process.argv[2],callback)
function callback(response){
	response.setEncoding('utf-8')
	response.pipe(bl(function(err,data){
		if(err) return console.log(err)
		str = data.toString()
		console.log(str.length)
		console.log(str)
	}))
}
