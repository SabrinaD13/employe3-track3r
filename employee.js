var mysql = require('mysql');
var icon = require("asciiart-logo");
var inquirer = require('promise-mysql');

var chalk = require("chalk");

function log (msg){
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
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employysDB"
}

const connection = mysql.createConnection(connectionProperties);
