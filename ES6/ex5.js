// Create an mapper function using arrow symantics that returns an object having following attribute when operating on array
function mapperFns(input) {
    return {
        "isEven": input % 2 === 0,
        "number": input,
        "squared": input * input
    };
}
console.log([1, 2, 3].map(mapperFns));