const prompt = require ('prompt-sync')();
const {printTable} = require('console-table-printer');
const {TipU, SumTotalU, Update} = require('./update');
const {BillAmount,TipP,Tip,Total,Table,PrintBillAmountU, PrintTipU} = require('./view');


async function app(){
    console.clear();
    let i = 0
    printTable(Table(BillAmount,TipP,Tip,Total))
    while (i<3) {
      var BillAmountNew = await prompt(PrintBillAmountU());
      var TipPNew = await prompt(PrintTipU()); 
      var TipNew = TipU(BillAmountNew,TipPNew);
      var TotalNew = SumTotalU(BillAmountNew,TipNew);
      var List = Update(BillAmount,TipP,Tip,Total,BillAmountNew,TipPNew,TipNew,TotalNew)
      console.clear();
      printTable(Table(List[0],List[1],List[2],List[3]))
      i++;
    } 
}

module.exports = {
    app
}