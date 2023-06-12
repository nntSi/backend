const mysql = require('mysql2');

const DB_NAME = "test";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: DB_NAME,
  password: 'Surveyhubtrue'
});

/* connection.query(
  `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`,
  function (err, results) {
    return;
  }
); */

module.exports = {
  connection
}