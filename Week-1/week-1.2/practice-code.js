//? Write a program to greet a person given their first and last name:-
/*
const greet = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}`);
}

greet('John', 'Doe');
*/

//? Write a program that greets a person based on their gender. (If-else)

/*
const greet = (firstName, lastName, gender) => {
    if (gender === 'male') {
        console.log(`Hello Mr. ${firstName} ${lastName}`);
    } else if (gender === 'female') {
        console.log(`Hello Ms. ${firstName} ${lastName}`);
    } else {
        console.log(`Hello ${firstName} ${lastName}`);
    }
}

greet("Mohit","Soni","male");
*/

//? Write a program that counts from 0-1000 and prints (for loop)

/*
let answer = 0;
for(let i=0; i<=1000; i++){
    answer = answer + i;
}

console.log(answer);

*/

//? Write a program prints all the even numbers in an array:
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) console.log(arr[i]);
}
*/

//? Write a program to print the biggest number in an array:
/*
const arr = [5,8,6,2,55,88,44,22,29,66];

let max = arr[0];

for (let i = 0; i < arr.length; i++){
    if(arr[i] > max) max = arr[i];
}

console.log(max);
*/

//? Write a program that prints all the male people's first name given a complex object:

/*
const people = [
  {
    firstName: "Martin",
    lastName: "Doe",
    gender: "male",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
  },
  {
    firstName: "Kitty",
    lastName: "Doe",
    gender: "female",
  },
  {
    firstName: "doglas",
    lastName: "Doe",
    gender: "female",
  },
  {
    firstName: "Peter",
    lastName: "Doe",
    gender: "male",
  },
  {
    firstName: "Ranchor",
    lastName: "Doe",
    gender: "male",
  },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].gender === "male") console.log(people[i].firstName);
}

*/

//? Write a program that reverse all the elements in an array:
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
*/


//? Write a program that finds the sum of two numbers:
/*
const sumOfTwoNumbers = (num1,num2)=>{
    return num1+num2;
}

const output = sumOfTwoNumbers(25,26);

console.log(output);
*/

//? Write another function that display this result in a preety format and passisve format


const sum = (num1,num2,fnToCall)=>{
    let result = num1+num2;

    return fnToCall(result);
}

const displayResult = (data)=>{
    console.log(`Result of the sum is: ${data}`);
}

const displayResultPassive = (data)=>{
    console.log(`Sum's result is: ${data}`);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

// const ans = sum(1,2,displayResult);  //! Callbacks

const value = sum(1,5,displayResult);

console.log(value);
