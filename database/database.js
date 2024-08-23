const Sequelize = require("sequelize");

const connection = new Sequelize('carteira', 'root', '8687260', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;
