const formElement = document.getElementById("register-form");
const lofinFormElement = document.getElementById("login-form");

const emailElement = document.querySelector(".auth-input[name=email]");
const passwordElement = document.querySelector(".auth-input[name=password]");
const errorElement = document.getElementById("errors");

[formElement, lofinFormElement].forEach(form => {
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
        
            /* Email -------------------------------- */
            const emailValue = emailElement.value;
            
            const notEmpty = Boolean(emailValue.length);
            const hasEmailSign = emailValue.includes("@");
            const hasDotSign = emailValue.includes(".");
            const hasMinWidth = emailValue.length > 4;
        
            let hasCorrectEmail = false;
            let hasCorrectPassword = false;
        
            if (notEmpty && hasEmailSign && hasDotSign && hasMinWidth){
                hasCorrectEmail = true;
            } else{
                errorElement.innerText = "Incorrect email.";
            }
        
           
            /* Password -------------------------------- */
            const passwordValue = passwordElement.value;
        
            const hasPasswordMinWidth = passwordValue.length > 5;
            const hasCapitalLetter = /([A-Z])/.test(passwordValue);
            const hasNumber = /([0-9])/.test(passwordValue);
            
            const hasSymbol = "!@#$%^&".split("").some(sign => passwordValue.includes(sign));
        
            if (hasPasswordMinWidth && hasCapitalLetter && hasNumber && hasSymbol){
                hasCorrectPassword = true;
            } else {
               errorElement.innerText =  "The password must have at least 6 symbols, capital leter, a number and one symbol from [!@#$%^&].";
            }
        
            if (hasCorrectEmail && hasCorrectPassword){
                alert("Successful registration.");
        
                emailElement.value = "";
                passwordElement.value = "";
            }
        
        });
    }
})