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
	switch(shape) {
		case 'square':
		for (i = 0; i < height * height; i++){
			if (i< height){
				let square = '';
				for (let j = 0; j < height; j++) {
					square += character + '';
				}
				console.log(square);
			}  
	}
			console.log('');
		break;

		case 'triangle':
		for(let i = 1; i <= height; i++){
   			console.log('+'.repeat(i));
		}
			console.log('');

		break;

		case 'diamond':
		let j;
		diamond = '';
		for(i = 0; 1 < height * 2 - 1; i++) {
			j = i < height ? i : height * 2 - i - 2;
			diamond += Array(height - j).join(' ') + Array(j + 1).join(character + ' ') + `${character}\n`
			}
			console.log('');
		break; 
	}


}

printShape('square', 5, '$')
printShape('triangle', 6, '@')
printShape('diamond', 4, '*')

