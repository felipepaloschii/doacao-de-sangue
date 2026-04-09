document.getElementById("formDoacao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById ("tipo").value ;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let resultado = document.getElementById("resultado");
    let sobrenome = nome.trim().split(/\s+/);

    if (sobrenome.length < 2) {
        return alert ("Por favor, digite seu nome e sobrenome");
        
    }
    if (!email.includes("@")|| !email.includes(".")) {
        return alert ("Email Inválido! Deve conter @.....com");
    }
    if (Number(idade) < 16) return alert("Deve ser maior de 16 anos");

    if (Number(peso) < 50) return alert("Você deve ter mais de 50kg");

    if (isNaN(telefone)){
        return alert ("O telefone deve conter apenas números");
    }

    resultado.classList.remove ("popup");
    resultado.style.display = "block";
    resultado.innerHTML =
    "Cadastro realizado com sucesso!" + "<br>" +
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Idade: " + idade + "<br>" +
    "Telefone: " + telefone + "<br>" +
    "Cidade: " + cidade + "<br>" +
    "Estado: " + estado;
});
