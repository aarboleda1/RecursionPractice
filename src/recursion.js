// /* jshint esversion: 6 */

// // Solve all of the following prompts using recursion.

// // 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// // denoted by n!, is the product of all positive integers less than or equal to n.
// // Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// // factorial(5);  // 120
var factorial = function(n) {
	//terminating case
	if(n < 0){
		return null;
	}
	//base case
	if(n === 0){
		return 1;
	}
	
	//recursive case
	return n * factorial(n-1)
};

// // 2. Compute the sum of an array of integers.
// // Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	//base case
	var newArray = array;
	if(newArray.length === 0){
		return 0
	}

	//recursive case
	return newArray.pop() + sum(newArray.slice(0,newArray.length))

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(arr) {
	//accum will always be 0
	return arr.reduce(function (accum, current) {
		if(Array.isArray(current)){
			accum = accum + arraySum(current)
		}else {
			accum = accum + current
		}
		return accum;
	},0) 
}

  arraySum([1,[2,3]])


// 4. Check if a number is even.
var isEven = function(n) {
	if(n > 0){
	if( n === 0 ) {
	 	return true;
	} 
	if ( n === 1 ) {
	 	return false;
	}

	return isEven(n-2)
	} else {
		if( n === 0 ) {
	 	return true;
	} 
	if ( n === -1 ) {
	 	return false;
	}

	return isEven(n+2)
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	//base case
	if(n > 0){
	if(n === 0){
		return 0;
	}
	
	//recursive case
	return n + sumBelow(n-1) - 1;
	} else {
		if(n === 0){
			return 0;
		}
		return n + sumBelow(n+1) +1
	}
};
// // 6. Get the integers in range (x, y).
// // Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
// // var range = function(x, y) {
// // 	var array = [];
// // 	//base case
// // 	function helper (x,y) {
// // 	if(x-y === 0 || x - y === -1){
// // 		return [];
// // 	}
// // 	//base case
// // 	if(x === y - 1){
// // 		return; 
// // 	} else if ( x === y + 1 ){
// // 		return;
// // 	}
// // 	if(y > x){
// // 	array.push(x+1);
// // 	} else {
// // 		array.push(x -1)
// // 	}
// // 	//increment x + 1
// // 	if(y > x){
// // 	helper (x + 1, y);
// // 	} else {
// // 		helper(x -1, y)
// // 	}
	
// // 	}
// // 	helper(x,y)
// // 	return array;
	
// // };
var range = function(x, y) {
   //termination case
   if(y - x === 0 || y - x === 1){
   	return [];
   }
   if(x > y){
   	
   	if (x-y === 2){
   		return [y+1];
   	}

   	var array = range(x - 1, y);
   	array.unshift(x-1);
   	return array


   }else{
   //base case
   if( y - x === 2 ){
   	return [x+1];
   }else{ 
   	//recursive case
   	  array = range( x, y -1 );
   	 array.push(y-1);
   	 return array;

   }
}
};
// //range(7,2) //6,5,4,3
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	//base case 
	if(exp === 1){
		return base;
	} 
	
	//recursive call
	//base will keep mulitplying itelf until exp reaches 0
	if( exp > 0){
	return base * exponent( base, exp - 1 );
	} else {
		return (1/base) * exponent (base, exp + 1)
	}
	
};
// //multiply base times itself 
// //until exponent reaches 0
// // once exponent reaches 0, return that value


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
		//base case
	if(n === 2 || n === 1){
		return true
	} else if ( n < 2 ){
		return false
	}
	//recursive case - modify n
	return powerOfTwo(n/2)
};
// //Recursion solves a big problem by solving one or more smaller problems. the using
// //the solutions of the smaller problems to solve the bigger problems

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  var firstLetter = string.substring(0,1);
  var lastLetter = string.substring(string.length-1);
  //base case
  if(string.length === 1 || string.length === 0){
  	return string;
  }
  //recursive case- get all middle letters and then add them!
  return lastLetter + reverse(string.substring(1,string.length-1)) + firstLetter
};

