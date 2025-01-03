const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    '<h1>Olá, este é meu primeiro server com HTML</h1><p>Testando Atualização</p>'
  );
})

server.listen(3000, () => {
  console.log(`Rodando servidor na porta: ${port}`);
})