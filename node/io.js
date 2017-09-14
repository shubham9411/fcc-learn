var fs = require('fs')
file = fs.readFileSync(process.argv[2])
str = file.toString()
str2 = str.split('\n')
len = str2.length
console.log(len-1)
