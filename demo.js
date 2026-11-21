// 1. Variables
console.log("1. VARIABLES");

let websiteName = "Vipin S's Webpage";
const year = 2026;

console.log(websiteName);
console.log(year);


// 2. Data Types
console.log("2. DATA TYPES");

let username = "Vipin S";
let age = 21;
let isStudent = true;

console.log(typeof username);
console.log(typeof age);
console.log(typeof isStudent);


// 3. Operators
console.log("3. OPERATORS");

let price = 500;
let discount = 100;
let finalPrice = price - discount;

console.log("Final Price:", finalPrice);

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);


// 4. Conditions
console.log("4. CONDITIONS");

let marks = 85;

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 75) {
    console.log("Very Good");
} else if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 5. Loops
console.log("5. LOOPS");

for (let i = 1; i <= 5; i++) {
    console.log("Welcome to Vipin S's Webpage");
}


// 6. Functions
console.log("6. FUNCTIONS");

function greetUser(name) {
    return "Welcome " + name;
}

console.log(greetUser("Vipin S"));

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3));


// 7. Arrays
console.log("7. ARRAYS");

const categories = ["Technology", "Programming", "Entertainment", "Education"];

console.log(categories);
console.log(categories[0]);
console.log(categories.length);

categories.push("Sports");
console.log(categories);


// 8. Objects
console.log("8. OBJECTS");

const user = {
    name: "Vipin S",
    age: 21,
    city: "Chennai",
    membership: "Premium"
};

console.log(user);
console.log(user.name);
console.log(user.age);


// 9. Object Destructuring
console.log("9. OBJECT DESTRUCTURING");

const { name, city, membership } = user;

console.log(name);
console.log(city);
console.log(membership);


// 10. Array Destructuring
console.log("10. ARRAY DESTRUCTURING");

const [first, second, third] = categories;

console.log(first);
console.log(second);
console.log(third);


// 11. Spread Operator
console.log("11. SPREAD OPERATOR");

const oldCategories = ["Technology", "Programming"];
const newCategories = ["Education", "Entertainment"];

const allCategories = [...oldCategories, ...newCategories];

console.log(allCategories);

// Updating the user details
const updatedUser = {
    ...user,
    membership: "Gold"
};

console.log(updatedUser);


// 12. forEach()
console.log("12. forEach()");

categories.forEach(function(category) {
    console.log(category);
});


// 13. map()
console.log("13. map()");

const upperCategories = categories.map(function(category) {
    return category.toUpperCase();
});

console.log(upperCategories);


// 14. filter()
console.log("14. filter()");

const longCategories = categories.filter(function(category) {
    return category.length > 8;
});

console.log(longCategories);


// 15. find()
console.log("15. find()");

const selectedCategory = categories.find(function(category) {
    return category === "Programming";
});

console.log(selectedCategory);