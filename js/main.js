// Arrays
const fruits = ['banana', 'apples', 'grapes'];
console.log(fruits);

const name = 'Matt';
const age = 40;
const job = 'Web developer';
const city = 'Sydney';
let html;

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
  </ul>
`;

let body = document.querySelector('body');
body.innerHTML = '<h1>Hello</h1>';

// document.body.innerHTML = html;
