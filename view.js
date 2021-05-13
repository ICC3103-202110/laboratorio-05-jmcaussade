const {printTable} = require('console-table-printer');

console.clear()
const BillAmount = '$'+'constante x'
const TipPercentage = 'constnate y'+'%'
const TipTotal = '$'+'constante z'
const TotalBill = '$'+'constane xy'
//CREATE TABLE 
const Table = [
    {"Bill Amount": BillAmount,  "Tip (%)": TipPercentage, "Tip": TipTotal,
     "Total": TotalBill }
];

printTable(Table) //DONT PRINT TABLE HERE