// 10. Write a function that determines if a string is a palindrome.

var palindrome = function(string) {
	//base case
	if(string[0] !== string[string.length-1]){
		//console.log('heiii')
		return false;
	}else if(string.length === 0 || string.length === 1){
		
		return true;
	}
	
	//recursive case
	return palindrome(string.slice(1, string.length-1));

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, alwaysY) {

	 alwaysY =  alwaysY || y;
	 
	if(x < 0 && x > -10 && y < 10){
		return 0
	}else if(x < 0 & y > 0 ) {
		return x
	}else if(x === 0 && y === 0 ){
		return NaN
	}else if(x === 0) {
		return 0;
	}else if(x < 0 && y > 0 ){
		x = -x
	}else if(x < 0 && y < 0 && x < y){
		return x - (y)
	}else if(x < 0 && y < 0 && y < x){
		return x
	}else if (x < y && x > 0) {
		return x;
	} else if(x-y < alwaysY){
		return x-y
	} 
	
 
	
	return modulo(x, y + alwaysY, alwaysY)
	
};

// // 12. Write a function that multiplies two numbers without using the * operator  or
// // JavaScript's Math object.
var multiply = function(x, y) {
	if(x < 0 && y < 0){
		x = -x;
		y = -y; 
	} else if ( x === 0 ){
		return 0
	}
	if(y === 0){
		return 0
	}

	return x + multiply(x, y-1) 
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, count) {
	var count = count || 0;
	
	if (x === 0 && y === 0 ){
		return NaN
	}else if( x <= 0 || x < y ){
		return count
	}
	count++
	
	return divide(x - y, y, count)

};
//divide(78, 453)

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function( x, y, highest ) {
  //check if there is a negative number
 
  if(x < 0 || y < 0){
  	return null;
  };
  //finding lowest number
  x < y ? highest = highest || x : highest = highest || y;

  if( x % highest === 0 && y % highest === 0){
	  return highest;
  } else {
	return gcd(x, y, highest - 1);	
  }
};
/*
PseudoCode
gcd should always start at the lowest number between two
otherwise start subtracting by one from the smaller number 
you'll run into a number or 1 that will be n % 3 === 0
then you return the 'highest' number
*/

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, char) {
  
  char = char || 0;
  //base case
  if(str1[char] === str2[char] && char === str1.length){
  		return true
  } else if (str1[char] !== str2[char]) {
  	return false
  }
  char++
  //recursive case
  return compareStr(str1, str2, char);

};
/*PsuedoCode
	 increase count
	 if each instance matches return true
	 increment char
	 to get thru whole string by incrementing
	 Assumptions - if they are not the same length, return false
*/
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array, char) {
  array = array || [];
  char = char || 0;
  //base case
  if(array.length === str.length){
  	return array
  }
  //place letter into array
  array[char] = str[char];
  //increment char
  char++
  //recurse
  return createArray(str, array, char);
};
/*PC
base case
use a count to take the index of the letter
and place it in an array
once they are the same length
return the array

AS
input - string, output - array
the array and the string returns will have the same length

*/
// 17. Reverse the order of an array
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
//[1,2,3] [3,2,1]
/*PC
have 2 variables to save save the index which were going to change
pass those variables down
replace each place of the string with each variable
once the variable number is equal to half the distance of the array 
or half the distance -1
the array will be reversed
slice method
[1,2,3]


AS
*/

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, count, array) {
	count = count || 0;
	array = array || [];
	array[count] = value;
	if( count === length -1 ){
		return array;
	}
	count++
	return buildList(value, length, count, array) 
};
/*
PC
create a count and an empty array that will be built
count = 0
array[count] is equal to value
once count is equal to length
return the array
*/
// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count, occurences) {
	count = count || 0;
	occurences = occurences || 0;
	if(count === array.length ){
		return occurences
	}

	if(array[count] === value){
		occurences++
	}
	if( array[count] !== undefined && array[count] !== null && array[count].toString() === 'NaN' && value.toString() === 'NaN'){
		occurences++
	}

	count++

	return countOccurrence(array, value, count, occurences)
};
/*
PC
Should return a number
increment occurences
if the array[count] is equal to value
increment occurences
once count is equal to array.length
return occurences


*/
// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, count, mappedArray) {
	count = count || 0;
	mappedArray = mappedArray || [];
	mappedArray[count] = callback(array[count])

	if(count === array.length - 1){
		return mappedArray;
	}
	count++

	return rMap(array, callback, count, mappedArray)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
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
    for (var k in obj) {
        obj.hasOwnProperty(k) && count[level]++;
        typeof obj[k] === 'object' && countKeysInObj(obj[k], level + 1);
    }
};
/*PC
input wil be an obj
ouptut to be a number
{'a': 1, 'a': 2}
check to see if it is an object
if a property exists of the key
add it to the value
check if the value is an object
check its keys
so on


*/
// // 22. Write a function that counts the number of times a value occurs in an object.
// // var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// // countValuesInObj(testobj, 'r') // 2
// // countValuesInObj(testobj, 'e') // 1
// var countValuesInObj = function(obj, value) {
// };

