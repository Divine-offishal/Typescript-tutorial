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
    ``let ninja2: {
      name: string;
      age: number;
      beltColor: string
    }``
