//cria uma variavel com o numero digitado na pagina
let numero=prompt("Digite um número")

//verifica se o resto da divisão de numero por 2 é igual a zero, o que significa que numero é par
if (numero % 2 === 0){
    console.log("O número digita é Par")
    alert("O número digitado é Par")
} else {
    console.log("O número digitado é Ímpar")
    alert("O número digitado é ímpar")
}
