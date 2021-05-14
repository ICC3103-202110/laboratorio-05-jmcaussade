const {printTable} = require('console-table-printer');

console.clear()
const BillAmount = '$'+'constante x'
const TipPercentage = 'constnate y'+'%'
const Tip = '$'+'constante z'
const TotalBill = '$'+'constane xy'
//CREATE TABLE 
const Table1 = [
    {"Bill Amount": BillAmount,  "Tip (%)": TipPercentage, "Tip": Tip,
     "Total": TotalBill }
];

printTable(Table1) //DONT PRINT TABLE HERE

