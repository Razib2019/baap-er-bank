document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    depositeField.value = '';

    if (isNaN(newDepositeAmount)) {
        alert('Please Enter a Valid Number');
        return;
    }

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})