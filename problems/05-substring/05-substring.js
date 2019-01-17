/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substr(someStr, startIndex, endIndex) {
	this.someStr = someStr;
	args = someStr.substring(startIndex, endIndex);
	return args

}

let str = 'Jumping Jellybeans!';
let result = substr(str, 8, 19);
console.log(result)

//without function
let res = str.substring(8,19)
console.log(res)

//fix! No substring use loops