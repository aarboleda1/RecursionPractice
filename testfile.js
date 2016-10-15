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
//9 - 2 - 2 - 2- 2
//console.log(divide(10,2))
//console.log(divide(9,2))
//console.log(divide(17,5))



var reverseArr = function (array, front, back, newArray) {
	var length = array.length;
	front = front || 0;
	newArray = newArray || [];
	back = back || array.length - 1;
	//base case
	if(front === Math.round(length/2 - 1) || front === Math.round(length/2)){
		newArray[front] = array[back]
	    newArray[back] = array[front]
		return newArray;
	}
	//do
	//console.log(front)
	//console.log(array[back])

	newArray[back] = array[front]
	//console.log(front)
	newArray[front] = array[back]
	//console.log(array[back])
	front++;
	back--;
	//recursive case
	return reverseArr(array, front, back, newArray);

};

// 


// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count, occurences) {
	count = count || 0;
	occurences = occurences || 0;
	if(count === array.length){
		return occurences
	}
	//console.log(count)
	if(array[count] === value){
		occurences++
	}
	if(array[count] !== null && array[count].toString() === 'NaN' && value.toString() === 'NaN'){
		occurences++
	}

	count++

	return countOccurrence(array, value, count, occurences)
};

//console.log(countOccurrence([2,7,NaN,null,4,1,NaN], NaN))//2	
var countKeysInObj = function(obj, key, count, level) {
  	count = count || [];
  	lovel = level || 0;
  	// for(var prop in obj){
  	// 	if( prop === key ){
  	// 		count++
  	// 	}

  	// 	 if ( typeof obj[prop] === 'object' && obj[prop].hasOwnProperty(key)){
  	// 		console.log('yo')
  	// 		countKeysInObj(obj[prop], key, count)
  	// 	}


  	// }

  	// return count;
  
    count[level] = count[level] || 0;
    for (var k in data) {
        data.hasOwnProperty(k) && count[level]++;
        typeof data[k] === 'object' && countKeysInObj(data[k], level + 1);
    }
};


var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
console.log(countKeysInObj(input, 'e'))//2

