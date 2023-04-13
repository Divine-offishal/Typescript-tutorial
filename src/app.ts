
import { Invoice } from './Classes/invoice.js'
import { listTemplate } from './Classes/listTemplate.js'
import { Payment} from './Classes/payment.js'
import { HasFormatter } from './Interfaces/HasFormatter.js'




const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// List template instance
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul)


form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'end')
})


const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 40})

console.log(docOne.name)

enum ReasourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Reasource<T> {
  uid: number;
  reasourseName: ReasourceType;
  data: T;
}

const docThree: Reasource<object> = {
  uid: 1,
  reasourseName: ReasourceType.BOOK,
  data: {name: 'shawn'}
}

const docFour: Reasource<string[]> = {
  uid: 2,
  reasourseName: ReasourceType.PERSON,
  data: ['bread', 'milk']
}

let arr = ['ryu', 25, true]
arr[0] = false

let tup: [string, number, boolean] = ['ryu', 25, true]

let student: [string, number];
student = ['chun-li', 2883]