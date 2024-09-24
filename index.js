const num1 = 2;
const num2 = 31;
const random = Math.floor(Math.random() * 100) + 1; // Random integer between 1 and 100
const num3 = 24;
const num4 = 5;

// Change random to a fixed value if you want to control the outcome
// const random = 20; // Uncomment this line to set random to 20

const multiply = num1 * num2;
const mod = num3 % num4;
const max = Math.max(10, 15, 20); // This will take the highest value from the variables

module.exports = { num1, num2, random, num3, num4, multiply, mod, max };