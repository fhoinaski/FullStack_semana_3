let password = 1234;

function entrar() {
    event.preventDefault();
    let passwordDigitado = document.querySelector('#password');
    let loginAceito = document.querySelector('.acessLogin');
    let loginRecusado = document.querySelector('.blockLogin');

    let valorPasswordDigitado = passwordDigitado.value;

    if (valorPasswordDigitado == password) {
        loginRecusado.style.display='none';
        loginAceito.style.display = 'flex';

    } else {
        loginAceito.style.display='none';
        loginRecusado.style.display = 'flex';
    }
}

