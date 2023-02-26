//pergunta a idade e guarda na variavel idade
let idade=prompt("Qual sua idade?")

if(idade <=12){
    alert("Você ainda é criança;")
}else if(idade >13 && idade <=17){
    alert("Você já é adolescente;")
}else if(idade >18 && idade<=65){
    alert("Você já é adulto;")
} else if (idade >66){
    alert("Você já é considerado idoso;")
}