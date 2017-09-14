var filter = require('./filter-dir.js');
filter(process.argv[2],process.argv[3],message);
function message(err,data){
	if(err){
		return console.log('Somthing went wrong ' + err);
	}
	data.forEach(x => console.log(x));
}
