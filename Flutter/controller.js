
/*const username = document.getElementById('username');
const email = document.getElementById('text');
const password = document.getElementById('password');

checkInputs();

function checkInputs() {
    const username = username.value;
    const email = email.value.trim();
    value.trim();
    const password = password.value.trim();

    if (email === '') {
        Error('Please enter an email.');
    }
}*/

function validate() {
    if (document.register-form.username.value == "") {
        alert("Please provide your name!");
        document.register-form.username.focus();
        return false;
    }

    validateEmail();

    return (true);
}

function validateEmail () {
    var email = document.register-form.text.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Incorrect email!");
        return false;
    }

    return (true);
}