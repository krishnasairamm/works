function formValidation(){

    var username = document.registration.userid;
    var password = document.registration.passid;
    var agenumber = document.registration.age;
    var pincodenum = document.registration.pincode;
    var pannum = document.registration.panid;
    var mobilenum = document.registration.phonenumber;

    if(usernameValidation(username,8,10)){
        
            if(ageValidation(agenumber)){
                if(pincodenumValidation(pincodenum)){
                    if(pannumValidation(pannum)){
                        if(mobilenumValidation(mobilenum)){

                        
                    }
                }
            }
        }
    }
    return false;

}
// username
function usernameValidation(username,mx,my){
    if(username == '' || username<mx || username>my){
        alert('Username must be in length '+mx+"to "+my);
        username.focus();
        return false;
    }
    return true;
}

// password

function passwordValidation(){

}

//age
function ageValidation(agenumber) {
    var agepattern = /^[0-9]+$/;
    var age = parseInt(agenumber.value); // Convert input value to an integer

    if (age >= 1 && age < 100 && agenumber.value.match(agepattern)) {
        return true;
    } else {
        alert("Please enter a valid age (between 1 and 99).");
        return false;
    }
}

function pincodenumValidation(pincodenum){
    var pincode
}
