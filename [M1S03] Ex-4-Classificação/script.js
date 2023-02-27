function somarSelecionados() {
    let classifica = document.getElementById("pedido");
    // Seleciona todos os checkboxes que foram marcados (checked) na página
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    // Converte a lista de checkboxes em um array e usa o método reduce para somar os valores selecionados
    const valorTotal = Array.from(checkboxes).reduce((acumulador, cb) => {
        // Converte o valor do checkbox (que é uma string) em um número de ponto flutuante (float)
        return acumulador + parseFloat(cb.value);
    }, 0);

    console.log(valorTotal)
    if (valorTotal > 0) {
        if (valorTotal <= 10000) {
            limparClasse();
            classifica.classList.add('bronze')
            classifica.innerHTML = "Você esta no nivel Bronze"
        } else if (valorTotal > 10000 && valorTotal <= 100000) {
            limparClasse();
            classifica.classList.add('prata')
            classifica.innerHTML = "Você esta no nivel Prata"
        } else if (valorTotal > 100000 && valorTotal <= 500000) {
            limparClasse();
            classifica.classList.add('ouro')
            classifica.innerHTML = "Você esta no nivel Ouro"
        } else if (valorTotal > 500000) {
            limparClasse();
            classifica.classList.add('platina')
            classifica.innerHTML = "Você esta no nivel Platinum"
        }

    }
    function limparClasse() {
        while (classifica.classList.length > 0) {
            classifica.classList.remove(classifica.classList.item(0));
        }
    }

}

//limpa os checkboxes selecionados
function limparSelecao() {
    let classifica = document.getElementById("pedido");
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(cb => {
        cb.checked = false;
        const classifica = document.getElementById("pedido");
        classifica.innerHTML = ""
        limparClasse();
    });

    function limparClasse() {
        while (classifica.classList.length > 0) {
            classifica.classList.remove(classifica.classList.item(0));
        }
    }
}


