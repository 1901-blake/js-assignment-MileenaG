/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) { //Don't want to create an object we want it to print all of the properties of an object
	let text = '';   //you can't add an undefined variable to a string
	let i;
	for (i in someObj) {               //loops through properties in an object
		text += someObj[i] + '';
		//console.log(someObj) prints 3X3
	};
	return (console.log(someObj));
}

let bike = {
	frontGears: 3,
	backGears: 7,
	material: 'aluminum'
};

result = objectProperties(bike);