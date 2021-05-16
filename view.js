const {printTable} = require('console-table-printer');

var BillAmount = '$0';
var TipP = '0%';
var Tip = '$0';
var Total = '$0';

//CREATE TABLE 
/*const Table1 = [
    {"Bill Amount": BillAmount,  "Tip (%)": TipP, "Tip": Tip,
     "Total": Total }
];*/


function Table(BillAmountC,TipPC, TipC, TotalC) {
    var Table4 = [
        {"Bill Amount": BillAmountC,  "Tip (%)": TipPC, "Tip": TipC,
     "Total": TotalC }
    ] 
    return Table4;
}







module.exports = {
    BillAmount,
    TipP,
    Tip,
    Total,
    Table
    
}

