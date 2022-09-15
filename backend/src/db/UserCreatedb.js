const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});