var fs = require('fs')
var path = require('path')
module.exports = function(dir,ext,callback) {
	fs.readdir(dir,function(err,data){
		if(err){
			return callback(err);
		}
		var filter = ext;
		var files = [];
		//console.log(data);
		for( i = 0; i < data.length; i++){
			//console.log(typeof(data[i]))
			piece = data[i].split('.')
			ex = piece[piece.length-1]
			ex = path.extname(data[i])
			//console.log(ex);
			if( "." + ext == ex ){
				files.push(data[i]);
			}
		}
		callback(null,files);
	});
}
