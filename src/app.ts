
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

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
})