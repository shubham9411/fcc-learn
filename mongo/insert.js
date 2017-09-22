var mongo = require('mongodb').MongoClient
var url = "mongodb:\/\/localhost:27017\/learnyoumongo"
//console.log(url)
mongo.connect(url, function(err,db){
	if(err) throw err
	var docs = db.collection('docs')
	var user =
	{
		firstName: process.argv[2],
		lastName: process.argv[3]
	}
	//var res = JSON.stringify(user)
	//console.log(res)
	docs.insert(user,function(err,data){
		if(err) throw err
		console.log(JSON.stringify(user))
		db.close()
	})
})
