var http = require('http')
data1 =data2 =data3 =''
http.get(process.argv[2],callback)
function callback(response){
	response.setEncoding('utf-8')
	response.on('data',function(data){data1 += data})
	response.on('end',function(){
		//console.log(data1)
		a();
	})
}
function a(){
http.get(process.argv[3],callback)
function callback(response){
        response.setEncoding('utf-8')
        response.on('data',function(data){data2 += data})
        response.on('end',function(){
               // console.log(data2)
		b();
        })
}
}
function b(){
http.get(process.argv[4],callback)
function callback(response){
        response.setEncoding('utf-8')
        response.on('data',function(data){data3 += data})
        response.on('end',function(){
                //console.log(data3)
		answer();
        })
}
}
function answer(){
console.log(data1)
console.log(data2)
console.log(data3)
}
