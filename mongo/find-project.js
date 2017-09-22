var mongo = require('mongodb').MongoClient
mongo.connect('mongodb:\/\/localhost:27017\/learnyoumongo', function(err, db) {
	var maxAge = process.argv[2]
	var collection = db.collection('parrots')
	collection.find({
		age: {
			$gt: +maxAge
		}
	},
	{
		_id: 0,
		name: 1,
		age: 1
	}
	).toArray(function(err,docs){
		if(err) throw err;
		console.log(docs)
	})
	db.close()
})

