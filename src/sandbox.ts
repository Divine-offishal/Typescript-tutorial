let greet: Function;

greet = () => {
  console.log('hello')
}

const add = (a: number, b: number, c: number|string = 10): number => {
  const add = a + b
  return add
}

add(5, 10);