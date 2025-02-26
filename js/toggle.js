
toggleAdd('add-money-box','addmoney' );
toggleRemove('cashout-box','cashout');
toggleRemove('transaction-box','transaction');


document.getElementById('add-money-box').addEventListener('click' , function(){
    
    toggleAdd('add-money-box','addmoney' );
    toggleRemove('cashout-box','cashout');
    toggleRemove('transaction-box','transaction');

  

})

document.getElementById('cashout-box').addEventListener('click' , function(){
    
    toggleAdd('cashout-box','cashout');
    toggleRemove('add-money-box','addmoney');
    toggleRemove('transaction-box','transaction');
   
  
})


document.getElementById('transaction-box').addEventListener('click' , function(){
    
    toggleAdd('transaction-box','transaction');
    toggleRemove('add-money-box','addmoney');
    toggleRemove('cashout-box','cashout');

   
  
})