// // 23. Find all keys in an object (and nested objects) by a provided name and rename
// // them to a provided new name while preserving the value stored at that key.
// var replaceKeysInObj = function(obj, key, newKey) {
// };

// // 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// // number is the sum of the previous two.
// // Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// // fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// // Note:  The 0 is not counted.
// var fibonacci = function(n) {
// };

// // 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// // [0,1,1,2,3,5,8,13,21]
// // nthFibo(5); // 5
// // nthFibo(7); // 13
// // nthFibo(3); // 2
// var nthFibo = function(n) {
// };

// // 26. Given an array of words, return a new array containing each word capitalized.
// // var words = ['i', 'am', 'learning', 'recursion'];
// // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
// var capitalizeWords = function(array) {
// };

// // 27. Given an array of strings, capitalize the first letter of each index.
// // capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
// var capitalizeFirst = function(array) {
// };

// // 28. Return the sum of all even numbers in an object containing nested objects.
// // var obj1 = {
// //   a: 2,
// //   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
// //   c: {c: {c: 2}, cc: 'ball', ccc: 5},
// //   d: 1,
// //   e: {e: {e: 2}, ee: 'car'}
// // };
// // nestedEvenSum(obj1); // 10
// var nestedEvenSum = function(obj) {
// };

// // 29. Flatten an array containing nested arrays.
// // Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
// var flatten = function(arrays) {
// };

// // 30. Given a string, return an object containing tallies of each letter.
// // letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
// var letterTally = function(str, obj) {
// };

// // 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// // elements they should be replaced with a single copy of the element. The order of the
// // elements should not be changed.
// // Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// // Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
// var compress = function(list) {
// };

// // 32. Augument every element in a list with a new value where each element is an array
// // itself.
// // Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
// var augmentElements = function(array, aug) {
// };

// // 33. Reduce a series of zeroes to a single 0.
// // minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// // minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
// var minimizeZeroes = function(array) {
// };

// // 34. Alternate the numbers in an array between positive and negative regardless of
// // their original sign.  The first number in the index always needs to be positive.
// // alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// // alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
// var alternateSign = function(array) {
// };

// // 35. Given a string, return a string with digits converted to their word equivalent.
// // Assume all numbers are single digits (less than 10).
// // numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
// var numToText = function(str) {
// };


// // *** EXTRA CREDIT ***

// // 36. Return the number of times a tag occurs in the DOM.
// var tagCount = function(tag, node) {
// };

// // 37. Write a function for binary search.
// // Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// // console.log(binarySearch(5)) will return '5'
// // https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

// var binarySearch = function(array, target, min, max) {
// };

// // 38. Write a merge sort function.
// // Sample array:  [34,7,23,32,5,62]
// // Sample output: [5,7,23,32,34,62]
// // https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
// var mergeSort = function(array) {
// };
