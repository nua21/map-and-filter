// PROBLEM 1 - Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments, and show the outputs.
//SOLVE 1
function define(a, b = "nusrat"){
    return `${a} ${b}`;
};
// calling it with two arguments
console.log(define(21, 11));
//output - 21 11
//calling it with one argument
console.log(define(21));
//output - 21 nusrat
// PROBLEM 1  SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 2 - Create a function that takes a name and a city as input and returns a multi-line message using template literals, incorporating both variables.
//SOLVE 2
function line(name, city){
    return `Hello, my name is ${name}. 
    I live in ${city}.
    The city is very neat.
    It's an amazing place to live`;
};
console.log(line("Nusrat", "Gouripur"));
// output - 
/* Hello, my name is Nusrat. 
I live in Gouripur.
The city is very neat.
It's an amazing place to live */
// PROBLEM 2  SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 3 - Combine two arrays using the spread operator and find the maximum value in the merged array.
//SOLVE 3
let arr1 = [1, 2, 11];
let arr2 = [12, 21, 22];
function combineAndMax(arr1, arr2){
    const mergedArray = [...arr1, ...arr2];
    return Math.max(...mergedArray);
};
console.log(combineAndMax(arr1, arr2));
// output - 22
// PROBLEM 3 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 4 - Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.
//SOLVE 4
let person = {
    nAme: "Nusrat",
    age: 19,
    country: "Bangladesh"
};
let { nAme, age, country } = person;
console.log(nAme, age, country);
//output- Nusrat 19 Bangladesh

let numbers = [1, 2, 11, 12, 21];
let [first, second] = numbers;
console.log(first, second);
//output- 1 2
//PROBLEM 4 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 5 - Access the city property of a nested object using both dot notation and optional chaining.
//SOLVE 5
let nestedObject = {
    person: {
        name: "Nusrat",
        city: "Gouripur",
    }
};
//Accessing city with dot notation
console.log(nestedObject.person.city);
//output - Gouripur
//Accessing city with optional chaining
console.log(nestedObject.person.address?.city);
// output - undefined
//PROBLEM 5 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 6 - Given an array of student objects with properties name and marks, use:map() to extract the names.
//SOLVE 6
let students = [
    {name: "Nusrat", marks: 90},
    {name: "Suchona", marks: 85},
    {name: "Nua", marks: 95},
];
let studentNames = students.map((student)=>{
    return student.name;
});
console.log(studentNames);
// output - ["Nusrat", "Suchona", "Nua"]

//without return and the names in array output
let studentNames1 = students.map((student)=>{
    console.log(student.name);
});
//output- Nusrat, Suchona, Nua
//PROBLEM 6 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 7 - filter() to return students with marks above 80.
//SOLVE 7
let allStudents = [
    {name: "Nusrat", marks: 90},
    {name: "Suchona", marks: 30},
    {name: "Nua", marks: 95},
];
let topStudents = allStudents.filter((students)=>{
    return students.marks > 80;
});
console.log(topStudents);
// output - [{name: "Nusrat", marks: 90}, {name: "Nua", marks: 95}]
//PROBLEM 7 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 8 - Use map() on a string array to create a new array where each string is prefixed with "Hello, ".
//SOLVE 8
let names = ["Nusrat", "Suchona", "Nua"];
let greetings = names.map((name)=>{
    return `Hello, ${name}!`;
});
console.log(greetings);
//output- ["Hello, Nusrat!", "Hello, Suchona!", "Hello, Nua!"]
//PROBLEM 8 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 9 - Given an array of objects, use filter() to return all objects where a specific condition is met (e.g., products priced above a certain amount).
//SOLVE 9
let fruits = [
    {name: "Apple", price: 100},
    {name: "Orange", price: 250},
    {name: "Banana", price: 60},
    {name: "Grape", price: 150},
    {name: "Cherry", price: 400},
    {name: "Watermelon", price: 200},
];
let expensiveFruits = fruits.filter((fruit)=>{
    return fruit.price > 150;
});
console.log(expensiveFruits);
// output - [{name: "Orange", price: 250},{name: "Cherry", price: 400},{name: "Watermelon", price:200}]
//PROBLEM 9 SOLVED

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// PROBLEM 10 - You have an array of product objects, where each product has a name and price. Write a function that uses the map method to create a new array of strings. Each string should contain the product's name and price formatted as Product: [name] costs $[price].
//SOLVE 10
let products = [
    {name: "Apple", price: 100},
    {name: "Orange", price: 250},
    {name: "Banana", price: 60},
    {name: "Grape", price: 150},
];
let formatProducts = products.map((products) => {
        return `Product: ${products.name} costs $${products.price}`;
    });
console.log(formatProducts);
//output -
    /*
    ["Product: Apple costs $100",
    "Product: Orange costs $250",
    "Product: Banana costs $60",
    "Product: Grape costs $150"] */
//PROBLEM 10 SOLVED