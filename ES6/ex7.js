// Write a function request which when called with parameter as shown below prints url and method value
console.log(request({url: 'http://www.google.com', method: 'GET' }));
function request(obj) {
    return Object.values(obj);
}