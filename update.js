
function PrintBillAmountU(){
    return ' Bill amount? '
};

function PrintTipU(){
    return ' Tip(%)? '
};

function TipU(bill, percentage){
    const tip = parseFloat((bill*percentage)/100)
    return tip
};

function SumTotalU(bill,tip){
    var bill =  parseFloat(bill)
    var tip = parseFloat(tip)
    const sum = bill+tip
    return sum
};

function Update(p1, p2, p3, p4, n1, n2, n3, n4){
    var p1 = n1
    var p2 = n2
    var p3 = n3
    var p4 = n4
    list=[p1,p2,p3,p4]
    return list
}

module.exports = {
    PrintBillAmountU,
    PrintTipU,
    TipU,
    SumTotalU,
    Update
    
}










