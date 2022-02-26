# Next Level Week 2 - Proffy

This is a web application developed at NLW 2. NLW is an online event with lots of code, challenges, networking, and a single goal: Advancing to the next level.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Getting Started](#getting-startted)
  - [Cloning repository](#cloning-repository)
  - [Installing dependencies](#installing-dependencies)
  - [Running server](#running-server)
  - [Opening in browser](#opening-in-browser)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Proffy is an online study platform that helps people find professors online.

Users should be able to:

- View the optimal layout of the site, depending on the screen size of your device
- View the float states for all interactive elements on the page
- If the user is a proffy, he can register a class by entering basic data such as name, profile picture, phone number, bio, subject, class cost, day(s) of the week, and time(s)
- If the user is a student, he can search for a registered lesson by filtering by subject, day of the week and time
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. 


### Screenshot

![](./public/images/design/screenshot.png)

### Links

- Project Layout: [https://www.figma.com/file/GQNQIlm59RYOtD5JaQt9Fy/Proffy-Web?node-id=0%3A1](https://www.figma.com/file/GQNQIlm59RYOtD5JaQt9Fy/Proffy-Web?node-id=0%3A1)

## Getting Started

### Cloning repository

In some terminal run the command below to download the repository on your local machine

```
git clone https://github.com/ezequielsan/nlw-02-proffy.git
```

### Installing dependencies

Still with the terminal open run the command below to install the project dependencies

```
npm install
# or
npm i
```

### Running server

Now, run the following command to start the server

```
npm run dev
```

### Opening in browser

To see the application working, open your preferred browser and type the following command: http://localhost:5500



## My process

### Built with 

- [Mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Semantic HTML5 markup](https://html.com/semantic-markup/)
- [CSS custom properties](https://www.w3schools.com/cssref/)
- [Flexbox](https://www.w3schools.com/csS/css3_flexbox.asp)
- [CSS Grid Layout](https://www.w3schools.com/css/css_grid.asp)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

### What I learned

In this project I reviewed some basic HTML and CSS concepts, mainly the semantic tags and the main css properties regarding the page layout, using properties like flexbox and css grid. I learned about the concept of mobile first and its importance in the design and development of digital products. Furthermore, I learned the syntax and main properties of the nunjucks template engine and how it can be an enabler when writing more powerful and dynamic HTML. Furthermore, I learned how to create and configure a server using the express framework and how to create the application routes. I also learned some node.js to run JavaScript on the backend. And last but not least I got to know and learned the process of creating and manipulating the database using the SQLite library as well as learning a bit about SQL.

**HTML `<fieldset>` Tag**

The HTML element `<fieldset>` is used to group elements within a web form.

```html
<!-- Grouping 1 -->
<fieldset>
  <legend>Seus dados</legend>
  <div class="input-block">
    <label for="name">Nome completo</label>
    <input name="name" type="text" id="name" required>
  </div>
</fieldset>

<!-- Grouping 2 -->
<fieldset>
  <legend>Sobre a aula</legend>
  <div class="input-block">
    <label for="cost">Custo da sua hora <small>(R$)</small></label>
    <input type="number" name="cost" id="cost">
  </div>
</fieldset>
```

**CSS `:focus-within` pseudo-elements**

The `:focus-within` CSS pseudo-class matches an element if the element or any of its descendants are focused.

```css
 /* Se elemento input-block ou filhos estiverem em foco */ 
.input-block:focus-within::after { 
  content: "";
  height: 2px;
  width: calc(100% - 3.2rem);
  background-color: var(--color-primary-light);
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0px;
}
```

**CSS `element1 > element2` Selector**

Select and style every element2 element where the parent is a element1 element

```css
/* Selecione e estilize cada elemento <p> onde o pai é um elemento div.teacher-item */
.teacher-item > p {
  padding: 0 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
}
```

**CSS `element1 + element2` Selector**

Select and style the first element2 element that are placed immediately after element1 elements

```css
/* Selecione e estilize cada elemento .input-block que são colocados 
imediatamente a seguir aos elementos .input-block e .select-block */
#page-give-classes #schedule-items .input-block + .input-block,
#page-give-classes #schedule-items .select-block + .input-block {
  margin-top: 0;
}
```

**JavaScript Destructuring Assignment**

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
/* desempacotando array time (de duas posições) em duas variáveis: hour e minutes */
const [hour, minutes] = time.split(':');

/* desempacotando objeto exportado do arquivo pages.js */
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');
```

**Configure nunjucks**

nunjucks basic settings

```js
const nunjucks = require('nunjucks');
  .
  .
  .
// Configurar nunjucks (template engine)
// passando localização das páginas a serem renderizadas e o servidor
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
```

**For loop in nunjucks**

Nunjucks repeat loop for popular html page with data coming from the backend.

```html
<!-- Populando lista de materias disoníveis -->
{% for subject in subjects %}
  <option value="{{ loop.index }}">{{ subject }}</option>
{% endfor %}
```

**Conditional statement in nunjucks**
```html
{% if proffys == "" %} <!-- Se proffys for vazio, faça isso -->
  <p>
    Nenhum professor encontrado com sua pesquisa.
  </p>
{% else %} <!-- Se não, faça isso -->

  <!-- Populando proffys dispoíveis -->
  {% for proffy in proffys %}
    <article class="teacher-item">
      <header>
        <img src="{{ proffy.avatar }}" alt="{{ proffy.name }}">
        <div>
          <!-- Acessando atributo name e subject de objeto proffy -->
          <strong>{{ proffy.name }}</strong>
          <span>{{ proffy.subject }}</span>
        </div>
      </header>

      <p>
        {{ proffy.bio }}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {{ proffy.cost }}</strong>
        </p>
        <a href="https://api.whatsapp.com/send?l=pt_BR&phone=55{{ proffy.whatsapp }}&text=Tenho interesse na sua aula de {{ proffy.subject }}  {{ proffy.name }}" class="button" target="_blank">
          <img src="./images/icons/whatsapp.svg" alt="Whatsapp">
          Entrar em contato
        </a>
      </footer>
    </article>
  {% endfor %}
{% endif %}
```

**Express Configuration**

Exporting, configuring and using express to create the server and application routes.

```js
const express = require('express');
const server = express();
const PORT = process.env.ENV || 5500;

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
```

### Continued development

It has been a while since I stopped studying Front-end development because of university classes, but during this vacation I will return to my studies, I intend to start again, going back to the basics and progressing, meaning I will do many projects this year for my improvement in the area.

### Useful resources

- [JavaScript Destructuring Assignment](https://backefront.com.br/como-funciona-destructuring-js/) - Here is a link to an article about JavaScript Destructuring
- [Nunjucks advanced loops](https://giuliachiola.dev/posts/nunjucks-advanced-loops/) - This is the link to an article about for-loops in nunjucks
- [Add a class in Nunjucks using a conditional statement](https://giuliachiola.dev/posts/add-a-class-in-nunjucks-using-a-conditional-statement/) - This is the link to an article on if-else conditional at nunjucks

## Author

- Codewars - [Ezequiel Santos](https://www.codewars.com/users/Ezequiel%20Santos)
- Frontend Mentor - [@ezequielsan](https://www.frontendmentor.io/profile/ezequielsan)
