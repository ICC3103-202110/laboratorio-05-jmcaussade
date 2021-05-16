const prompt = require ('prompt-sync')();
const {printTable} = require('console-table-printer');
const {PrintBillAmountU, PrintTipU, TipU, SumTotalU} = require('./update');
const {Table1} = require('./view');


let i = 0
while (i<3) {
    console.clear();
    printTable(Table1)
    const BillAmount = prompt(PrintBillAmountU());
    const TipP = prompt(PrintTipU()); 
    const Tip = TipU(BillAmount,TipP);
    const Total = SumTotalU(BillAmount,Tip);
    i++;
} 



