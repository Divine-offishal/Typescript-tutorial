# TYPESCRIPT

Install typescript compiler globally and then to watch file changes, tsc filename.ts -w

## STATIC TYPES
- Once a type is assigned to a variable, it cannot be changed to a different type. (see typescript file for more)

## EXPLICIT TYPES
You can declare a type explicitly and make sure that you cant reassign a different type to it
 ### STRINGS, NUMBERS AND BOOLEANS
 - For these three data types, put a column after the name and write the type e.g 
 `let character: string;`

  ### ARRAYS
  - For arrays, put a column after the name, declare the type, and add a square bracket. You can also choose to initialize it at the same time by assigning it to an empty array e.g 
  `let ninjas: string[] = []`

  ### OBJECTS 
  For objects, you will only delare types for the properties in the object e.g

  ```
  let ninja2: {
    name: string;
    age: number;
    beltColor: string
  }
  ```

  ### UNION
  This is used to declare a mixed type in an array or a variable. It means that a variable or array can be any of the type specified by the union e.g

  ```
  let uid: string|number;
  let mixed: (string|number)[] = []
  ```

  ### ANY
  - This will initialize a variable, array or object to use any type but this removes the benefits of typescript so, use sparingly
  `let age: any`

## Configurations
- If you want to configure seperate folders for compilations, i.e compile ts in src folder to js in public folder, run the command `tsc --init` This will create a tsconfig.json file which will be used for configurations
- Find the "rootDir" option and specify your src folder path, then find the "outDir" and specify your public folder
- If you don't want the compiler to compile files outside the src folder, you can add an "include" option after the config object and specify src folders `"include": ["src"]`

## Functions
- To declare a function type, you can add a column after the variable and add Function e.g 
`let greet: Function;`
- To declare parameters inside a function,

```const add = (a: number, b: number, c: number|string = 10) => {
  const add = a + b
}
```

- To add an optional parameter, use the question mark symbol after the parameter e.g `c?: number|string`
- To add a parameter with a default parameter value, `c: number|string = 10`
_You can only use either a default value or an optional parameter_

- To explicity define a function return type, add a column after the first parenthesis and delare e.g 
```
  const add = (a: number, b: number, c: number|string = 10): number => {
  const add = a + b
  return add
}
```
_A function returns void as default_


## TYPE ALIASES
- Instead of always declearing types, you can declare type alias once and use it everywhere e.g
```
  type StringOrNum = number|string;

  type objWithName = {name: string, id: StringOrNum}

  const greet = (user: objWithName) => {
    console.log()
  }
```

## Function Signatures
- To explicitly declare function parameter and return types we use function signatures e.g
```
  let greet: ( name: string, age: number) => void

  greet = ( name: string, age: number) => {
    console.log('Hello world')
  }
```

## DOM Interactions and type casting
- When grabbing an element from the html document, you can't access its property by default because typescript expects it to return null. There are two ways to fix this:

```
  const anchor = document.querySelector('a')

  if (anchor) {
    console.log(anchor.href)
    
  }
```

OR

```
  const anchor = document.querySelector('a')!

  console.log(anchor.href)
```

- If the html element is not being grabbed directly using its name but using classes or id, we can cast its type(type of html element) in order to access its properties: 

```
  const form = document.querySelector('.new-item-form') as HTMLFormElement
  const type = document.querySelector('#type') as HTMLSelectElement
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement

```

_There is also an event type that can be passed into event parameters_


## CLASSES
- You can create a class and bind its types inside the constructor: 
```
  class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number){
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}
```

- You can also work with arrays and make sure that only objects created with a particular class can be pushed to the array: 
```
const InvOne = new Invoice('mario', 'work on the mario website', 250)
const InvTwo = new Invoice('luigi', 'work on the luigi website', 300)

let Invoices: Invoice[] = [];
Invoices.push(InvOne, InvTwo)
```

- We have three different types of modifiers: public, private and readonly. These modifiers determine if and how a class property can be modified
```
class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number){
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}
```

Shortcut: 
```
 constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}
```

## INTERFACES
These are rules or a strict template which when defined and tied to an object, makes sure that the object follows the structure which is stated in the interface e.g:

```
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'shawn',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('1 spent', amount)
    return amount
  }
}
```

## GENERICS
- This allows us to create reusable blocks of code which can be used with different types:
```
  const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
  }

  let docOne = addUID({name: 'yoshi', age: 40})

  console.log(docOne)
```

From the code above we cannot access the object properties returned from addUID. So we introduce generics:
```
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 40})

console.log(docOne.name)
```

The generics <T> captures the properties and makes them accessable 

### Generics with interfaces

```
interface Reasource<T> {
  uid: number;
  reasourseName: string;
  data: T;
}

const docThree: Reasource<object> = {
  uid: 1,
  reasourseName: 'person',
  data: {name: 'shawn'}
}
```

## ENUMS
 This allows us to store a set of constant or keywords and associate them with a numeric value
  ```
  enum ReasourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

  interface Reasource<T> {
    uid: number;
    reasourseName: ReasourceType;  //This is where the enum is applied
    data: T;
  }

  const docThree: Reasource<object> = {
    uid: 1,
    reasourseName: ReasourceType.BOOK,  //This is the usage of the enums
    data: {name: 'shawn'}
  }
  ```
  _console.log will show that the reasourse name is a number because each item in the object represents a number._


## TUPLES
- They are like arrays and use array methods
- The types of data in a tuple is fixed once it is being initialized

```
let tup: [string, number, boolean] = ['ryu', 25, true]
```

Now the types of the properties of the array cannot be changed