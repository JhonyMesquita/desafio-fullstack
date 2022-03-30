
async function authLogin() {

    try{
        const auth = await fetch('http://localhost:3000/user');
        const data = await auth.json();
    } catch(error){
        console.error(error)
    }

    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;

    if(!emailInput !== data.email && !passwordInput !== data.password){
        alert('LOGIN INVÁLIDO')
    } else{ }

}

authLogin()

