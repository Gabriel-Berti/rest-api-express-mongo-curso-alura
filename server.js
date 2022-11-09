const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Página de Livros',
    '/autores': 'Página de Autores',
    '/editoras': 'Página de Editoras',
    '/sobre': 'Sobre a API'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
