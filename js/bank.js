// Deposit system 
document.getElementById('deposit-btn').addEventListener("click",function(){
    const depositInput = document.getElementById("deposit-input");
    const newDepositString = depositInput.value ;
    const newDepositAmount = parseFloat(newDepositString);

    depositInput.value = "";

    if(isNaN(newDepositString)){
        alert('please Input a number');
        return;
    }

    const depositElement = document.getElementById("deposit-money");
    const previousDepositString = depositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);
    
    const currentTotalDeposit = previousDepositAmount + newDepositAmount;

    depositElement.innerText = currentTotalDeposit;

    // Total Balance related code 
    const balanceElement = document.getElementById('total-balance');
    const previousBalanceString = balanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);
   
    const totalBalance = previousBalanceAmount + newDepositAmount;

    balanceElement.innerText = totalBalance;
    

})
// Withdraw System 
document.getElementById('withdraw-btn').addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawString = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    withdrawInput.value = "";
     
    if(isNaN(newWithdrawString)){
        alert("please Input a number");
        return;
    }
   
    const balanceElement = document.getElementById('total-balance');
    const previousBalanceString = balanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);
   
    const totalBalance = previousBalanceAmount - newWithdrawAmount;

    if(newWithdrawAmount > totalBalance){
        alert("You don't have sufficient Balance");
        return;
    }

    balanceElement.innerText = totalBalance;

    const previousWithdraw = document.getElementById('withdraw-amount');
    const previousInputString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousInputString);

    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;

    previousWithdraw.innerText = totalWithdraw;

    
})