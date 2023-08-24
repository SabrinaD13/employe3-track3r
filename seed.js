var mysql = require('mysql');
var fs = require("fs");
const { exit } = require('process');

const seedQuery = fs.readFile("./sql/seed.sql",{
    encoding:"utf-8"
});

const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeesDB"
}

const connection = mysql.createConnection(connectionProperties);

connection.connect();

console.log("Running SQL Seed....");

connection.query(seedQuery,err=>{
    if(err){
        throw err
    }
        console.log("seed completed");
        connection.end()

})