
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
    const sum = bill+tip
    return sum
};



module.exports = {
    PrintBillAmountU,
    PrintTipU,
    TipU,
    SumTotalU
}










