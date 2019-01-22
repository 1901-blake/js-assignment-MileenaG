/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

let array = [1, 2, 3, 9, 4, 5];

function spliceElement(someArr, index) {
	someArr.splice(index, 1);
	return someArr;
}

let result = spliceElement(array, 3)
console.log(result)
