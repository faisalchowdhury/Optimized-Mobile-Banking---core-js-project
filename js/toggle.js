
document.getElementById('cashout').style.display = "none";

document.getElementById('add-money-box').addEventListener('click' , function(){
    
    toggleAdd('add-money-box','addmoney' );
    toggleRemove('cashout-box','cashout');

  

})

document.getElementById('cashout-box').addEventListener('click' , function(){
    
    toggleAdd('cashout-box','cashout');
    toggleRemove('add-money-box','addmoney');
   
  
})