/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(n) {
	if ( Number.isInteger(n/2) ){  //n/2 has to be an integer! if its not then its not even
		return (true);
	}
	else {
		return (false);
	}
  
}

//testing function
even = isEven(4)
odd = isEven(3)
negative = isEven(-2)

console.log(even)
console.log(odd)
console.log(negative)