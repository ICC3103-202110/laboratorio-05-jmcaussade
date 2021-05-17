const prompt = require ('prompt-sync')();
const {printTable} = require('console-table-printer');
const {TipU, SumTotalU, Update} = require('./update');
const {BillAmount,TipP,Tip,Total,Table,PrintBillAmountU, PrintTipU, getTitle} = require('./view');


async function app(){
    console.clear();
    console.log(getTitle(getTitle))
    printTable(Table(BillAmount,TipP,Tip,Total))
    while (true) {
      var BillAmountNew = await prompt(PrintBillAmountU());
      var TipPNew = await prompt(PrintTipU()); 
      var TipNew = TipU(BillAmountNew,TipPNew);
      var TotalNew = SumTotalU(BillAmountNew,TipNew);
      var List = Update(BillAmount,TipP,Tip,Total,BillAmountNew,TipPNew,TipNew,TotalNew)
      console.clear();
      console.log(getTitle(getTitle))
      printTable(Table(List[0],List[1],List[2],List[3]))
      ;
    } 
}

module.exports = {
    app
}