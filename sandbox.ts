let character: string;
let age: number;
let isLoggedIn: boolean

isLoggedIn = true

// ARRAYS
let ninjas: string[] = []
ninjas = [ 'yoshi']

// UNION TYPES
let mixed: (string|number)[] = []
mixed.push(33)

let uid: string|number;
uid = 123
uid ='123'

// Object

let ninja1 :object;
ninja1 = { name: 'usss'}

let ninja2: {
  name: string;
  age: number;
  beltColor: string
}

ninja2 = { name: 'mario', age: 22, beltColor: 'red'}