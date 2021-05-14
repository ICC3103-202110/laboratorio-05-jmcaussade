const prompt = require ('prompt-sync')();

const BillAmount = parseFloat(prompt('Bill amount? '));
const TipP = prompt('Tip(%)? ');

const Tip = parseFloat((BillAmount*TipP)/100);
const Total = BillAmount + Tip;

console.log(Tip)
console.log(Total)