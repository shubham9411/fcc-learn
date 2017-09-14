var fs = require('fs')
fs.readFile(process.argv[2],'utf-8',callback)
function callback(err,data){
	if(!err){
		lines = data.split('\n')
		len = lines.length-1
		console.log(len)
	}
}
