/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */


function isPalindrome(someStr) {
	let forward = someStr.toLowerCase();
	let reverse = someStr.toLowerCase().split('').reverse().join('');
	if (forward === reverse) {
		return (true);
	}
	else 
		return (false);
}

falseResult = isPalindrome('Mileena')
trueResult = isPalindrome('level')
capResult = isPalindrome('Level')

console.log(falseResult)
console.log(trueResult)
console.log(capResult)