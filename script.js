function paginainicial() {
    window.location.href= "http://127.0.0.1:5500/index.html";
}
function redirecionarmenu() {
    window.location.href= "http://127.0.0.1:5500/menu.htm";
}

function redirecionarlogin() {
   window.location.href="http://127.0.0.1:5500/login.html";
}

function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    
    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Login realizado com sucesso!");
    }
}

function redirecionar(url) {
    window.open(url, "_blank");
}

