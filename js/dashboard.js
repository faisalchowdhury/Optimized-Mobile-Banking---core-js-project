
document.getElementById('add-money-btn').addEventListener('click',function(e){
   
    e.preventDefault();
    const accountNumber = document.getElementById('add-money-account-number').value;
    const pinNumber = getValueById('add-money-pin-number');
    const amount = makeInputValueFloat('add-money-amount');
    const mainBalance =makeTextValueFloat('main-balance');

    if(accountNumber.length === 12){
 
        if(pinNumber === 1234){
           
         if(amount > 0 && !isNaN(amount)){
             

            newBalance = mainBalance + amount;
        
            setBalance(newBalance)

         }else {
           alert('invalid amount')
         }
          
        }else{
            alert('invalid pin number')
        }
     
    }else {
        alert('invalid account number');
    }
})