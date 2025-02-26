//add money
document.getElementById('add-money-btn').addEventListener('click',function(e){
   
    e.preventDefault();
    const accountNumber = document.getElementById('add-money-account-number').value;
    const pinNumber = getValueById('add-money-pin-number');
    const amount = makeInputValueFloat('add-money-amount');
    const mainBalance =makeTextValueFloat('main-balance');
    const bank = document.getElementById('from-bank').value;

    if(accountNumber.length === 12){
 
        if(pinNumber === 1234){
           
         if(amount > 0 && !isNaN(amount)){
             

            newBalance = mainBalance + amount;
        
            setBalance(newBalance)

              // Transaction History

              const wrapper =document.getElementById('tran-wrapper');


              const div = document.createElement('div');
              div.classList.add('bg-green-800' ,'font-bold', 'text-gray-100', 'm-4' , 'p-4', 'rounded-xl')

              div.innerHTML = `
              <p class="">You received ${amount} TK on ${accountNumber} from ${bank}  </p>
              `;

              
              wrapper.appendChild(div);


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

// cashout 

document.getElementById('cashout-btn').addEventListener('click' ,function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('cashout-account-number').value;
    const pinNumber = getValueById('cashout-pin-number');
    const amount = makeInputValueFloat('cashout-amount');
    const mainBalance = makeTextValueFloat('main-balance');
    
    if(accountNumber.length === 12){
      
        if(pinNumber === 1234){
           
            if(mainBalance > amount && !isNaN(amount) ){
              

                newBalance = mainBalance - amount;

                setBalance(newBalance);

              // Transaction History

              const wrapper =document.getElementById('tran-wrapper');

              const div = document.createElement('div');
              

              div.innerHTML = `
              <p class="bg-red-600 font-bold text-gray-100 m-4 p-4 rounded-xl">Cashout ${amount} TK from ${accountNumber}  </p>
              `;

              
              wrapper.appendChild(div);

            }else{
                alert('insufficient balance')
            }

        }

    }else{
        alert('invalid account number')
    }
});




