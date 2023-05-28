const consultarProdutosPorCodigo = require('./consultarProdutoPorCodigo.module')
const lerProdutos = require('./lerProdutos.module')

async function handleGetRequest(reqUrl, res, id) {
    if (reqUrl.pathname == "/") {
      try {
        const produtos = await lerProdutos("dados.json");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(produtos));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Ocorreu um erro ao ler o arquivo:" + err);
      }
    } else {
      const codigoProduto = parseInt(id, 10); // converte 'id' para um número
      if (isNaN(codigoProduto)) {
        // verifica se 'id' era um número
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("O código do produto deve ser um número.");
      } else {
        try {
          const produto = await consultarProdutosPorCodigo("dados.json", codigoProduto);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(produto));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Ocorreu um erro ao consultar o produto: " + err.message);
        }
      }
    }
  }

  module.exports=handleGetRequest