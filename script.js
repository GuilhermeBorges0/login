const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function(event)  {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCorreto = "aluno";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login bagulhado com suseso");
    }
    else {
        alert("Ratomanoku");
    }

});