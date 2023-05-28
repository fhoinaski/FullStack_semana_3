const fs = require("fs");

function consultarProdutoPorCodigo(caminho, codigo_do_produto) {
  // Ler arquivo de forma assíncrona
  return fs.promises.readFile(caminho, "utf-8")
    .then(infoDados => {
      // Converte para objeto
      const objetoDados = JSON.parse(infoDados);
  
      // Busca o produto com o código fornecido
      const produto = objetoDados.produtos.find(produto => produto.codigo_do_produto === codigo_do_produto);
  
      // Se o produto não foi encontrado, lança um erro
      if (!produto) {
        throw new Error(`Não foi encontrado nenhum produto com o código ${codigo_do_produto}.`);
      }
  
      // Retorna o produto encontrado
      return produto;
    });
}

module.exports = consultarProdutoPorCodigo;
