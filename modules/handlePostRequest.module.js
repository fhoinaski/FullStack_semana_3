const cadastrarProduto = require ('./salvarProdutos.module')

async function handlePostRequest(req, res) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      try {
        const dados = JSON.parse(body);
        const { nome, peso, quantidade, codigo_do_produto: codigoProduto } = dados;
        if (!nome || !peso || !quantidade || !codigoProduto) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Dados do produto incompletos.");
        } else {
          await cadastrarProduto("dados.json", nome, peso, quantidade, codigoProduto);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Produto cadastrado com sucesso");
        }
      } catch (error) {
        console.error(error.message);
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Erro ao cadastrar o produto: " + error.message);
      }
    });
  }

  module.exports=handlePostRequest