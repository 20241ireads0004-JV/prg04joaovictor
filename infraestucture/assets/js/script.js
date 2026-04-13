document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("hamburguerBtn");
    const menu = document.getElementById("dropdown");

    if (btn && menu) {
        btn.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }

    // LOGIN (SÓ EXECUTA SE EXISTIR)
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            const erro = document.getElementById("erro");

            if (!email || !senha) {
                erro.textContent = "Preencha todos os campos!";
                return;
            }

            if (email === "admin@email.com" && senha === "1234") {
                window.location.href = "admin.html";
            } else {
                erro.textContent = "E-mail ou senha inválidos!";
            }
        });
    }

});