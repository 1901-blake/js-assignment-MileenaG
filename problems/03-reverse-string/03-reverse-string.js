/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */


//A reverse string function writes the elements in a string backwards

function reverseStr(someStr) {
    let splitString = someStr.split(''); //makes a new array where each letter is one element
    let reverseArray = splitString.reverse(); //reverses array
    let joinArray = reverseArray.join(''); //joins all elements to make a single string
    return joinArray;
}
 
result = reverseStr('hello');
console.log(result)
//output: olleh


//we can also chain all three methods together to keep it consice
function reverseString(str) {
    return str.split('').reverse().join('');
}
name = reverseString('Mileena');
console.log(name)