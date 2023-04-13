
import { Invoice } from './Classes/invoice.js'
import { Payment} from './Classes/payment.js'
import { HasFormatter } from './Interfaces/HasFormatter'

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'webwork', 390)
docTwo = new Payment('mario', 'plumbing work', 490)

let docs: HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const InvOne = new Invoice('mario', 'work on the mario website', 250)
const InvTwo = new Invoice('luigi', 'work on the luigi website', 300)

let Invoices: Invoice[] = [];
Invoices.push(InvOne, InvTwo)
console.log(Invoices);

Invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format())
})
