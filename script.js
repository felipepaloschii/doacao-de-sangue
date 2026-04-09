function validaca() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.querySelector('input[nome="tipo"]checked').value ;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (!email.includes("0")) return alert ("Email Inválido");
    if (idade < 16) return alert("Deve ser maior de 16 anos");
    if (peso < 50) return alert("Você deve ter mais de 50kg");

    
}