/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substr(someStr, startIndex, endIndex) {
	let newString = someStr.split('').slice(startIndex, endIndex).join(''); 
	//makes aray. slice selects a range of elemets. Join combines array elemets to make string
	return newString
}

//testing substring function
let str = 'Jumping Jellybeans!';
result = substr(str, 8, 19)
console.log(result)
