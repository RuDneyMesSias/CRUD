const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

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

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log("Conectado ao servidor!");
})