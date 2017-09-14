var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2],callback)
function callback(err,data){
	if(err){
		return err;
	}
	//console.log(data)
	filter = '.' + process.argv[3]
	for(i=0;i<data.length;i++){
		ext = path.extname(data[i])
		if(ext == filter){
			console.log(data[i])
		}
	}
}
