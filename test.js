/***********************
 * 1. What is JS?
 * JavaScript is a programming language used for web development
 * to add interactivity, handle logic, and manipulate the DOM.
 ***********************/

// Log a basic message
console.log("Welcome to JavaScript Basics!");


/***********************
 * 2. Variable Initialization
 ***********************/
let name = "Om"; // string
let age = 25;    // number
const pi = 3.14159; // constant
console.log("Name:", name, "| Age:", age, "| Pi:", pi);


/***********************
 * 3. Arithmetic Operators
 ***********************/
let a = 10;
let b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


/***********************
 * 4. Branching (if-else)
 ***********************/
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


/***********************
 * 5. Looping
 ***********************/
// For Loop
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While Loop
let counter = 1;
console.log("While loop example:");
while (counter <= 3) {
    console.log("Counter:", counter);
    counter++;
}


/***********************
 * 6. Functions
 ***********************/
function greet(user) {
    return `Hello, ${user}!`;
}
console.log(greet("Om"));

const square = (num) => num * num;
console.log("Square of 5:", square(5));


/***********************
 * 7. Arrays / Lists
 ***********************/
let fruits = ["Apple", "Banana", "Cherry"];
console.log("First fruit:", fruits[0]);
fruits.push("Mango");
console.log("All fruits:", fruits);
fruits.forEach((fruit, index) => console.log(`Fruit ${index + 1}: ${fruit}`));

const filtered = fruits.filter((fruit) => {return fruit != "Cherry"})
console.log("Filtered fruits",filtered);

const mapped = fruits.map((fruit,idx) => {return fruit + " " + idx})
console.log("Filtered fruits",mapped);



/***********************
 * 8. Asynchronous Programming
 ***********************/
console.log("Before setTimeout");
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);
console.log("After setTimeout");

// Simple fetch call
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Fetched Post:", data))
    .catch(error => console.error("Error fetching data:", error));

// Fetch example (uncomment if running in browser)
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log("Fetched data:", data))
//     .catch(error => console.error("Error:", error));
