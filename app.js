const prompt = require ('prompt-sync')();
const {printTable} = require('console-table-printer');
const {PrintBillAmountU, PrintTipU, TipU, SumTotalU, Update} = require('./update');
const {BillAmount,TipP,Tip,Total,Table} = require('./view');

console.clear();
let i = 0
printTable(Table(BillAmount,TipP,Tip,Total))
while (i<2) {
    var BillAmountNew = prompt(PrintBillAmountU());
    var TipPNew = prompt(PrintTipU()); 
    var TipNew = TipU(BillAmountNew,TipPNew);
    var TotalNew = SumTotalU(BillAmountNew,TipNew);
    var List = Update(BillAmount,TipP,Tip,Total,BillAmountNew,TipPNew,TipNew,TotalNew)
    console.log(List)
    console.clear();
    printTable(Table(List[0],List[1],List[2],List[3]))
    i++;
} 

