//! Variables
//* var (Global define variable and easily access anywhere)
/*
var a = 1;
a=2
console.log(a);
*/

//* let (define a varibale whose value is changing)
/*
let a=2;
a=2;
console.log(a);
*/

//* const (define a variable whose value won't change)
/*
const a=2;
a=3;      // Error occur
console.log(a);
*/


//! Data types
/*
let firstName = "Mohit";
let age = 22;
let isMarried = false;

console.log(`this person name is ${firstName} and their age is ${age}`);
*/

//! If-else
/*
if(isMarried) console.log(`${firstName} is Married`);
else console.log(`${firstName} is not Married`);
*/


//! Loops - For Loop

/*
//? Write a program that counts from 0-1000 and prints (for loop)

let answer = 0;
for(let i=0; i<=1000; i++){
    answer = answer + i;
}

console.log(answer);

*/


//! Arrays

/*
const ages = [21,22,23,24,25];

for(let i=0; i<ages.length; i++){
    if(ages[i] % 2 == 0) console.log(ages[i]);  // Display even number of ages
}
*/


//! Callback function

/*
const calculateArithmeti = (a,b,arithmeticFinalFunction)=>{
    const ans = arithmeticFinalFunction(a,b);

    return ans;
}

const sum = (a,b)=>{
    return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

const value = calculateArithmeti(1,2,sum);
console.log(value);

*/

//! Small example of callback function
const greet = ()=>{
    console.log("Hello World");
}

// setTimeout(greet, 3*1000);
setInterval(greet, 3*1000);