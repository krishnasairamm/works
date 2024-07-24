
function phonevalid() {
    var mobilenum = document.getElementById('phonenum1').value;
    var pattern = /^\d[9]{10}$/;
    if(mobilenum == '' || mobilenum<pattern ){
        alert("Please enter a valid phone number.\n should not be less than 10..");
    }
    
    
    if (mobilenum.match(pattern)) {
        alert('true');
        return true;
    }

    
}
