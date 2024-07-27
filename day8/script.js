function formValidation(){
    var uemail = document.registration.exampleInputEmail1;
    var upassword = document.registration.exampleInputPassword1;
    

    if(email_Validation(uemail)){
        if(password_Validation(upassword,7,12)){

        }
    }
    return false;
}


function email_Validation(uemail) {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (uemail.value.match(emailPattern)) {
        return true;
    } else {
        alert("Enter a valid email address!");
        uemail.focus();
        return false;
    }
}


function password_Validation(upassword,mx,my){
    var password_len = upassword.value.length;
    if(password_len == 0 || password_len < mx || password_len > my){
        alert("Password must be " + mx + "to " + my + "characters");
        upassword.focus();
        return false;
    }
    windows.location.reload();
    return true;
}