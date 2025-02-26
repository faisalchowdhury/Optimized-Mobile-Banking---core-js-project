
document.getElementById('login-btn').addEventListener('click' ,function(event){
    event.preventDefault(); 
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = getValueById("pin-number");
    
  
    if(accountNumber.length === 12){
        
        if(pinNumber === 1234){
           
            window.location.href = "dashboard.html"

        }else{
            alert("invalid pin number");
        }

    }else{
        alert('invalid account Number')
        
    }

} );