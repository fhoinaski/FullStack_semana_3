const fs = require("fs");

function cadastrarProduto(local, nome, peso, quantidade, codigoProduto) {
  return fs.promises.readFile(local, 'utf8')
    .then(data => {
      const dados = JSON.parse(data);

      // Verifica se o código do produto já existe
      const produtoExiste = dados.produtos.some(produto => produto.codigo_do_produto === codigoProduto);
      if (produtoExiste) {
        throw new Error(`Já existe um produto cadastrado com o código ${codigoProduto}`);
      }

      const novoProduto = {
        nome: nome,
        peso: peso,
        quantidade: quantidade,
        codigo_do_produto: codigoProduto,
      };

      dados.produtos.push(novoProduto);

      return fs.promises.writeFile(local, JSON.stringify(dados, null, 2));
    });
}


module.exports = cadastrarProduto;
