import { Invoice } from './Classes/invoice.js';
const InvOne = new Invoice('mario', 'work on the mario website', 250);
const InvTwo = new Invoice('luigi', 'work on the luigi website', 300);
let Invoices = [];
Invoices.push(InvOne, InvTwo);
console.log(Invoices);
Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
