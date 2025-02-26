
document.getElementById('add-money-btn').addEventListener('click',function(e){
   
    e.preventDefault();
    const accountNumber = document.getElementById('add-money-account-number').value;
    const pinNumber = getValueById('add-money-pin-number');

    if(accountNumber.length === 12){
 
        if(pinNumber === 1234){
           
          

        }else{
            alert('invalid pin number')
        }
     
    }else {
        alert('invalid account number');
    }
})