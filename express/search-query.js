var express = require('express')
var app = express()
result = {}
app.listen(process.argv[2])
app.get('/search',function(req,res){
	result = req.query
	res.send(result)
})
