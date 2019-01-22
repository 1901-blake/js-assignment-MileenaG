/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  
}



//triangle
for(let i=1; i<=4; i++){
   console.log('+'.repeat(i));
}

//square
function square(x) {
	let t = '';
	let i;
	for (i in x){
		t += x[i] + '';
		console.log(x.repeat(i));
	}
}
let r = {character: '$', character: '$', character: '$'};
result = square(r)