var express = require('express')
var path = require('path')
var app = express()
app.listen(process.argv[2]||8080)
app.set('view engine' , 'jade')
app.set('views', process.argv[3]||path.join(__dirname,'templates'))
app.get('/home',function(req,res){
	res.render('index',{date: new Date().toDateString()})
})
