// Write a function that returns all elements of array except first element
var arr = ['A','B','C','D','E','F','G'];
var removeFirst = ([first,...rest]) => rest;
console.log(removeFirst(arr));