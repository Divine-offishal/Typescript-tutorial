import { Invoice } from './Classes/invoice.js';
import { listTemplate } from './Classes/listTemplate.js';
import { Payment } from './Classes/payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
var ReasourceType;
(function (ReasourceType) {
    ReasourceType[ReasourceType["BOOK"] = 0] = "BOOK";
    ReasourceType[ReasourceType["AUTHOR"] = 1] = "AUTHOR";
    ReasourceType[ReasourceType["FILM"] = 2] = "FILM";
    ReasourceType[ReasourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ReasourceType[ReasourceType["PERSON"] = 4] = "PERSON";
})(ReasourceType || (ReasourceType = {}));
const docThree = {
    uid: 1,
    reasourseName: ReasourceType.BOOK,
    data: { name: 'shawn' }
};
const docFour = {
    uid: 2,
    reasourseName: ReasourceType.PERSON,
    data: ['bread', 'milk']
};
let arr = ['ryu', 25, true];
arr[0] = false;
let tup = ['ryu', 25, true];
let student;
student = ['chun-li', 2883];
