
//Conexão ao Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Conexão ao Banco de Dados
const connection = require("./database/database")

//Conexão as rotas
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

//  Database
connection
    .authenticate()
    .then(() => {
        console.log("Conectado ao banco de dados!");
    }).catch((error) => {
        console.log(error);
    })

//Rotas
app.use("/",categoriesController);
app.use("/",articlesController);

app.get("/", (req, res) => {
    res.render("index");
})

//Conexão do Servidor
app.listen(8080, () => {
    console.log("Conectado ao servidor!");
})