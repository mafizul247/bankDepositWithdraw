// 1st step add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('btn-deposit');
    // step 2: get the deposit amount deposit input filed 
    // for field use .value to the value inside the inupt filed
    const depositField = document.getElementById('input-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);
    // console.log(depositAmount);
    //setp 3 get the depoist total amount
    // for non-input (element other then input textare) use text innerText
    const depoistTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depoistTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(depositTotal);
    // console.log(typeof previousDepositTotal);

    // setp 4 add number the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depoistTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total 
    const balancTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balancTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balancTotalElement.innerText = currentBalanceTotal;

    //setp clear the deposit field
    depositField.value = '';
})
