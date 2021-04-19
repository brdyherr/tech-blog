const Sequelize = require('sequelize');


require('dotenv').config()

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        // host: 'localhost',
        dialect: 'mysql',
        // port: 3306
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        multipleStatements: true
    });

        


module.exports = sequelize;