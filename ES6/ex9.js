// Open the developer tools on your favorite news site. Locate the first character of all headings, and log the concatenation of the first characters.
let text = '';
let nodes = 'Open the developer tools on your favorite news site. Locate the first character of all headings, and log the concatenation of the first characters.'.split(' ');
for (let node of nodes) {
    text+=node[0];
};
console.log(text);