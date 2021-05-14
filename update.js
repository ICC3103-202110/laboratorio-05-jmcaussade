const prompt = require ('prompt-sync')();

//INPUT 
const BillAmount = parseFloat(prompt('Bill amount? '));
const TipP = prompt('Tip(%)? ');

//MATH
const Tip = parseFloat((BillAmount*TipP)/100);
const Total = BillAmount + Tip;













module.exports = {
    BillAmount,
    TipP,
    Tip,
    Total
}
