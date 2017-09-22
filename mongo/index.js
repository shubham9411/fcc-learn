var mongo = require('mongodb').MongoClient
mongo.connect('mongodb:\/\/localhost:27017\/learnyoumongo', function(err, db) {
	var maxAge = process.argv[2]
	var collection = db.collection('parrots')
	collection.find().toArray( function( err, docs ) {
		docs.forEach( ar => {
			//console.log(ar['age'])
			if( ar['age'] > maxAge ){
				console.log(Array(ar))
			}
		})
	})
	db.close()
})

