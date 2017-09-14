var a= process.argv
sum = 0
for(i=2;i<a.length;i++){
	sum+=parseInt(a[i])
}
console.log(sum)
