// Write a function that returns an array from a given string
var wrap = params => Array.of(params);
console.log(wrap("package"));

// Write a function that takes an array of string and returns plain string
var unwrap = params => params.toString();
console.log(unwrap(["package"]));
