// ==========================================
// JAVASCRIPT PROGRAM: ARRAYS AND FUNCTIONS
// ==========================================

// ---------- 1. ONE-DIMENSIONAL ARRAY ----------
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("1. One-Dimensional Array:");
console.log(fruits);


// ---------- 2. TWO-DIMENSIONAL ARRAY ----------
let students = [
    ["Suswetha", 20],
    ["Anitha", 21],
    ["Ravi", 20]
];

console.log("\n2. Two-Dimensional Array:");

for (let i = 0; i < students.length; i++) {
    console.log("Name:", students[i][0], "Age:", students[i][1]);
}


// ---------- 3. MULTI-DIMENSIONAL ARRAY ----------
let college = [
    [
        ["CSE", 60],
        ["AIML", 50]
    ],
    [
        ["ECE", 55],
        ["EEE", 45]
    ]
];

console.log("\n3. Multi-Dimensional Array:");
console.log(college);


// ---------- 4. ARRAY OF OBJECTS ----------
let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Priya", salary: 30000 },
    { name: "Kiran", salary: 28000 }
];

console.log("\n4. Array of Objects:");

employees.forEach(function(employee) {
    console.log(employee.name, employee.salary);
});


// ==========================================
// FUNCTIONS
// ==========================================

// ---------- 5. NORMAL FUNCTION ----------
function add(a, b) {
    return a + b;
}

console.log("\n5. Normal Function:");
console.log("Addition =", add(10, 20));


// ---------- 6. FUNCTION WITH NO ARGUMENTS ----------
function greet() {
    console.log("Hello! Welcome to JavaScript.");
}

console.log("\n6. Function with No Arguments:");
greet();


// ---------- 7. FUNCTION WITH ARGUMENTS ----------
function multiply(a, b) {
    return a * b;
}

console.log("\n7. Function with Arguments:");
console.log("Multiplication =", multiply(5, 4));


// ---------- 8. ANONYMOUS FUNCTION ----------
let subtract = function(a, b) {
    return a - b;
};

console.log("\n8. Anonymous Function:");
console.log("Subtraction =", subtract(20, 8));


// ---------- 9. ARROW FUNCTION ----------
let square = (n) => {
    return n * n;
};

console.log("\n9. Arrow Function:");
console.log("Square =", square(6));


// ---------- 10. ARROW FUNCTION (SHORT FORM) ----------
let cube = n => n * n * n;

console.log("\n10. Short Arrow Function:");
console.log("Cube =", cube(3));


// ---------- 11. CALLBACK FUNCTION ----------
function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(10, 5, function(a, b) {
    return a + b;
});

console.log("\n11. Callback Function:");
console.log("Result =", result);


// ---------- 12. RECURSIVE FUNCTION ----------
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("\n12. Recursive Function:");
console.log("Factorial of 5 =", factorial(5));


// ==========================================
// ARRAY METHODS WITH FUNCTIONS
// ==========================================

let numbers = [1, 2, 3, 4, 5];

console.log("\n13. Array Methods:");


// map()
let squares = numbers.map(function(num) {
    return num * num;
});

console.log("map() =", squares);


// filter()
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("filter() =", evenNumbers);


// reduce()
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log("reduce() =", sum);


// forEach()
console.log("forEach():");

numbers.forEach(function(num) {
    console.log(num);
});