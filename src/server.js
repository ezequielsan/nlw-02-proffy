// Servidor
const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const PORT = process.env.ENV || 5500;

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

// Configurar nunjucks (template engine)
// passando localização das páginas a serem renderizadas e o servidor
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server

  // receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  // configurar arquivos estáticos (scripts, css, imagens)
  // passando localização dos arquivos estáticos
  .use(express.static("public"))

  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)

  // start do servidor
  .listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`))