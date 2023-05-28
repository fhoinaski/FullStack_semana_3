const fs = require ('fs')

function lerProdutos(lista) {
    return new Promise((resolve, reject) => {
      fs.readFile(lista, "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        const objeto = JSON.parse(data);
        const produtos = objeto.produtos;
        resolve(produtos);
      });
    });
  }


  module.exports = lerProdutos;