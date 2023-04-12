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
