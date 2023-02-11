// 1 add even hander withdraw 
// get the withdrw 
// also make sure the convert input a number by using parsefloat
// get previous withdraw amount
// calculate total amount
// set total withdraw amount
// step 7 clar the input filed 

// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw');
    // step 2
    const withFiled = document.getElementById('input-withdraw');
    const newWithdrawString = withFiled.value;
    const newWithdraw = parseFloat(newWithdrawString);
    // console.log(newWithdraw);

    // step 3
    const WithdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    // step 4 
    const currentWithdarwTotal = previousWithdrawTotal + newWithdraw;
    WithdrawTotalElement.innerText = currentWithdarwTotal;

    // step 5 
    const balanceTotalelement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalelement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdraw;

    balanceTotalelement.innerText = newBalanceTotal;
    // sept calculate new balcance

    // step 7 clar the input filed 
    withFiled.value = '';
})