/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/


//object literal
let me = {
	name: 'Mileena',
	age: 23,
}

//ES6 class
//encapsulation
class family {
	constructor(name, age) {  //constructor function. NOT a function!
		this.name = name;
		this.age = age;
	}
	member() {
		console.log(this.name + ' is ' + this.age);
	}
}

//create a function!

let mom = new family('Rebecca', 40);
console.log(mom);  //output: family { name: 'Rebecca', age: 40 }
mom.member(); //output: Rebecca is 40

console.log(me);
