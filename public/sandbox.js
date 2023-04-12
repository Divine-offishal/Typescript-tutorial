"use strict";
let greet;
greet = () => {
    console.log('hello');
};
const add = (a, b, c = 10) => {
    const add = a + b;
    return add;
};
add(5, 10);
