//acionar um alerta apos clicar no botão "conferir"

document.getElementById('confirmButton').addEventListener('click', function() {
    if (document.getElementById('confirmCheckbox').checked) {
        alert('Ação confirmada.');
    } else {
        alert('Ação cancelada.');
    }
});

//conferir usuario e senha
document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('login').value;
    var password = document.getElementById('senha').value;

    if (username === 'admin' && password === 'password') {
        alert('Login efetuado com sucesso.');
    } else {
        alert('Usuário ou senha inválidos.');
    }
});

