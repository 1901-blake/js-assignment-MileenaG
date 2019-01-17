/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(x) {
	if (x < 0) return;  // if x is less than zero 
	if (x === 0) return 1;  // if x is 0 result is 1
	let n = 1; //need this or else number in for loop isn't defined
	for (let i = x; i > 0; i--) {
		n *= i;
	}
	return n;
  
}

//testing my factorial function
zero = factorial(0)
negative = factorial(-1)
result = factorial (5)
console.log(zero)
console.log(negative)
console.log(result)