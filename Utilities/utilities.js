
// making value integer
function getValueById(id) {

    let value = document.getElementById(id).value;
    value = parseInt(value);

    return value;
}

// making value float number 

function makeInputValueFloat(id){

    let value = document.getElementById(id).value;
    value = parseFloat(value);

    return value;
}
// making text value float number 

function makeTextValueFloat(id){

    let value = document.getElementById(id).innerText;
    value = parseFloat(value);

    return value;
}

// set main balance
function setBalance(balance){

    document.getElementById('main-balance').innerText = balance;
}



// toggling action boxes 

function toggleAdd(id,sectionId){

    document.getElementById(id).classList.add('bg-white');
    document.getElementById(sectionId).style.display = "block";

}

function toggleRemove(id,sectionId){

    document.getElementById(id).classList.remove('bg-white');
    document.getElementById(sectionId).style.display = "none";

}

