function entrarPagina(){
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (nome_usuario === "Nataí" && senha_usuario === "123456"){
        alert("usuario logado com sucesso!");
        window.location.href = "ContaBancaria.html";

    }
    else{
        alert("usuario e senha incorretos. <br>")

    }


}