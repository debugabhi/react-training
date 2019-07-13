const books = [
{ title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
{ title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
{ title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },
];

const [...title]=books.map(book=>book.title);
const [...author]=books.map(book=>book.author);
console.log(title,author);