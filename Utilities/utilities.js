
// making value integer
function getValueById(id) {

    let value = document.getElementById(id).value;
    value = parseInt(value);

    return value;
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

