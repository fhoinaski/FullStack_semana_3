const http = require("http");
const url = require("url");
const handleGetRequest = require("./modules/handleGetRequest.module");
const handlePostRequest = require("./modules/handlePostRequest.module");
// declara a porta
const port = 3000;

// cria o server
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const id = reqUrl.pathname.slice(1); //remove a '/' da frente do id

  async function handlePutRequest (req,res){

    

  }
  

  switch (req.method) {    
    case "GET":
      handleGetRequest(reqUrl, res, id);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
      case "PUT":

      break;
  }
});

server.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
