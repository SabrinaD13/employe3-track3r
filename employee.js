const mysql = require('mysql2');

var chalk = require("chalk");
function log(msg) {
    console.log(msg);
}

log(chalk.green.bold("=========================="));
log(chalk.yellow(""));
log(chalk.blue.bold("EMPLOYEE"));
log(chalk.blue.bold("MANAGEMENT"));
log(chalk.blue.bold("TRACKER"));
log(chalk.yellow(""));
log(chalk.green.bold("=========================="));

const connectionProperties = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
};

const connection = mysql.createConnection(connectionProperties);
