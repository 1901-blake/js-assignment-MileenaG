/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/


//object literal
let me = {
	name: 'Mileena',
	age: 23,
}

console.log(me)

//constructor function
function Users(name, age) {  
	this.name = name;
	this.age = age;
}

console.log(Users());



//ES6 class
class family {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	person() {
		console.log(this.name + ' is ' + this.age);
	}

}

let mom = new family('Rebecca', 40);
console.log(mom); //I'm just printing the new family memeber object
mom.person()  //I'm accessing the person field in the family class


