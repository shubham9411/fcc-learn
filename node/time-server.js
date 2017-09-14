var  net = require('net')
server = net.createServer(function(socket){
	socket.on('end',function(){console.log('')})
	MyDate = new Date();
	stdout = '';
	stdout = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
	stdout += ' ' + ( '0' + MyDate.getHours()).slice(-2) + ':' + ( '0' + MyDate.getMinutes()).slice(-2) + '\n';
	//socket.write(stdout);
	socket.end(stdout);
});
server.listen(process.argv[2])
