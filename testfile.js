var divide = function(x, y, count) {
	var count = count || 0;
	//base case	
	if(x <= 0 || x < y ){
		return count
	}
	//if x is 

	count++
	//recursive case
	return divide(x - y, y, count)


};
9 - 2 - 2 - 2- 2
//console.log(divide(10,2))
//console.log(divide(9,2))
console.log(divide(17,5))




