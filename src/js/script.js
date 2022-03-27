function validateField() {
    toggleEmailErrors();
    toggleButtonErrors();
    togglePassword();
    
}

function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    if(!email) {
        document.getElementById('email-error').style.display = "block";
    } else {
        document.getElementById('email-error').style.display = "none";
    }
    
    if(validateEmail(email)){
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block"
    }
}

function togglePassword() {
    const password = document.getElementById('password').value;
    if(!password) {
        document.getElementById('password-error').style.display = "block";
    } else {
        document.getElementById('password-error').style.display = "none"
    }
}

function toggleButtonErrors() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById('button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById('email').value;

    if(!email) {
        return false;
    }

    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if(!password) {
        return false;
    }
    return true;
}


 // function de validação de caracteres de email retirada da internet
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function login(){
    window.location.href = "cursos.html";
}