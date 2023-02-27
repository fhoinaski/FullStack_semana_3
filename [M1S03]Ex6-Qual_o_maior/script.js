var ultimoNumero = 0; // variável global para armazenar o maior número
function verificar() {
    var numero = document.getElementById("numero").value; // obtém o valor do input
    numero = Number(numero); // converte para tipo numérico
    console.log(numero)
    console.log(ultimoNumero)
    var mensagem = document.getElementById("mensagem"); // obtém o elemento de mensagem
if(numero === ultimoNumero){

}
else if (numero > ultimoNumero) {
    mensagem.textContent = "Parabéns! Você escolheu o novo número mais alto: ";
    ultimoNumero = numero;
} else {
    mensagem.textContent = "Que pena! Você não escolheu o novo número mais alto.";

}
}