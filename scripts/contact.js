// JS FOR THE CONTACT FORM

// GET DATA

let firstNameInput = document.querySelector('#firstName');
let lastNameInput = document.querySelector('#lastName');
let phoneInput = document.querySelector('#number')
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');
let success = document.querySelector('#success');
let err = document.querySelectorAll('.err');


function validateForm(){

    clearMessage();

    let errFlag = false;

    //CHECK INPUT NOT EMPTY AND EMAIL+PHONE FORMAT IS CORRECT
    if (firstNameInput.value.length < 1){
        err[0].innerText = "First name cannot be blank";
        firstNameInput.classList.add("err-border");
        errFlag = true;
    }

    if (lastNameInput.value.length < 1) {
        err[1].innerText = "Last name cannot be blank";
        lastNameInput.classList.add("err-border");
        errFlag = true;
    }

    if (!checkPhone(phoneInput.value)) {
        err[2].innerText = "Invalid phone number";
        phoneInput.classList.add("err-border");
        errFlag = true;
    }

    if (!checkEmail(emailInput.value)) {
        err[3].innerText = "Invalid email address";
        emailInput.classList.add("err-border");
        errFlag = true;
    }
    
    if (messageInput.value.length < 1) {
        err[4].innerText = "Please enter a message";
        messageInput.classList.add("err-border");
        errFlag = true;
    }

    // MESSAGE SUCCESSFULLY SENT
    if (!errFlag) {
        success.innerText = "Message sent !";
    }
}

function clearMessage() {

    //DELETE THE CONTENT OF ERROR MESSAGES
    for(let i = 0; i < err.length; i++) {
        err[i].innerText = "";
    }

    success.innerText = "";

    //DELETE THE CONTENT OF THE ERROR MESSAGES
    firstNameInput.classList.remove("err-border");
    lastNameInput.classList.remove("err-border");
    phoneInput.classList.remove("err-border");
    emailInput.classList.remove("err-border");
    messageInput.classList.remove("err-border");
}


// REGEX : STARTING A PATTERN IS WITH AN OPENING AND CLOSING SLASH
// ^ : MEANS THE BEGINNING OF THE STRING
// +? : MEANS MIGHT CONTAIN A + AT THE BEGINNING OF THE STRING
// d : DECIMAL 
// {8,12} : CONTAIN AT LEAST 8 NUMBERS
// $ : END OF THE STRING
function checkPhone(phone) {
    let phonePattern = /^\+?\d{8,12}$/;
    return (phonePattern.test(phone));
}

function checkEmail(email) {
    let emailPattern = /^[a-zA-Z0-9]{1,15}@[a-zA-Z0-9]{1,8}\.[a-zA-Z]{2,3}$/;
    return (emailPattern.test(email));

}


// JS TO CHANGE THE MAP

let mapping = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353516.71488906606!2d5.780884568025547!3d46.193556776450684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b2eaaa9dd11%3A0x3d8d2ce295887967!2sRolex%20SA!5e0!3m2!1sen!2sfr!4v1686528733395!5m2!1sen!2sfr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19823.695530285295!2d2.302670725462148!3d48.85231834347807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d765f781e3%3A0xaf3056b06035f194!2sBoutique%20Rolex%20Lassaussois%20-%20D%C3%A9taillant%20Officiel!5e0!3m2!1sen!2sfr!4v1686529275318!5m2!1sen!2sfr",
];

function displayMap (map) {

    let mapDisplay = document.getElementById('address');
    mapDisplay.src = mapping[map];
}

document.getElementById("switzerland").addEventListener("click", function(){displayMap(0);});
document.getElementById("france").addEventListener("click", function(){displayMap(1);});

displayMap(0);
