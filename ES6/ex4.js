// Write a function that calculates the prices after tax calculation for each price element in the prices array
var prices = [1.1, 2.32, 3.68, 4.9];
const pricesWithTax = prices.map((val)=>(val*1.07).toFixed(2));
console.log(pricesWithTax);
