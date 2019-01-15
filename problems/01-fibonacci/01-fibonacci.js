/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//a_n = [ Phi^n - (phi)^n ]/Sqrt[5]    Phi=(1+Sqrt[5])/2      phi=(1-Sqrt[5])/2
function fib(n) {
    let phi = (1 - Math.sqrt(5))/2;
    let Phi = (1 + Math.sqrt(5))/2;
    return (Phi**n - phi**n)/(Math.sqrt(5));
};


//testing function by finding the first six terms in the sequence
let first = fib(0);
console.log(first);

let second = fib(1);
console.log(second);

let third = fib(2);
console.log(third);

let fourth = fib(3);
console.log(fourth);

let fifth = fib(4);
console.log(fifth);

let sixth = fib(5);
console.log(sixth);