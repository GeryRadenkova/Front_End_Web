"use strict";

const formElement = document.getElementById("regirter-form");
const loginFormElement = document.getElementById("user-login-form");

const usernameElement = document.querySelector(".user-input[name=username]"); 
const emailElement = document.querySelector(".user-input[name=email]");
const passwordElement = document.querySelector(".user-input[name=password]");
const confirmPasswordElement = document.querySelector(".user-input[name=confirm-password]");
const errorElement = document.getElementById("errors");

if(formElement) {

    formElement.addEventListener("submit", event => {
        event.preventDefault(); /* страницата няма да се презареди */
    
        let hasCorrectUsername = false;
        let hasCorrectEmail = false;
        let hasCorrectPassword = false;
        let hasCorrectConfirmPassword = false;
    
    
        /* Confirm password */
        /*const confirmPasswordValue = confirmPasswordElement.value;
        const isValidConfirmPassword = Boolean(confirmPasswordValue.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/));*/
        if(isValidPassword(confirmPasswordElement)) {
            hasCorrectConfirmPassword = true;
        }
        else {
            errorElement.innerText = "Incorrect confirmation password.";
        }
    
    
        /* Password  */
        /*const passwordValue = passwordElement.value;
        const isValidPassword = Boolean(passwordValue.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/));*/
        if(isValidPassword(passwordElement)) {
            hasCorrectPassword = true;
        }
        else {
            errorElement.innerText = "The password must have at least 8 symbols, capital letter, lower case letter, a number and one symbol from [#?!@$%^&*-].";
        }
    
    
        /* Email  */
        /*const emailValue = emailElement.value;
        const isValidEmail = Boolean(emailValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)); */
        if(isValidEmail(emailElement)) {
            hasCorrectEmail = true;
        }
        else {
            errorElement.innerText = "Incorrect email.";
        }
    
    
        /* Username */
        /*const usernameValue = usernameElement.value;
        const isValidUsername = Boolean(usernameValue.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)); */
        if(isValidUsername(usernameElement)) {
            hasCorrectUsername = true;
        }
        else {
            errorElement.innerText = "Incorrect username.";
        }
    
    
        /* Check if password field and confirm password field are equal */
        let areEqualPasswords = false;
        if(hasCorrectPassword && hasCorrectConfirmPassword && passwordElement.value == confirmPasswordElement.value) {
            areEqualPasswords = true;
        }
    
    
        if(hasCorrectUsername && hasCorrectEmail && areEqualPasswords) {
            /*
            alert("Successful registration.");
            errorElement.innerText = "";
            usernameElement.value = "";
            emailElement.value = "";
            passwordElement.value = "";
            confirmPasswordElement.value = "";
            */
           
            window.auth.register(usernameElement.value, emailElement.value, passwordElement.value, (isSuccessful, errorCode, errorMessage) => {
                if(isSuccessful) {
                    window.location = "index.html";
                    alert("Successful registration.");
                }
                else {
                    alert(errorMessage);
                }
            });
        }
       
    
    });

}
else if(loginFormElement) {

    loginFormElement.addEventListener("submit", event => {
        event.preventDefault(); /* страницата няма да се презареди */
       
        let hasCorrectEmail = false;
        let hasCorrectPassword = false;
    
        /* Password  */
        if(isValidPassword(passwordElement)) {
            hasCorrectPassword = true;
        }
        else {
            errorElement.innerText = "The password must have at least 8 symbols, capital letter, lower case letter, a number and one symbol from [#?!@$%^&*-].";
        }
    
    
        /* Email  */
        if(isValidEmail(emailElement)) {
            hasCorrectEmail = true;
        }
        else {
            errorElement.innerText = "Incorrect email.";
        }
    
    
        if(hasCorrectEmail && hasCorrectPassword) {
            /*
            alert("Successful login.");
            errorElement.innerText = "";
            emailElement.value = "";
            passwordElement.value = "";
            */

            window.auth.login(emailElement.value, passwordElement.value, (isSuccessful, errorCode, errorMessage) => {
                if(isSuccessful) {
                    window.location = "posts.html";
                }
                else {
                    alert(errorMessage);
                }
            });

        }
          
    });

}


function isValidPassword(inputText) {
    return Boolean(inputText.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/));
}

function isValidEmail(inputText) {
    return Boolean(inputText.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));
}

function isValidUsername(inputText) {
    return Boolean(inputText.value.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/));
}


/* Add row in table */
var tableRow;
var tableDate1;
var tableDate2;

function onButtonClick() {

    /* create tags */
    tableRow = document.createElement("tr");
    tableDate1 = document.createElement("td");
    tableDate2 = document.createElement("td");    

    document.getElementById("insertBtn").className="hide";
    document.getElementById("categoryInput").className="show";
    document.getElementById("insertCategory").className="show";
    document.getElementById("descriptionInput").value="Description Input";
    document.getElementById("descriptionInput").className="show";
    document.getElementById("insertDescription").className="show";

    /* put tags in the table body */
    document.getElementById("table-body").appendChild(tableRow);

    tableRow.appendChild(tableDate1);
    tableRow.appendChild(tableDate2);
 
}

function addCategory() {
    var categInput = document.querySelector("[id=categoryInput]");
    tableDate1.innerText = categInput.value;

    document.getElementById("insertBtn").className="show";
    document.getElementById("categoryInput").value = "Insert category";
    document.getElementById("categoryInput").className="hide";
    document.getElementById("insertCategory").className="hide";
}

function addDescription() {
    /* get value from description input field */
    var descrInput = document.querySelector("[id=descriptionInput]"); 
    tableDate2.innerText = descrInput.value;

    document.getElementById("descriptionInput").value = "Description Input";
    document.getElementById("descriptionInput").className = "hide";
    document.getElementById("insertDescription").className = "hide";
}

/*
function setCookie() {
    document.cookie = "category=" + document.getElementById("categoryInput").value;
    document.cookie = "description=" + document.getElementById("descriptionInput").value;
}
*/

/*
function getCookie() {
    var cookieArray = document.cookie.split("; ");

    for(var i = 0; i < cookieArray.length; i++) {
        var categoryValueArray = cookieArray[i].split("=");
        if(categoryValueArray[0] == "category") {
            document.getElementById("categoryInput").value = categoryValueArray[1];
        }
        else if(categoryValueArray[0] == "decsription") {
            document.getElementById("descriptionInput").value = categoryValueArray[1];
        }
    }
}
*/