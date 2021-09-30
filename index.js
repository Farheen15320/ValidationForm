const form = document.getElementById('form');
const username = document.getElementById('username');
const phoneNumber = document.getElementById('phonenumber');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');

// add event
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //to check wether the filled data is correct or not(as per the requiremnt)
    validate();
})

const sendData = (usernameVal, sRate, count) => {
    if(sRate === count)
    {
        // alert('registration successful');
        
        swal("Welcome! " + usernameVal, "Registration Successful", "success");

        //to send the user on next page
        // location.href = `demo.html?username=${usernameVal}`;
    }
}

// for final validation
const SuccessMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length-1;
    for(var i = 0; i<formCon.length; i++)
    {
        if(formCon[i].className === 'form-control success')
        {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }
}

const validate = () => {
    const usernameVal = username.value.trim();
    const phonenumberVal = phoneNumber.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmpasswordVal = confirmPassword.value.trim();

    // is email or not
    // const isEmail = (emailVal) => {
    //     var atSymbol = emailVal.indexOf("@");
    //     if(atSymbol < 1) return false;

    //     var dot = emailVal.lastIndexOf(".");
    //     if(dot <= atSymbol + 3) return false;

    //     if(dot === emailVal.length) return false;
    // }

    //validate username
    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'enter proper username');
    }else {
        setSuccessMsg(username);
    }


    //validate email
    if(emailVal === "")
    {
        setErrorMsg(email, 'email cannot be blank');
    }
    // else if(!isEmail(emailVal)){
    //     setErrorMsg(email, 'not a valid email');
    else{
        setSuccessMsg(email);
    }

    //validate phone no
    if(phonenumberVal === "")
    {
        setErrorMsg(phoneNumber, 'phone number cannot be blank');
    }else if(phonenumberVal.length != 10){
        setErrorMsg(phoneNumber, 'Phone number must be of 10 digits');
    }else{
        setSuccessMsg(phoneNumber); 
    }
    
    //validate password
    if(passwordVal === "")
    {
        setErrorMsg(password, 'Password cannot be empty');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'minimum 6 character');
    }else{
        setSuccessMsg(password);
    }

    //validate confirm password
    if(confirmpasswordVal === "")
    {
        setErrorMsg(confirmPassword,'cannot be empty');
    }else if(confirmpasswordVal != passwordVal){
        setErrorMsg(confirmPassword, 'Password is not matching');
    }else{
        setSuccessMsg(confirmPassword);
    }
    SuccessMsg(usernameVal);

}

function setErrorMsg(input, errormsg){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control error";
    small.innerText = errormsg;
}

//definging -> success msg
function setSuccessMsg(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}