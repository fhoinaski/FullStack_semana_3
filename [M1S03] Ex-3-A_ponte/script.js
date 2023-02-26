window.alert("Este viaduto esta limitado com capacidade de carga e tamanho, você precisa confirmar alguns dados")
//cria uma variavel com nome peso e tamanho e atribui o valor digitado a estas variavel
let peso =prompt("Qual o peso total do seu veiculo?")
let tamanho=prompt("Qual o tamanho em comprimentos do seu veiculo?")
// verifica s eo peso ou o tamanho sã maior que o permitido
if (peso >= 1500 || tamanho >= 5){
    alert("Você não pode passar")
}else {
    alert("você pode passar")
}
